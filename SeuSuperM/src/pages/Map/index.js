import React, { useState, useEffect } from 'react';
import { useNavigation, useRef } from '@react-navigation/native';
import { ScrollView, View, Text, StyleSheet, Dimensions, AsyncStorage } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import { validaToken } from '../../services/auth';
import api from '../../services/api';

export default function Maps() {
  const [markets, setMarkets] = useState([])
  const navigation = useNavigation();

  function navigateBack() {
    return navigation.goBack();
  }

  useEffect(() => {
    async function fetch() {

      try {
        const retornoApi = await api.get('/market', { headers: { auth: await AsyncStorage.getItem('userToken') } })
        setMarkets(retornoApi.data)

      } catch (err) {
        alert('Deu ruim')
      }
    } fetch();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        ref={map => mapView = map}
        initialRegion={{
          latitude: -30.022319,
          longitude: -51.196617,
          latitudeDelta: 0.0142,
          longitudeDelta: 0.0231,
        }}
        style={styles.mapView}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        showsPointsOfInterest={false}
        showBuildings={false}
      >
        {markets.map(place => (
          <MapView.Marker
            ref={mark => place.mark = mark}
            title={place.name}
            description={place.services}
            key={place.id}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          />
        ))}
      </MapView>
      <ScrollView
        style={styles.placesContainer}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const place = (e.nativeEvent.contentOffset.x > 0)
            ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
            : 0;

          const { latitude, longitude, mark } = markets[place];

          mapView.animateToCoordinate({
            latitude,
            longitude
          }, 500);

          setTimeout(() => {
            mark.showCallout();
          }, 500)
        }}
      >

        <TouchableOpacity onPress={() => navigateBack()} >
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
        {markets.map(place => (
          <View key={place.id} style={styles.place}>
            <Text style={styles.title}>{place.name}</Text>
            <Text style={styles.description}>{place.address}</Text>
            <Text style={styles.description}>{place.services}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}


const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  placesContainer: {
    width: '100%',
    maxHeight: 150,
  },

  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },

  description: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
});
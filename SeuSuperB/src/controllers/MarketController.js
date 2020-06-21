const connection = require('../database/connections');

module.exports = {
    //Lista os mercados cadastrados
    async index(request, response) {
        try {
            const market = await connection('market').select('*');
            return response.status(200).json(market);

        } catch (error) {
            const retorno = [{ success: 0, msg: 'Ocorreu algum erro na API' }]
            return response.status(400).json(retorno);
        }

    },

    //Cria um novo mercado
    async create(request, response) {
        try {
            const { cnpj, name, address, latitude, longitude, phone, city, uf, services } = request.body;

            await connection('market').insert({
                cnpj,
                name,
                address,
                latitude,
                longitude,
                phone,
                city,
                uf,
                services,
            })

            return response.json({ name });
        } catch (error) {
            const retorno = [{ success: 0, msg: 'Ocorreu algum erro na API' }]
            return response.status(400).json(retorno);
        }
    },

    async indexUpdate(request, response) {
        try {
            const { cnpj } = request.params;
            const searchMarket = await connection('market')
                .where('market.cnpj', cnpj)
                .select('*')

            console.log(searchMarket)

            return response.status(200).json(searchMarket);

        } catch (error) {
            const retorno = [{ success: 0, msg: 'Ocorreu algum erro na API.' }]
            console.log(err)
            return response.status(400).json(retorno);
        }
    },

    async update(request, response) {

        const { cnpj, name, address, latitude, longitude, phone, city, uf, services } = request.body;

        await connection('market').where('market.cnpj', cnpj).update({
            cnpj,
            name,
            address,
            latitude,
            longitude,
            phone,
            city,
            uf,
            services,
        })

        return response.json({ name });

    },

    async delete(request, response) {
        try {
            const { cnpj } = request.params;

            await connection('market')
                .where('market.cnpj', cnpj)
                .select('cnpj')
                .first();

            await connection('market').where('market.cnpj', cnpj).delete();

            return response.status(204).send();

        } catch (error) {
            const retorno = [{ success: 0, msg: 'Ocorreu algum erro na API' }]
            return response.status(400).json(retorno);
        }
    }
}
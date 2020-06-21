const express = require('express');

const authMiddleware = require('./middlewares/authValidate');

const ConfigController = require('./controllers/ConfigController');
const UserController =  require('./controllers/UserController');
const MarketController =  require('./controllers/MarketController');
const SessionController = require('./controllers/SessionController');
const ProductsController = require('./controllers/ProductsController');
const NutritionFactsController = require('./controllers/NutritionFactsController');
const RecycleController = require('./controllers/RecycleController');
const RecyPackController = require('./controllers/RecyPackController');
const RecySymbolController = require('./controllers/RecySymbolController');
const FavoriteController = require('./controllers/FavoriteController');

const routes = express.Router();

routes.get('/config/validaToken', ConfigController.validaToken)
routes.post('/sessions', SessionController.create);

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);

routes.post('/recycle', RecycleController.create);
routes.put('/updateRecycle/:id', RecycleController.update);

routes.post('/nutrition', NutritionFactsController.create);
routes.put('/updateNutrition/:product_id', NutritionFactsController.update);
routes.delete('/nutrition/:product_id', NutritionFactsController.delete);

routes.post('/product', ProductsController.create);
routes.put('/updateProduct/:id', ProductsController.update);
routes.delete('/product/:id', ProductsController.delete);

routes.post('/market', MarketController.create);
routes.put('/updateMarket/:cnpj', MarketController.update);
routes.delete('/favorite/:id', FavoriteController.delete);


//routes.use(authMiddleware)

routes.get('/market', MarketController.index);
routes.get('/searchMarket/:cnpj', MarketController.indexUpdate);
routes.delete('/market/:cnpj', MarketController.delete);

routes.get('/nutrition', NutritionFactsController.index);
routes.get('/nutrition/:product_id', NutritionFactsController.indexUpdate);

routes.get('/productEdit', ProductsController.indexList);
routes.get('/searchProduct', ProductsController.indexSearch);
routes.get('/product/:id', ProductsController.index);
routes.get('/productList/:id', ProductsController.indexUpdate);
routes.delete('/product/:id', ProductsController.delete);

routes.get('/recycle', RecycleController.indexList);
routes.get('/searchRecycle', RecycleController.indexSearch);
routes.get('/recycleList/:id', RecycleController.indexUpdate);
routes.get('/recycle/:id', RecycleController.index);
routes.delete('/recycle/:id', RecycleController.delete);

routes.get('/searchPacking', RecyPackController.indexSearch);
routes.get('/packing/:id', RecyPackController.index);

routes.get('/searchSymbol', RecySymbolController.indexSearch);
routes.get('/symbol/:id', RecySymbolController.index);

routes.post('/favorite', FavoriteController.create);
routes.get('/favorite/:id', FavoriteController.index);
routes.get('/favoriteUser', FavoriteController.indexFavorite);

module.exports = routes;
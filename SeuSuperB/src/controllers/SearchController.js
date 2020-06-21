const connection = require('../database/connections');

module.exports= {
    
    async indexSearch (request, response) {
    try {            
        const { name } = request.query;
        if(name == 'product.name')
            const search = await connection('product')
            .where('product.name', 'like', `%${ name }%`)
            .select('*')
            

        const searchRecycle = await connection('recycle')
        .where('recycle.name', 'like', `%${ name }%`)
        .select('*');

        return response.status(200).json(searchRecycle);

        return response.status(200).json(searchProduct);

    } catch (error) {
        const retorno = [{success: 0, msg: 'Ocorreu algum erro na API'}]
        console.log(error);
        return response.status(400).json(retorno);
    }
},

}
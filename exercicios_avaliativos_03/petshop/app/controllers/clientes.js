module.exports.incluir_novo_cliente = function(application, req, res){

    const conn = application.config.dbConnection();      
    const clienteModel = new application.app.models.ClienteDAO( conn );

    let cliente = req.body;

    clienteModel.salva_novo_cliente(cliente, function(error, result){

        if(error)  throw error
        res.redirect("/tabela_cliente");
    });
};


module.exports.atualiza_cliente = function (application, req, res){

    const conn = application.config.dbConnection();      
    const clienteModel = new application.app.models.ClienteDAO( conn );

    let cliente = req.body;
    
    clienteModel.atualiza_cliente(cliente, function(error, result){
    
        if(error)  throw error
        res.redirect("/tabela_cliente");
    });
};


module.exports.deletar_cliente = function (application, req, res){

    const conn = application.config.dbConnection();      
    const clienteModel = new application.app.models.ClienteDAO( conn );

    let id_cliente = req.query.id;

    clienteModel.deleta_cliente(id_cliente, function(error, result){
    
        if(error)  throw error
        res.redirect("/tabela_cliente");
    });
};


module.exports.formulario_inclusao_cliente = function(application, req, res){

    res.render("clientes/formulario", { cliente : {} });
};


module.exports.formulario_alteracao_cliente = function(application, req, res){
               
    const conn = application.config.dbConnection();      
    const clienteModel = new application.app.models.ClienteDAO( conn );

    let id_cliente = req.query.id;

    clienteModel.findClienteForID(id_cliente ,function (error, result){
      
        if(error)  throw error
        res.render("clientes/formulario", {cliente : result});
    });
};


module.exports.tabela_cliente = function(application, req, res){

    const conn = application.config.dbConnection();      
    const clienteModel = new application.app.models.ClienteDAO( conn );

    clienteModel.getAllClientes(function (error, result){

        if(error)  throw error
        res.render("clientes/tabela", {clientes : result});
    });
};
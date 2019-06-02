module.exports.incluir_novo_pet = function(application, req, res){

    const conn = application.config.dbConnection();      
    const petModel = new application.app.models.PetDAO( conn );

    let pet = req.body;

    petModel.salva_novo_pet(pet, function(error, result){
    
        if(error)  throw error
        res.redirect("/tabela_pet");
    });
};


module.exports.atualiza_pet = function (application, req, res){

    const conn = application.config.dbConnection();      
    const petModel = new application.app.models.PetDAO( conn );

    let pet = req.body;

    petModel.atualiza_pet(pet, function(error, result){
    
        if(error)  throw error
        res.redirect("/tabela_pet");
    });
};


module.exports.deletar_pet = function (application, req, res){

    const conn = application.config.dbConnection();      
    const petModel = new application.app.models.PetDAO( conn );

    let id_pet = req.query.id;

    petModel.deleta_pet(id_pet, function(error, result){
    
        if(error)  throw error
        res.redirect("/tabela_pet");
    });
};


module.exports.formulario_inclusao_pet = function(application, req, res){

    const conn = application.config.dbConnection();      
    const clienteModel = new application.app.models.ClienteDAO( conn );

    clienteModel.getAllClientes(function (error, result){

        if(error)  throw error
        res.render("pets/formulario", {clientes : result,  pet:{} } );
    });
};


module.exports.formulario_alteracao_pet = function(application, req, res){
               
    const conn = application.config.dbConnection();      
    const petModel     = new application.app.models.PetDAO( conn );
    const clienteModel = new application.app.models.ClienteDAO( conn );

    let id_pet = req.query.id;

    petModel.findPetForID(id_pet ,function (error, result_pet){

        clienteModel.getAllClientes(function (error, result_cliente){

            if(error)  throw error
            res.render("pets/formulario", {clientes : result_cliente, pet : result_pet});
        });
    });
};


module.exports.tabela_pet = function(application, req, res){

    const conn = application.config.dbConnection();      
    const petModel = new application.app.models.PetDAO( conn );

    petModel.getAllPets(function (error, result){

        if(error)  throw error
        res.render("pets/tabela", {pets : result});
    });
}; 

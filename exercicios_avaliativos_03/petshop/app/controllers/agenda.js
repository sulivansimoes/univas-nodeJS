module.exports.incluir_nova_agenda = function(application, req, res){

    const conn = application.config.dbConnection();      
    const agendaModel = new application.app.models.AgendaDAO( conn );

    let agenda = req.body;
    
    agendaModel.salva_nova_agenda(agenda, function(error, result){
        
        if(error)  throw error
        res.redirect("/tabela_agenda");
    });
};


module.exports.atualiza_agenda = function (application, req, res){

    const conn = application.config.dbConnection();      
    const agendaModel = new application.app.models.AgendaDAO( conn );

    let agenda = req.body;
    
    agendaModel.atualiza_agenda(agenda, function(error, result){

        if(error)  throw error
        res.redirect("/tabela_agenda");
    });
};


module.exports.deleta_agenda = function (application, req, res){

    const conn = application.config.dbConnection();      
    const agendaModel = new application.app.models.AgendaDAO( conn );

    let id_agenda = req.query.id;

    agendaModel.deleta_agenda(id_agenda, function(error, result){
    
        if(error)  throw error
        res.redirect("/tabela_agenda");
    });
};


module.exports.formulario_inclusao_agenda = function(application, req, res){

    const conn = application.config.dbConnection();      
    const petModel     = new application.app.models.PetDAO( conn );
    const clienteModel = new application.app.models.ClienteDAO( conn );

    clienteModel.getAllClientes(function(error, result_clientes){

        if(error)  throw error
        petModel.getAllPets(function(error, result_pets){
            
            if(error)  throw error
            res.render("agenda/formulario", { agenda : {} ,  clientes : result_clientes, pets :result_pets });       
        });
    });
};


module.exports.formulario_alteracao_agenda = function(application, req, res){
               
    const conn = application.config.dbConnection();      
    const agendaModel   = new application.app.models.AgendaDAO( conn );
    const clientesModel = new application.app.models.ClienteDAO( conn );
    const petModel      = new application.app.models.PetDAO( conn );
    let id_agenda = req.query.id;

    agendaModel.findAgendaForID(id_agenda ,function (error, result_agenda){
      
        if(error)  throw error
        clientesModel.getAllClientes(function(error, result_clientes){

            if(error)  throw error
            petModel.getAllPets(function(error, result_pets){

                if(error)  throw error
                res.render("agenda/formulario", {agenda : result_agenda, clientes : result_clientes, pets :result_pets});
            });
        });
    });
};


module.exports.tabela_agenda = function(application, req, res){

    const conn = application.config.dbConnection();      
    const agendaModel = new application.app.models.AgendaDAO( conn );

    agendaModel.getAllAgendamentos(function (error, result){
        
        if(error)  throw error
        res.render("agenda/tabela", {agendas : result});
    });
};
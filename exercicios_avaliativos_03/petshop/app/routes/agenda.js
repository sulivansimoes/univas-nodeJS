module.exports = function( application ){

    application.post('/agenda/salvar', function(req, res){

        application.app.controllers.agenda.incluir_nova_agenda(application, req, res); 
    });

    
    application.post('/agenda/editar', function(req, res){

        application.app.controllers.agenda.atualiza_agenda(application, req, res);
    });
    

    application.get('/agenda/deletar', function(req, res){

        application.app.controllers.agenda.deleta_agenda(application, req, res);
    });


    application.get('/formulario_agenda_salvar', function(req, res){      

        application.app.controllers.agenda.formulario_inclusao_agenda(application, req, res); 
    });


    application.get('/formulario_agenda_alterar', function(req, res){      

        application.app.controllers.agenda.formulario_alteracao_agenda(application, req, res); 
    });


    application.get('/tabela_agenda', function(req, res){      

        application.app.controllers.agenda.tabela_agenda(application, req, res); 
    });
}
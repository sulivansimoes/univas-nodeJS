module.exports = function( application ){

    application.post('/pet/salvar', function(req, res){

        application.app.controllers.pet.incluir_novo_pet(application, req, res); 
    });

    application.post('/pet/editar', function(req, res){

        application.app.controllers.pet.atualiza_pet(application, req, res);
    });
    
    application.get('/pet/deletar', function(req, res){

        application.app.controllers.pet.deletar_pet(application, req, res);
    });


    application.get('/formulario_pet_salvar', function(req, res){      

        application.app.controllers.pet.formulario_inclusao_pet(application, req, res); 
    });


    application.get('/formulario_pet_alterar', function(req, res){      

        application.app.controllers.pet.formulario_alteracao_pet(application, req, res); 
    });


    application.get('/tabela_pet', function(req, res){      

        application.app.controllers.pet.tabela_pet(application, req, res); 
    });
}
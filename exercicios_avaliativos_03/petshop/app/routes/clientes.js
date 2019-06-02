module.exports = function( application ){

    application.post('/cliente/salvar', function(req, res){

        application.app.controllers.clientes.incluir_novo_cliente(application, req, res); 
    });

    
    application.post('/cliente/editar', function(req, res){

        application.app.controllers.clientes.atualiza_cliente(application, req, res);
    });
    

    application.get('/cliente/deletar', function(req, res){

        application.app.controllers.clientes.deletar_cliente(application, req, res);
    });


    application.get('/formulario_cliente_salvar', function(req, res){      

        application.app.controllers.clientes.formulario_inclusao_cliente(application, req, res); 
    });


    application.get('/formulario_cliente_alterar', function(req, res){      

        application.app.controllers.clientes.formulario_alteracao_cliente(application, req, res); 
    });


    application.get('/tabela_cliente', function(req, res){      

        application.app.controllers.clientes.tabela_cliente(application, req, res); 
    });
}
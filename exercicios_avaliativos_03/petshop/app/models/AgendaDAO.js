/**
 * @description Classe referente à tabela Agenda.
 * @param connection conexao aberta com o banco de dados.
 */

class AgendaDAO{

    constructor(connection){
        this._connection = connection;
    }

    /**
     * Salva nova Agenda no banco de dados.
     * @param {*} agenda
     * @param {*} callback 
     */
    salva_nova_agenda(agenda, callback) {

        let cSql = "INSERT INTO agenda ( id_pet, data_agenda, horario_agenda, servico, valor ) values ?";
        let values =[[
                       agenda.id_pet        ,
                       agenda.data_agenda   ,
                       agenda.horario_agenda,
                       agenda.servico       ,
                       agenda.valor   
                    ]];
        
        this._connection.query(cSql, [values], callback);
    }

    /**
     * Deleta Agendamento do banco de dados. 
     * @param {*} id_agenda
     * @param {*} callback 
     */
    deleta_agenda(id_agenda, callback){


        let cSql = "DELETE FROM agenda where id = ?";
        let values =[[ id_agenda ]];

        this._connection.query(cSql, [values], callback);
    }

    /**
     * Atualiza Agendamento do banco de dados. 
     * @param {*} agenda
     * @param {*} callback 
     */
    atualiza_agenda(agenda, callback){
        
        let cSql = "UPDATE agenda SET id_pet = ?, data_agenda = ?, horario_agenda = ?, servico = ?, valor = ? WHERE id = ?";
        let values =[
                       agenda.id_pet         ,
                       agenda.data_agenda    ,
                       agenda.horario_agenda ,
                       agenda.servico,
                       agenda.valor  ,
                       agenda.id
                    ];

        this._connection.query(cSql, values, callback);
    }

    /**
     * consulta todos os agendamentos cadastrados no banco de dados.
     * @param {*} callback 
     */
    getAllAgendamentos(callback){

        let cSql ="SELECT a.id, "
                 +"       c.nome as dono, "
                 +"       p.id as id_dono,"
                 +"       p.nome as pet, "
                 +"       DATE_FORMAT( SUBSTRING(a.data_agenda,1,10),'%d/%m/%Y') AS data_agenda, "
                 +"       a.servico, "
                 +"       SUBSTRING(a.horario_agenda,1,5) AS horario_agenda, "
                 +"       a.valor "
                 +"FROM agenda AS a "
                 +"INNER JOIN pet AS p ON p.id = a.id_pet "
                 +"INNER JOIN cliente AS c ON c.id = p.id_dono "
                 +"ORDER BY data_agenda DESC "
     
        this._connection.query(cSql, callback);
    }

    /**
    * consulta o Agenda especifica pelo id
    * @param {*} id_agenda 
    * @param {*} callback 
    */
    findAgendaForID(id_agenda, callback){
        
        let cSql ="SELECT a.id, "
                 +"       c.id as id_dono, "
                 +"       p.id as id_pet, "
                 +"       p.nome as pet, "
                 +"       SUBSTRING(a.data_agenda,1,10) AS data_agenda, "
                 +"       a.servico, "
                 +"       SUBSTRING(a.horario_agenda,1,5) AS horario_agenda, "
                 +"       a.valor "
                 +"FROM agenda AS a "
                 +"INNER JOIN pet AS p ON p.id = a.id_pet "
                 +"INNER JOIN cliente AS c ON c.id = p.id_dono "
                 +"WHERE a.id = ?"

        let values = [ id_agenda ];

        this._connection.query(cSql, values, callback);       
    }
 }

 module.exports = function(){
    //exportando a classe 
    return  AgendaDAO;
} 
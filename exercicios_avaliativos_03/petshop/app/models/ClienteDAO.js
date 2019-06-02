/**
 * @description Classe referente à tabela Cliente.
 * @param connection conexao aberta com o banco de dados.
 */

class ClienteDAO{

    constructor(connection){
        this._connection = connection;
    }

    /**
     * Salva novo Cliente no banco de dados.
     * @param {*} cliente
     * @param {*} callback 
     */
    salva_novo_cliente(cliente, callback) {

        let cSql = "INSERT INTO cliente ( nome, cpf, email, nascimento, telefone, endereco ) values ?";
        let values =[[
                       cliente.nome    ,
                       cliente.cpf     ,
                       cliente.email   ,
                       cliente.nascimento,
                       cliente.telefone,
                       cliente.endereco   
                    ]];
        
        this._connection.query(cSql, [values], callback);
    }

    /**
     * Deleta Cliente do banco de dados. 
     * @param {*} id_cliente
     * @param {*} callback 
     */
    deleta_cliente(id_cliente, callback){


        let cSql = "DELETE FROM cliente where id = ?";
        let values =[[ id_cliente ]];

        this._connection.query(cSql, [values], callback);
    }

    /**
     * Atualiza Cliente do banco de dados. 
     * @param {*} cliente
     * @param {*} callback 
     */
    atualiza_cliente(cliente, callback){
                    
        let cSql = "UPDATE cliente SET nome = ?, cpf = ?, email = ?, nascimento = ?, telefone = ?, endereco = ? WHERE id = ?";
        let values =[
                       cliente.nome  ,
                       cliente.cpf   ,
                       cliente.email ,
                       cliente.nascimento,
                       cliente.telefone  ,
                       cliente.endereco  ,
                       cliente.id
                    ];

        this._connection.query(cSql, values, callback);
    }

    /**
     * consulta todos os clientes cadastrados no banco de dados.
     * @param {*} callback 
     */
    getAllClientes(callback){

        let cSql = "SELECT id, "
                    +"     nome, "
                    +"     INSERT( INSERT( INSERT( cpf, 10, 0, '-' ), 7, 0, '.' ), 4, 0, '.' ) AS cpf, "
                    +"     email, "
                    +"     DATE_FORMAT( SUBSTRING(nascimento,1,10),'%d/%m/%Y') AS nascimento, "
                    +"     telefone,"
                    +"     endereco " 
                    +"FROM cliente "
                    +"ORDER BY id"

        this._connection.query(cSql, callback);
    }

    /**
    * consulta o Cliente especifico pelo id
    * @param {*} id_cliente 
    * @param {*} callback 
    */
    findClienteForID(id_cliente, callback){
        
        let cSql ="SELECT id, "
                 +"       nome, "
                 +"       cpf, "
                 +"       email," 
                 +"       SUBSTRING(nascimento,1,10) AS nascimento, "
                 +"       telefone, "
                 +"       endereco " 
                 +"FROM cliente "
                 +"WHERE id = ?"
        
        let values = [ id_cliente ];

        this._connection.query(cSql, values, callback);       
    }
 }

 module.exports = function(){
    //exportando a classe 
    return  ClienteDAO;
} 
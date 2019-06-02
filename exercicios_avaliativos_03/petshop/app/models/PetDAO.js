/**
 * @description Classe referente à tabela Pet.
 * @param connection conexao aberta com o banco de dados.
 */

 class PetDAO{

    constructor(connection){
        this._connection = connection;
    }

    /**
     * Salva novo Pet no banco de dados.
     * @param {*} pet
     * @param {*} callback 
     */
    salva_novo_pet(pet, callback) {

        let cSql = "INSERT INTO pet ( id_dono, nome, raca, sexo, nascimento, tamanho ) values ?";
        let values =[[
                       pet.id_dono   ,
                       pet.nome      ,
                       pet.raca      ,
                       pet.sexo      ,
                       pet.nascimento,
                       pet.tamanho   
                    ]];
        
        this._connection.query(cSql, [values], callback);
    }

    /**
     * Deleta Pet do banco de dados. 
     * @param {*} pet
     * @param {*} callback 
     */
    deleta_pet(id_pet, callback){

        let cSql = "DELETE FROM pet where id = ?";
        let values = [ id_pet ];

        this._connection.query(cSql, values, callback);
    }

    /**
     * Atualiza Pet do banco de dados. 
     * @param {*} pet
     * @param {*} callback 
     */
    atualiza_pet(pet, callback){

        let cSql = "UPDATE pet SET raca = ?, nome = ?, sexo = ?, nascimento = ?, tamanho = ?, id_dono = ? WHERE id = ?";
        let values =[
                      pet.raca      ,
                      pet.nome      ,
                      pet.sexo      ,
                      pet.nascimento,
                      pet.tamanho   ,
                      pet.id_dono   ,
                      pet.id
                    ];

        this._connection.query(cSql, values, callback);
    }

    /**
     * consulta todos os pets cadastrados no banco de dados.
     * @param {*} callback 
     */
    getAllPets(callback){

        let cSql = "SELECT p.id, "
                 + "       p.id_dono, "
                 + "       p.nome, "
                 + "       c.nome as nome_dono, "
                 + "       p.raca, "
                 + "       p.sexo, "
                 + "       DATE_FORMAT( SUBSTRING(p.nascimento,1,10),'%d/%m/%Y') AS nascimento,"
                 + "       p.tamanho"
                 + " FROM pet AS p "
                 + " INNER JOIN cliente AS c ON c.id = p.id_dono "
                 + " ORDER BY id "

        this._connection.query(cSql,callback);
    }

    /**
     * consulta o pet especifico pelo id
     * @param {*} id_pet 
     * @param {*} callback 
     */
    findPetForID(id_pet, callback){
        
        let cSql ="SELECT id, id_dono, nome, raca, sexo, SUBSTRING(nascimento,1,10) as nascimento, tamanho FROM pet WHERE id = ?"
        let values = [ id_pet ];

        this._connection.query(cSql, values, callback);       
    }
 }

 module.exports = function(){
    //exportando a classe 
    return  PetDAO;
} 

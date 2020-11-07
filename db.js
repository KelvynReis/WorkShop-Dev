const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
    //criar a tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXTE,
            title TEXTE,
            category TEXTE,
            description TEXTE,
            link TEXTE
        );`        
        )


    //inserir dados na tabela
    /* const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `
    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        "https://rockteseat.com.br"
    ]

    db.run(query,values, function(err){
        if(err) return console.log(err)
    
        console.log(this)
    }) */
    
    //deletar um dado na tabela
    //db.run(`DELETE FROM ideas WHERE id = ?`,[1], function(err){
        //if(err) return console.log(err)
    //
        //console.log("DELETEI", this)
    //})

    //consultar dados na tabela
    /* db.all(`SELECT * FROM ideas` , function(err,rows){
        if(err) return console.log(err)

        console.log(rows)
    }) */

})

module.exports = db
    

var express = require('express')
var mysql = require('mysql')

var app = express()

//Parametros de conexion
var conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'pw'
})

//Nos conectamos
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("Conexion exitosa")
    }
})

app.get('/',function(req,res){
    res.send('Ruta de inicio del servidor')
})

app.get('/api/articulos',(req, res)=>{
    conexion.query('SELECT * FROM articulos'), (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    }
})

app.get('/api/articulos/:id',(req, res)=>{
    conexion.query('SELECT * FROM articulos WHERE id = ?'),[req.params.id], (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    }
})

app.listen('3000',function(){
    console.log('Servidor en linea... OK')
})
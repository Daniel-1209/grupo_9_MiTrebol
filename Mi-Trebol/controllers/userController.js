const fs = require('fs');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/usersList.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const usersFilePath = path.join(__dirname, '../data/usersList.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
let user = null;

let controlador = {
    // Hacia la vista del login
    login: (req, res) => {
        user = null;
        res.render('./users/login.ejs',{user})
    },
    //Hacia el inicio despues de logearse
    begin: (req, res) => {

        user = {...req.body};
        let yes = false;
        
        for(element of users){
            if (element.email == user.email && element.password == user.password ){
                user = element;
                yes = true;
                break;
            }
        }
        //console.log(user);
        // Verifica si fue encontrado el usuario 
        if( yes){
            req.session.user = user;
            //res.render('index.ejs', {products, user})
            // Elije si es vendedor o comprador
            if( user.category == 'Vendedor'){
                res.redirect('/indexVendedor');
            }else {
                res.redirect('/');
            }
           
        }else{
            res.redirect('/users/login');
        }
        
    },

    // Hacia las vista del registro
    register: (req, res) => {
        user = null;
        res.render('./users/register.ejs' ,{user})
    },
    // Hacia el inicion una vez registrada la persona
    enter: (req, res) => {

        if ( req.body.category == 'Comprador'){
            user = {
                id : users.length+1,
                ...req.body,
                imgs: req.file.filename, 
                car: [],
            }

        }else{
            user = {
                id : users.length+1,
                ...req.body,
                imgs: req.file.filename, //'Profile' //agregar imagen del perfil
                myProducts: [],
            }
        }
        
        

        users.push(user);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        
        res.redirect('/users/login');
        
    }
}

module.exports = controlador;   
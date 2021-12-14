const fs = require('fs');
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

        user = {...req.query};
        let yes = false;

        for(element of users){
            if (element.email == user.email && element.password == user.password ){
                user = element;
                yes = true;
                break;
            }
        }
        if( yes){
            //res.render('index.ejs', {products, user})
            if( user.class == 'Vendedor'){
                res.redirect('/'+ user.id);
            }else {
                res.redirect('/indexVendedor/'+ user.id);
            }
           
        }else{
            res.redirect('/users/login');
        }
        
    },

    // Hacia las vista del registro
    register: (req, res) => {
        res.render('./users/register.ejs' ,{user})
    },
    // Hacia el inicion una vez registrada la persona
    enter: (req, res) => {
        
        user = {
            id : users.length+1,
            ...req.body,
            car: [],
            image: 'Prfile'
        }

        users.push(user);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        
        res.redirect('/users/login');
        
    }
}

module.exports = controlador;   
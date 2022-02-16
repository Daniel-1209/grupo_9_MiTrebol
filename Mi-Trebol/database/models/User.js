// Se exporta una funcion que siempre reciben dos variables
module.exports = (sequelize, dataTypes) => {
    //  En alias se aconstumbra poner el nombre del modelo en plural
    let alias = "Users";

    // Estos son los datos de las columnas de la base de datos y es un objeto literal
    // en la cual aclaramos todas las columanas que tenemos en nustra tabla
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: dataTypes.STRING  
        },
        first_name: {
            type: dataTypes.STRING
        } ,
        last_name: {
            type: dataTypes.STRING
        } ,
        email: {
            type: dataTypes.STRING
        } ,
        password: {
            type: dataTypes.STRING
        } ,
        id_category: {
            type: dataTypes.INTEGER
        } ,
        avatar: {
            type: dataTypes.STRING
        } 

    }
    
    // Esto es para configurar la base de datos
    // tableName es el nombre de la tabla de base de datos
    // timestamps es para decirle que nuestras tablas no tienen su fecha se creacion
    let configuracion = {
        tableName: "users",
        timestamps: false
    }

    // Se crea una variable que es la misma que el archivo y esa misma se returna
    const User = sequelize.define(alias, columnas, configuracion);

    User.associate = (models) => {
        User.hasMany(models.SellerProducts, {
            as: 'myProducts',
            foreignKey: 'id_user'
        })
       
        User.belongsToMany(models.Products, {
            as: "ShoppingCar",
            through: "car",
            foreignKey: "id_user",
            otherKey: "id_product",
            timestamps: false
        });
            
    }
    

    return User;
};

// Se exporta una funcion que siempre reciben dos variables
module.exports = (sequelize, dataTypes) => {
    //  En alias se aconstumbra poner el nombre del modelo en plural
    let alias = "Cars";

    // Estos son los datos de las columnas de la base de datos y es un objeto literal
    // en la cual aclaramos todas las columanas que tenemos en nustra tabla
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: dataTypes.INTEGER
        } ,
        id_product: {
            type: dataTypes.STRING  
        } 

    }
    
    // Esto es para configurar la base de datos
    // tableName es el nombre de la tabla de base de datos
    // timestamps es para decirle que nuestras tablas no tienen su fecha se creacion
    let configuracion = {
        tableName: "car",
        timestamps: false
    }

    // Se crea una variable que es la misma que el archivo y esa misma se returna
    const Car = sequelize.define(alias, columnas, configuracion);


    
    

    return Car;
};

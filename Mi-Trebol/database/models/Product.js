// Se exporta una funcion que siempre reciben dos variables
module.exports = (sequelize, dataTypes) => {
    //  En alias se aconstumbra poner el nombre del modelo en plural
    let alias = "Products";

    // Estos son los datos de las columnas de la base de datos y es un objeto literal
    // en la cual aclaramos todas las columanas que tenemos en nustra tabla
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING  
        },
        price: {
            type: dataTypes.DECIMAL
        } ,
        raiting: {
            type: dataTypes.INTEGER
        } ,
        id_class: {
            type: dataTypes.INTEGER
        } ,
        shortdescription: {
            type: dataTypes.STRING
        } ,
        longDescription: {
            type: dataTypes.INTEGER
        } ,
        purchases: {
            type: dataTypes.INTEGER
        } 

    }
    
    // Esto es para configurar la base de datos
    // tableName es el nombre de la tabla de base de datos
    // timestamps es para decirle que nuestras tablas no tienen su fecha se creacion
    let configuracion = {
        tableName: "products",
        timestamps: false
    }

    // Se crea una variable que es la misma que el archivo y esa misma se returna
    const Product = sequelize.define(alias, columnas, configuracion);


    /// Relacion 1 a M

    Product.associate = (models) => {
        Product.hasMany(models.Images, {
            as: 'imgs',
            foreignKey: 'id_product'
        })
    }

    return Product;
};

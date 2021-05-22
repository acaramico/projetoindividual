'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Conquistas = sequelize.define('Conquistas',{
		idAno: {
			field: 'idAno',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
        Nomeaçoes: {
			field: 'Nomeaçoes',
			type: DataTypes.INTEGER,
			allowNull: false
		},
        Ganhos: {
			field: 'Ganhos',
			type: DataTypes.INTEGER,
			allowNull: false
		},
        
		
	}, 
	{
		tableName: 'premios', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Conquistas;
};

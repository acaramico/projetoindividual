'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Endereco = sequelize.define('Endereco',{
		idEndereco: {
			field: 'idEndereco',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
        cep: {
			field: 'cep',
			type: DataTypes.STRING,
			allowNull: false
		},
        logradouro: {
			field: 'logradouro',
			type: DataTypes.STRING,
			allowNull: false
		},
        bairro: {
			field: 'bairro',
			type: DataTypes.STRING,
			allowNull: false
		},
        cidade: {
			field: 'cidade',
			type: DataTypes.STRING,
			allowNull: false
		},
        estado: {
			field: 'estado',
			type: DataTypes.STRING,
			allowNull: false
		},
        numero: {
			field: 'numero',
			type: DataTypes.INTEGER,
			allowNull: false
		},
        fkCliente: {
			field: 'fkCliente',
			type: DataTypes.INTEGER,
			allowNull: true
		}
		
	}, 
	{
		tableName: 'Endereco', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Endereco;
};

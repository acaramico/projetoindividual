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
			allowNull: true
		},
        logradouro: {
			field: 'logradouro',
			type: DataTypes.STRING,
			allowNull: true
		},
        bairro: {
			field: 'bairro',
			type: DataTypes.STRING,
			allowNull: true
		},
        cidade: {
			field: 'cidade',
			type: DataTypes.STRING,
			allowNull: true
		},
        estado: {
			field: 'estado',
			type: DataTypes.STRING,
			allowNull: true
		},
        numero: {
			field: 'numero',
			type: DataTypes.INTEGER,
			allowNull: true
		},
        fkCliente: {
			field: 'fkCliente',
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'idCliente', 
				}
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

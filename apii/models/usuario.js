	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idCliente',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nomeCliente',
			type: DataTypes.STRING,
			allowNull: true
		},
		login: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: true
		},
		celular: {
			field: 'Celular',
			type: DataTypes.STRING,
			allowNull: true
		},
		cpf: {
			field: 'cpf',
			type: DataTypes.STRING,
			allowNull: true
		},
		dataNasc: {
			field: 'dataNasc',
			type: DataTypes.STRING,
			allowNull: true
		},
		
		senha: {
			field: 'senhaCliente',
			type: DataTypes.STRING,
			allowNull: true
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
		fkPlanos: {
			field: 'fkPlanos',
			type: DataTypes.INTEGER,
			allowNull: true
		}
		
	}, 
	{
		tableName: 'Cliente', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};

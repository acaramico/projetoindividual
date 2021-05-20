var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
var Endereco = require('../models').Endereco;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar123', function (req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var login = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	

	let instrucaoSql = `select * from cliente where Email='${login}' and senhaCliente='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.login);
			console.log('sessoes: ', sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/*tentando trazer infos na tela*/
router.get('/sessao/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);

	let tem_sessao = false;
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}

});
router.post('/buscardados/:id', function (req, res, next) {
	let id = req.params.id;
	console.log('Recuperando dados por id cliente');

	let instrucaoSql = `select * from cliente where idCliente=${id}`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontr4dos: ${resultado.length}`);
		console.log(`Achei: ${resultado}`);
		res.json(resultado);
		//return resultado
		// if (resultado.length == 1) {
		// 	sessoes.push(resultado[0].dataValues.login);
		// 	console.log('sessoes: ',sessoes);
		// 	res.json(resultado[0]);
		// } else if (resultado.length == 0) {
		// 	res.status(403).send('Login e/ou senha inválido(s)');
		// } else {
		// 	res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		// }

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});
/*tentando trazer infos na tela*/

/* Cadastrar usuário */
router.post('/cadastrar', function (req, res, next) {
	console.log('Criando um usuário');
	Usuario.create({
		nome: req.body.nome,
		login: req.body.login,
		celular: req.body.celular,
		cpf: req.body.cpf,
		dataNasc: req.body.dataNasc,
		senha: req.body.senha,
		cep: req.body.cep,
		logradouro: req.body.logradouro,
		bairro: req.body.bairro,
		cidade: req.body.cidade,
		estado: req.body.uf,
		numero: req.body.num
		

	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});
router.post('/cadastrarendereco', function (req, res, next) {
	console.log('Criando um endereço');

	var cep = req.body.cep;
	var 	logradouro = req.body.logradouro;
	var 	bairro= req.body.bairro;
	var 	cidade=req.body.cidade;
	var 	estado= req.body.uf;
	var 	numero= req.body.num;


	var fkCliente = req.body.fkCliente
	let instrucaoSql = `insert into cliente(CEP, Logradouro, Bairro, Cidade, Estado, Numero) values(${cep}, ${logradouro}, ${bairro}, ${cidade}, ${estado}, ${numero}) where idCliente = ${fkCliente}`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Deu certo ${resultado}`);
		

		

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});

	
/*
	Endereco.create({
		cep: req.body.cep,
		logradouro: req.body.logradouro,
		bairro: req.body.bairro,
		cidade: req.body.cidade,
		estado: req.body.uf,
		numero: req.body.num,
		fkCliente: req.body.fkCliente
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
*/
});


/* Verificação de usuário */
router.get('/sessao/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);

	let tem_sessao = false;
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}

});


/* Logoff de usuário */
router.get('/sair/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function (req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;

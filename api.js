const http = require("http");
const mysql = require("mysql");
const url = require("url");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");	// 加密模块
const express = require("express");
const router = express.Router();

const conn = mysql.createConnection({
	host: 'localhost',
	port: 3308,
	user: 'root',
	password: 'ZUInfs981',
	database: 'library'
});

// 打开连接
conn.connect();

router.get('register', function(request, response){
	let url_info = url.parse(request.url, true);	
	response.writeHead(200, {'Content-Type': 'text-plain'});
	let admin = url_info.query.admin;
	let password = url_info.query.password;
	let md5 = crypto.createHash("md5");
	let pwd = md5.update(password).digest("hex");
	conn.query("INSERT INTO admins(admin, password) VALUES(?, ?)", [admin, pwd], (err, res)=>{
		if(err) console.log("注册失败");
		console.log(res);
		if(res){
			console.log("注册成功");
		}
	})
    response.end();
})

router.get("login", function(request, response){
	let url_info = url.parse(request.url, true);
	response.writeHead(200, {'Content-Type': 'text-plain'});
	let admin = url_info.query.admin;
	let password = url_info.query.password;
	let md5 = crypto.createHash("md5");
	let pwd = md5.update(password).digest("hex");
	conn.query("SELECT * FROM admins WHERE admin = ?", [admin], (err, res)=>{
		if(err) throw err;
		else {
			if(res[0].password == pwd){
				console.log("success");
			} else {
				console.log("some error");
			}
		}
	})
    response.end();	
})

router.get('/test', (request, response) => {
	response.writeHead(200, {'Content-Type': 'text-plain'});
	const sql = 'SELECT * FROM admins';
	conn.query(sql, function(err, res){
		if(err) throw err;
		// 将结果格式化成 JSON 
		response.end(JSON.stringify(res));
	})
})

router.get('/', (req, res) => {
	res.send('test');
})

// 关闭连接
// conn.end();

module.exports = router;
// const http = require("http");
// const mysql = require("mysql");
// const url = require("url");
// const fs = require("fs");
// const path = require("path");
// const crypto = require("crypto");	// 加密模块

const express = require("express");
const app = express();

const api = require("./api.js");

app.use('/static', express.static('public'));

app.use('/api', api);

app.get("/", function(req, res){
	res.send("Hello World!");
})

app.listen(3000, function(){
	console.log('Server 3000');
})

// const conn = mysql.createConnection({
// 	host: 'localhost',
// 	port: 3308,
// 	user: 'root',
// 	password: 'ZUInfs981',
// 	database: 'library'
// });

// 打开连接
// conn.connect();

// // 创建服务
// const server = http.createServer(function(request, response){
	
// 	let url_info = url.parse(request.url, true);	
// 	let pathname = __dirname + url_info.pathname;

// 	if(url_info.pathname == '/register'){
// 		// 注册
// 		response.writeHead(200, {'Content-Type': 'text-plain'});
// 		let admin = url_info.query.admin;
// 		let password = url_info.query.password;
// 		let md5 = crypto.createHash("md5");
// 		let pwd = md5.update(password).digest("hex");
// 		conn.query("INSERT INTO admins(admin, password) VALUES(?, ?)", [admin, pwd], (err, res)=>{
// 			if(err) console.log("注册失败");
// 			console.log(res);
// 			if(res){
// 				console.log("注册成功");
// 			}
// 		})
// 	    response.end();
// 	}

// 	if(url_info.pathname == '/login'){
// 		response.writeHead(200, {'Content-Type': 'text-plain'});
// 		let admin = url_info.query.admin;
// 		let password = url_info.query.password;
// 		let md5 = crypto.createHash("md5");
// 		let pwd = md5.update(password).digest("hex");
// 		conn.query("SELECT * FROM admins WHERE admin = ?", [admin], (err, res)=>{
// 			if(err) throw err;
// 			else {
// 				if(res[0].password == pwd){
// 					console.log("success");
// 				} else {
// 					console.log("some error");
// 				}
// 			}
// 		})
// 	    response.end();

// 	}

// 	if(url_info.pathname == '/test'){
// 		let sql = 'SELECT * FROM admins';
// 		conn.query(sql, function(err, res){
// 			if(err) throw err;
// 			// 将结果格式化成 JSON 
// 			response.writeHead(200, {'Content-Type': 'text-plain'});
// 			response.end(JSON.stringify(res));
// 		})
// 	} else {
// 		if (path.extname(pathname)=="") {
// 	        pathname += "/";
// 	    }
// 	    if (pathname.charAt(pathname.length-1)=="/"){
// 	        pathname += "index.html";
// 	    }

// 	    fs.exists(pathname, function(exists){
// 	        if(exists){
// 	            switch(path.extname(pathname)){
// 	                case ".html":
// 	                    response.writeHead(200, {"Content-Type": "text/html"});
// 	                    break;
// 	                case ".js":
// 	                    response.writeHead(200, {"Content-Type": "text/javascript"});
// 	                    break;
// 	                case ".css":
// 	                    response.writeHead(200, {"Content-Type": "text/css"});
// 	                    break;
// 	                case ".gif":
// 	                    response.writeHead(200, {"Content-Type": "image/gif"});
// 	                    break;
// 	                case ".jpg":
// 	                    response.writeHead(200, {"Content-Type": "image/jpeg"});
// 	                    break;
// 	                case ".png":
// 	                    response.writeHead(200, {"Content-Type": "image/png"});
// 	                    break;
// 	                default:
// 	                    response.writeHead(200, {"Content-Type": "application/octet-stream"});
// 	            }

// 	            fs.readFile(pathname,function (err,data){
// 	                response.end(data);
// 	            });
// 	        } else {
// 	            response.writeHead(404, {"Content-Type": "text/html"});
// 	            response.end("<h1>404 Not Found</h1>");
// 	        }
// 	    });
// 	}


	

// }).listen(3000)

// console.log("Server running");

// server 关闭时关闭连接
// app.on('close', function(){
// 	conn.end();
// })

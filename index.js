let path = require('path');
let fs = require("fs");
let express = require('express');
let config = require("./config");
let createWsJs = require("./utils");
let app = express();
let expressWs = require('express-ws')(app);
app.use(express.static(path.join(__dirname, 'public')));
app.ws('/ws', function(ws, req) {
    ws.on('message', function(msg) {
        let data = `${new Date()} : ${msg} \r`;
        try {
            console.log(data);
            fs.appendFileSync("debugger.log", data, "utf-8");
            // ws.send('echo:' + msg);
        } catch (error) {
            console.log("写入失败");
            console.log(error);
            console.log("再次写入")
            try {
                fs.appendFileSync("debugger.log", data, "utf-8");
            } catch (error) {
                console.log("写入失败")
            }
        }
    });
})
createWsJs();// 创建ws.js
app.listen(config.prot, function() {
    console.log("you need loading js  in your html")
    console.log(`<script src="http://${config.host}:${config.prot}/ws.js"></script>`)
    console.log('running......');
});
let fs = require("fs");
let path = require("path");
let config = require("../config/");
const SERVEPATH = `ws://${config.host}:${config.prot}/ws`;
let jsTemplate, newWsjs;
try {
    jsTemplate = fs.readFileSync(path.join(__dirname, "template.js"), "utf-8");
    newWsjs = jsTemplate.replace("$SERVEPATH$", SERVEPATH);
} catch (err) {
    console.lot("Failed to start service")
    console.log(err);
    process.exit()
}
module.exports = function () {
    try {
        fs.writeFileSync(path.join(__dirname, "../public/ws.js"), newWsjs, "utf-8")
    } catch (err) {
        console.lot("Failed to start service")
        console.log(err);
        process.exit()
    }
}
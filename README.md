# 调试移动js代码

原理：使用node搭建一个websocket服务,在移动端链接该服务并该服务发送想要的调试信息

核心: 在node中使用express-ws搭建服务并在移动端通过改写console方法使之能向node服务发送信息

# 使用
* 在 config中配置ip地址和端口号
* 下载依赖后启动服务（npm start）
* 在调试的移动端项目中加载服务中的js文件
* 开始调试


> 注意: 调试项目和node服务应处于一个网段内
> 调试信息在命令行中或在debugger.log中查看



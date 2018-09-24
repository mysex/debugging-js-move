(function(window) {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //  本地搭建 日志服务器 初始化一个 WebSocket 对象  进行测试
        let ws = new WebSocket("ws://10.1.0.218:3000/ws");
        //  websocket 链接失败
        ws.onerror = function(err) {
            alert(err)
        }
        ws.onopen = function() {
            ws.send("start");
        }

        function sendData(data) {
            switch (ws.readyState) {
                case 0:
                    ws.onopen = function() {
                        ws.send(data);
                    }
                    break;
                case 1:
                    ws.send(data);
                    break;
                default: // 不可用
                    break;
            }
        }

        window.console = {
            assert: function(data) {
                sendData(data)
            },
            clear: function(data) {
                sendData(data)
            },
            context: function(data) {
                sendData(data)
            },
            count: function(data) {
                sendData(data)
            },
            countReset: function(data) {
                sendData(data)
            },
            debug: function(data) {
                sendData(data)
            },
            dir: function(data) {
                sendData(data)
            },
            dirxml: function(data) {
                sendData(data)
            },
            error: function(data) {
                sendData(data)
            },
            group: function(data) {
                sendData(data)
            },
            groupCollapsed: function(data) {
                sendData(data)
            },
            groupEnd: function(data) {
                sendData(data)
            },
            info: function(data) {
                sendData(data)
            },
            log: function(data) {
                sendData(data)
            },
            markTimeline: function(data) {
                sendData(data)
            },
            memory: function(data) {
                sendData(data)
            },
            profile: function(data) {
                sendData(data)
            },
            profileEnd: function(data) {
                sendData(data)
            },
            table: function(data) {
                sendData(data)
            },
            time: function(data) {
                sendData(data)
            },
            timeEnd: function(data) {
                sendData(data)
            },
            timeStamp: function(data) {
                sendData(data)
            },
            timeline: function(data) {
                sendData(data)
            },
            timelineEnd: function(data) {
                sendData(data)
            },
            trace: function(data) {
                sendData(data)
            },
            warn: function(data) {
                sendData(data)
            }
        }
    } else {
        return false;
    }
})(window)
(function (window) {
    //移动端改写console方法 pc端不改写；
    let system = {
        win: false,
        mac: false,
        xll: false
    };
    //检测平台
    let p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    // 判断完成改写
    if (system.win || system.mac || system.xll) {
        return false;
    } else {
        let ws = new WebSocket("$SERVEPATH$");
        ws.onerror = function (err) {
            console.log("链接ws服务失败")
        }
        ws.onopen = function () {
            ws.send("start");
        }

        function sendData(data) {
            switch (ws.readyState) {
                case 0:
                    ws.onopen = function () {
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
            assert: function (data) {
                sendData(data)
            },
            clear: function (data) {
                sendData(data)
            },
            context: function (data) {
                sendData(data)
            },
            count: function (data) {
                sendData(data)
            },
            countReset: function (data) {
                sendData(data)
            },
            debug: function (data) {
                sendData(data)
            },
            dir: function (data) {
                sendData(data)
            },
            dirxml: function (data) {
                sendData(data)
            },
            error: function (data) {
                sendData(data)
            },
            group: function (data) {
                sendData(data)
            },
            groupCollapsed: function (data) {
                sendData(data)
            },
            groupEnd: function (data) {
                sendData(data)
            },
            info: function (data) {
                sendData(data)
            },
            log: function (data) {
                sendData(data)
            },
            markTimeline: function (data) {
                sendData(data)
            },
            memory: function (data) {
                sendData(data)
            },
            profile: function (data) {
                sendData(data)
            },
            profileEnd: function (data) {
                sendData(data)
            },
            table: function (data) {
                sendData(data)
            },
            time: function (data) {
                sendData(data)
            },
            timeEnd: function (data) {
                sendData(data)
            },
            timeStamp: function (data) {
                sendData(data)
            },
            timeline: function (data) {
                sendData(data)
            },
            timelineEnd: function (data) {
                sendData(data)
            },
            trace: function (data) {
                sendData(data)
            },
            warn: function (data) {
                sendData(data)
            }
        }
    }
})(window)
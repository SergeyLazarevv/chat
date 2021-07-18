const WebSocket = require('ws')

export default class Socket {

    socket: any
    users: Array<any> = []

    constructor(ws: any) {

        
            this.socket = ws
            
    }

    checkMessage() {
        
    }

    closeConnect() {
        this.socket.close(1000, "Пока!")
    }

    send() {
        this.socket.send(`Привет с сервера!`);
    }
}
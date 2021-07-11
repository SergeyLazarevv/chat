const WebSocket = require('ws')

export default class Socket {

    socketServer: any
    socket: any
    users: Array<any> = []

    constructor(req: any, reqSocket: any, Buffer: any) {

        this.socketServer = new WebSocket.Server({ noServer: true })

        this.socketServer.handleUpgrade(req, reqSocket, Buffer, (ws: any) => {
            this.users.push('user');
            this.socket = ws
            console.log('users',this.users)
            this.socket.on('message', (message: any) => {
                let name = message.match(/([\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+)$/gu) || "Гость";
                console.log('on', message)
                this.socket.send(`Привет с сервера, ${name}!`);
            });
        });
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
import { WebSocketServer, WebSocket } from 'ws'

const wss = new WebSocketServer({
   port: 8080,
})

interface User {
   socket: WebSocket
   roomId: string
}

let allSockets: User[] = []

wss.on('connection', function (socket) {
   socket.on('message', (message) => {
      const parsedMessage = JSON.parse(message.toString())
      try {
         if (parsedMessage.type === 'join') {
            allSockets.push({
               socket,
               roomId: parsedMessage.payload.roomId,
            })
         }
      } catch (error) {
         console.error(error)
      }

      if (parsedMessage.type === 'chat') {
         const currentUserRoom = allSockets.find(
            (x) => x.socket == socket
         )?.roomId

         allSockets.forEach((x) => {
            if (x.roomId === currentUserRoom && x.socket !== socket) {
               x.socket.send(parsedMessage.payload.message)
            }
         })
      }
   })
})

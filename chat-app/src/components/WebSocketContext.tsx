import { createContext, useContext, useEffect, useRef, useState } from 'react'
type WebSocketType = WebSocket | null
const WebSocketContext = createContext<WebSocketType>(null)

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
   const [socket, setSocket] = useState<WebSocketType>(null)

   useEffect(() => {
      const ws = new WebSocket('ws://localhost:8080')

      ws.onmessage = (event) => {
         console.log('Received:', event.data)
      }

      ws.onopen = () => {
         console.log('WebSocket connection opened')
         setSocket(ws)
      }

      ws.onerror = (err) => {
         console.error('WebSocket error:', err)
      }

      ws.onclose = () => {
         console.log('WebSocket closed')
      }

      return () => {
         if (
            ws.readyState === WebSocket.OPEN ||
            ws.readyState === WebSocket.CONNECTING
         ) {
            ws.close()
         }
      }
   }, [])

   return (
      <WebSocketContext.Provider value={socket}>
         {children}
      </WebSocketContext.Provider>
   )
}

export const useWebSocket = () => useContext(WebSocketContext)

import { Header } from '../components/Header'
import { useEffect, useRef, useState } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useWebSocket } from '../components/WebSocketContext'

// Better interface for individual messages
interface Message {
   id: string
   text: string
   sender: 'user' | 'received'
   timestamp: Date
}

export const Chat = () => {
   // Single state for all messages
   const [messages, setMessages] = useState<Message[]>([])
   const inputRef = useRef<HTMLInputElement>(null)
   const socket = useWebSocket()
   const roomId = localStorage.getItem('roomId')

   useEffect(() => {
      if (!socket) return

      socket.onmessage = (event) => {
         const data = event.data

         const newMessage: Message = {
            id: Date.now().toString() + Math.random(), // Better unique ID
            text: data,
            sender: 'received',
            timestamp: new Date(),
         }

         setMessages((prev) => [...prev, newMessage])
      }
   }, [socket])

   const sendMessage = () => {
      const messageText = inputRef.current?.value?.trim()
      if (!messageText) return

      socket?.send(
         JSON.stringify({
            type: 'chat',
            payload: {
               message: messageText,
            },
         })
      )

      const newMessage: Message = {
         id: Date.now().toString(),
         text: messageText,
         sender: 'user',
         timestamp: new Date(),
      }

      setMessages((prev) => [...prev, newMessage])

      if (inputRef.current) {
         inputRef.current.value = ''
      }
   }

   return (
      <div className="flex h-fit text-white w-full justify-center">
         <div className="border border-gray-700 w-xl p-5 rounded-xl shadow-md mt-15 h-screen">
            <div className="flex flex-col">
               <Header />
            </div>
            <div className="flex justify-between py-2.5 bg-[#272726] rounded-md mt-3 mx-2">
               <div className="mx-2.5 text-gray-300 font-semibold text-base flex">
                  Room Code: <h1 className="ml-2">{roomId}</h1>
               </div>
               <div className="mx-2.5 text-md">Users: 1/2</div>
            </div>
            <div className="flex justify-center items-center">
               <div className="w-full border border-gray-700 h-96 mt-5 rounded-md mx-2 p-2 overflow-y-auto">
                  <div className="mt-2 flex flex-col gap-2">
                     {messages.map((message) => (
                        <span
                           key={message.id}
                           className={`px-3 py-2 rounded font-semibold max-w-[70%] break-words ${
                              message.sender === 'user'
                                 ? 'self-end bg-white text-black'
                                 : 'self-start bg-white text-black'
                           }`}
                        >
                           {message.text}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
            <div className="flex mt-3 mx-2 w-full gap-6 items-center">
               <div className="w-3/4">
                  <Input placeholder="Type a message..." reference={inputRef} />
               </div>
               <div>
                  <Button title="Send" variant="small" onClick={sendMessage} />
               </div>
            </div>
         </div>
      </div>
   )
}

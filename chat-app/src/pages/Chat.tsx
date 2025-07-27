import { Header } from '../components/Header'
import { useEffect, useRef, useState } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useWebSocket } from '../components/WebSocketContext'

export const Chat = () => {
   const [userMessages, setUserMessages] = useState<string[]>([])
   const [receivedMessages, setReceivedMessages] = useState<string[]>([])
   const inputRef = useRef<HTMLInputElement>(null)
   const socket = useWebSocket()
   const roomId = localStorage.getItem('roomId')
   useEffect(() => {
      if (!socket) return

      socket.onmessage = (event) => {
         console.log('Received message')
         const message = event.data
         setReceivedMessages((prev) => [...prev, message])
      }
   }, [socket])
   const sendMessage = () => {
      socket?.send(
         JSON.stringify({
            type: 'chat',
            payload: {
               message: inputRef.current?.value,
            },
         })
      )
      if (inputRef.current?.value) {
         setUserMessages([...userMessages, inputRef.current?.value])
      }

      if (inputRef.current) {
         inputRef.current.value = ' '
      }
   }

   return (
      <div className="flex h-fit  text-white w-full justify-center">
         <div className="border border-gray-700 w-xl p-5 rounded-xl shadow-md mt-15 h-screen ">
            <div className="flex flex-col ">
               <Header />
            </div>
            <div className="flex justify-between py-2.5 bg-[#272726] rounded-md mt-3 mx-2">
               <div className="mx-2.5 text-gray-300 font-semibold text-base flex">
                  Room Code: <h1 className="ml-2">{roomId}</h1>
               </div>
               <div className="mx-2.5 text-md">Users: 1/2</div>
            </div>
            <div className="flex justify-center items-center">
               <div className="w-full border border-gray-700 h-96 mt-5 rounded-md mx-2 p-2 flex justify-end">
                  <div className="mt-2 flex flex-col gap-2">
                     {userMessages.map((message) => (
                        <span className="bg-white px-3 py-2 text-black rounded font-semibold">
                           {message}
                        </span>
                     ))}
                  </div>
                  <div className="mt-2 flex flex-col gap-2">
                     {receivedMessages.map((message) => (
                        <span className="bg-white px-3 py-2 text-black rounded font-semibold">
                           {message}
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

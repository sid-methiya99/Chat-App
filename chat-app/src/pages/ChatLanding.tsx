import { useRef, useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { roomId } from '../utils/generateRoomId'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useWebSocket } from '../components/WebSocketContext'

export const ChatLanding = () => {
   const [createRoom, setCreateRoom] = useState(false)
   const roomRef = useRef<HTMLInputElement>(null)
   const navigate = useNavigate()
   const socket = useWebSocket()

   const handleRoomJoin = () => {
      const enteredRoomId = roomRef.current?.value
      if (!enteredRoomId) {
         alert('Please enter room Id')
      } else if (enteredRoomId.length < 6) {
         alert('Please enter correct room Id with 6 digits')
      }

      localStorage.setItem('roomId', enteredRoomId || '')
      socket?.send(
         JSON.stringify({
            type: 'join',
            payload: {
               roomId: localStorage.getItem('roomId'),
            },
         })
      )
      navigate('/chat')
   }
   return (
      <div className="flex h-screen text-white w-full items-center justify-center">
         <div className="border border-gray-700 w-2xl p-5 rounded-xl shadow-md">
            <div className="flex flex-col">
               <Header />
            </div>

            <div className="mt-5 px-2">
               <Button
                  title="Create New Room"
                  variant="large"
                  onClick={() => {
                     setCreateRoom(true)
                  }}
               />
            </div>

            <div className="mt-3 px-2 flex gap-4">
               <div className="w-3/4">
                  <Input placeholder="Enter Room Code" reference={roomRef} />
               </div>
               <div>
                  <Button
                     title="Join Room"
                     variant="small"
                     onClick={handleRoomJoin}
                  />
               </div>
            </div>

            {createRoom && (
               <div className="mt-3 flex py-7 bg-[#272726] rounded mx-2">
                  <div className="flex flex-col justify-center items-center w-full gap-2 ">
                     <h1 className="text-gray-300 font-bold">
                        Share this code with your friend
                     </h1>
                     <h1 className="text-xl font-extrabold">{roomId}</h1>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

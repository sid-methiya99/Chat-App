import { Button } from './components/Button'
import ChatIcon from './components/icons/ChatIcon'
import { Input } from './components/Input'

function App() {
   return (
      <div className="flex h-screen text-white bg-black w-full items-center justify-center">
         <div className="border border-gray-700 w-2xl p-5 rounded-xl shadow-md">
            <div className="flex flex-col">
               <div className="flex px-2 gap-2 items-center">
                  <ChatIcon />
                  <h1 className="text-2xl text-white font-bold">
                     Real Time Chat
                  </h1>
               </div>
               <div className="pl-3 mt-1">
                  <p className="text-zinc-100 font-light tracking-widest">
                     temporary room that expires after all users exits
                  </p>
               </div>
            </div>

            <div className="mt-5 px-2">
               <Button title="Create New Room" variant="large" />
            </div>

            <div className="mt-4 px-2">
               <Input placeholder="Enter your name" />
            </div>
            <div className="mt-3 px-2 flex gap-4">
               <div className="w-3/4">
                  <Input placeholder="Enter Room Code" />
               </div>
               <div>
                  <Button title="Join Room" variant="small" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default App

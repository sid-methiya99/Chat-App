import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChatLanding } from './pages/ChatLanding'
import { Chat } from './pages/Chat'
import { SocketProvider } from '../src/components/WebSocketContext.tsx'

function App() {
   return (
      <SocketProvider>
         <div className="bg-black">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<ChatLanding />} />
                  <Route path="/chat" element={<Chat />} />
               </Routes>
            </BrowserRouter>
         </div>
      </SocketProvider>
   )
}

export default App

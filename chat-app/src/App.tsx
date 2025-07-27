import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChatLanding } from './pages/ChatLanding'
import { Chat } from './pages/Chat'

function App() {
   return (
      <div className="flex h-screen text-white bg-black w-full items-center justify-center">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<ChatLanding />} />
               <Route path="/chat" element={<Chat />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App

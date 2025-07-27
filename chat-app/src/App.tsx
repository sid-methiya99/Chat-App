import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChatLanding } from './pages/ChatLanding'
import { Chat } from './pages/Chat'

function App() {
   return (
      <div className="bg-black">
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

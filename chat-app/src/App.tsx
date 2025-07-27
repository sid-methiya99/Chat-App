import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChatLanding } from './pages/ChatLanding'

function App() {
   return (
      <div className="flex h-screen text-white bg-black w-full items-center justify-center">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<ChatLanding />} />
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App

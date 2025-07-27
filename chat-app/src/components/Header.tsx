import ChatIcon from './icons/ChatIcon'

export const Header = () => {
   return (
      <div>
         <div className="flex px-2 gap-2 items-center">
            <ChatIcon />
            <p
               className="text-2xl text-white font-extrabold "
               style={{
                  wordSpacing: '0.50rem',
               }}
            >
               Real Time Chat
            </p>
         </div>
         <div className="pl-3 mt-1">
            <p
               className="text-zinc-400 font-semibold text-base"
               style={{
                  wordSpacing: '0.30rem',
               }}
            >
               temporary room that expires after all users exits
            </p>
         </div>
      </div>
   )
}

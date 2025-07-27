interface InputProps {
   placeholder: string
}
export const Input = ({ placeholder }: InputProps) => {
   return (
      <input
         placeholder={placeholder}
         className="w-full text-gray-100 border border-gray-700 shadow-md rounded-md px-2 py-2.5"
      />
   )
}

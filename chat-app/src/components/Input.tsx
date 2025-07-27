import type React from 'react'

interface InputProps {
   placeholder: string
   reference: React.Ref<HTMLInputElement>
}
export const Input = ({ placeholder, reference }: InputProps) => {
   return (
      <input
         placeholder={placeholder}
         className="w-full text-gray-100 border border-gray-700 shadow-md rounded-md px-2 py-2.5"
         required
         ref={reference}
      />
   )
}

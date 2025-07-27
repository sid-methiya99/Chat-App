type Variant = 'small' | 'large'
interface ButtonProps {
   variant: Variant
   title: string
   onClick?: (e: any) => any
}
const variantType: Record<Variant, string> = {
   small: 'bg-white text-neutral-700 w-full text-center px-7 py-2.5 rounded-md font-semibold cursor-pointer',
   large: 'bg-white text-neutral-700 w-full text-center px-3 py-2.5 border font-semibold text-xl rounded-md cursor-pointer',
}
export const Button = ({ title, variant }: ButtonProps) => {
   return <button className={variantType[variant]}>{title}</button>
}

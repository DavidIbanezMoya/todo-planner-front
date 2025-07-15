import { ReactNode } from "react"

type H1Props = {
    children: ReactNode
}
export default function H1({children}:H1Props) {
  return (
    <p className="font-black text-lg p-4">{children}</p>
        
  )
}

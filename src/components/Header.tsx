import { ReactNode } from "react"


type HeaderProps = {
    children: ReactNode 
}

export default function Header({children}:HeaderProps) {
  return (
    <div>
        <header className="bg-fuchsia-400 flex w-1/3 float-left clip-diagonal">{children}</header>
    </div>
  )
}

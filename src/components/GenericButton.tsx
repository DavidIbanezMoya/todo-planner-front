import {ReactNode} from "react"

type HeaderProps = {
    children: ReactNode
}

export default function GenericButton({children}:HeaderProps) {
    return(
        <div>
            <button className="bg-green-400 ring-2 ring-fuchsia-300 hover:bg-green-500 focus:ring-4 focus:ring-fuchsia-400">{children}</button>
        </div>

    )
}
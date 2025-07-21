
import {ReactNode} from "react";

type HeaderProps = {
    children: ReactNode
}

export default function MainContainer ({children}:HeaderProps) {
    return (
        <div className="h-screen w-screen flex flex-col min-h-screen min-w-screen">
            {children}
        </div>
    )
}
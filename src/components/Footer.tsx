//import{ReactNode} from "react";
import H1 from "@/components/H1";

/*type HeaderProps = {
    children: ReactNode
}*/

export default function Footer() {
    return(
        <footer className="w-full bg-blue-900 flex">
            <div className="flex-1/3 self-center">
                <H1>About Me!</H1>
            </div>
            
            <div className="flex-1/3 self-center">
                <img src="/public/linkedin_logo.jpg" alt="LinkedIn_Logo"/>
            LinkedIn
            </div>
            <div className="flex-1/3 self-center">
                <img src="/public/GitHub_Logo.png" alt="GitHub_Logo"/>
            GitHub
            </div>

        </footer>
    )
}

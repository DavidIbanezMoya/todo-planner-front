//import{ReactNode} from "react";
import H1 from "@/components/H1";

/*type HeaderProps = {
    children: ReactNode
}*/

const Footer = () => {
    return(
        <footer className="w-full bg-black flex">
            <div className="basis-1/3 self-center text-white">
                <H1>About Me!</H1>
            </div>
            <div className="basis-1/3 flex text-white text-center items-center">
                <a href="https://www.linkedin.com/in/david-ibanez-moya" target="_blank">
                    <img src="/linkedIn.png" alt="LinkedIn_Logo" width="80px" height="80px"/>
                </a>
                <p>My LinkedIn</p>
            </div>
            <div className="basis-1/3 flex text-white items-center">
                <a href="https://github.com/DavidIbanezMoya" target="_blank">
                    <img src="/GitHub.png" alt="GitHub_Logo" width="80px" height="80px"/>
                </a>
            <p>My personal GitHub!</p>
            </div>

        </footer>
    )
}

export default Footer;
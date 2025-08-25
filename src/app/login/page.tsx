import H1 from "@/components/H1";
import MainContainer from "@/components/MainContainer";
import LogIn from "@/components/LogIn";
import Footer from "@/components/Footer";

export default function Login() {
    return(
        <MainContainer>
            <div className="flex flex-1">
                <div className="grid grid-cols-9 gap-2 grid-rows-6 place-content-center">
                    <div className="col-start-4 place-content-end">
                        <H1>To Do List</H1>
                    </div>
                    <div className="col-span-3 row-span-4 col-start-4 row-start-2">
                        <LogIn/>
                    </div>
                </div>

            </div>
            <Footer/>
        </MainContainer>
    )
}
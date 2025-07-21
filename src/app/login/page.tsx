import H1 from "@/components/H1";
import GenericButton from "@/components/GenericButton";
import MainContainer from "@/components/MainContainer";
import Input from "@/components/Input";
import Footer from "@/components/Footer";

export default function Login() {
    return(
        <MainContainer>
            <div className="flex flex-1">
                <div className="text-center">
                    <H1>To Do List</H1>
                </div>
                <p>Welcome to the app, please log in or register</p>
                <div>
                    <Input></Input>
                </div>
                <div>
                    <GenericButton>Login</GenericButton>
                </div>
            </div>
            <Footer></Footer>
        </MainContainer>
    )
}
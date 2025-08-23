import GenericButton from "@/components/GenericButton";
import Input from "@/components/Input";
import Footer from "./Footer";

/**In the LogInForm we will have all the basic elements that will be part of the Form
 * such as the common Inputs to where a User can place its data, alongside with a 
 * Button to send the data and one to restablish the password of the user by sending a
 * confirmation Email.
 */
export default function Forms () {
    return (
        <div className="bg-gray-300">
                <p>Welcome to the app, please log in or register</p>
                <div>
                    <p className="">Username</p>
                    <Input/>
                </div>
                <div>
                    <p className="">Password</p>
                    <Input/>
                </div>
                <div>
                    <GenericButton>Login</GenericButton>
                </div>
                <p className="underline italic">I forgot my password</p>
        </div>

    )
}


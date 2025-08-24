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
        <div className="bg-gray-300 border-2 border-black p-2 min-h-full min-w-full">
                <p>Welcome to the app, please log in or register</p>
                <div className="py-2">
                    <p className="text-xs">Username</p>
                    <Input/>
                </div>
                <div className="py-2">
                    <p className="text-xs">Password</p>
                    <Input/>
                </div>
                <div className="flex justify-center m-10">
                    <GenericButton>Login</GenericButton>
                </div>
                <div className="flex justify-center m-5">
                    <p className="underline italic">I forgot my password</p>
                </div>
        </div>

    )
}


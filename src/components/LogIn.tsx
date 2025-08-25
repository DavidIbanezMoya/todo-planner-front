import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function LogIn () {
    return (
        <Card>
            <CardHeader>
                <p>Log in / Register</p>
            </CardHeader>
            <CardContent>
                <p>Your email</p>
                <Input type="email" placeholder="Email"></Input>
                <p>Your password</p>
                <Input type="password" placeholder="Password"></Input>
            </CardContent>
            <CardFooter>
                <Button type="submit">Login</Button>
            </CardFooter>
        </Card>
    )
}
    

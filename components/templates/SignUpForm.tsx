import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@radix-ui/react-separator"
import { CheckboxDemo } from "../modules/CheckBoxes"
import { ComboboxPopover } from "../modules/ComboBox"

export function SignUpForm() {
    return (
        <Card className="w-full max-w-sm  backdrop-blur-sm">

            <CardHeader className="w-full">
                <CardTitle className="w-full font-black p-2.5 rounded-md">Login to your account</CardTitle>
                <CardAction>
                    <Button variant="default" className="p-3 font-bold">Sign Up</Button>
                </CardAction>
                <CardDescription className="w-full whitespace-nowrap tracking-tighter">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>

            <Separator className="w-full  h-px bg-foreground" />

            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline"   >          Forgot your password?      </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <div>
                            <ComboboxPopover />
                        </div>
                    </div>
                </form>
            </CardContent>


            <div className="p-4">
                <CheckboxDemo />
            </div>

            <CardFooter className="flex-col gap-2">
                <Button type="submit" variant="default" className="w-full">Login</Button>
                <Button variant="default" className="w-full">Login with Google</Button>
            </CardFooter>

        </Card>
    )
}

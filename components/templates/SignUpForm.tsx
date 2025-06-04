import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@radix-ui/react-separator"

export function SignUpForm() {
    return (
        <Card className="w-full max-w-sm bg-white/5 backdrop-blur-sm">
            <CardHeader className="w-full">
                <CardTitle className="w-full font-black bg-white/30 text-white p-2.5 rounded-md">Login to your account</CardTitle>
                <CardAction>
                    <Button variant="submit" className="p-3 font-bold">Sign Up</Button>
                </CardAction>
                <CardDescription className="w-full  text-neutral-300 whitespace-nowrap tracking-tighter">
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <Separator className="w-full bg-white h-px" />

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
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" variant="submit" className="w-full">Login</Button>
                <Button variant="submitSecondary" className="w-full">Login with Google</Button>
            </CardFooter>
        </Card>
    )
}

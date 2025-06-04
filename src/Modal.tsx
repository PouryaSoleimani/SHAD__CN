
import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import FormComponent2 from "./FormComponent2"



const Modal = () => {

    const [open, setOpen] = React.useState(false)


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default" className="border text-3xl font-bold !p-10">ورود</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg sm:p-8 bg-zinc-900 z-50 !backdrop-blur-2xl">
                <DialogHeader>
                    <DialogTitle>ورود به حساب کاربری</DialogTitle>
                    <DialogDescription>لطفاً اطلاعات خود را وارد کنید</DialogDescription>
                </DialogHeader>
                <FormComponent2 />
            </DialogContent>
        </Dialog>
    )
}

export default Modal
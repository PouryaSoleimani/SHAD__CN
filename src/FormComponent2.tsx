import React from 'react'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Button } from './components/ui/button'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTheme } from "next-themes"
import { toast } from 'sonner';

const FormComponent2 = () => {

    const formSchema = z.object({
        firstname: z.string().min(1, "REQUIRED"),
        lastname: z.string().min(1, "REQUIRED"),
        nickname: z.string().min(1, "REQUIRED"),
    })

    const methods = useForm({
        resolver: zodResolver(formSchema)
    })

    function submitHandler(data) {
        console.info("DATA ===> ", data);
        methods.reset();
        sonnerHandler();
    }
    const { theme = "system" } = useTheme()

    function sonnerHandler() {

        const myPromise = new Promise<{ name: string }>((resolve) => {
            setTimeout(() => {
                resolve({ name: 'My toast' });
            }, 3000);
        });
        toast.promise(myPromise, {
            loading: 'Loading...',
            closeButton: true,
            position: theme === "dark" ? "top-right" : "top-left",
            success: (data: { name: string }) => {
                return `${data.name} toast has been added`;
            },
            error: 'Error',
        });
    }
    return (
        <div>
            <form onSubmit={methods.handleSubmit(submitHandler)} className='border px-16 space-y-2  pb-5 rounded-lg'>
                <legend className='-translate-y-4 text-center bg-zinc-800 p-2 rounded-lg'>USER NAME FORM</legend>
                <Input {...methods.register("firstname")} placeholder='First Name ...' className='my-2' />
                {methods.formState.errors.firstname && <span className='text-red-800 text-xs tracking-tight'>{methods.formState.errors.firstname.message}</span>}
                <Input {...methods.register("lastname")} placeholder='Last Name ...' className='my-2' />
                {methods.formState.errors.lastname && <span className='text-red-800 text-xs tracking-tight'>{methods.formState.errors.lastname.message}</span>}
                <Input {...methods.register("nickname")} placeholder='Nick Name ...' className='my-2' />
                {methods.formState.errors.nickname && <span className='text-red-800 text-xs tracking-tight '>{methods.formState.errors.nickname.message}</span>}
                <Button variant='submit' type='submit' className='mt-6'>SEND</Button>
                <Button variant='submit' type='button' className='mt-6' onClick={sonnerHandler}>SONNER</Button>
            </form>
        </div>
    )
}

export default FormComponent2

import React from 'react'
import { Input } from './components/ui/input'
import { useForm } from 'react-hook-form'
import { Label } from './components/ui/label'

const FormComponent2 = () => {
    const methods = useForm()

    function submitHandler(data) {
        console.info("DATA ===> ", data)
    }

    return (
        <div>
            <form onSubmit={methods.handleSubmit(submitHandler)}>
                <Label htmlFor="firstname">First Name</Label>
                <Input {...methods.register("firstname")} />
                <Label htmlFor="lastname">Last Name</Label>
                <Input {...methods.register("lastname")} />
                <Label htmlFor="nickname">Nick Name</Label>
                <Input {...methods.register("nickname")} />
            </form>
        </div>
    )
}

export default FormComponent2
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormComponent = () => {
    const methods = useForm()

    const formSchema = z.object({
        firstname: z.string().min(2, { message: "firstname must be at least 2 characters.", }),
        lastname: z.string().min(2, { message: "lastname must be at least 2 characters.", }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        methods.reset()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-4 p-6 rounded-lg">
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                        <FormItem>
                            <legend className='text-center border-b font-black'>USER NAME FORM </legend>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Username ..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>LAST NAME</FormLabel>
                            <FormControl>
                                <Input placeholder="Username ..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant='submit'>Submit</Button>
            </form>
        </Form>
    )
}

export default FormComponent
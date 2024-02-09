"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(16)
})

export default function LoginForm({admin}:{admin:object}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password:""
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>){
        sessionStorage.setItem('adminData', JSON.stringify(values))
        form.reset()
        }
  return (
    <>
    <Form {...form }>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full h-1/2 p-6 md:p-[2rem] md:w-2/5" >
        <p className="mb-6 text-2xl font-bold md:mb-10 md:text-3xl ">
        Verify your identity
        </p>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full my-5">Login</Button>
        </form>
    </Form>

    </>
  )
}

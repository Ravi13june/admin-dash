"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@radix-ui/react-checkbox";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Login to Account</h1>
        <p className="text-gray-500 fw-600">Please enter your email and password to continue</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="block mb-2">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="w-full"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Forget Password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember Password
          </Label>
        </div>

     
      </form>
      <Button className="w-full"  onClick={() => router.push('/dashboard')}>
          Sign In
        </Button>
    </div>
  
  </div>
  );
}

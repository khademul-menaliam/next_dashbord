"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    if (email === "admin@gmail.com" && password === "12345678") {
      router.push("/dashboard");
    } else {
      setErrorMessage("Invalid credentials. Try admin@gmail.com / 12345678");
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0 bg-white/10 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-lg"></div>
        <CardHeader className="space-y-1 text-center relative z-10">
          <CardTitle className="text-3xl font-bold text-white mb-2">Welcome back</CardTitle>
          <CardDescription className="text-gray-200">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-200">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="h-12 pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-purple-400/20"
                  defaultValue="admin@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-200">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="h-12 pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-purple-400/20"
                  defaultValue="12345678"
                  required
                />
                <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-300" />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02]"
            >
              Sign In
            </Button>
            {errorMessage ? (
              <p className="text-sm text-red-200 text-center">{errorMessage}</p>
            ) : null}
          </form>
          <div className="text-center">
            <Link 
              href="/forgot-password" 
              className="text-sm text-purple-300 hover:text-purple-200 font-medium transition-colors hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

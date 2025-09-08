import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";

export default function VerifyCodePage() {
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
          <div className="flex items-center justify-center mb-4">
            <Link 
              href="/forgot-password" 
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </div>
          <CardTitle className="text-3xl font-bold text-white mb-2">Verify Code</CardTitle>
          <CardDescription className="text-gray-200">
            Enter the 6-digit code sent to your email address
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="code" className="text-sm font-medium text-gray-200">
                Verification Code
              </Label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="code"
                  type="text"
                  placeholder="000000"
                  className="h-12 pl-10 text-center text-lg tracking-widest font-mono bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-purple-400 focus:ring-purple-400/20"
                  maxLength={6}
                  required
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              Verify Code
            </Button>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-300">
              Didn&apos;t receive the code?{" "}
              <Link 
                href="/forgot-password" 
                className="text-purple-300 hover:text-purple-200 font-medium transition-colors hover:underline"
              >
                Resend
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

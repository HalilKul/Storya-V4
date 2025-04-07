"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({
    message: "Geçerli bir e-posta adresi giriniz.",
  }),
  password: z.string().min(6, {
    message: "Şifre en az 6 karakter olmalıdır.",
  }),
  rememberMe: z.boolean().optional(),
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      // API'ye giriş isteği gönderilebilir
      console.log(values);
      
      // Başarılı giriş simülasyonu
      setTimeout(() => {
        toast.success("Giriş başarılı! Yönlendiriliyorsunuz...");
        router.push("/");
      }, 1500);
      
    } catch (error) {
      toast.error("Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 px-4 py-10 sm:px-6 sm:py-16 md:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="border-none shadow-xl backdrop-blur-sm bg-white/90 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <CardHeader className="space-y-1 px-4 sm:px-6 pt-6">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="flex justify-center mb-4"
            >
              <Link href="/">
                <Image 
                  src="/images/SAYDAM_LOGO.png" 
                  alt="Storya Logo" 
                  width={180} 
                  height={60} 
                  className="h-auto mb-3"
                  loading="eager"
                  priority
                  onError={(e) => {
                    // Logo yüklenemezse alternatif logo dene
                    const imgElement = e.currentTarget;
                    imgElement.src = "/images/KARE_SAYDAM.png";
                  }}
                />
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <CardTitle className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Giriş Yap</CardTitle>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CardDescription className="text-center text-sm sm:text-base">
                Hesabınıza erişmek için giriş yapın
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <div className="grid grid-cols-2 gap-2 mb-4">
                <motion.div variants={item}>
                  <Button variant="outline" className="w-full h-10 flex items-center justify-center gap-2 text-xs sm:text-sm" onClick={() => toast.info("Google ile giriş yakında aktif olacak")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span className="text-xs sm:text-sm">Google</span>
                  </Button>
                </motion.div>
                <motion.div variants={item}>
                  <Button variant="outline" className="w-full h-10 flex items-center justify-center gap-2 text-xs sm:text-sm" onClick={() => toast.info("Apple ile giriş yakında aktif olacak")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="black">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.5-1.09-.4-2.06-.42-3.2 0-1.37.52-2.1.3-3.08-.5C3.7 16.5 3.75 9.5 7.52 9.1c1.58-.17 2.5.58 3.35.58.85 0 2.37-.8 3.73-.55 2.4.43 3.35 2.9 3.33 2.94-2.98 1.75-2.5 5.28.12 6.96-.52.73-1.13 1.5-2 2.25zM15.25 6.5c-1.5.54-2.7-.05-3.38-.05-.85 0-2.1.6-3.23.07C6.77 6.05 4.3 3.32 4.3 3.32c0-.02 2.52-2.6 5.38-1.52.6.25 1.13.6 1.57 1.02.44.42.8.92 1.05 1.47.25.55.38 1.15.38 1.75 0 .6-.13 1.18-.38 1.73-.25.55-.6 1.05-1.05 1.47"/>
                    </svg>
                    <span className="text-xs sm:text-sm">Apple</span>
                  </Button>
                </motion.div>
              </div>

              <div className="relative my-4">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-500">
                  veya
                </span>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <motion.div variants={item}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">E-posta</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                placeholder="ornek@mail.com" 
                                {...field} 
                                disabled={isLoading} 
                                className="pl-10 bg-white/50 border-gray-200 focus:bg-white text-sm sm:text-base h-10 sm:h-11"
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={item}>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between">
                            <FormLabel className="text-sm font-medium">Şifre</FormLabel>
                            <Link href="#" className="text-xs font-medium text-primary hover:underline">
                              Şifremi Unuttum
                            </Link>
                          </div>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="******" 
                                {...field} 
                                disabled={isLoading} 
                                className="pl-10 pr-10 bg-white/50 border-gray-200 focus:bg-white text-sm sm:text-base h-10 sm:h-11"
                              />
                              <button 
                                type="button"
                                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={item}>
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex items-start space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              disabled={isLoading}
                              className="mt-1 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-xs sm:text-sm font-normal">
                              Beni hatırla
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={item} className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all h-10 sm:h-11 text-sm sm:text-base font-medium"
                      disabled={isLoading}
                    >
                      {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 pt-2 pb-6 px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5 }}
            >
              <div className="text-xs sm:text-sm text-center text-gray-500">
                Henüz bir hesabınız yok mu?{" "}
                <Link href="/auth/register" className="font-medium text-primary hover:underline">
                  Üye Ol
                </Link>
              </div>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
} 
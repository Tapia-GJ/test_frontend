import { ArrobaIcon } from "@/components/icons/ArrobaIcon";
import { LockIcon } from "@/components/icons/LockIcon";
import { Button } from '@/components/Button';
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router";
import { loginRequest } from "@/services/authService";
import { type LoginFormData, loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export default function LoginPage() {
  const navigate = useNavigate()
  const setAuth = useAuthStore((s) => s.setAuth)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await loginRequest(data.email, data.password)
      setAuth(res.user, res.token)
      navigate("/users", { replace: true })
    } catch {
      setError("root", { message: "Email o contraseña incorrectos" })
    }
  }
  return (<>
    <div className="h-screen flex">
      <div className="flex w-full justify-center items-center bg-white space-y-8">
        <div className="w-2xl px-8 md:px-32 lg:px-24">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-md shadow-2xl p-5">
            <h1 className="text-gray-800 font-bold text-2xl mb-8">Inicia sesión</h1>
            {errors.root && (
              <p className="mb-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600 text-center">
                {errors.root.message}
              </p>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <ArrobaIcon className="h-5 w-5 text-gray-400" />
              <input
                id="email"
                className=" pl-2 w-full outline-none border-none"
                type="email"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-6">
              <LockIcon className="h-5 w-5 text-gray-400" />
              <input
                className="pl-2 w-full outline-none border-none"
                type="password"
                id="password"
                placeholder="Password"
                {...register("password")}
              />

            </div>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
            <Button type="submit" className=" mt-10 w-full">Login</Button>

          </form>
        </div>

      </div>
    </div>
  </>)
    ;
}

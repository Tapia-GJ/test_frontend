import { useNavigate } from 'react-router';
import { createUserRequest } from '@/services/user.service';
import { Button } from '@/components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserSchema, type UserFormData } from '@/schemas/userSchema';
import { useForm } from 'react-hook-form';

export default function NewUserPage() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<UserFormData>({
        resolver: zodResolver(CreateUserSchema),
    });

    const onSubmit = async (data: UserFormData) => {
        try {
            await createUserRequest(data);
            navigate('/users');
        } catch (err) {
            console.error(err);
            setError("root", { message: "Error al crear el usuario" });
        }
    };


    return (
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-2xl">
            {errors.root && (
                <p className="mb-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600 text-center">
                    {errors.root.message}
                </p>
            )}

            <h1 className="text-2xl md:text-4xl font-medium mb-6">Crear Usuario</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                )}

                <div>
                    <label htmlFor="age" className="block text-sm font-medium mb-1 text-foreground">Edad</label>
                    <input
                        id="age"
                        type="number"
                        {...register("age", { valueAsNumber: true })}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {errors.age && (
                    <p className="text-xs text-red-500">{errors.age.message}</p>
                )}

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">Correo Electrónico</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                )}

                <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1 text-foreground">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        {...register("password")}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {errors.password && (
                    <p className="text-xs text-red-500">{errors.password.message}</p>
                )}


                <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-1 text-foreground">Rol</label>
                    <select
                        id="role"
                        {...register("role")}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="USER">Usuario</option>
                        <option value="ADMIN">Administrador</option>
                    </select>
                </div>
                {errors.role && (
                    <p className="text-xs text-red-500">{errors.role.message}</p>
                )}

                <div className="mt-4 flex gap-4">
                    <Button type="button" onClick={() => navigate('/users')} className="bg-muted hover:bg-muted/80 text-foreground w-full">
                        Cancelar
                    </Button>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                        Crear Usuario
                    </Button>
                </div>
            </form>
        </div>
    )
}

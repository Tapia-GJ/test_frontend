import { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/authStore';
import { getUserByIdRequest } from '@/services/user.service';
import { type User } from '@/types/user';

export default function ProfilePage() {
    const userId = useAuthStore((state) => state.user?.id);
    const [profile, setProfile] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;

        getUserByIdRequest(userId)
            .then((data) => {
                setProfile(data);
                setError(null);
            })
            .catch((err) => {
                console.error(err);
                setError("Error al cargar la información del perfil.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId]);

    if (loading) {
        return (
            <div className="flex flex-col px-4 py-8 h-screen container items-center justify-center">
                <p className="text-muted-foreground">Cargando perfil...</p>
            </div>
        );
    }

    if (error || !profile) {
        return (
            <div className="flex flex-col px-4 py-8 h-screen container items-center justify-center">
                <p className="text-red-500">{error || "No se pudo encontrar el perfil."}</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col px-4 py-8 h-screen container">
                <div className="relative flex flex-col items-center w-175 max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 bg-card border border-border rounded-xl p-6 shadow-sm gap-4">
                    <div className="mt-2 mb-8 w-full">
                        <h4 className="px-2 text-xl font-bold text-gray-900">
                            Información del Perfil
                        </h4>
                        <p className="mt-2 px-2 text-base text-gray-600">
                            A continuación, puedes visualizar los detalles de tu cuenta registrados en el sistema.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 w-full">
                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-600">Nombre Completo</p>
                            <p className="text-base font-medium text-gray-900">
                                {profile.name}
                            </p>
                        </div>

                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-600">Correo Electrónico</p>
                            <p className="text-base font-medium text-gray-900">
                                {profile.email}
                            </p>
                        </div>

                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-600">Edad</p>
                            <p className="text-base font-medium text-gray-900">
                                {profile.age ? `${profile.age} años` : "No especificada"}
                            </p>
                        </div>

                        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 border border-gray-100 shadow-sm">
                            <p className="text-sm text-gray-600">Rol en el Sistema</p>
                            <p className="text-base font-medium text-gray-900">
                                <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground">
                                    {profile.role}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

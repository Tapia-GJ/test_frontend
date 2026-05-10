import { useEffect, useState } from 'react';
import Table from '@/components/Table';
import { getUsersRequest } from '@/services/user.service';
import { type User } from '@/types/user';
import { useNavigate } from 'react-router';
import { Button } from '../../components/Button';
import { useAuthStore } from '@/store/authStore';

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { user } = useAuthStore();

    useEffect(() => {
        getUsersRequest().then((data) => {
            setUsers(data);
            setError(null);
        }).catch((err) => {
            console.error(err);
            setError("Ocurrió un error al cargar la lista de usuarios. Por favor, intenta nuevamente.");
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    const handleEdit = (id: number) => {
        navigate(`/users/${id}/edit`);
    };

    const handleDelete = (id: number) => {
        console.log("Eliminar usuario con id:", id);
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="md:grid-cols-2 md:grid items-center">
                    <div>
                        <h1 className='text-2xl md:text-5xl font-medium'>Lista de usuarios</h1>
                        <p className="mt-2 text-muted-foreground">
                            Bienvenido a la página de usuarios. Aquí puedes ver la lista de todos los usuarios registrados en el sistema.
                        </p>
                    </div>

                    <div className="flex md:justify-end mt-4 md:mt-0">
                        {user?.role !== 'USER' && (
                            <Button 
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 disabled:opacity-50 items-center justify-center" 
                                onClick={() => navigate('/users/new')}
                            >
                                Nuevo Usuario
                            </Button>
                        )}
                    </div>
                </div>

                <div className="mt-8">
                    {loading ? (
                        <div className="p-8 text-center text-muted-foreground">
                            Cargando usuarios...
                        </div>
                    ) : error ? (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200">
                            {error}
                        </div>
                    ) : users.length === 0 ? (
                        <div className="p-8 text-center text-muted-foreground border border-dashed border-border rounded-xl">
                            No hay usuarios registrados en el sistema.
                        </div>
                    ) : (
                        <Table data={users} onEdit={handleEdit} onDelete={handleDelete} />
                    )}
                </div>
            </div>
        </>
    )
}

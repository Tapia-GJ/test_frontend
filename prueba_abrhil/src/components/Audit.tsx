import { useEffect, useState } from 'react';
import { getAuditsRequest } from '@/services/audit.service';
import { type Audit } from '@/types/audit';

export default function Audit() {
    const [audits, setAudits] = useState<Audit[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getAuditsRequest().then((audits) => {
            setAudits(audits);
            setLoading(false);
        }).catch((error) => {
            console.error(error);
            setError("Ocurrió un error al cargar la lista de usuarios. Por favor, intenta nuevamente.");
            setLoading(false);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <>
            <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <h1 className='text-2xl md:text-5xl font-medium'>Auditoría</h1>
                <p className="mt-2 text-muted-foreground">
                    Bienvenido a la página de auditoría. Aquí puedes ver la lista de todos los registros de auditoría registrados en el sistema.
                </p>
                <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden mt-8">
                    {loading ? (
                        <div className="p-8 text-center text-muted-foreground">
                            Cargando usuarios...
                        </div>
                    ) : error ? (
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200">
                            {error}
                        </div>
                    ) : audits.length === 0 ? (
                        <div className="p-8 text-center text-muted-foreground border border-dashed border-border rounded-xl">
                            No hay usuarios registrados en el sistema.
                        </div>
                    ) : (
                        <table className="w-full text-sm">

                            <thead>
                                <tr className="border-b border-border bg-muted/50">
                                    <th className="w-12 px-4 py-3 text-left font-medium text-muted-foreground">
                                        #
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                                        Acción
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                                        Id del Registro
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                                        Responsable
                                    </th>
                                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                                        Fecha
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-border">
                                {audits.map((row) => (
                                    <tr
                                        key={row.id}
                                        className="transition-colors hover:bg-muted/40"
                                    >
                                        <td className="px-4 py-3 text-muted-foreground tabular-nums">
                                            {row.id}
                                        </td>
                                        <td className="px-4 py-3 font-medium text-foreground">
                                            {row.action}
                                        </td>
                                        <td className="px-4 py-3 text-foreground">
                                            {row.entityId}
                                        </td>
                                        <td className="px-4 py-3 text-foreground">
                                            <span>{row.actor.name}</span>
                                            <span className="text-muted-foreground text-sm">
                                                {" - " + row.actor.email}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-foreground">
                                            {new Date(row.createdAt).toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    )}
                </div>
            </div>
        </>
    )
}

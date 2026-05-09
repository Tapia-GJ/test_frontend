import { type User } from "@/types/user";
import { Button } from "@/components/Button";

interface TableProps {
    data: User[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function Table({ data, onEdit, onDelete }: TableProps) {
    return (
        <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <table className="w-full text-sm">

                <thead>
                    <tr className="border-b border-border bg-muted/50">
                        <th className="w-12 px-4 py-3 text-left font-medium text-muted-foreground">
                            #
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            Nombre
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            Correo
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            Edad
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                            Rol
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-border">
                    {data.map((row) => (
                        <tr
                            key={row.id}
                            className="transition-colors hover:bg-muted/40"
                        >
                            <td className="px-4 py-3 text-muted-foreground tabular-nums">
                                {row.id}
                            </td>
                            <td className="px-4 py-3 font-medium text-foreground">
                                {row.name}
                            </td>
                            <td className="px-4 py-3 text-foreground">
                                {row.email}
                            </td>
                            <td className="px-4 py-3 text-foreground">
                                {row.age ? row.age : "-"}
                            </td>
                            <td className="px-4 py-3">
                                <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground">
                                    {row.role}
                                </span>
                            </td>
                            <td>
                                <div className="flex gap-2 items-center justify-center">
                                    <Button onClick={() => onEdit(row.id)} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">Editar</Button>
                                    <Button onClick={() => onDelete(row.id)} className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center">Eliminar</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { AlertDialogDelete } from "@/components/AlertDialogDelete";
import { UpdateDialog } from "./UpdateDialog";
import { useState } from "react";
import { formatPhoneNumber } from "@/utils/functions";
import { Loan, Reader, Book } from "@/types";
import { ReturnBook } from "./ReturnBook";

export const getLoanColumns = (
    readers: Reader[],
    books: Book[],
): ColumnDef<Loan>[] => {
    return [
        {
            accessorKey: "loan_code",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Código
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                return <div className="ml-3 font-medium font-bold"># {row.getValue("loan_code")}</div>
            }
        },
        {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Nome
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                return <div className="ml-3 font-medium">{row.getValue("name")}</div>
            }
        },
        {
            accessorKey: "phone",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Telefone
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({row}) => {
                return formatPhoneNumber(row.getValue("phone"));
            },
        },
        {
            accessorKey: "book",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Livro
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                return <div className="ml-3 font-medium">{row.getValue("book")}</div>
            }
        },
        {
            accessorKey: "loan_date",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Retirada
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const formattedDate = new Date(row.getValue("loan_date") + 'T00:00:00').toLocaleDateString("pt-BR");
                return <div className="ml-2 font-medium">{formattedDate}</div>
            }
        },
        {
            accessorKey: "return_date",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Devolução
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const formattedDate = new Date(row.getValue("return_date") + 'T00:00:00').toLocaleDateString("pt-BR");
                return <div className="ml-2 font-medium">{formattedDate}</div>
            }
        },
        {
            accessorKey: "status",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => {
                const status: string = row.getValue("status");

                const statusMap: Record<string, { label: string; color: string }> = {
                    in_progress: { label: 'Em Andamento', color: 'bg-green-700' },
                    late: { label: 'Atrasado', color: 'bg-red-700' },
                    returned: { label: 'Devolvido', color: 'bg-purple-700' },
                };
    
                const statusInfo = statusMap[status] || statusMap.default;
    
                return  <div 
                        className={`inline-block px-2 py-1 rounded-full text-white text-sm font-medium ${statusInfo.color}`}>
                            {statusInfo.label}
                        </div>
            }
        },
        {
            header: "Ações",
            id: "actions",
            cell: ({ row }) => {
                const loan = row.original;
                const [isDialogOpen, setIsDialogOpen] = useState(false);
                const [returnOpen, setReturnOpen] = useState(false);
                return (
                    <div>
                        <UpdateDialog
                            loan={loan}
                            open={isDialogOpen}
                            setOpen={setIsDialogOpen}
                            readers={readers}
                            books={books}
                        />
                        <AlertDialogDelete
                            id={loan.id}
                            objectName={loan.loan_code}
                            deleteRoute="loans"
                        />
                        <ReturnBook
                            loan={loan}
                            open={returnOpen}
                            setOpen={setReturnOpen}
                        />
                    </div>
                );
            },
        },    
    ];
}

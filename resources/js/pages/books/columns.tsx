"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { AlertDialogDelete } from "@/components/AlertDialogDelete";
import { UpdateDialog } from "./UpdateDialog";
import { useState } from "react";
import { Book } from "@/types";

export const columns: ColumnDef<Book>[] = [
    {
        accessorKey: "inventory_number",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nº de Inventário
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return <div className="ml-3 font-medium"># {row.getValue("inventory_number")}</div>
        }
    },
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Título
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return <div className="ml-3 font-medium">{row.getValue("title")}</div>
        }
    },
    {
        accessorKey: "author",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Autor
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({row}) => {
            return <div className="ml-3 font-medium">{row.getValue("author")}</div>
        },
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
        cell: ({row}) => {
            const status: string = row.getValue("status");

            const statusMap: Record<string, { label: string; color: string }> = {
                available: { label: 'Disponível', color: 'bg-green-700' },
                unavailable: { label: 'Indisponível', color: 'bg-red-700' },
                default: { label: 'Emprestado', color: 'bg-purple-700' },
            };

            const statusInfo = statusMap[status] || statusMap.default;

            return  <div 
                    className={`inline-block px-2 py-1 rounded-full text-white text-sm font-medium ${statusInfo.color}`}>
                        {statusInfo.label}
                    </div>

        },
    },
    {
        header: "Ações",
        id: "actions",
        cell: ({ row }) => {
            const book = row.original;
            const [isDialogOpen, setIsDialogOpen] = useState(false);
            return (
                <div>
                    <UpdateDialog
                        book={book}
                        open={isDialogOpen}
                        setOpen={setIsDialogOpen}
                    />
                    <AlertDialogDelete id={book.id} objectName={book.title} deleteRoute="books"/>
                </div>
            );
        },
    },
];

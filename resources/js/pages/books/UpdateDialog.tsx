import { Button } from "@/components/ui/button";
import { Pencil } from 'lucide-react';
import { router } from "@inertiajs/react";
import { useState } from "react";
import { BookForm } from "./BookForm";
import { UpdateBookDialogProps } from "@/types";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogDescription
} from "@/components/ui/dialog";

export function UpdateDialog({
    book,
    open,
    setOpen
}: UpdateBookDialogProps) {
    const [title, setTile] = useState(book.title);
    const [subtitle, setSubTitle] = useState(book.subtitle);
    const [author, setAuthor] = useState(book.author);
    const [additionalInformation, setAdditionalInformation] = useState(book.additional_information);
    const [inventoryNumber, setInventoryNumber] = useState(book.inventory_number);
    const [edition, setEdition] = useState(book.edition);
    const [type, setType] = useState(book.type);
    const [status, setStatus] = useState(book.status);

    const handleUpdate = () => {
        if (!title || !author || !type || !status) {
            alert("Os campos com * são obrigatórios.");
            return;
        }
        router.put(`/books/${book.id}`, {
            title,
            subtitle,
            author,
            additional_information: additionalInformation,
            inventory_number: inventoryNumber,
            edition,
            type, 
            status,
        }, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setOpen(false);
            }
        });
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="h-8 w-8 bg-blue-400 cursor-pointer">
                    <Pencil />
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Livro: <span className="text-blue-400">{ book.title }</span></DialogTitle>
                </DialogHeader>

                <DialogDescription>Verifique os dados antes de alterá-los.</DialogDescription>

                <BookForm
                    title={title}
                    subtitle={subtitle}
                    author={author}
                    additionalInformation={additionalInformation}
                    inventoryNumber={inventoryNumber}
                    edition={edition}
                    type={type}
                    status={status}
                    setTile={setTile}
                    setSubTitle={setSubTitle}
                    setAuthor={setAuthor}
                    setAdditionalInformation={setAdditionalInformation}
                    setInventoryNumber={setInventoryNumber}
                    setEdition={setEdition}
                    setType={setType}
                    setStatus={setStatus}  
                />

                <DialogFooter>
                    <Button type="submit" className="cursor-pointer bg-blue-400" onClick={handleUpdate}>Salvar Alterações</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

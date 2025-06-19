import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookForm } from "./BookForm";
import { router } from "@inertiajs/react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogDescription
} from "@/components/ui/dialog";

export function BookCreateDialog() {
    const [open, setOpen] = useState(false);
    const [title, setTile] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [inventoryNumber, setInventoryNumber] = useState("");
    const [edition, setEdition] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");

    const handleCreate = () => {
        if (!title || !author || !type || !status) {
            alert("Os campos com * são obrigatórios.");
            return;
        }
        router.post("/books", {
            title,
            subtitle,
            author,
            additional_information: additionalInformation,
            inventory_number: inventoryNumber,
            edition,
            type, 
            status,
        }, {
            onSuccess: () => setOpen(false),
            preserveScroll: true,
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">Cadastrar Livro</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar novo Livro</DialogTitle>
                </DialogHeader>

                <DialogDescription>Insira os dados para fazer o cadastro.</DialogDescription>

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
                    <Button onClick={handleCreate} className="cursor-pointer">Cadastar Livro</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

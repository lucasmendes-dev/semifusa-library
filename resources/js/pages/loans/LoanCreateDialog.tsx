import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoanForm } from "./LoanForm";
import { router } from "@inertiajs/react";
import { Reader, Book } from "@/types";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogDescription
} from "@/components/ui/dialog";

export function LoanCreateDialog({
    readers,
    books
}: {
    readers: Reader[],
    books: Book[],
}) {
    const [open, setOpen] = useState(false);
    const [reader, setReader] = useState("");
    const [book, setBook] = useState("");
    const [loanDate, setLoanDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    const handleCreate = () => {
        if (!reader || !book || !loanDate || !returnDate) {
            alert("Os campos com * são obrigatórios.");
            return;
        }
        router.post("/loans", {
            reader_id: reader,
            book_id: book,
            loan_date: loanDate,
            return_date: returnDate,
        }, {
            onSuccess: () => setOpen(false),
            preserveScroll: true,
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">Fazer Empréstimo</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Realizar Novo Empréstimo</DialogTitle>
                </DialogHeader>

                <DialogDescription>Insira os dados para fazer o empréstimo.</DialogDescription>

                <LoanForm
                    reader={reader}
                    book={book}
                    loanDate={loanDate}
                    returnDate={returnDate}
                    setReader={setReader}
                    setBook={setBook}
                    setLoanDate={setLoanDate}
                    setReturnDate={setReturnDate}
                    readers={readers}
                    books={books}
                />

                <DialogFooter>
                    <Button onClick={handleCreate} className="cursor-pointer">Realizar Empréstimo</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

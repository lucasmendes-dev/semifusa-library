import { Button } from "@/components/ui/button";
import { Pencil } from 'lucide-react';
import { router } from "@inertiajs/react";
import { useState } from "react";
import { LoanForm } from "./LoanForm";
import { UpdateLoanDialogProps } from "@/types";
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
    loan,
    open,
    setOpen,
    readers,
    books,
    bookName,
    activeLoansTab,
}: UpdateLoanDialogProps) {
    const [reader, setReader] = useState(loan.reader_id);
    const [book, setBook] = useState(loan.book_id);
    const [loanDate, setLoanDate] = useState(loan.loan_date);
    const [returnDate, setReturnDate] = useState(loan.return_date);

    const handleUpdate = () => {
        router.put(`/loans/${loan.id}`, {
            reader_id: reader,
            book_id: book,
            loan_date: loanDate,
            return_date: returnDate,
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
                    <DialogTitle>Editar Empréstimo: <span className="text-blue-400">{ loan.loan_code }</span></DialogTitle>
                </DialogHeader>

                <DialogDescription>Verifique os dados antes de alterá-los.</DialogDescription>

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
                    bookName={bookName}
                    activeLoansTab={activeLoansTab}
                />

                <DialogFooter>
                    <Button type="submit" className="cursor-pointer bg-blue-400" onClick={handleUpdate}>Salvar Alterações</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

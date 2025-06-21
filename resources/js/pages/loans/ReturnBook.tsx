import { Button } from "@/components/ui/button";
import { Undo2 } from 'lucide-react';
import { router } from "@inertiajs/react";
import { useState } from "react";
import { ReturnBookProps } from "@/types";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";

export function ReturnBook({
    loan,
    open,
    setOpen,
}: ReturnBookProps) {
    const [returnDate, setReturnDate] = useState(new Date());

    const handleReturn = () => {
        router.put(`/loans/returnBook/${loan.id}`, {
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
                <Button className="ml-2 h-8 w-8 bg-purple-400 cursor-pointer">
                    <Undo2 />
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Devolução do livro: <span className="text-purple-400">{ loan.book }</span></DialogTitle>
                </DialogHeader>

                <div className="w-full md:w-1/1 px-3 mt-2">
                    <Label htmlFor="purchase_date" className="block mb-2">Data de Devolução <span className="text-red-400">*</span></Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal cursor-pointer",
                                    !returnDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {returnDate ? format(returnDate, "PPP", {locale: ptBR}) : <span>Escolha uma Data</span>}
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                            <Calendar
                                mode="single"
                                selected={returnDate}
                                onSelect={(date) => {
                                    if (date) {
                                        setReturnDate(date);
                                    }
                                }}

                                defaultMonth={returnDate}
                                locale={ptBR}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <DialogFooter>
                    <Button type="submit" className="cursor-pointer bg-purple-400" onClick={handleReturn}>Livro Devolvido</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

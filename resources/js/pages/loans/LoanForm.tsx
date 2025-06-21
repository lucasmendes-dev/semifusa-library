import { Label } from "@/components/ui/label";
import { LoanFormProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";


export function LoanForm({
    reader,
    book,
    loanDate,
    returnDate,
    setReader,
    setBook,
    setLoanDate,
    setReturnDate,
    readers,
    books,
}: LoanFormProps) {
    const parsedLoanDate = parseSingleDate(loanDate);
    const parsedReturnDate = parseSingleDate(returnDate);

    function parseSingleDate(dateValue: string) {
        return dateValue
            ? (() => {
                const [year, month, day] = dateValue.split("-");
                return new Date(Number(year), Number(month) - 1, Number(day));
            })()
            : undefined;
    };

    return (
        <form className="w-full max-w-lg mt-3">
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="customer" className="block mb-2">Leitor <span className="text-red-400">*</span></Label>
                    <Select
                        value={String(reader)}
                        onValueChange={(value) => setReader(value)}
                    >
                        <SelectTrigger >
                            <SelectValue className="mb-3" placeholder="Selecione um leitor" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                {readers.map((reader) => (
                                    <SelectItem key={reader.id} value={String(reader.id)}>
                                        {reader.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="customer" className="block mb-2">Livro <span className="text-red-400">*</span></Label>
                    <Select
                        value={String(book)}
                        onValueChange={(value) => setBook(value)}
                    >
                        <SelectTrigger >
                            <SelectValue className="mb-3" placeholder="Selecione um livro" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                {books.map((book) => (
                                    <SelectItem key={book.id} value={String(book.id)}>
                                        {book.title}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3">
                    <Label htmlFor="purchase_date" className="block mb-2">Data de Empréstimo <span className="text-red-400">*</span></Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal cursor-pointer",
                                    !parsedLoanDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {parsedLoanDate ? format(parsedLoanDate, "PPP", {locale: ptBR}) : <span>Escolha uma Data</span>}
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                            <Calendar
                                mode="single"
                                selected={parsedLoanDate}
                                onSelect={(date) => {
                                    if (date) {
                                        const formatted = format(date, "yyyy-MM-dd");
                                        setLoanDate(formatted);
                                    }
                                }}

                                defaultMonth={parsedLoanDate}
                                locale={ptBR}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="w-full md:w-1/2 px-3">
                    <Label htmlFor="purchase_date" className="block mb-2">Data de Devolução <span className="text-red-400">*</span></Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal cursor-pointer",
                                    !parsedReturnDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {parsedReturnDate ? format(parsedReturnDate, "PPP", {locale: ptBR}) : <span>Escolha uma Data</span>}
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-auto p-0 pointer-events-auto">
                            <Calendar
                                mode="single"
                                selected={parsedReturnDate}
                                onSelect={(date) => {
                                    if (date) {
                                        const formatted = format(date, "yyyy-MM-dd");
                                        setReturnDate(formatted);
                                    }
                                }}

                                defaultMonth={parsedReturnDate}
                                locale={ptBR}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            <p className="text-sm text-gray-600 flex justify-end">
                <span className="text-red-400">*</span> campo obrigatório
            </p>
        </form>
    );
}

"use client"

import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Book } from "@/types";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";


export function SearchBookWidget({
    books,
    setBook
} : {
    books: Book[],
    setBook: (value: string) => void,
}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[460px] justify-between"
                >
                    {value
                        ? (() => {
                            const selectedBook = books.find((book) => book.id === value)
                            return selectedBook ? `${selectedBook.title} - #${selectedBook.inventory_number}` : "Selecione o livro..."
                        })()
                        : "Selecione o livro..."}
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[460px] p-0 pointer-events-auto">
                <Command>
                    <CommandInput placeholder="Digite o nome ou número de inventário..." />
                    <CommandList>
                        <CommandEmpty>Nenhum livro encontrado.</CommandEmpty>
                        <CommandGroup>
                            {books.map((book) => (
                                <CommandItem
                                    key={book.id}
                                    value={`${book.title.toLowerCase()} ${book.inventory_number}`}
                                    onSelect={() => {
                                        setBook(String(book.id))
                                        setValue(book.id)
                                        setOpen(false)
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === book.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {book.title} - (#{book.inventory_number})
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

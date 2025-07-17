"use client"

import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Reader } from "@/types";
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
import { read } from "fs";


export function SearchReaderWidget({
    readerName,
    readers,
    setReader
} : {
    readerName: string,
    readers: Reader[],
    setReader: (value: string) => void,
}) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(readerName);

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
                            const selectedReader = readers.find((reader) => reader.id === value);
                            return selectedReader ? `${selectedReader.name}` : "Selecione o leitor...";
                        })()
                        : "Selecione o leitor..."}
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[460px] p-0 pointer-events-auto">
                <Command>
                    <CommandInput placeholder="Digite o nome do leitor..." />
                    <CommandList>
                        <CommandEmpty>Nenhum livro encontrado.</CommandEmpty>
                        <CommandGroup>
                            {readers.map((reader) => (
                                <CommandItem
                                    key={reader.id}
                                    value={`${reader.name}`}
                                    onSelect={() => {
                                        setReader(String(reader.id))
                                        setValue(reader.id)
                                        setOpen(false)
                                    }}
                                >
                                    <CheckIcon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === reader.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {reader.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}

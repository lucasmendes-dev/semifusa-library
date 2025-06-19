import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookFormProps } from "@/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export function BookForm({
    title,
    subtitle,
    author,
    additionalInformation,
    inventoryNumber,
    edition,
    type,
    status,
    setTile,
    setSubTitle,
    setAuthor,
    setAdditionalInformation,
    setInventoryNumber,
    setEdition,
    setType,
    setStatus,
}: BookFormProps) {
    return (
        <form className="w-full max-w-lg mt-3">
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-2/3 px-3 mb-4 md:mb-0">
                    <Label htmlFor="title" className="block mb-2">Título <span className="text-red-400">*</span></Label>
                    <Input id="title" value={title} onChange={(e) => setTile(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3" required/>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                    <Label htmlFor="type" className="block mb-2">Tipo <span className="text-red-400">*</span></Label>
                    <Select
                        value={type}
                        onValueChange={(value) => setType(value)}
                        required
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="main_library">Livro Geral</SelectItem>
                                <SelectItem value="comics">Quadrinhos</SelectItem>
                                <SelectItem value="geloteca">Geloteca</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="subtitle" className="block mb-2">Subtítulo</Label>
                    <Input id="subtitle" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"/>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="author" className="block mb-2">Autor <span className="text-red-400">*</span></Label>
                    <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3" required/>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                    <Label htmlFor="edition" className="block mb-2">Edição</Label>
                    <Input id="edition" value={edition} onChange={(e) => setEdition(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"/>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                    <Label htmlFor="inventoryNumber" className="block mb-2">Nº de Inventário </Label>
                    <Input id="inventoryNumber" type="number" value={inventoryNumber} onChange={(e) => setInventoryNumber(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"/>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                    <Label htmlFor="maritalStatus" className="block mb-2">Status <span className="text-red-400">*</span></Label>
                    <Select
                        value={status}
                        onValueChange={(value) => setStatus(value)}
                        required
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="available">Disponível</SelectItem>
                                <SelectItem value="unavailable">Indisponível</SelectItem>
                                <SelectItem value="loaned">Emprestado</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-full px-3 mb-4 md:mb-0">
                    <Label htmlFor="description" className="block mb-2">Informações Adicionais </Label>
                    <Textarea
                        className="col-span-3"
                        value={additionalInformation}
                        onChange={(e) => setAdditionalInformation(e.target.value)}
                    />
                </div>
            </div>
           
            <p className="text-sm text-gray-600 flex justify-end">
                <span className="text-red-400">*</span> campo obrigatório
            </p>
        </form>
    );
}

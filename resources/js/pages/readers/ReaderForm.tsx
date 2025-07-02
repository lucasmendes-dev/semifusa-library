import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { formatPhoneNumber, formatCpfNumber, formatBirthDate } from "@/utils/functions";
import { ReaderFormProps } from "@/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export function ReaderForm({
    name,
    phone,
    email,
    maritalStatus,
    cpf,
    nationality,
    birthDate,
    gender,
    profession,
    address,
    setName,
    setPhone,
    setEmail,
    setMaritalStatus,
    setCpf,
    setNationality,
    setBirthDate,
    setGender,
    setProfession,
    setAddress,
}: ReaderFormProps) {
    const [formattedPhone, setFormattedPhone] = useState('');
    const [formattedCpf, setFormattedCpf] = useState('');
    const [formattedBirthDate, setFormattedBirthDate] = useState('');

    useEffect(() => {
        setFormattedPhone(formatPhoneNumber(phone));
        setFormattedBirthDate(formatBirthDate(birthDate));
        if (cpf) {
            setFormattedCpf(formatCpfNumber(cpf));
        }
    }, [phone, cpf, birthDate]);

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const formattedValue = formatPhoneNumber(rawValue);
        setFormattedPhone(formattedValue);
        setPhone(rawValue);
    };

    const handleCpfFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const formattedValue = formatCpfNumber(rawValue);
        setFormattedCpf(formattedValue);
        setCpf(rawValue);
    }

    const handleBirthDateFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const formattedValue = formatBirthDate(rawValue);
        setFormattedBirthDate(formattedValue);
        setBirthDate(formattedValue);
    }

    return (
        <form className="w-full max-w-lg mt-3">
            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="name" className="block mb-2">Nome <span className="text-red-400">*</span></Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3" required/>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="phone" className="text-right">Telefone <span className="text-red-400">*</span></Label>
                    <Input
                        id="phone"
                        type="text"
                        value={formattedPhone}
                        onChange={handlePhoneChange}
                        className="col-span-3"
                        required
                        placeholder="(XX) XXXX-XXXX"
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="email" className="block mb-2">E-mail <span className="text-red-400">*</span></Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3" required />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="birthDate" className="block mb-2">Data de Nascimento <span className="text-red-400">*</span></Label>
                    <Input id="birthDate" value={formattedBirthDate} onChange={handleBirthDateFormat} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3" placeholder="dd/mm/aaaa" required/>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="cpf" className="block mb-2">CPF - (somente números)</Label>
                    <Input id="cpf" value={formattedCpf} onChange={handleCpfFormat} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3" />
                </div>

                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <Label htmlFor="profession" className="block mb-2">Profissão</Label>
                    <Input id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3" />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                    <Label htmlFor="maritalStatus" className="block mb-2">Estado Civil</Label>
                    <Select
                        value={maritalStatus}
                        onValueChange={(value) => setMaritalStatus(value)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="single">Solteiro(a)</SelectItem>
                                <SelectItem value="married">Casado(a)</SelectItem>
                                <SelectItem value="divorced">Divorciado(a)</SelectItem>
                                <SelectItem value="widow">Viúvo(a)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                    <Label htmlFor="nationality" className="block mb-2">Nacionalidade </Label>
                    <Input id="nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"/>
                </div>

                <div className="w-full md:w-1/3 px-3 mb-4 md:mb-0">
                    <Label htmlFor="gender" className="block mb-2">Gênero <span className="text-red-400">*</span></Label>                    
                    <Select
                        value={gender}
                        onValueChange={(value) => setGender(value)}
                        required
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="M">Masculino</SelectItem>
                                <SelectItem value="F">Feminino</SelectItem>
                                <SelectItem value="O">Outros</SelectItem>
                                <SelectItem value="N">Não Declarado</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-full px-3 mb-4 md:mb-0">
                    <Label htmlFor="description" className="block mb-2">Endereço <span className="text-red-400">*</span></Label>
                    <Textarea
                        className="col-span-3"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
            </div>

            <p className="text-sm text-gray-600 flex justify-end">
                <span className="text-red-400">*</span> campo obrigatório
            </p>
        </form>
    );
}

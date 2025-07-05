import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { ReaderFormProps } from "@/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AddressForm } from "./addressForm";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    formatPhoneNumber,
    formatCpfNumber,
    formatRgNumber,
    formatBirthDate,
    formatDateToDisplay,
} from "@/utils/functions";

export function ReaderForm({
    name,
    phone,
    email,
    maritalStatus,
    cpf,
    rg,
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
    setRg,
    setNationality,
    setBirthDate,
    setGender,
    setProfession,
    setAddress,
}: ReaderFormProps) {
    const [formattedPhone, setFormattedPhone] = useState('');
    const [formattedCpf, setFormattedCpf] = useState('');
    const [formattedRg, setFormattedRg] = useState('');
    const [formattedBirthDate, setFormattedBirthDate] = useState('');

    const type: string = cpf ? 'cpf' : 'rg';
    const [docType, setDocType] = useState(type);

    useEffect(() => {
        const dateFormatted = formatDateToDisplay(birthDate);
        setFormattedBirthDate(dateFormatted);
        setFormattedPhone(formatPhoneNumber(phone));
        if (cpf) {
            setFormattedCpf(formatCpfNumber(cpf));
        }
        if (rg) {
            setFormattedRg(formatRgNumber(rg));
        }
    }, [phone, cpf, rg, birthDate]);

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

    const handleRgFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const formattedValue = formatRgNumber(rawValue);
        setFormattedRg(formattedValue);
        setRg(rawValue);
    }

    const handleBirthDateFormat = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value;
        const formattedValue = formatBirthDate(rawValue);
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
                    <RadioGroup
                        value={docType}
                        onValueChange={setDocType}
                        className="flex flex-row gap-6 mb-4"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cpf" id="doc-cpf" />
                            <Label htmlFor="doc-cpf">CPF</Label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="rg" id="doc-rg" />
                            <Label htmlFor="doc-rg">RG</Label>
                        </div>
                    </RadioGroup>

                    {docType === "cpf" && (
                        <Input
                        id="cpf"
                        value={formattedCpf}
                        onChange={handleCpfFormat}
                        className="appearance-none block w-full rounded-lg py-3 px-4 mb-3"
                        placeholder="000.000.000-00"
                        />
                    )}

                    {docType === "rg" && (
                        <Input
                        id="rg"
                        value={formattedRg}
                        onChange={handleRgFormat}
                        className="w-full rounded-lg py-3 px-4 mb-3"
                        placeholder="00.000.000"
                        />
                    )}
                </div>

                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0 mt-2">
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
            
            <AddressForm 
                address={address}
                setAddress={setAddress}
            />

            <p className="text-sm text-gray-600 flex justify-end">
                <span className="text-red-400">*</span> campo obrigatório
            </p>
        </form>
    );
}

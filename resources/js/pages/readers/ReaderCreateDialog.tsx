import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReaderForm } from "./ReaderForm";
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
import { Address } from "@/types";

export function ReaderCreateDialog() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [nationality, setNationality] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [profession, setProfession] = useState("");
    const [address, setAddress] = useState<Address>({
        id: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        localidade: '',
        estado: '',
    });

    const handleCreate = () => {
        if (!name || !phone || !email || !birthDate || !gender || 
            (!address.logradouro || !address.bairro || !address.localidade || !address.estado)) {
            alert("Os campos com * são obrigatórios.");
            return;
        }
        router.post("/readers", {
            name,
            phone,
            email,
            marital_status: maritalStatus,
            cpf,
            rg,
            nationality,
            birth_date: birthDate,
            gender,
            profession,
            address,
        }, {
            onSuccess: () => setOpen(false),
            preserveScroll: true,
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="cursor-pointer">Cadastrar Leitor</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar novo Leitor</DialogTitle>
                </DialogHeader>

                <DialogDescription>Insira os dados para fazer o cadastro.</DialogDescription>

                <ReaderForm
                    name={name}
                    phone={phone}
                    email={email}
                    maritalStatus={maritalStatus}
                    cpf={cpf}
                    rg={rg}
                    nationality={nationality}
                    birthDate={birthDate}
                    gender={gender}
                    profession={profession}
                    address={address}
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    setMaritalStatus={setMaritalStatus}
                    setCpf={setCpf}
                    setRg={setRg}
                    setNationality={setNationality}
                    setBirthDate={setBirthDate}
                    setGender={setGender}
                    setProfession={setProfession}
                    setAddress={setAddress}
                />

                <DialogFooter>
                    <Button onClick={handleCreate} className="cursor-pointer">Cadastar Leitor</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

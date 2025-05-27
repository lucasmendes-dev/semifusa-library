import { Button } from "@/components/ui/button";
import { Pencil } from 'lucide-react';
import { router } from "@inertiajs/react";
import { useState } from "react";
import { ReaderForm } from "./ReaderForm";
import { UpdateReaderDialogProps } from "@/types";
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
    reader,
    open,
    setOpen
}: UpdateReaderDialogProps) {
    const [name, setName] = useState(reader.name);
    const [phone, setPhone] = useState(reader.phone);
    const [email, setEmail] = useState(reader.email);
    const [maritalStatus, setMaritalStatus] = useState(reader.marital_status);
    const [cpf, setCpf] = useState(reader.cpf);
    const [nationality, setNationality] = useState(reader.nationality);
    const [age, setAge] = useState<number|null>(reader.age);
    const [gender, setGender] = useState(reader.gender);
    const [profession, setProfession] = useState(reader.profession);
    const [address, setAddress] = useState(reader.address);

    const handleUpdate = () => {
        router.put(`/readers/${reader.id}`, {
            name,
            phone,
            email,
            marital_status: maritalStatus,
            cpf: cpf,
            nationality,
            age,
            gender,
            profession,
            address,
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
                    <DialogTitle>Editar Leitor: <span className="text-blue-400">{ reader.name }</span></DialogTitle>
                </DialogHeader>

                <DialogDescription>Verifique os dados antes de alterá-los.</DialogDescription>

                <ReaderForm
                    name={name}
                    phone={phone}
                    email={email}
                    maritalStatus={maritalStatus}
                    cpf={cpf}
                    nationality={nationality}
                    age={age}
                    gender={gender}
                    profession={profession}
                    address={address}
                    setName={setName}
                    setPhone={setPhone}
                    setEmail={setEmail}
                    setMaritalStatus={setMaritalStatus}
                    setCpf={setCpf}
                    setNationality={setNationality}
                    setAge={setAge}
                    setGender={setGender}
                    setProfession={setProfession}
                    setAddress={setAddress}
                />

                <DialogFooter>
                    <Button type="submit" className="cursor-pointer bg-blue-400" onClick={handleUpdate}>Salvar Alterações</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

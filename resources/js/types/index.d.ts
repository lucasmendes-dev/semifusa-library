import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

////////////////////////////////// Readers //////////////////////////////////
export type Reader = {
    id: string
    name: string,
    phone: string,
    email: string,
    marital_status: string,
    cpf: string,
    nationality: string,
    age: number,
    gender: string,
    profession: string,
    address: string,
}

export interface ReaderFormProps {
    name: string,
    phone: string,
    email: string,
    maritalStatus: string,
    cpf: string,
    nationality: string,
    age: number|null,
    gender: string,
    profession: string,
    address: string,
    setName: (value: string) => void;
    setPhone: (value: string) => void;
    setEmail: (value: string) => void;
    setMaritalStatus: (value: string) => void;
    setCpf: (value: string) => void;
    setNationality: (value: string) => void;
    setAge: (value: number|null) => void;
    setGender: (value: string) => void;
    setProfession: (value: string) => void;
    setAddress: (value: string) => void;
}

export interface UpdateReaderDialogProps {
    reader: Reader;
    open: boolean;
    setOpen: (value: boolean) => void;
}

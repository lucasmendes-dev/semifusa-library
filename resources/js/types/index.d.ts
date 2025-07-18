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
    rg: string,
    nationality: string,
    birth_date: string,
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
    rg: string,
    nationality: string,
    birthDate: string
    gender: string,
    profession: string,
    address: Address | null,
    setName: (value: string) => void;
    setPhone: (value: string) => void;
    setEmail: (value: string) => void;
    setMaritalStatus: (value: string) => void;
    setCpf: (value: string) => void;
    setRg: (value: string) => void;
    setNationality: (value: string) => void;
    setBirthDate: (value: string) => void;
    setGender: (value: string) => void;
    setProfession: (value: string) => void;
    setAddress: React.Dispatch<React.SetStateAction<Address>>;
}

export interface UpdateReaderDialogProps {
    reader: Reader;
    open: boolean;
    setOpen: (value: boolean) => void;
}

////////////////////////////////// Books //////////////////////////////////
export type Book = {
    id: string
    title: string,
    subtitle: string,
    author: string,
    additional_information: string,
    inventory_number: string,
    edition: string,
    type: string,
    status: string,
}

export interface BookFormProps {
    title: string,
    subtitle: string,
    author: string,
    additionalInformation: string,
    inventoryNumber: string,
    edition: string,
    type: string,
    status: string,
    setTile: (value: string) => void;
    setSubTitle: (value: string) => void;
    setAuthor: (value: string) => void;
    setAdditionalInformation: (value: string) => void;
    setInventoryNumber: (value: string) => void;
    setEdition: (value: string) => void;
    setType: (value: string) => void;
    setStatus: (value: string) => void;
}

export interface UpdateBookDialogProps {
    book: Book;
    open: boolean;
    setOpen: (value: boolean) => void;
}

type BooksProps = {
    mainLibrary: Book[];
    comics: Book[];
    geloteca: Book[];
};

////////////////////////////////// Loans //////////////////////////////////
export type Loan = {
    id: string
    loan_code: string,
    reader_id: string,
    book_id: string,
    loan_date: string,
    return_date: string,
    status: string,
    book: string,
}

export interface LoanFormProps {
    reader: string,
    book: string,
    loanDate: string,
    returnDate: string,
    setReader: (value: string) => void;
    setBook: (value: string) => void;
    setLoanDate: (value: string) => void;
    setReturnDate: (value: string) => void;
    readers: Reader[],
    books: Book[],
    bookName: Book|null
    inventoryNumber: Book|null,
    activeLoansTab: boolean,
}

export type LoanIndexProps = {
    activeLoans: Loan[],
    finishedLoans: Loan[],
    readers: Reader[],
    books: Book[],
    availableBooks: number,
    loanedBooks: number,
    lateBooks: number,
}

export interface UpdateLoanDialogProps {
    loan: Loan;
    open: boolean;
    setOpen: (value: boolean) => void;
    readers: Reader[],
    books: Book[],
    bookName: Book|null,
    inventoryNumber: Book|null,
    activeLoansTab: boolean
}

export type HeadeBoxesProps = {
    availableBooks: number,
    loanedBooks: number,
    lateBooks: number
}

export type ReturnBookProps = {
    loan: Loan,
    open: boolean;
    setOpen: (value: boolean) => void;
}

////////////////////////////////// Address //////////////////////////////////
export type Address = {
    id: string,
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    localidade: string,
    estado: string,
}

export interface AdressFormProps {
    cep: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    localidade: string,
    estado: string,
    setCep: (value: string) => void;
    setLogradouro: (value: string) => void;
    setNumero: (value: string) => void;
    setComplemento: (value: string) => void;
    setBairro: (value: string) => void;
    setLocalidade: (value: string) => void;
    setEstado: (value: string) => void;
}

////////////////////////////////// Statistics //////////////////////////////////
export interface StatisticsProps {
    totalBooks,
    readers,
    neighborhood,
    age,
    gender,
    month,
}

export interface StatisticsHeadboxProps {
    totalBooks,
    readers,
}

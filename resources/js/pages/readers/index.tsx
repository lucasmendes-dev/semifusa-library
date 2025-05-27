import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, Reader } from '@/types';
import { Head } from '@inertiajs/react';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Leitores',
        href: route('readers.index'),
    },
];

const filters: string[] = [
    'name',
    'phone',
    'email',
    'marital_status',
    'cpf_cnpj',
    'nationality',
    'age',
    'gender',
    'profession',
    'address',
];

export default function Readers({readers}: {readers: Reader[]}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Clientes" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <DataTable columns={columns} data={readers} filters={filters}/>
                </div>
            </div>
        </AppLayout>
    );
}

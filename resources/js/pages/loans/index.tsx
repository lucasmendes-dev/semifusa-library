import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, LoanIndexProps } from '@/types';
import { Head } from '@inertiajs/react';
import { DataTable } from '@/components/data-table';
import { LoanCreateDialog } from './LoanCreateDialog';
import { getLoanColumns } from './columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Empréstimos',
        href: '/loans',
    },
];

const filters: string[] = [
    'name',
    'phone',
    'email',
];

export default function Loans({
    loans,
    readers,
    books,
}: LoanIndexProps) {
    const loanColumns = getLoanColumns(readers);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Empréstimos" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>

                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <DataTable
                        columns={loanColumns}
                        data={loans}
                        createButton={<LoanCreateDialog readers={readers} books={books}/>}
                        filters={filters}
                    />    
                </div>
            </div>
        </AppLayout>
    );
}

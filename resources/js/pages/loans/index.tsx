import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, LoanIndexProps } from '@/types';
import { Head } from '@inertiajs/react';
import { DataTable } from '@/components/data-table';
import { LoanCreateDialog } from './LoanCreateDialog';
import { getLoanColumns } from './columns';
import { HeadBoxes } from './HeadBoxes';
import { Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Empréstimos',
        href: '/loans',
    },
];

const filters: string[] = [
    'name',
    'phone',
    'book',
];

export default function Loans({
    activeLoans,
    finishedLoans,
    readers,
    books,
    availableBooks,
    loanedBooks,
    lateBooks,
}: LoanIndexProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Empréstimos" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <HeadBoxes
                    availableBooks={availableBooks}
                    loanedBooks={loanedBooks}
                    lateBooks={lateBooks}
                />
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <Tabs defaultValue="active_loans" className="mx-auto mt-3 px-3">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="active_loans" className="cursor-pointer hover:bg-[#0A0A0A]">Empréstimos Ativos</TabsTrigger>
                            <TabsTrigger value="finished_loans" className="cursor-pointer hover:bg-[#0A0A0A]">Empréstimos Finalizados</TabsTrigger>
                        </TabsList>

                        <TabsContent value="active_loans">
                        <DataTable
                            columns={getLoanColumns(readers, books, true)}
                            data={activeLoans}
                            createButton={<LoanCreateDialog readers={readers} books={books}/>}
                            filters={filters}
                        />   
                        </TabsContent>

                        <TabsContent value="finished_loans">
                            <DataTable
                                columns={getLoanColumns(readers, books, false)}
                                data={finishedLoans}
                                createButton={<LoanCreateDialog readers={readers} books={books}/>}
                                filters={filters}
                            />
                        </TabsContent>
                    </Tabs> 
                </div>
            </div>
        </AppLayout>
    );
}

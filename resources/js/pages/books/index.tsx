import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, BooksProps } from '@/types';
import { Head } from '@inertiajs/react';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';
import { BookCreateDialog } from './BookCreateDialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Livros',
        href: route('books.index'),
    },
];

const filters: string[] = [
    'title',
    'author',
    'inventory_number',
    'status',
];

export default function Books({
    mainLibrary,
    comics,
    geloteca
}: BooksProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Leitores" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <Tabs defaultValue="main_library" className="mx-auto mt-3 px-3">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="main_library" className="cursor-pointer hover:bg-[#0A0A0A]">Livros</TabsTrigger>
                            <TabsTrigger value="comics" className="cursor-pointer hover:bg-[#0A0A0A]">Quadrinhos</TabsTrigger>
                            <TabsTrigger value="geloteca" className="cursor-pointer hover:bg-[#0A0A0A]">Geloteca</TabsTrigger>
                        </TabsList>

                        <TabsContent value="main_library">
                            <DataTable
                                columns={columns}
                                data={mainLibrary}
                                createButton={<BookCreateDialog />}
                                filters={filters}
                            />
                        </TabsContent>

                        <TabsContent value="comics">
                            <DataTable
                                columns={columns}
                                data={comics}
                                createButton={<BookCreateDialog />}
                                filters={filters}
                            />
                        </TabsContent>

                        <TabsContent value="geloteca">
                            <DataTable
                                columns={columns}
                                data={geloteca}
                                createButton={<BookCreateDialog />}
                                filters={filters}
                            />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </AppLayout>
    );
}

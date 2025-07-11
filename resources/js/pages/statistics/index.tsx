import AppLayout from '@/layouts/app-layout';
import { StatisticsProps, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { HeadBoxes } from './HeadBoxes';
import { MonthChart } from './MonthChart';
import { NeighborhoodChart } from './NeighborhoodChart';
import { GenderChart } from './GenderChart';
import { AgeChart } from './AgeChart';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Estatísticas',
        href: route('statistics.index'),
    },
];

export default function Statistics({
    totalBooks,
    readers,
    neighborhood,
    age,
    gender,
    month,
}: StatisticsProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Leitores" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <HeadBoxes
                    totalBooks={totalBooks}
                    readers={readers}
                />

                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <MonthChart month={month}/>
                    <NeighborhoodChart/>
                </div>

                <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                    <GenderChart />
                    <AgeChart />
                </div>

            </div>

        </AppLayout>
    );
}

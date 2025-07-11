import {StatisticsHeadboxProps } from '@/types';

export function HeadBoxes({
    totalBooks,
    readers,
}: StatisticsHeadboxProps) {
    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="border-sidebar-border/70 dark:border-sidebar-border overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 p-4 flex flex-col items-center justify-center text-center">
                <div className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Total de Livros Emprestados
                </div>
                <div className="text-4xl font-bold text-neutral-900 dark:text-white">
                    {totalBooks}
                </div>
            </div>

            <div className="border-sidebar-border/70 dark:border-sidebar-border overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 p-4 flex flex-col items-center justify-center text-center">
                <div className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Pessoas Cadastradas
                </div>
                <div className="text-4xl font-bold text-yellow-600 dark:text-white">
                    {readers}
                </div>
            </div>

            <div className="border-sidebar-border/70 dark:border-sidebar-border overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 p-4 flex flex-col items-center justify-center text-center">
                <div className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    ?
                </div>
                <div className="text-4xl font-bold text-red-600 dark:text-white">
                    0
                </div>
            </div>
        </div>
    );
}

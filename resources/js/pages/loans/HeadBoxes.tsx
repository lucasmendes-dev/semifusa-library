import {HeadeBoxesProps } from '@/types';

export function HeadBoxes({
    availableBooks,
    loanedBooks,
    lateBooks
}: HeadeBoxesProps) {
    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="border-sidebar-border/70 dark:border-sidebar-border overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 p-4 flex flex-col items-center justify-center text-center">
                <div className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Total de Livros Disponíveis
                </div>
                <div className="text-4xl font-bold text-neutral-900 dark:text-green-400">
                    {availableBooks}
                </div>
            </div>

            <div className="border-sidebar-border/70 dark:border-sidebar-border overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 p-4 flex flex-col items-center justify-center text-center">
                <div className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Livros Emprestados
                </div>
                <div className="text-4xl font-bold text-yellow-600 dark:text-blue-400">
                    {loanedBooks}
                </div>
            </div>

            <div className="border-sidebar-border/70 dark:border-sidebar-border overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 p-4 flex flex-col items-center justify-center text-center">
                <div className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Devolução Atrasada
                </div>
                <div className="text-4xl font-bold text-red-600 dark:text-red-400">
                    {lateBooks}
                </div>
            </div>
        </div>
    );
}

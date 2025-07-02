export function formatPhoneNumber(value: string): string {
    if (!value) {
        return "";
    }
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);
  
    if (match) {
        const ddd = match[1];
        const part1 = match[2];
        const part2 = match[3];
    
        let formatted = `(${ddd})`;
        if (part1) {
            formatted += ` ${part1}`;
        }
        if (part2) {
            formatted += `-${part2}`;
        }
        return formatted;
    }
    return value;
}

export function formatCpfNumber(cpfString: string): string {
    const digits = cpfString.replace(/\D/g, '');
    const limited = digits.slice(0, 11);

    let formattedValue = '';
    if (limited.length <= 3) {
        formattedValue = limited;
    } else if (limited.length <= 6) {
        formattedValue = `${limited.slice(0, 3)}.${limited.slice(3)}`;
    } else if (limited.length <= 9) {
        formattedValue = `${limited.slice(0, 3)}.${limited.slice(3, 6)}.${limited.slice(6)}`;
    } else {
        formattedValue = `${limited.slice(0, 3)}.${limited.slice(3, 6)}.${limited.slice(6, 9)}-${limited.slice(9)}`;
    }
    return formattedValue;
}

export function formatToBRCurrency(price: number) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(price);
}

export const parseDateString = (dateString: string | undefined): Date | undefined => {
    if (!dateString) {
        return undefined;
    }
    const parts = dateString.split('-');
    if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
    return undefined;
};

export function parseSingleDate(dateValue: string) {
    return dateValue
        ? (() => {
            const [year, month, day] = dateValue.split("-");
            return new Date(Number(year), Number(month) - 1, Number(day));
        })()
        : undefined;
};

export function formatBirthDate(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 8);

    const day   = digits.slice(0, 2);
    const month = digits.slice(2, 4);
    const year  = digits.slice(4, 8);

    let formatted = day;
    if (month)  formatted += `/${month}`;
    if (year)   formatted += `/${year}`;

    return formatted;
}

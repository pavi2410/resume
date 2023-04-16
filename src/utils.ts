import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(relativeTime)
dayjs.extend(isToday)

export function pickColorByHash(str: string) {
    const colorSchemes = [
        'outline-red-500',
        'outline-orange-500',
        'outline-amber-500',
        'outline-emerald-500',
        'outline-blue-500',
        'outline-violet-500',
        'outline-fuchsia-500'
    ];
    const hash = str.split('').reduceRight((hash, c) => hash * 31 + c.charCodeAt(0), 0);
    const randomIndex = hash % colorSchemes.length;
    return colorSchemes[randomIndex];
}

export function formatDateRange(obj: { startDate: string, endDate?: string }) {
    const start = obj.startDate
    const end = obj.endDate

    const startDate = dayjs(start);
    const endDate = dayjs(end);

    const startFmt = startDate.format('MMM YYYY');
    const endFmt = endDate.isToday() ? 'Present' : endDate.format('MMM YYYY');

    const duration = endDate.from(startDate, true);

    return `${startFmt} - ${endFmt} (${duration})`;
}

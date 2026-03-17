import { format, isToday, isTomorrow, differenceInCalendarDays, startOfDay } from 'date-fns';
import { BinType, COLLECTION_SCHEDULE, CollectionDate } from '../data/schedule';

export function getUpcomingCollections(today: Date = new Date()): CollectionDate[] {
  const todayStart = startOfDay(today);
  return COLLECTION_SCHEDULE
    .filter(c => startOfDay(c.date) >= todayStart)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

export function getNextCollectionForBin(binType: BinType, today: Date = new Date()): CollectionDate | null {
  const todayStart = startOfDay(today);
  return COLLECTION_SCHEDULE
    .filter(c => c.binType === binType && startOfDay(c.date) >= todayStart)
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0] ?? null;
}

export function getCollectionsForDate(date: Date): CollectionDate[] {
  const dayStart = startOfDay(date);
  return COLLECTION_SCHEDULE.filter(c => startOfDay(c.date).getTime() === dayStart.getTime());
}

export function formatDateLabel(date: Date): string {
  if (isToday(date)) return 'Today';
  if (isTomorrow(date)) return 'Tomorrow';
  const days = differenceInCalendarDays(date, new Date());
  if (days < 7) return `in ${days} days`;
  return format(date, 'EEE d MMM');
}

export function formatFullDate(date: Date): string {
  return format(date, 'EEEE d MMMM yyyy');
}

export function formatMonthYear(date: Date): string {
  return format(date, 'MMMM yyyy');
}

export function isoDateString(date: Date): string {
  return format(date, 'yyyy-MM-dd');
}

export function getTodayCollections(): CollectionDate[] {
  return getCollectionsForDate(new Date());
}

export function getTomorrowCollections(): CollectionDate[] {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return getCollectionsForDate(tomorrow);
}

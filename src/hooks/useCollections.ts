import { useState, useEffect, useCallback } from 'react';
import { BinType } from '../data/schedule';
import { isoDateString } from '../utils/dates';

interface CollectedDates {
  [key: string]: string[];
}

interface UseCollectionsReturn {
  isCollected: (binType: BinType, date: Date) => boolean;
  markCollected: (binType: BinType, date: Date) => void;
  unmarkCollected: (binType: BinType, date: Date) => void;
}

const STORAGE_KEY = 'collectedDates';

function loadCollectedDates(): CollectedDates {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveCollectedDates(data: CollectedDates): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useCollections(): UseCollectionsReturn {
  const [collectedDates, setCollectedDates] = useState<CollectedDates>(loadCollectedDates);

  useEffect(() => {
    saveCollectedDates(collectedDates);
  }, [collectedDates]);

  const isCollected = useCallback((binType: BinType, date: Date): boolean => {
    const dates = collectedDates[binType] ?? [];
    return dates.includes(isoDateString(date));
  }, [collectedDates]);

  const markCollected = useCallback((binType: BinType, date: Date): void => {
    setCollectedDates(prev => {
      const existing = prev[binType] ?? [];
      const dateStr = isoDateString(date);
      if (existing.includes(dateStr)) return prev;
      return { ...prev, [binType]: [...existing, dateStr] };
    });
  }, []);

  const unmarkCollected = useCallback((binType: BinType, date: Date): void => {
    setCollectedDates(prev => {
      const existing = prev[binType] ?? [];
      const dateStr = isoDateString(date);
      return { ...prev, [binType]: existing.filter(d => d !== dateStr) };
    });
  }, []);

  return { isCollected, markCollected, unmarkCollected };
}

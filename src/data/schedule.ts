export type BinType = 'food-waste' | 'garden-waste' | 'general-waste' | 'glass' | 'recycling';

export interface CollectionDate {
  date: Date;
  binType: BinType;
}

export interface BinConfig {
  id: BinType;
  label: string;
  color: string;
  emoji: string;
}

export const BIN_CONFIGS: BinConfig[] = [
  { id: 'food-waste', label: 'Food Waste', color: '#6b2d8b', emoji: '🗑️' },
  { id: 'garden-waste', label: 'Garden Waste', color: '#8b5e3c', emoji: '🌿' },
  { id: 'general-waste', label: 'General Waste', color: '#333333', emoji: '🗑️' },
  { id: 'glass', label: 'Glass Collection', color: '#6b8fa3', emoji: '🍾' },
  { id: 'recycling', label: 'Recycling', color: '#2d6a4f', emoji: '♻️' },
];

function makeDate(year: number, month: number, day: number): Date {
  return new Date(year, month - 1, day);
}

export const COLLECTION_SCHEDULE: CollectionDate[] = [
  // March 2026
  { date: makeDate(2026, 3, 18), binType: 'food-waste' },
  { date: makeDate(2026, 3, 25), binType: 'food-waste' },
  { date: makeDate(2026, 3, 18), binType: 'garden-waste' },
  { date: makeDate(2026, 3, 18), binType: 'general-waste' },
  { date: makeDate(2026, 3, 25), binType: 'recycling' },

  // April 2026
  { date: makeDate(2026, 4, 1), binType: 'food-waste' },
  { date: makeDate(2026, 4, 9), binType: 'food-waste' },
  { date: makeDate(2026, 4, 15), binType: 'food-waste' },
  { date: makeDate(2026, 4, 22), binType: 'food-waste' },
  { date: makeDate(2026, 4, 29), binType: 'food-waste' },
  { date: makeDate(2026, 4, 1), binType: 'garden-waste' },
  { date: makeDate(2026, 4, 15), binType: 'garden-waste' },
  { date: makeDate(2026, 4, 29), binType: 'garden-waste' },
  { date: makeDate(2026, 4, 1), binType: 'general-waste' },
  { date: makeDate(2026, 4, 15), binType: 'general-waste' },
  { date: makeDate(2026, 4, 29), binType: 'general-waste' },
  { date: makeDate(2026, 4, 8), binType: 'glass' },
  { date: makeDate(2026, 4, 9), binType: 'recycling' },
  { date: makeDate(2026, 4, 22), binType: 'recycling' },

  // May 2026
  { date: makeDate(2026, 5, 7), binType: 'food-waste' },
  { date: makeDate(2026, 5, 13), binType: 'food-waste' },
  { date: makeDate(2026, 5, 20), binType: 'food-waste' },
  { date: makeDate(2026, 5, 28), binType: 'food-waste' },
  { date: makeDate(2026, 5, 13), binType: 'garden-waste' },
  { date: makeDate(2026, 5, 28), binType: 'garden-waste' },
  { date: makeDate(2026, 5, 13), binType: 'general-waste' },
  { date: makeDate(2026, 5, 28), binType: 'general-waste' },
  { date: makeDate(2026, 5, 7), binType: 'glass' },
  { date: makeDate(2026, 5, 7), binType: 'recycling' },
  { date: makeDate(2026, 5, 20), binType: 'recycling' },

  // June 2026
  { date: makeDate(2026, 6, 3), binType: 'food-waste' },
  { date: makeDate(2026, 6, 10), binType: 'food-waste' },
  { date: makeDate(2026, 6, 17), binType: 'food-waste' },
  { date: makeDate(2026, 6, 24), binType: 'food-waste' },
  { date: makeDate(2026, 6, 10), binType: 'garden-waste' },
  { date: makeDate(2026, 6, 24), binType: 'garden-waste' },
  { date: makeDate(2026, 6, 10), binType: 'general-waste' },
  { date: makeDate(2026, 6, 24), binType: 'general-waste' },
  { date: makeDate(2026, 6, 3), binType: 'glass' },
  { date: makeDate(2026, 6, 3), binType: 'recycling' },
  { date: makeDate(2026, 6, 17), binType: 'recycling' },

  // July 2026
  { date: makeDate(2026, 7, 1), binType: 'food-waste' },
  { date: makeDate(2026, 7, 8), binType: 'food-waste' },
  { date: makeDate(2026, 7, 15), binType: 'food-waste' },
  { date: makeDate(2026, 7, 22), binType: 'food-waste' },
  { date: makeDate(2026, 7, 29), binType: 'food-waste' },
  { date: makeDate(2026, 7, 8), binType: 'garden-waste' },
  { date: makeDate(2026, 7, 22), binType: 'garden-waste' },
  { date: makeDate(2026, 7, 8), binType: 'general-waste' },
  { date: makeDate(2026, 7, 22), binType: 'general-waste' },
  { date: makeDate(2026, 7, 1), binType: 'glass' },
  { date: makeDate(2026, 7, 29), binType: 'glass' },
  { date: makeDate(2026, 7, 1), binType: 'recycling' },
  { date: makeDate(2026, 7, 15), binType: 'recycling' },
  { date: makeDate(2026, 7, 29), binType: 'recycling' },

  // August 2026
  { date: makeDate(2026, 8, 5), binType: 'food-waste' },
  { date: makeDate(2026, 8, 12), binType: 'food-waste' },
  { date: makeDate(2026, 8, 19), binType: 'food-waste' },
  { date: makeDate(2026, 8, 26), binType: 'food-waste' },
  { date: makeDate(2026, 8, 5), binType: 'garden-waste' },
  { date: makeDate(2026, 8, 19), binType: 'garden-waste' },
  { date: makeDate(2026, 8, 5), binType: 'general-waste' },
  { date: makeDate(2026, 8, 19), binType: 'general-waste' },
  { date: makeDate(2026, 8, 26), binType: 'glass' },
  { date: makeDate(2026, 8, 12), binType: 'recycling' },
  { date: makeDate(2026, 8, 26), binType: 'recycling' },

  // September 2026
  { date: makeDate(2026, 9, 3), binType: 'food-waste' },
  { date: makeDate(2026, 9, 9), binType: 'food-waste' },
  { date: makeDate(2026, 9, 16), binType: 'food-waste' },
  { date: makeDate(2026, 9, 23), binType: 'food-waste' },
  { date: makeDate(2026, 9, 30), binType: 'food-waste' },
  { date: makeDate(2026, 9, 3), binType: 'garden-waste' },
  { date: makeDate(2026, 9, 16), binType: 'garden-waste' },
  { date: makeDate(2026, 9, 30), binType: 'garden-waste' },
  { date: makeDate(2026, 9, 3), binType: 'general-waste' },
  { date: makeDate(2026, 9, 16), binType: 'general-waste' },
  { date: makeDate(2026, 9, 30), binType: 'general-waste' },
  { date: makeDate(2026, 9, 23), binType: 'glass' },
  { date: makeDate(2026, 9, 9), binType: 'recycling' },
  { date: makeDate(2026, 9, 23), binType: 'recycling' },

  // October 2026
  { date: makeDate(2026, 10, 7), binType: 'food-waste' },
  { date: makeDate(2026, 10, 14), binType: 'food-waste' },
  { date: makeDate(2026, 10, 21), binType: 'food-waste' },
  { date: makeDate(2026, 10, 28), binType: 'food-waste' },
  { date: makeDate(2026, 10, 14), binType: 'garden-waste' },
  { date: makeDate(2026, 10, 28), binType: 'garden-waste' },
  { date: makeDate(2026, 10, 14), binType: 'general-waste' },
  { date: makeDate(2026, 10, 28), binType: 'general-waste' },
  { date: makeDate(2026, 10, 21), binType: 'glass' },
  { date: makeDate(2026, 10, 7), binType: 'recycling' },
  { date: makeDate(2026, 10, 21), binType: 'recycling' },

  // November 2026
  { date: makeDate(2026, 11, 4), binType: 'food-waste' },
  { date: makeDate(2026, 11, 11), binType: 'food-waste' },
  { date: makeDate(2026, 11, 18), binType: 'food-waste' },
  { date: makeDate(2026, 11, 25), binType: 'food-waste' },
  { date: makeDate(2026, 11, 11), binType: 'garden-waste' },
  { date: makeDate(2026, 11, 25), binType: 'garden-waste' },
  { date: makeDate(2026, 11, 11), binType: 'general-waste' },
  { date: makeDate(2026, 11, 25), binType: 'general-waste' },
  { date: makeDate(2026, 11, 18), binType: 'glass' },
  { date: makeDate(2026, 11, 4), binType: 'recycling' },
  { date: makeDate(2026, 11, 18), binType: 'recycling' },

  // December 2026
  { date: makeDate(2026, 12, 2), binType: 'food-waste' },
  { date: makeDate(2026, 12, 9), binType: 'food-waste' },
  { date: makeDate(2026, 12, 16), binType: 'food-waste' },
  { date: makeDate(2026, 12, 23), binType: 'food-waste' },
  { date: makeDate(2026, 12, 30), binType: 'food-waste' },
  { date: makeDate(2026, 12, 9), binType: 'garden-waste' },
  { date: makeDate(2026, 12, 23), binType: 'garden-waste' },
  { date: makeDate(2026, 12, 9), binType: 'general-waste' },
  { date: makeDate(2026, 12, 23), binType: 'general-waste' },
  { date: makeDate(2026, 12, 16), binType: 'glass' },
  { date: makeDate(2026, 12, 2), binType: 'recycling' },
  { date: makeDate(2026, 12, 16), binType: 'recycling' },
  { date: makeDate(2026, 12, 30), binType: 'recycling' },

  // January 2027
  { date: makeDate(2027, 1, 6), binType: 'food-waste' },
  { date: makeDate(2027, 1, 13), binType: 'food-waste' },
  { date: makeDate(2027, 1, 20), binType: 'food-waste' },
  { date: makeDate(2027, 1, 27), binType: 'food-waste' },
  { date: makeDate(2027, 1, 6), binType: 'garden-waste' },
  { date: makeDate(2027, 1, 20), binType: 'garden-waste' },
  { date: makeDate(2027, 1, 6), binType: 'general-waste' },
  { date: makeDate(2027, 1, 20), binType: 'general-waste' },
  { date: makeDate(2027, 1, 13), binType: 'glass' },
  { date: makeDate(2027, 1, 13), binType: 'recycling' },
  { date: makeDate(2027, 1, 27), binType: 'recycling' },

  // February 2027
  { date: makeDate(2027, 2, 3), binType: 'food-waste' },
  { date: makeDate(2027, 2, 10), binType: 'food-waste' },
  { date: makeDate(2027, 2, 17), binType: 'food-waste' },
  { date: makeDate(2027, 2, 24), binType: 'food-waste' },
  { date: makeDate(2027, 2, 3), binType: 'garden-waste' },
  { date: makeDate(2027, 2, 17), binType: 'garden-waste' },
  { date: makeDate(2027, 2, 3), binType: 'general-waste' },
  { date: makeDate(2027, 2, 17), binType: 'general-waste' },
  { date: makeDate(2027, 2, 10), binType: 'glass' },
  { date: makeDate(2027, 2, 10), binType: 'recycling' },
  { date: makeDate(2027, 2, 24), binType: 'recycling' },
];

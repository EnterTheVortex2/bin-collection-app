import React from 'react';
import { COLLECTION_SCHEDULE, BIN_CONFIGS } from '../data/schedule';
import { formatMonthYear } from '../utils/dates';
import { format, startOfMonth } from 'date-fns';

interface MonthGroup {
  monthKey: string;
  monthDate: Date;
  days: Map<string, string[]>;
}

export const Schedule: React.FC = () => {
  const monthMap = new Map<string, MonthGroup>();

  COLLECTION_SCHEDULE.forEach(({ date, binType }) => {
    const monthKey = format(date, 'yyyy-MM');
    if (!monthMap.has(monthKey)) {
      monthMap.set(monthKey, {
        monthKey,
        monthDate: startOfMonth(date),
        days: new Map(),
      });
    }
    const month = monthMap.get(monthKey)!;
    const dayKey = format(date, 'yyyy-MM-dd');
    if (!month.days.has(dayKey)) {
      month.days.set(dayKey, []);
    }
    month.days.get(dayKey)!.push(binType);
  });

  const months = Array.from(monthMap.values()).sort((a, b) =>
    a.monthDate.getTime() - b.monthDate.getTime()
  );

  return (
    <div className="schedule">
      <div className="schedule__header">
        <h2>Full Collection Schedule</h2>
        <p>19 Rotherley Gardens, Winchester, SO22 6TN</p>
      </div>

      {months.map(month => (
        <div key={month.monthKey} className="schedule__month">
          <h3 className="schedule__month-title">{formatMonthYear(month.monthDate)}</h3>
          <div className="schedule__days">
            {Array.from(month.days.entries())
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([dayKey, binTypes]) => {
                const date = new Date(dayKey);
                return (
                  <div key={dayKey} className="schedule__day">
                    <span className="schedule__day-date">{format(date, 'EEE d')}</span>
                    <div className="schedule__day-bins">
                      {binTypes.map(binType => {
                        const config = BIN_CONFIGS.find(b => b.id === binType);
                        return config ? (
                          <span
                            key={binType}
                            className="schedule__bin-badge"
                            style={{ backgroundColor: config.color }}
                          >
                            {config.emoji} {config.label}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

import React from 'react';
import { BinConfig, CollectionDate } from '../data/schedule';
import { formatDateLabel, formatFullDate, isTomorrowDate } from '../utils/dates';

interface BinCardProps {
  config: BinConfig;
  nextCollection: CollectionDate | null;
  isCollected: boolean;
  onMarkCollected: () => void;
  onUnmark: () => void;
}

export const BinCard: React.FC<BinCardProps> = ({
  config,
  nextCollection,
  isCollected,
  onMarkCollected,
  onUnmark,
}) => {
  const isToday = nextCollection ? new Date().toDateString() === nextCollection.date.toDateString() : false;
  const isTomorrow = nextCollection ? isTomorrowDate(nextCollection.date) : false;

  return (
    <div
      className={`bin-card ${isCollected ? 'bin-card--collected' : ''} ${isToday ? 'bin-card--today' : ''}`}
      style={{ '--bin-color': config.color } as React.CSSProperties}
    >
      <div className="bin-card__header">
        <span className="bin-card__emoji">{config.emoji}</span>
        <div className="bin-card__info">
          <h3 className="bin-card__label">{config.label}</h3>
          {nextCollection ? (
            <p className="bin-card__date">
              {isToday ? '📅 Today!' : isTomorrow ? '⏰ Tomorrow' : formatDateLabel(nextCollection.date)}
              {' — '}
              {formatFullDate(nextCollection.date)}
            </p>
          ) : (
            <p className="bin-card__date">No upcoming collections</p>
          )}
        </div>
        {isCollected && <span className="bin-card__check">✓</span>}
      </div>
      {nextCollection && (
        <div className="bin-card__actions">
          {isCollected ? (
            <button className="btn btn--secondary" onClick={onUnmark}>
              Undo
            </button>
          ) : (
            <button className="btn btn--primary" onClick={onMarkCollected} disabled={!isToday}>
              {isToday ? 'Mark as Collected' : 'Not yet due'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

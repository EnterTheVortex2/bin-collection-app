import React, { useState } from 'react';
import { BIN_CONFIGS } from '../data/schedule';
import { getNextCollectionForBin, getTodayCollections, getTomorrowCollections } from '../utils/dates';
import { BinCard } from './BinCard';
import { TodayBanner, TomorrowBanner, IOSInstallBanner } from './NotificationBanner';
import { useCollections } from '../hooks/useCollections';
import { useNotifications } from '../hooks/useNotifications';
import { format } from 'date-fns';

export const Dashboard: React.FC = () => {
  const { isCollected, markCollected, unmarkCollected } = useCollections();
  const { isIOS, isInstalled, notificationPermission, requestPermission } = useNotifications();
  const [iosbannerDismissed, setIosbannerDismissed] = useState(false);

  const today = new Date();
  const todayCollections = getTodayCollections();
  const tomorrowCollections = getTomorrowCollections();

  const todayBinLabels = todayCollections.map(c => BIN_CONFIGS.find(b => b.id === c.binType)?.label ?? '');
  const tomorrowBinLabels = tomorrowCollections.map(c => BIN_CONFIGS.find(b => b.id === c.binType)?.label ?? '');

  const showIOSBanner = isIOS && !isInstalled && !iosbannerDismissed;

  const handleRequestPermission = () => {
    requestPermission();
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Bin Collection</h1>
        <p className="dashboard__date">{format(today, 'EEEE d MMMM yyyy')}</p>
        <p className="dashboard__address">19 Rotherley Gardens, Winchester</p>
      </div>

      {showIOSBanner && (
        <IOSInstallBanner onDismiss={() => setIosbannerDismissed(true)} />
      )}

      {!showIOSBanner && isIOS && isInstalled && notificationPermission === 'default' && (
        <div className="banner banner--permission">
          <span className="banner__icon">🔔</span>
          <div>
            <strong>Enable Reminders</strong>
            <p>Get notified the evening before collection day</p>
          </div>
          <button className="btn btn--small" onClick={handleRequestPermission}>Enable</button>
        </div>
      )}

      <TodayBanner binLabels={todayBinLabels} />
      <TomorrowBanner binLabels={tomorrowBinLabels} />

      <div className="bin-list">
        {BIN_CONFIGS.map(config => {
          const nextCollection = getNextCollectionForBin(config.id);
          const collected = nextCollection ? isCollected(config.id, nextCollection.date) : false;
          return (
            <BinCard
              key={config.id}
              config={config}
              nextCollection={nextCollection}
              isCollected={collected}
              onMarkCollected={() => nextCollection && markCollected(config.id, nextCollection.date)}
              onUnmark={() => nextCollection && unmarkCollected(config.id, nextCollection.date)}
            />
          );
        })}
      </div>
    </div>
  );
};

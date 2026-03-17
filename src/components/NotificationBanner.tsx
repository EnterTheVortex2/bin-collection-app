import React from 'react';

interface NotificationBannerProps {
  binLabels: string[];
}

export const TomorrowBanner: React.FC<NotificationBannerProps> = ({ binLabels }) => {
  if (binLabels.length === 0) return null;
  return (
    <div className="banner banner--tomorrow">
      <span className="banner__icon">⏰</span>
      <div>
        <strong>Put bins out tonight!</strong>
        <p>{binLabels.join(', ')} collected tomorrow</p>
      </div>
    </div>
  );
};

export const TodayBanner: React.FC<NotificationBannerProps> = ({ binLabels }) => {
  if (binLabels.length === 0) return null;
  return (
    <div className="banner banner--today">
      <span className="banner__icon">🗑️</span>
      <div>
        <strong>Collection Day!</strong>
        <p>{binLabels.join(', ')} collected today</p>
      </div>
    </div>
  );
};

interface IOSBannerProps {
  onDismiss: () => void;
}

export const IOSInstallBanner: React.FC<IOSBannerProps> = ({ onDismiss }) => (
  <div className="banner banner--ios">
    <span className="banner__icon">📱</span>
    <div>
      <strong>Install for Notifications</strong>
      <p>Tap the Share button then "Add to Home Screen" to enable push notifications</p>
    </div>
    <button className="banner__dismiss" onClick={onDismiss}>✕</button>
  </div>
);

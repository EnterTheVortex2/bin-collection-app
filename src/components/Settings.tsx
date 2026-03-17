import React from 'react';
import { useNotifications } from '../hooks/useNotifications';

const APP_VERSION = '1.0.0';

export const Settings: React.FC = () => {
  const {
    notificationsEnabled,
    notificationPermission,
    isIOS,
    isInstalled,
    requestPermission,
    toggleNotifications,
  } = useNotifications();

  return (
    <div className="settings">
      <div className="settings__header">
        <h2>Settings</h2>
      </div>

      <div className="settings__section">
        <h3 className="settings__section-title">Address</h3>
        <div className="settings__item">
          <span className="settings__icon">📍</span>
          <div>
            <p className="settings__label">Collection Address</p>
            <p className="settings__value">19 Rotherley Gardens, Winchester, SO22 6TN</p>
          </div>
        </div>
      </div>

      <div className="settings__section">
        <h3 className="settings__section-title">Notifications</h3>

        {notificationPermission === 'unsupported' ? (
          <div className="settings__item">
            <span className="settings__icon">🔕</span>
            <div>
              <p className="settings__label">Notifications Not Supported</p>
              <p className="settings__value">Your browser does not support notifications</p>
            </div>
          </div>
        ) : isIOS && !isInstalled ? (
          <div className="settings__item">
            <span className="settings__icon">📱</span>
            <div>
              <p className="settings__label">Install App First</p>
              <p className="settings__value">Add to Home Screen via Safari Share button to enable notifications</p>
            </div>
          </div>
        ) : notificationPermission === 'denied' ? (
          <div className="settings__item">
            <span className="settings__icon">🚫</span>
            <div>
              <p className="settings__label">Notifications Blocked</p>
              <p className="settings__value">Enable notifications in your device Settings app</p>
            </div>
          </div>
        ) : notificationPermission === 'default' ? (
          <div className="settings__item">
            <button className="btn btn--primary" onClick={requestPermission}>
              🔔 Enable Notifications
            </button>
          </div>
        ) : (
          <div className="settings__item settings__item--toggle">
            <div>
              <p className="settings__label">Evening Reminders</p>
              <p className="settings__value">Get notified at 7pm the evening before collection</p>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={toggleNotifications}
              />
              <span className="toggle__slider" />
            </label>
          </div>
        )}
      </div>

      <div className="settings__section">
        <h3 className="settings__section-title">About</h3>
        <div className="settings__item">
          <span className="settings__icon">ℹ️</span>
          <div>
            <p className="settings__label">App Version</p>
            <p className="settings__value">v{APP_VERSION}</p>
          </div>
        </div>
        <div className="settings__item">
          <span className="settings__icon">🗑️</span>
          <div>
            <p className="settings__label">Winchester City Council</p>
            <p className="settings__value">Collection Schedule 2026–2027</p>
          </div>
        </div>
      </div>
    </div>
  );
};

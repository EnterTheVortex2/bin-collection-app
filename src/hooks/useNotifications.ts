import { useState, useEffect, useCallback } from 'react';

interface UseNotificationsReturn {
  notificationsEnabled: boolean;
  notificationPermission: NotificationPermission | 'unsupported';
  isIOS: boolean;
  isInstalled: boolean;
  requestPermission: () => Promise<void>;
  toggleNotifications: () => void;
}

function isIOSDevice(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream: unknown }).MSStream;
}

function isInstalledPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as unknown as { standalone: boolean }).standalone === true;
}

const NOTIFICATIONS_KEY = 'notificationsEnabled';

export function useNotifications(): UseNotificationsReturn {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(() => {
    try {
      return localStorage.getItem(NOTIFICATIONS_KEY) !== 'false';
    } catch {
      return true;
    }
  });

  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | 'unsupported'>(() => {
    if (!('Notification' in window)) return 'unsupported';
    return Notification.permission;
  });

  const isIOS = isIOSDevice();
  const isInstalled = isInstalledPWA();

  useEffect(() => {
    localStorage.setItem(NOTIFICATIONS_KEY, String(notificationsEnabled));
  }, [notificationsEnabled]);

  const requestPermission = useCallback(async () => {
    if (!('Notification' in window)) return;
    const permission = await Notification.requestPermission();
    setNotificationPermission(permission);
  }, []);

  const toggleNotifications = useCallback(() => {
    setNotificationsEnabled(prev => !prev);
  }, []);

  return {
    notificationsEnabled,
    notificationPermission,
    isIOS,
    isInstalled,
    requestPermission,
    toggleNotifications,
  };
}

import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Schedule } from './components/Schedule';
import { Settings } from './components/Settings';
import './styles/App.css';

type Tab = 'home' | 'schedule' | 'settings';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="app">
      <main className="app__content">
        {activeTab === 'home' && <Dashboard />}
        {activeTab === 'schedule' && <Schedule />}
        {activeTab === 'settings' && <Settings />}
      </main>
      <nav className="tab-bar">
        <button
          className={`tab-bar__tab ${activeTab === 'home' ? 'tab-bar__tab--active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <span className="tab-bar__tab-icon">🏠</span>
          <span className="tab-bar__tab-label">Home</span>
        </button>
        <button
          className={`tab-bar__tab ${activeTab === 'schedule' ? 'tab-bar__tab--active' : ''}`}
          onClick={() => setActiveTab('schedule')}
        >
          <span className="tab-bar__tab-icon">📅</span>
          <span className="tab-bar__tab-label">Schedule</span>
        </button>
        <button
          className={`tab-bar__tab ${activeTab === 'settings' ? 'tab-bar__tab--active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <span className="tab-bar__tab-icon">⚙️</span>
          <span className="tab-bar__tab-label">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default App;

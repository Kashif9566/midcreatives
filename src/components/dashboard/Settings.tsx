import React, { useState, useEffect } from 'react';
import { Bell, Lock, Globe, Mail, Moon, Sun } from 'lucide-react';

interface NotificationSetting {
  id: string;
  name: string;
  description: string;
  email: boolean;
  push: boolean;
}

const notificationSettings: NotificationSetting[] = [
  {
    id: 'project_updates',
    name: 'Project Updates',
    description: 'Get notified when a project status changes or when new comments are added.',
    email: true,
    push: true,
  },
  {
    id: 'marketing_reports',
    name: 'Marketing Reports',
    description: 'Receive weekly and monthly performance reports.',
    email: true,
    push: false,
  },
  {
    id: 'team_activity',
    name: 'Team Activity',
    description: 'Get notified about team member actions and mentions.',
    email: false,
    push: true,
  },
];

export default function Settings() {
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC',
    twoFactorEnabled: false,
  });

  const [notifications, setNotifications] = useState(notificationSettings);
  const [onboardingData, setOnboardingData] = useState<any>(null);
  const [showOnboardingSection, setShowOnboardingSection] = useState(false);

  useEffect(() => {
    // Load onboarding data if available
    const data = localStorage.getItem('onboardingData');
    if (data) {
      setOnboardingData(JSON.parse(data));
      setShowOnboardingSection(true);
    }
  }, []);

  const handleThemeChange = (theme: string) => {
    setSettings(prev => ({ ...prev, theme }));
    // Implement theme change logic
  };

  const handleNotificationChange = (id: string, type: 'email' | 'push') => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, [type]: !notification[type] }
          : notification
      )
    );
  };

  const resetOnboarding = () => {
    localStorage.removeItem('onboardingCompleted');
    localStorage.removeItem('onboardingData');
    window.location.href = '/onboarding';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>

      {/* Onboarding Preferences Section */}
      {showOnboardingSection && (
        <div className="mt-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                Onboarding Preferences
              </h3>
              <div className="mt-6 space-y-6">
                {onboardingData && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-900 mb-4">Your Preferences</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Business Type</p>
                        <p className="text-sm text-gray-500">{onboardingData.businessType}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Marketing Goal</p>
                        <p className="text-sm text-gray-500">{onboardingData.marketingGoal}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Marketing Services</p>
                        <p className="text-sm text-gray-500">{onboardingData.marketingServices.join(', ')}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Involvement Level</p>
                        <p className="text-sm text-gray-500">{onboardingData.involvement}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">Budget</p>
                        <p className="text-sm text-gray-500">{onboardingData.budget}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-700">AI Insights</p>
                        <p className="text-sm text-gray-500">{onboardingData.aiInsights}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <button
                        onClick={resetOnboarding}
                        className="text-sm text-indigo-600 hover:text-indigo-500"
                      >
                        Reset Onboarding Preferences
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Appearance Section */}
      <div className="mt-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Appearance
            </h3>
            <div className="mt-6 space-y-6">
              <div>
                <label className="text-base font-medium text-gray-900">Theme</label>
                <p className="text-sm text-gray-500">
                  Choose how the dashboard looks to you
                </p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleThemeChange('light')}
                      className={`flex items-center px-3 py-2 rounded-md ${
                        settings.theme === 'light'
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Sun className="h-5 w-5 mr-2" />
                      Light
                    </button>
                    <button
                      onClick={() => handleThemeChange('dark')}
                      className={`flex items-center px-3 py-2 rounded-md ml-4 ${
                        settings.theme === 'dark'
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Moon className="h-5 w-5 mr-2" />
                      Dark
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mt-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notifications
            </h3>
            <div className="mt-6 space-y-6">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex flex-col space-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {notification.name}
                    </label>
                    <p className="text-sm text-gray-500">{notification.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={notification.email}
                        onChange={() => handleNotificationChange(notification.id, 'email')}
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      <Mail className="h-5 w-5 ml-2 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-700">Email</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={notification.push}
                        onChange={() => handleNotificationChange(notification.id, 'push')}
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                      <Bell className="h-5 w-5 ml-2 text-gray-400" />
                      <span className="ml-2 text-sm text-gray-700">Push</span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="mt-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <Lock className="h-5 w-5 mr-2" />
              Security
            </h3>
            <div className="mt-6">
              <div className="flex items-start">
                <div className="flex-1">
                  <label className="text-base font-medium text-gray-900">
                    Two-Factor Authentication
                  </label>
                  <p className="text-sm text-gray-500">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <button
                  onClick={() => setSettings(prev => ({ ...prev, twoFactorEnabled: !prev.twoFactorEnabled }))}
                  className={`${
                    settings.twoFactorEnabled
                      ? 'bg-indigo-600'
                      : 'bg-gray-200'
                  } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <span
                    className={`${
                      settings.twoFactorEnabled ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language and Region Section */}
      <div className="mt-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              Language and Region
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <select
                  id="language"
                  name="language"
                  value={settings.language}
                  onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>

              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                  Timezone
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  value={settings.timezone}
                  onChange={(e) => setSettings(prev => ({ ...prev, timezone: e.target.value }))}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Time</option>
                  <option value="CST">Central Time</option>
                  <option value="PST">Pacific Time</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
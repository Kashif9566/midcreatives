import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import ProjectOverview from './ProjectOverview';
import Projects from './Projects';
import CostOverview from './CostOverview';
import Analytics from './Analytics';
import TeamMembers from './TeamMembers';
import Assets from './Assets';
import Chat from './Chat';
import Profile from './Profile';
import Settings from './Settings';
import Referral from './Referral';
import NewProject from './NewProject';
import ProjectDetails from './ProjectDetails';
import Templates from './Templates';

export default function Dashboard() {
  // Load onboarding data to personalize dashboard
  useEffect(() => {
    const onboardingData = localStorage.getItem('onboardingData');
    if (onboardingData) {
      const data = JSON.parse(onboardingData);
      // Here you would use the data to personalize the dashboard
      console.log('Onboarding data loaded:', data);
    }
  }, []);

  return (
    <DashboardLayout>
      <Routes>
        <Route index element={<ProjectOverview />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/new" element={<NewProject />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="templates" element={<Templates />} />
        <Route path="costs" element={<CostOverview />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="team" element={<TeamMembers />} />
        <Route path="assets" element={<Assets />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="referral" element={<Referral />} />
      </Routes>
    </DashboardLayout>
  );
}
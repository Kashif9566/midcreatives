import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { useSidebarStore } from '../../store/sidebarStore';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart2, 
  MessageSquare, 
  CreditCard,
  Users,
  FolderOpen,
  UserCircle,
  Settings,
  Gift,
  LogOut,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/dashboard/projects', icon: FileText },
  { name: 'Cost Overview', href: '/dashboard/costs', icon: CreditCard },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
  { name: 'Team Members', href: '/dashboard/team', icon: Users },
  { name: 'Assets', href: '/dashboard/assets', icon: FolderOpen },
  { name: 'Chat', href: '/dashboard/chat', icon: MessageSquare },
  { name: 'Profile', href: '/dashboard/profile', icon: UserCircle },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Refer & Earn', href: '/dashboard/referral', icon: Gift },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const signOut = useAuthStore(state => state.signOut);
  const user = useAuthStore(state => state.user);
  const isOpen = useSidebarStore(state => state.isOpen);
  const toggle = useSidebarStore(state => state.toggle);

  const handleStartChat = () => {
    navigate('/dashboard/chat');
  };

  const handleUpgradePlan = () => {
    navigate('/dashboard/costs');
  };

  const handleNewProject = () => {
    navigate('/dashboard/projects/new');
  };

  const handleInviteTeam = () => {
    navigate('/dashboard/team');
  };

  const handleCompleteProfile = () => {
    navigate('/dashboard/profile');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-2xl font-bold text-indigo-600">MaaS</span>
            </div>
            
            {/* User Info */}
            <div className="mt-5 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                    {user?.email?.[0].toUpperCase()}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Welcome,</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon
                        className={`mr-3 flex-shrink-0 h-6 w-6 ${
                          isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
                <button
                  onClick={() => signOut()}
                  className="w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <LogOut className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1">
          <main className="flex-1 pb-8">
            <div className="mt-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </main>
        </div>

        {/* Right Sidebar */}
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Toggle Button */}
          <button
            onClick={toggle}
            className="absolute top-4 -left-8 p-2 bg-white rounded-l-md border border-gray-200 border-r-0 hover:bg-gray-50 focus:outline-none group"
            aria-label={isOpen ? 'Hide sidebar' : 'Show sidebar'}
          >
            {isOpen ? (
              <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
            )}
          </button>

          <div className="flex flex-col h-full">
            {/* Quick Actions */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              <div className="mt-4 space-y-3">
                <button
                  onClick={handleCompleteProfile}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <UserCircle className="h-5 w-5 mr-2 text-gray-400" />
                  Complete Your Profile
                </button>
                <button
                  onClick={handleNewProject}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <FileText className="h-5 w-5 mr-2 text-gray-400" />
                  Start a Project
                </button>
                <button
                  onClick={handleInviteTeam}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <Users className="h-5 w-5 mr-2 text-gray-400" />
                  Invite Team Members
                </button>
              </div>
            </div>

            {/* Live Chat Support */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Live Support</h3>
              <p className="mt-1 text-sm text-gray-500">Need help? Chat with our team.</p>
              <button
                onClick={handleStartChat}
                className="mt-3 w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Start Chat
              </button>
            </div>

            {/* Subscription Plan */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Your Plan</h3>
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-900">Growth Plan</p>
                <p className="text-xs text-gray-500">Renews on Apr 1, 2025</p>
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 rounded-full h-2 w-3/4"></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">75% of monthly quota used</p>
                </div>
                <button
                  onClick={handleUpgradePlan}
                  className="mt-3 w-full flex justify-center items-center px-4 py-2 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
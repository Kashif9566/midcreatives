import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProgressStore } from '../../store/progressStore';

const activeProjects = [
  {
    name: 'Q1 SEO Campaign',
    status: 'in_progress',
    deadline: '2025-03-31',
    progress: 65,
  },
  {
    name: 'Social Media Content',
    status: 'review',
    deadline: '2025-03-15',
    progress: 90,
  },
  {
    name: 'Email Newsletter',
    status: 'draft',
    deadline: '2025-03-20',
    progress: 25,
  },
];

const templates = [
  {
    name: 'SEO Optimization',
    description: 'Complete SEO audit and optimization strategy',
    type: 'SEO',
  },
  {
    name: 'Social Media Campaign',
    description: 'Multi-platform social media campaign template',
    type: 'Social',
  },
  {
    name: 'Email Sequence',
    description: 'Customer onboarding email sequence',
    type: 'Email',
  },
];

export default function ProjectOverview() {
  const navigate = useNavigate();
  const { profileProgress, projectProgress, teamProgress } = useProgressStore();

  const handleViewAllProjects = () => {
    navigate('/dashboard/projects');
  };

  const handleBrowseTemplates = () => {
    navigate('/dashboard/templates');
  };

  const handleStartProject = () => {
    navigate('/dashboard/projects/new');
  };

  const handleContactManager = () => {
    navigate('/dashboard/chat');
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Project Overview</h1>
      
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Active Projects */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-indigo-500 rounded-md p-3">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Projects</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">3</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <button
                onClick={handleViewAllProjects}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                View all projects <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Completed Projects */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-green-500 rounded-md p-3">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Completed Projects</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">12</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <button
                onClick={handleViewAllProjects}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                View history <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pending Projects */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-yellow-500 rounded-md p-3">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Pending Projects</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">2</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <button
                onClick={handleViewAllProjects}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                View pending <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow">
            <div>
              <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                <ArrowRight className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <button
                  onClick={handleStartProject}
                  className="focus:outline-none w-full text-left"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  New Marketing Request
                </button>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Submit a new marketing request for your next campaign
              </p>
            </div>
          </div>

          <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow">
            <div>
              <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                <ArrowRight className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <button
                  onClick={handleContactManager}
                  className="focus:outline-none w-full text-left"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Contact Your Manager
                </button>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Chat with your dedicated marketing manager
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium text-gray-900">Templates & Past Work</h2>
          <button
            onClick={handleBrowseTemplates}
            className="text-indigo-600 hover:text-indigo-500 flex items-center"
          >
            Browse All
            <ArrowRight className="ml-1 h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.name}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                {template.type}
              </span>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{template.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{template.description}</p>
              <button
                onClick={handleStartProject}
                className="mt-4 text-indigo-600 hover:text-indigo-500 text-sm font-medium flex items-center"
              >
                Use Template
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
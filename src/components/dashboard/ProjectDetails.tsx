import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjectStore, Project } from '../../store/projectStore';
import {
  Clock,
  Users,
  MessageSquare,
  FileText,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  Send
} from 'lucide-react';

interface Comment {
  id: string;
  content: string;
  user: string;
  timestamp: string;
}

interface Task {
  id: string;
  title: string;
  status: 'completed' | 'in_progress' | 'pending';
  dueDate: string;
}

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { projects, updateProject } = useProjectStore();
  const [newComment, setNewComment] = useState('');
  const [showRevisionModal, setShowRevisionModal] = useState(false);
  const [revisionNote, setRevisionNote] = useState('');

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    if (!project) {
      navigate('/dashboard/projects');
    }
  }, [project, navigate]);

  if (!project) return null;

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Initial Research',
      status: 'completed',
      dueDate: '2025-03-15'
    },
    {
      id: '2',
      title: 'Strategy Development',
      status: 'in_progress',
      dueDate: '2025-03-20'
    },
    {
      id: '3',
      title: 'Implementation',
      status: 'pending',
      dueDate: '2025-03-25'
    }
  ];

  const comments: Comment[] = [
    {
      id: '1',
      content: 'Initial research phase completed. Moving on to strategy development.',
      user: 'Sarah Johnson',
      timestamp: '2025-03-10 14:30'
    },
    {
      id: '2',
      content: 'Looking good! Keep up the great work.',
      user: 'John Smith',
      timestamp: '2025-03-11 09:15'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'bg-yellow-100 text-yellow-800';
      case 'in_review':
        return 'bg-blue-100 text-blue-800';
      case 'in_progress':
        return 'bg-indigo-100 text-indigo-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTaskStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'pending':
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
      default:
        return null;
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setNewComment('');
  };

  const handleRevisionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle revision request
    setShowRevisionModal(false);
    setRevisionNote('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Project Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{project.name}</h1>
          <div className="mt-1 flex items-center">
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(project.status)}`}>
              {project.status.replace('_', ' ').toUpperCase()}
            </span>
            <span className="ml-4 text-sm text-gray-500">Created on {new Date(project.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowRevisionModal(true)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Request Revision
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          {/* Project Details */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Project Details</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Description</h3>
                <p className="mt-1 text-sm text-gray-900">{project.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Type</h3>
                <p className="mt-1 text-sm text-gray-900">{project.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Deadline</h3>
                <p className="mt-1 text-sm text-gray-900">{project.deadline}</p>
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Tasks</h2>
            <div className="mt-4 space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getTaskStatusIcon(task.status)}
                    <span className="ml-2 text-sm text-gray-900">{task.title}</span>
                  </div>
                  <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Comments</h2>
            <div className="mt-4 space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{comment.user}</span>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{comment.content}</p>
                </div>
              ))}
              <form onSubmit={handleCommentSubmit} className="mt-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Progress */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Progress</h2>
            <div className="mt-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-indigo-600">
                      {project.progress}% Complete
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                  <div
                    style={{ width: `${project.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Team Members</h2>
            <div className="mt-4 space-y-4">
              {project.team_members.map((member, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-indigo-600">
                      {member[0].toUpperCase()}
                    </span>
                  </div>
                  <span className="ml-3 text-sm text-gray-900">{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            <div className="mt-4 space-y-4">
              <div className="relative">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-900">Project submitted</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-900">Team assigned</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revision Request Modal */}
      {showRevisionModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                  <RotateCcw className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Request Revision
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Please provide details about the changes you'd like to request.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleRevisionSubmit} className="mt-5 sm:mt-6">
                <textarea
                  rows={4}
                  value={revisionNote}
                  onChange={(e) => setRevisionNote(e.target.value)}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Describe the changes needed..."
                />

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  >
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowRevisionModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
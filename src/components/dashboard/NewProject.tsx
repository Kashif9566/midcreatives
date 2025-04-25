import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgressStore } from '../../store/progressStore';
import {
  Search,
  Target,
  Share2,
  Mail,
  PenTool,
  Lightbulb,
  Upload,
  Clock,
  Users,
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';

interface ProjectType {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
  examples: string[];
}

const projectTypes: ProjectType[] = [
  {
    id: 'seo-content',
    title: 'SEO & Content Marketing',
    description: 'Improve your search rankings and create engaging content',
    icon: Search,
    examples: ['SEO Strategy', 'Content Creation', 'Blog Posts', 'Website Copy']
  },
  {
    id: 'paid-ads',
    title: 'Paid Ads & Performance',
    description: 'Drive targeted traffic and conversions with paid campaigns',
    icon: Target,
    examples: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display Advertising']
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build your brand presence across social platforms',
    icon: Share2,
    examples: ['Social Strategy', 'Content Calendar', 'Community Management', 'Influencer Marketing']
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Create engaging email campaigns that convert',
    icon: Mail,
    examples: ['Email Campaigns', 'Newsletter Design', 'Automation Setup', 'List Management']
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy & Growth',
    description: 'Develop and grow your brand identity',
    icon: PenTool,
    examples: ['Brand Guidelines', 'Marketing Strategy', 'Growth Planning', 'Market Research']
  },
  {
    id: 'custom',
    title: 'Custom Request',
    description: 'Have something else in mind? Let us know!',
    icon: Lightbulb,
    examples: ['Custom Projects', 'Special Requests', 'Complex Campaigns', 'Unique Ideas']
  }
];

interface ProjectFormData {
  type: string;
  name: string;
  goals: string[];
  audience: string;
  timeline: 'urgent' | 'standard' | 'flexible';
  teamMembers: string[];
  files: File[];
  description: string;
}

const initialFormData: ProjectFormData = {
  type: '',
  name: '',
  goals: [],
  audience: '',
  timeline: 'standard',
  teamMembers: [],
  files: [],
  description: ''
};

export default function NewProject() {
  const navigate = useNavigate();
  const updateProjectProgress = useProgressStore(state => state.updateProjectProgress);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    // Calculate form completion percentage
    const calculateProgress = () => {
      const requiredFields = [
        formData.type,
        formData.name,
        formData.goals.length > 0,
        formData.description
      ];
      
      const completedFields = requiredFields.filter(Boolean).length;
      const progress = Math.round((completedFields / requiredFields.length) * 100);
      updateProjectProgress(progress);
    };

    calculateProgress();
  }, [formData, updateProjectProgress]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...Array.from(e.dataTransfer.files)]
      }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...Array.from(e.target.files!)]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async () => {
    try {
      // Handle project submission
      navigate('/dashboard/projects');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Choose Project Type</h2>
              <p className="mt-2 text-gray-500">Select the type of marketing project you want to create</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setFormData({ ...formData, type: type.id })}
                  className={`relative rounded-lg border p-6 cursor-pointer transition-all ${
                    formData.type === type.id
                      ? 'border-indigo-600 ring-2 ring-indigo-600'
                      : 'border-gray-300 hover:border-indigo-400'
                  }`}
                >
                  {formData.type === type.id && (
                    <div className="absolute top-4 right-4">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                  )}
                  <div className="flex flex-col h-full">
                    <type.icon className="h-8 w-8 text-indigo-600" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{type.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{type.description}</p>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700">Examples:</p>
                      <ul className="mt-2 text-sm text-gray-500 space-y-1">
                        {type.examples.map((example, index) => (
                          <li key={index} className="flex items-center">
                            <ChevronRight className="h-4 w-4 mr-1" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Project Details</h2>
              <p className="mt-2 text-gray-500">Tell us more about your project</p>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="e.g., Q2 SEO Campaign"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Project Goals
                </label>
                <div className="mt-2 space-y-2">
                  {['Increase Traffic', 'Generate Leads', 'Boost Sales', 'Brand Awareness'].map((goal) => (
                    <label key={goal} className="inline-flex items-center mr-6">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, goals: [...formData.goals, goal] });
                          } else {
                            setFormData({
                              ...formData,
                              goals: formData.goals.filter(g => g !== goal)
                            });
                          }
                        }}
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="audience" className="block text-sm font-medium text-gray-700">
                  Target Audience
                </label>
                <textarea
                  id="audience"
                  value={formData.audience}
                  onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Describe your target audience..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Timeline
                </label>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    { id: 'urgent', label: 'Urgent (1-3 days)', icon: Clock },
                    { id: 'standard', label: 'Standard (1-2 weeks)', icon: Clock },
                    { id: 'flexible', label: 'Flexible', icon: Clock }
                  ].map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setFormData({ ...formData, timeline: option.id as any })}
                      className={`relative rounded-lg border p-4 cursor-pointer ${
                        formData.timeline === option.id
                          ? 'border-indigo-600 ring-2 ring-indigo-600'
                          : 'border-gray-300'
                      }`}
                    >
                      <option.icon className="h-6 w-6 text-indigo-600" />
                      <p className="mt-2 text-sm font-medium text-gray-900">{option.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Project Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Provide additional details about your project..."
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Project Assets</h2>
              <p className="mt-2 text-gray-500">Upload any relevant files or documents</p>
            </div>

            <div
              className={`border-2 border-dashed rounded-lg p-10 ${
                dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4 flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      onChange={handleFileSelect}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">Up to 10 files</p>
              </div>
            </div>

            {formData.files.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">Uploaded files</h4>
                <ul className="mt-4 divide-y divide-gray-200">
                  {formData.files.map((file, index) => (
                    <li key={index} className="py-3 flex justify-between items-center">
                      <div className="flex items-center">
                        <Upload className="h-5 w-5 text-gray-400" />
                        <span className="ml-2 text-sm text-gray-500">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-sm font-medium text-red-600 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Review & Submit</h2>
              <p className="mt-2 text-gray-500">Review your project details before submitting</p>
            </div>

            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Project Type</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {projectTypes.find(type => type.id === formData.type)?.title}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Project Name</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formData.name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Goals</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {formData.goals.join(', ')}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Timeline</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {formData.timeline.charAt(0).toUpperCase() + formData.timeline.slice(1)}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Target Audience</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formData.audience}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Description</dt>
                    <dd className="mt-1 text-sm text-gray-900">{formData.description}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Attached Files</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {formData.files.length > 0 ? (
                        <ul className="list-disc pl-5">
                          {formData.files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                          ))}
                        </ul>
                      ) : (
                        'No files attached'
                      )}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Progress Steps */}
      <div className="py-4">
        <div className="flex items-center justify-between w-full">
          {['Project Type', 'Project Details', 'Upload Assets', 'Review'].map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    currentStep > index + 1
                      ? 'bg-indigo-600'
                      : currentStep === index + 1
                      ? 'bg-indigo-600'
                      : 'bg-gray-200'
                  }`}
                >
                  {currentStep > index + 1 ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span className={`text-sm ${currentStep === index + 1 ? 'text-white' : 'text-gray-500'}`}>
                      {index + 1}
                    </span>
                  )}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">{step}</span>
              </div>
              {index < 3 && (
                <div className="flex-1 mx-4">
                  <div className={`h-1 ${currentStep > index + 1 ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="mt-8 bg-white shadow-sm rounded-lg p-8">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 1}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Previous
        </button>
        <button
          type="button"
          onClick={() => {
            if (currentStep === 4) {
              handleSubmit();
            } else {
              setCurrentStep(currentStep + 1);
            }
          }}
          disabled={
            (currentStep === 1 && !formData.type) ||
            (currentStep === 2 && (!formData.name || !formData.description))
          }
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentStep === 4 ? (
            'Submit Project'
          ) : (
            <>
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
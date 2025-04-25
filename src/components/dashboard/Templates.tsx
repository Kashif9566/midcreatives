import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ArrowRight, Star, Clock, ThumbsUp, Bookmark, BookmarkCheck } from 'lucide-react';
import Notification from '../Notification';

interface Template {
  id: string;
  name: string;
  description: string;
  type: string;
  category: string;
  previewImage: string;
  popularity: number;
  createdAt: string;
  recommended: boolean;
  isAvailable?: boolean;
}

const templates: Template[] = [
  {
    id: '1',
    name: 'SEO Campaign Template',
    description: 'A comprehensive SEO strategy template including keyword research, content optimization, and link building.',
    type: 'SEO',
    category: 'Marketing Strategy',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    popularity: 156,
    createdAt: '2025-02-15',
    recommended: true,
    isAvailable: true
  },
  {
    id: '2',
    name: 'Social Media Content Calendar',
    description: 'Monthly content calendar template for managing social media posts across multiple platforms.',
    type: 'Social Media',
    category: 'Content Planning',
    previewImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    popularity: 234,
    createdAt: '2025-02-20',
    recommended: true,
    isAvailable: false
  },
  {
    id: '3',
    name: 'Email Marketing Sequence',
    description: 'Customer onboarding email sequence template with proven conversion tactics.',
    type: 'Email',
    category: 'Automation',
    previewImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    popularity: 189,
    createdAt: '2025-02-25',
    recommended: false,
    isAvailable: false
  },
  {
    id: '4',
    name: 'PPC Campaign Setup',
    description: 'Google Ads campaign structure template for maximum ROI.',
    type: 'PPC',
    category: 'Advertising',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    popularity: 145,
    createdAt: '2025-03-01',
    recommended: true,
    isAvailable: true
  }
];

const categories = [
  'All',
  'Marketing Strategy',
  'Content Planning',
  'Automation',
  'Advertising',
  'Analytics'
];

const types = [
  'All',
  'SEO',
  'Social Media',
  'Email',
  'PPC',
  'Content'
];

type SortOption = 'popular' | 'newest' | 'recommended';

export default function Templates() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [savedTemplates, setSavedTemplates] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const templatesPerPage = 6;

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesType = selectedType === 'All' || template.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popularity - a.popularity;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'recommended':
        return Number(b.recommended) - Number(a.recommended);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage);
  const currentTemplates = filteredTemplates.slice(
    (currentPage - 1) * templatesPerPage,
    currentPage * templatesPerPage
  );

  const handleUseTemplate = (template: Template) => {
    if (template.isAvailable) {
      navigate(`/dashboard/templates/${template.id}`);
    } else {
      // Prevent multiple notifications from stacking
      if (!showNotification) {
        setShowNotification(true);
      }
    }
  };

  const toggleSaveTemplate = (templateId: string) => {
    setSavedTemplates(prev => 
      prev.includes(templateId)
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
  };

  return (
    <div>
      <Notification
        message="This template is not available yet! 🚀 We're actively working on adding it soon. Stay tuned!"
        isVisible={showNotification}
        onClose={() => setShowNotification(false)}
        type="warning"
        duration={5000}
      />

      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Template Library</h1>
          <p className="mt-2 text-sm text-gray-700">
            Browse our collection of pre-built templates to kickstart your marketing projects.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search templates..."
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setSortBy('popular')}
            className={`flex items-center px-3 py-2 rounded-md text-sm ${
              sortBy === 'popular'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Star className="h-4 w-4 mr-1" />
            Most Popular
          </button>
          <button
            onClick={() => setSortBy('newest')}
            className={`flex items-center px-3 py-2 rounded-md text-sm ${
              sortBy === 'newest'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Clock className="h-4 w-4 mr-1" />
            Newest
          </button>
          <button
            onClick={() => setSortBy('recommended')}
            className={`flex items-center px-3 py-2 rounded-md text-sm ${
              sortBy === 'recommended'
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <ThumbsUp className="h-4 w-4 mr-1" />
            Recommended
          </button>
        </div>
      </div>

      {currentTemplates.length > 0 ? (
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentTemplates.map((template) => (
              <div
                key={template.id}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  !template.isAvailable ? 'opacity-75' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={template.previewImage}
                    alt={template.name}
                    className="w-full h-48 object-cover"
                  />
                  {!template.isAvailable && (
                    <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                      <span className="bg-gray-900 bg-opacity-75 text-white px-4 py-2 rounded-full text-sm">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => toggleSaveTemplate(template.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                  >
                    {savedTemplates.includes(template.id) ? (
                      <BookmarkCheck className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <Bookmark className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {template.type}
                    </span>
                    <span className="text-sm text-gray-500">{template.category}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{template.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{template.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {template.popularity} uses
                    </div>
                    <button
                      onClick={() => handleUseTemplate(template)}
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                        template.isAvailable
                          ? 'text-white bg-indigo-600 hover:bg-indigo-700'
                          : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {template.isAvailable ? 'Use Template' : 'Coming Soon'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === index + 1
                        ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 text-center">
          <h3 className="mt-2 text-sm font-medium text-gray-900">No templates found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}
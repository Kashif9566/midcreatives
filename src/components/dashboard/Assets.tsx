import React, { useState } from 'react';
import { Upload, FolderOpen, Image, FileText, Film, Download, Trash2, Search, Grid, List } from 'lucide-react';

interface Asset {
  id: string;
  name: string;
  type: 'image' | 'document' | 'video';
  size: string;
  uploadedBy: string;
  uploadedAt: string;
  url: string;
}

const assets: Asset[] = [
  {
    id: '1',
    name: 'hero-banner.jpg',
    type: 'image',
    size: '2.4 MB',
    uploadedBy: 'Sarah Johnson',
    uploadedAt: '2025-03-01',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  },
  {
    id: '2',
    name: 'marketing-strategy.pdf',
    type: 'document',
    size: '1.2 MB',
    uploadedBy: 'Mike Roberts',
    uploadedAt: '2025-02-28',
    url: '#',
  },
  {
    id: '3',
    name: 'product-demo.mp4',
    type: 'video',
    size: '24.8 MB',
    uploadedBy: 'Emily Kim',
    uploadedAt: '2025-02-27',
    url: '#',
  },
];

const categories = [
  { name: 'All', count: 45 },
  { name: 'Images', count: 23 },
  { name: 'Documents', count: 15 },
  { name: 'Videos', count: 7 },
];

export default function Assets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
      (selectedCategory === 'Images' && asset.type === 'image') ||
      (selectedCategory === 'Documents' && asset.type === 'document') ||
      (selectedCategory === 'Videos' && asset.type === 'video');
    return matchesSearch && matchesCategory;
  });

  const getAssetIcon = (type: string) => {
    switch (type) {
      case 'image':
        return Image;
      case 'document':
        return FileText;
      case 'video':
        return Film;
      default:
        return FileText;
    }
  };

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
      // Handle file upload
      console.log('File dropped:', e.dataTransfer.files);
    }
  };

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Assets</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your marketing assets and files in one place.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Upload className="h-5 w-5 mr-2" />
            Upload Files
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
              placeholder="Search assets..."
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
              <Grid className="h-5 w-5 text-gray-500" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
              <List className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-4">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`
                  whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                  ${selectedCategory === category.name
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {category.name}
                <span className="ml-2 text-gray-400">({category.count})</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Assets Grid/List View */}
      {viewMode === 'grid' ? (
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className="relative group bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-10 aspect-h-7 group-hover:opacity-75">
                {asset.type === 'image' ? (
                  <img
                    src={asset.url}
                    alt={asset.name}
                    className="object-cover pointer-events-none rounded-lg"
                  />
                ) : (
                  <div className="flex items-center justify-center bg-gray-100 rounded-lg">
                    {React.createElement(getAssetIcon(asset.type), {
                      className: 'h-10 w-10 text-gray-400',
                    })}
                  </div>
                )}
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                {asset.name}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {asset.size}
              </p>
              <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 bg-white rounded-full shadow-sm hover:bg-gray-50">
                  <Download className="h-4 w-4 text-gray-500" />
                </button>
                <button className="p-1 bg-white rounded-full shadow-sm hover:bg-gray-50">
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Size
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Uploaded By
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredAssets.map((asset) => (
                  <tr key={asset.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        {React.createElement(getAssetIcon(asset.type), {
                          className: 'h-5 w-5 text-gray-400 mr-2',
                        })}
                        <div className="font-medium text-gray-900">{asset.name}</div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {asset.size}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {asset.uploadedBy}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {asset.uploadedAt}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <div className="flex justify-end space-x-2">
                        <button className="text-indigo-600 hover:text-indigo-900">
                          <Download className="h-5 w-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                  <Upload className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Upload Files
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Drag and drop your files here, or click to select files
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`mt-5 sm:mt-6 border-2 border-dashed rounded-lg p-10 text-center ${
                  dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  className="hidden"
                  id="file-upload"
                  onChange={(e) => {
                    if (e.target.files) {
                      // Handle file selection
                      console.log('Files selected:', e.target.files);
                    }
                  }}
                />
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <p className="mt-1 text-sm text-gray-500">or drag and drop</p>
                </label>
              </div>

              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                >
                  Upload
                </button>
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
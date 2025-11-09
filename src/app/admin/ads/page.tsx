'use client';

import ImageUploadManager from '@/components/ImageUploadManager';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Ad {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  targetUrl: string;
  impressions: number;
  clicks: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface FormData {
  title: string;
  description: string;
  imageUrl: string;
  targetUrl: string;
}

export default function AdminAdsPage() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isUploadManagerOpen, setIsUploadManagerOpen] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    imageUrl: '',
    targetUrl: '',
  });

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const response = await fetch('/api/ads?all=true');
      const data = await response.json();
      setAds(data);
    } catch (error) {
      console.error('Error fetching ads:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const url = editingId ? `/api/ads/${editingId}` : '/api/ads';
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ title: '', description: '', imageUrl: '', targetUrl: '' });
        setEditingId(null);
        fetchAds();
      }
    } catch (error) {
      console.error('Error saving ad:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (ad: Ad) => {
    setEditingId(ad.id);
    setFormData({
      title: ad.title,
      description: ad.description || '',
      imageUrl: ad.imageUrl,
      targetUrl: ad.targetUrl,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleActive = async (id: string, isActive: boolean) => {
    try {
      await fetch(`/api/ads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !isActive }),
      });
      fetchAds();
    } catch (error) {
      console.error('Error toggling ad status:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this ad?')) return;

    try {
      await fetch(`/api/ads/${id}`, { method: 'DELETE' });
      fetchAds();
    } catch (error) {
      console.error('Error deleting ad:', error);
    }
  };

  const calculateCTR = (clicks: number, impressions: number) => {
    if (impressions === 0) return '0.00';
    return ((clicks / impressions) * 100).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Ad Management Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create and manage your self-hosted ads
          </p>
        </div>

        {/* Create/Edit Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {editingId ? 'Edit Ad' : 'Create New Ad'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter ad title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter ad description (optional)"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Image <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsUploadManagerOpen(true)}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center gap-2"
                >
                  📁 {formData.imageUrl ? 'Change Image' : 'Upload Image'}
                </button>
                {formData.imageUrl && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, imageUrl: '' })}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                  >
                    Remove
                  </button>
                )}
              </div>
              
              {formData.imageUrl && (
                <div className="mt-3">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-green-500">
                    <Image
                      src={formData.imageUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                      onError={() => alert('Invalid image URL')}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    ✓ Image selected: <span className="font-mono text-xs">{formData.imageUrl}</span>
                  </p>
                </div>
              )}

              {!formData.imageUrl && (
                <p className="text-sm text-gray-500 mt-2">
                  Click &quot;Upload Image&quot; to select or upload an image from your computer
                </p>
              )}

              {/* Hidden input for form validation */}
              <input
                type="hidden"
                required
                value={formData.imageUrl}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Target URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={formData.targetUrl}
                onChange={(e) => setFormData({ ...formData, targetUrl: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="https://example.com"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
              >
                {submitting ? 'Saving...' : editingId ? 'Update Ad' : 'Create Ad'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({ title: '', description: '', imageUrl: '', targetUrl: '' });
                  }}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Ads List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">All Ads ({ads.length})</h2>
          
          {loading ? (
            <div className="text-center py-8">Loading...</div>
          ) : ads.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No ads yet. Create your first ad above!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left">Preview</th>
                    <th className="px-4 py-3 text-left">Title</th>
                    <th className="px-4 py-3 text-left">Stats</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700">
                  {ads.map((ad) => (
                    <tr key={ad.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-3">
                        <div className="relative w-20 h-20">
                          <Image
                            src={ad.imageUrl}
                            alt={ad.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium">{ad.title}</p>
                          {ad.description && (
                            <p className="text-sm text-gray-500 truncate max-w-xs">
                              {ad.description}
                            </p>
                          )}
                          <a
                            href={ad.targetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:underline"
                          >
                            {ad.targetUrl}
                          </a>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-sm">
                          <p>👁️ {ad.impressions} impressions</p>
                          <p>🖱️ {ad.clicks} clicks</p>
                          <p className="font-medium">
                            CTR: {calculateCTR(ad.clicks, ad.impressions)}%
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleToggleActive(ad.id, ad.isActive)}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            ad.isActive
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {ad.isActive ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(ad)}
                            className="text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(ad.id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Image Upload Manager Modal */}
      <ImageUploadManager
        isOpen={isUploadManagerOpen}
        onClose={() => setIsUploadManagerOpen(false)}
        onSelectImage={(url) => {
          setFormData({ ...formData, imageUrl: url });
          setIsUploadManagerOpen(false);
        }}
      />
    </div>
  );
}

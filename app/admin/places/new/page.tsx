'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash, Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewPlacePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    image: '',
    location: '',
    distanceFromBhuj: '',
    significance: '',
    bestTimeToVisit: '',
    howToReach: '',
    parentDestination: 'Bhuj', // Default
    mapUrl: '',
    facts: [''],
    sections: [
      { heading: 'Overview', content: '', color: 'bg-white', border: '' }
    ],
    gallery: [{ src: '', caption: '' }]
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    setFormData(prev => ({ ...prev, title, slug }));
  };

  const addFact = () => setFormData(prev => ({ ...prev, facts: [...prev.facts, ''] }));
  const removeFact = (index: number) => setFormData(prev => ({ ...prev, facts: prev.facts.filter((_, i) => i !== index) }));
  
  const addSection = () => setFormData(prev => ({ 
    ...prev, 
    sections: [...prev.sections, { heading: '', content: '', color: 'bg-indigo-50', border: 'border-l-4 border-indigo-600' }] 
  }));
  const removeSection = (index: number) => setFormData(prev => ({ ...prev, sections: prev.sections.filter((_, i) => i !== index) }));

  const addGalleryImage = () => setFormData(prev => ({ ...prev, gallery: [...prev.gallery, { src: '', caption: '' }] }));
  const removeGalleryImage = (index: number) => setFormData(prev => ({ ...prev, gallery: prev.gallery.filter((_, i) => i !== index) }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/place', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Place created successfully! Remember to commit your changes.');
        router.push('/admin');
        router.refresh();
      } else {
        alert('Failed to create place');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Add New Place</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
        {/* Basic Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
              <input
                required
                type="text"
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
                placeholder="e.g. Vande Mataram Memorial"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Slug</label>
              <input
                required
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-600 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Main Image</label>
              <input
                required
                type="text"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Parent Destination</label>
              <input
                required
                type="text"
                value={formData.parentDestination}
                onChange={(e) => setFormData(prev => ({ ...prev, parentDestination: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Short Description</label>
              <textarea
                required
                value={formData.shortDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white h-20"
              />
            </div>
          </div>
        </div>

        {/* Place Details */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
           <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Details</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Distance from Bhuj</label>
              <input
                type="text"
                value={formData.distanceFromBhuj}
                onChange={(e) => setFormData(prev => ({ ...prev, distanceFromBhuj: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Best Time to Visit</label>
              <input
                type="text"
                value={formData.bestTimeToVisit}
                onChange={(e) => setFormData(prev => ({ ...prev, bestTimeToVisit: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Map URL</label>
              <input
                type="text"
                value={formData.mapUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, mapUrl: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>
             <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Significance (Long Description)</label>
              <textarea
                value={formData.significance}
                onChange={(e) => setFormData(prev => ({ ...prev, significance: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white h-24"
              />
            </div>
             <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">How to Reach</label>
              <textarea
                value={formData.howToReach}
                onChange={(e) => setFormData(prev => ({ ...prev, howToReach: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white h-20"
              />
            </div>
           </div>
        </div>

        {/* Sections & Facts (Reused Concept) */}
         <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Quick Facts (for Template)</h2>
            <button type="button" onClick={addFact} className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">+ Add Fact</button>
          </div>
          <div className="space-y-3">
            {formData.facts.map((fact, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={fact}
                  onChange={(e) => {
                    const newFacts = [...formData.facts];
                    newFacts[index] = e.target.value;
                    setFormData(prev => ({ ...prev, facts: newFacts }));
                  }}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
                  placeholder="Fact description"
                />
                <button type="button" onClick={() => removeFact(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Sections</h2>
            <button 
              type="button" 
              onClick={addSection}
              className="px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg text-sm font-medium flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Section
            </button>
          </div>
          
          {formData.sections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 relative">
              <button 
                type="button" 
                onClick={() => removeSection(index)}
                className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-lg"
              >
                <Trash className="w-4 h-4" />
              </button>
              
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Heading</label>
                  <input
                    type="text"
                    value={section.heading}
                    onChange={(e) => {
                      const newSections = [...formData.sections];
                      newSections[index].heading = e.target.value;
                      setFormData(prev => ({ ...prev, sections: newSections }));
                    }}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Content</label>
                  <textarea
                    rows={4}
                    value={section.content}
                    onChange={(e) => {
                      const newSections = [...formData.sections];
                      newSections[index].content = e.target.value;
                      setFormData(prev => ({ ...prev, sections: newSections }));
                    }}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gallery */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
           <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Gallery Images</h2>
            <button type="button" onClick={addGalleryImage} className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">+ Add Image</button>
          </div>
          <div className="space-y-4">
             {formData.gallery.map((img, index) => (
              <div key={index} className="flex gap-2 items-start">
                  <div className="flex-1 space-y-2">
                    <input
                        type="text"
                        value={img.src}
                        onChange={(e) => {
                            const newGallery = [...formData.gallery];
                            newGallery[index].src = e.target.value;
                            setFormData(prev => ({ ...prev, gallery: newGallery }));
                        }}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
                        placeholder="Image Path"
                    />
                     <input
                        type="text"
                        value={img.caption}
                        onChange={(e) => {
                            const newGallery = [...formData.gallery];
                            newGallery[index].caption = e.target.value;
                            setFormData(prev => ({ ...prev, gallery: newGallery }));
                        }}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
                        placeholder="Caption"
                    />
                  </div>
                  <button type="button" onClick={() => removeGalleryImage(index)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg mt-1"><Trash className="w-4 h-4" /></button>
              </div>
             ))}
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-500/30 disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            {loading ? 'Creating...' : 'Create Place'}
          </button>
        </div>
      </form>
    </div>
  );
}

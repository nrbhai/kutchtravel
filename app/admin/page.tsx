import { 
  Map, 
  MapPin, 
  Image as ImageIcon, 
  FileText, 
  Plus,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

// Quick Actions Configuration
const actions = [
  {
    title: 'Add Destination',
    description: 'Create a new major destination page with sections and facts.',
    icon: Map,
    href: '/admin/destinations/new',
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
  },
  {
    title: 'Add Place',
    description: 'Add a new specific place (temple, beach, etc.) under a destination.',
    icon: MapPin,
    href: '/admin/places/new',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300'
  },
  {
    title: 'Upload Gallery',
    description: 'Upload new photos to the gallery collection.',
    icon: ImageIcon,
    href: '/admin/gallery',
    color: 'from-purple-500 to-pink-600',
    bg: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300'
  },
  {
    title: 'Write Blog',
    description: 'Publish a new travel guide or story.',
    icon: FileText,
    href: '/admin/blog/new',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300'
  }
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your website content from one central hub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actions.map((action) => (
          <Link 
            key={action.title} 
            href={action.href}
            className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 transition-all p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl ${action.bg}`}>
                <action.icon className="w-6 h-6" />
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 dark:bg-gray-700 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors`}>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {action.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {action.description}
            </p>

            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${action.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-900/30">
        <h2 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
          💡 Local Development Mode
        </h2>
        <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
          Changes made here will generate files in your local filesystem. 
          Remember to <strong>commit your changes to Git</strong> after adding new content 
          to verify them on your deployment.
        </p>
      </div>
    </div>
  );
}

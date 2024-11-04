import React from 'react';
import { Calendar, Users, Gavel, FileText, BarChart3, Settings } from 'lucide-react';

const menuItems = [
  { icon: Calendar, label: 'Calendario', path: '/' },
  { icon: Gavel, label: 'Udienze', path: '/hearings' },
  { icon: Users, label: 'Parti', path: '/parties' },
  { icon: FileText, label: 'Documenti', path: '/documents' },
  { icon: BarChart3, label: 'Statistiche', path: '/stats' },
  { icon: Settings, label: 'Impostazioni', path: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Gavel className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">Gestione Udienze</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center gap-3 px-2 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
import React from 'react';
import Sidebar from './components/Sidebar';
import HearingForm from './components/HearingForm';
import { Bell, Search } from 'lucide-react';

function App() {
  const handleHearingSubmit = (hearing: any) => {
    console.log('New hearing:', hearing);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="search"
                placeholder="Cerca udienze, parti, avvocati..."
                className="pl-10 pr-4 py-2 w-96 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Nuova Udienza</h2>
            <p className="mt-1 text-gray-600">Inserisci i dettagli della nuova udienza</p>
          </div>

          <HearingForm 
            onSubmit={handleHearingSubmit}
            onCancel={() => console.log('Cancelled')}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
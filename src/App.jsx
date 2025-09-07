import React from 'react';
import HeroCover from './components/HeroCover';
import JobsShowcase from './components/JobsShowcase';
import MentorsShowcase from './components/MentorsShowcase';
import EventCTA from './components/EventCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <HeroCover />
      <main>
        <JobsShowcase />
        <MentorsShowcase />
        <EventCTA />
      </main>
      <footer className="border-t border-neutral-800/70">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Campus Career Collective</p>
          <p className="flex items-center gap-2">
            Built with care • Crafted for opportunity
          </p>
        </div>
      </footer>
    </div>
  );
}

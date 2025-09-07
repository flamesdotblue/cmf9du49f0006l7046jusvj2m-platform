import React from 'react';
import { Users } from 'lucide-react';

const mentors = [
  {
    name: 'Aisha Rahman',
    title: 'Head of AI Research, NOVA Systems',
    focus: 'ML Ops, responsible AI, career navigation',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Daniel Cho',
    title: 'Design Systems Lead, Lumen Studio',
    focus: 'Design systems, accessibility, portfolio storytelling',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Priya Natarajan',
    title: 'Robotics Staff Engineer, Axis Robotics',
    focus: 'Perception, ROS, research-to-product',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Marco Alvarez',
    title: 'Product Manager, Arcadia Finance',
    focus: 'Fintech, risk modeling, interview prep',
    photo: 'https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Yuki Tanaka',
    title: 'XR Director, Horizon Works',
    focus: 'Prototyping, Unity, user research',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop'
  },
  {
    name: 'Sofia Martins',
    title: 'Sustainability Analyst, Verdant Labs',
    focus: 'ESG data, SQL, communicating impact',
    photo: 'https://images.unsplash.com/photo-1541214113241-7f4bfaad6bed?q=80&w=640&auto=format&fit=crop'
  }
];

export default function MentorsShowcase() {
  return (
    <section id="mentors" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50rem_25rem_at_80%_0%,rgba(99,102,241,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Mentors & Guides</h2>
            <p className="mt-2 text-neutral-300">Learn from leaders who have shipped, scaled, and paved new paths.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/70 px-3 py-2 text-sm text-neutral-300">
            <Users size={16} className="text-emerald-300" />
            1:1 Office Hours & Group Sessions
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((m) => (
            <div key={m.name} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
              <div className="flex items-start gap-4">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-16 w-16 rounded-lg object-cover border border-neutral-700"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                  <p className="text-sm text-neutral-300">{m.title}</p>
                  <p className="mt-3 text-sm text-neutral-400">Focus: {m.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Users } from 'lucide-react';

const mentors = [
  {
    name: 'Aisha Rahman',
    title: 'Head of AI Research, NOVA Systems',
    focus: 'ML Ops, responsible AI, career navigation',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    name: 'Daniel Cho',
    title: 'Design Systems Lead, Lumen Studio',
    focus: 'Design systems, accessibility, portfolio storytelling',
    color: 'from-sky-400 to-cyan-500'
  },
  {
    name: 'Priya Natarajan',
    title: 'Robotics Staff Engineer, Axis Robotics',
    focus: 'Perception, ROS, research-to-product',
    color: 'from-fuchsia-400 to-pink-500'
  },
  {
    name: 'Marco Alvarez',
    title: 'Product Manager, Arcadia Finance',
    focus: 'Fintech, risk modeling, interview prep',
    color: 'from-amber-400 to-orange-500'
  },
  {
    name: 'Yuki Tanaka',
    title: 'XR Director, Horizon Works',
    focus: 'Prototyping, Unity, user research',
    color: 'from-lime-400 to-emerald-500'
  },
  {
    name: 'Sofia Martins',
    title: 'Sustainability Analyst, Verdant Labs',
    focus: 'ESG data, SQL, communicating impact',
    color: 'from-rose-400 to-red-500'
  }
];

function Avatar({ name, color }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  return (
    <div className={`h-14 w-14 shrink-0 rounded-full bg-gradient-to-br ${color} p-[2px]`}>
      <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-950 text-white font-semibold">
        {initials}
      </div>
    </div>
  );
}

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
                <Avatar name={m.name} color={m.color} />
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

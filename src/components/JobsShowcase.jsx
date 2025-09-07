import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'AI Product Fellow',
    company: 'NOVA Systems',
    location: 'Hybrid • SF / Remote',
    type: 'Full-time',
    tags: ['AI/ML', 'Product', 'Python'],
    blurb: 'Own rapid experiments at the intersection of machine intelligence and user experience.'
  },
  {
    title: 'Sustainability Data Analyst',
    company: 'Verdant Labs',
    location: 'On-site • Seattle',
    type: 'Internship',
    tags: ['Data', 'ESG', 'SQL'],
    blurb: 'Transform climate datasets into insights that guide greener operations.'
  },
  {
    title: 'XR Prototyping Engineer',
    company: 'Horizon Works',
    location: 'Hybrid • Austin',
    type: 'Full-time',
    tags: ['Unity', 'C#', '3D'],
    blurb: 'Build immersive experiences with real-time 3D and spatial UX.'
  },
  {
    title: 'Fintech Risk Associate',
    company: 'Arcadia Finance',
    location: 'Remote • US',
    type: 'Full-time',
    tags: ['Finance', 'Risk', 'SQL'],
    blurb: 'Model novel risk signals for next-gen consumer finance products.'
  },
  {
    title: 'Design Systems Intern',
    company: 'Lumen Studio',
    location: 'On-site • NYC',
    type: 'Internship',
    tags: ['Figma', 'UI', 'Accessibility'],
    blurb: 'Evolve a multi-brand design system used by millions.'
  },
  {
    title: 'Robotics R&D Engineer',
    company: 'Axis Robotics',
    location: 'On-site • Pittsburgh',
    type: 'Full-time',
    tags: ['C++', 'ROS', 'Perception'],
    blurb: 'Prototype autonomous systems for real-world logistics.'
  }
];

function JobCard({ job }) {
  return (
    <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition hover:border-neutral-700 hover:bg-neutral-900/60">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs text-emerald-300/90">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5">{job.type}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold text-white">{job.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-neutral-300">
            <Building2 size={16} className="text-neutral-400" />
            <span>{job.company}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">{job.location}</span>
          </div>
          <p className="mt-3 text-sm text-neutral-300">{job.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <span key={t} className="rounded-full border border-neutral-700 bg-neutral-800/80 px-2.5 py-1 text-xs text-neutral-200">
                {t}
              </span>
            ))}
          </div>
        </div>
        <a href="#apply" className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-neutral-200 opacity-0 transition group-hover:opacity-100">
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}

export default function JobsShowcase() {
  return (
    <section id="jobs" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60rem_30rem_at_10%_-10%,rgba(16,185,129,0.08),transparent),radial-gradient(60rem_30rem_at_110%_10%,rgba(16,185,129,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Featured Opportunities</h2>
            <p className="mt-2 text-neutral-300">Handpicked roles from forward-thinking teams. Be early. Be bold.</p>
          </div>
          <a href="#apply" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20">
            Apply on-site
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={`${job.company}-${job.title}`} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CalendarCheck, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function EventCTA() {
  return (
    <section id="apply" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60rem_30rem_at_0%_100%,rgba(16,185,129,0.07),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
            <h3 className="text-2xl font-semibold text-white">Join us on campus</h3>
            <p className="mt-3 text-neutral-300">Bring your curiosity, portfolio, and questions. Expect live demos, open Q&A, and onsite applications with rapid feedback.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-2 text-neutral-300">
                  <CalendarCheck size={16} className="text-emerald-300" />
                  Dates
                </div>
                <p className="mt-1 text-neutral-200">Oct 22–23, 2025</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-2 text-neutral-300">
                  <MapPin size={16} className="text-emerald-300" />
                  Venue
                </div>
                <p className="mt-1 text-neutral-200">Innovation Hall, North Campus</p>
              </div>
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Clock size={16} className="text-emerald-300" />
                  Hours
                </div>
                <p className="mt-1 text-neutral-200">10:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-neutral-900 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-950">
                Pre-register
                <ArrowRight size={18} />
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700/70 bg-neutral-900/60 px-5 py-3 font-medium text-neutral-100 transition hover:bg-neutral-800/70 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-neutral-950">
                Download schedule
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-900/20 p-8">
            <h4 className="text-lg font-semibold text-white">What to expect</h4>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li>• Curated employer booths with live demos</li>
              <li>• Mentor 1:1s and portfolio reviews</li>
              <li>• Lightning talks on AI, XR, fintech, and climate</li>
              <li>• Onsite applications with fast feedback</li>
              <li>• Swag and networking lounge</li>
            </ul>

            <div className="mt-8 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-200">
              Pro tip: Bring a QR to your resume/portfolio for instant sharing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative w-full h-[82vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-neutral-950/90" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-neutral-900/50 px-3 py-1 text-emerald-300/90 backdrop-blur">
              <Rocket size={16} />
              <span className="text-xs font-medium tracking-wide">Next-Gen Careers Fair 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
              Discover roles shaping tomorrow.
              <br />
              Step into your next chapter.
            </h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-neutral-300">
              A curated selection of breakthrough opportunities and the mentors behind them. Explore, connect, and launch your journey at our new‑age campus job fair.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#jobs" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-neutral-900 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-950">
                Explore Roles
                <ArrowRight size={18} />
              </a>
              <a href="#mentors" className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700/70 bg-neutral-900/60 px-5 py-3 font-medium text-neutral-100 transition hover:bg-neutral-800/70 focus:outline-none focus:ring-2 focus:ring-neutral-600 focus:ring-offset-2 focus:ring-offset-neutral-950">
                Meet Mentors
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-300/90">
              <div className="inline-flex items-center gap-2">
                <Calendar size={16} className="text-emerald-300" />
                <span>October 22–23, 2025</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-emerald-300" />
                <span>Innovation Hall, North Campus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

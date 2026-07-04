'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Install the extension.',
    example: 'Add Gator to Chrome and pin it — loops run right on the page you\'re on.',
  },
  {
    number: '02',
    title: 'Pick a loop.',
    example: 'CI watcher, PR review, research, codegen — or build your own from a prompt.',
  },
  {
    number: '03',
    title: 'Let it run.',
    example: 'The agent loops in your browser tab until the job is done. Check in anytime.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HowItWorksSteps() {
  return (
    <div className="pb-8 md:pb-16 pt-2">
      <motion.div
        className="how-it-works-header mb-6 md:mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        viewport={{ once: true, margin: '-40px' }}
      >
        <h2 className="how-it-works-heading font-funneldisplay text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight text-ink leading-[1.15]">
          Agent loops,
          <br />
          right in your browser.
        </h2>
      </motion.div>

      <div className="steps-grid grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease }}
            viewport={{ once: true, margin: '-20px' }}
            className="step-card rounded-xl bg-canvas-section p-4 shadow-sm ring-1 ring-black/5 sm:p-6 md:p-8"
          >
            <span className="step-number block font-mono text-2xl sm:text-3xl text-slate-300 tabular-nums">
              {step.number}
            </span>
            <h3 className="step-title font-sans text-lg sm:text-xl font-semibold text-ink mt-4 mb-3">
              {step.title}
            </h3>
            <p className="step-example text-sm sm:text-base text-slate-500 leading-relaxed">
              {step.example}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

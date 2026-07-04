'use client';

import { motion } from 'framer-motion';

const actions = [
  { label: 'Pause.', colorClass: 'text-amber-400' },
  { label: 'Resume.', colorClass: 'text-fern-light' },
  { label: 'Override.', colorClass: 'text-white' },
  { label: 'Reassign.', colorClass: 'text-sky-400' },
  { label: 'Terminate.', colorClass: 'text-red-400' },
] as const;

const actionsLight = [
  { label: 'Pause.', colorClass: 'text-amber-600' },
  { label: 'Resume.', colorClass: 'text-trooper' },
  { label: 'Override.', colorClass: 'text-slate-900' },
  { label: 'Reassign.', colorClass: 'text-blue-600' },
  { label: 'Terminate.', colorClass: 'text-red-700' },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

type GovernanceSectionProps = {
  variant?: 'light' | 'dark';
};

export default function GovernanceSection({
  variant = 'light',
}: GovernanceSectionProps) {
  const dark = variant === 'dark';
  const actionList = dark ? actions : actionsLight;

  return (
    <div className={dark ? 'py-10 md:py-14 lg:py-16' : 'pb-8 md:pb-16 pt-2'}>
      <motion.div
        className={`governance-header mb-6 md:mb-12 max-w-3xl ${dark ? 'space-y-3' : ''}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        viewport={{ once: true, margin: '-40px' }}
      >
        <h2
          className={`governance-heading font-funneldisplay text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.15] ${
            dark ? 'text-white' : 'text-slate-900'
          }`}
        >
          You&apos;re in charge.
        </h2>
        <p
          className={`governance-sub text-sm sm:text-base mt-3 leading-relaxed ${
            dark ? 'text-white/50' : 'text-slate-500'
          }`}
        >
          Pause, override, or stop any loop. You stay in control.
        </p>
      </motion.div>

      <div className="governance-content grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        <motion.div
          className={`governance-block rounded-xl p-4 sm:p-6 md:p-8 ${
            dark
              ? 'border border-white/[0.08] bg-white/[0.03]'
              : 'bg-white shadow-sm ring-1 ring-black/5'
          }`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          viewport={{ once: true, margin: '-20px' }}
        >
          <p
            className={`text-sm sm:text-base leading-relaxed ${
              dark ? 'text-white/70' : 'text-slate-600'
            }`}
          >
            You call the shots. Pause a loop, reassign a task, or stop an agent anytime.
            Autonomy is something you grant — not the default.
          </p>
        </motion.div>

        <motion.div
          className={`governance-block flex items-center rounded-xl p-4 sm:p-6 md:p-8 ${
            dark
              ? 'border border-white/[0.08] bg-white/[0.03]'
              : 'bg-white shadow-sm ring-1 ring-black/5'
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
          }}
        >
          <p className="governance-actions flex flex-col gap-1 sm:gap-2">
            {actionList.map((action) => (
              <motion.span
                key={action.label}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                }}
                className={`governance-action-line font-funneldisplay text-xl sm:text-3xl md:text-4xl tracking-tight ${action.colorClass}`}
              >
                {action.label}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

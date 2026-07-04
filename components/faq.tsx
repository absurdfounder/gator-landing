"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { formatUsd, PRICING_USD } from '@/lib/pricing';

interface FAQ {
  question: string;
  answer: string;
}

type FAQCategories = {
  [key: string]: FAQ[];
};

const faqs: FAQCategories = {
  General: [
    {
      question: 'What is Gator?',
      answer:
        'A browser extension that runs autonomous agent loops on any tab — research, code, reviews, CI, and more. Powered by OpenClaw.',
    },
    {
      question: 'How is Gator different from ChatGPT?',
      answer:
        'ChatGPT is a chat box. Gator runs loops in your browser until the job is done — browsing, clicking, coding, and shipping on real sites.',
    },
    {
      question: 'What is OpenClaw?',
      answer:
        'The open-source engine behind Gator. It handles agents, memory, skills, and task execution.',
    },
    {
      question: 'Which browsers are supported?',
      answer: 'Chrome, Firefox, and Safari. Install the extension for your browser from the homepage.',
    },
    {
      question: 'Do I need to code?',
      answer: 'No. Pick a loop or describe a task. Gator handles the rest in your browser tab.',
    },
  ],
  'How it works': [
    {
      question: 'What is an agent loop?',
      answer:
        'A loop keeps working on a task in your browser — research a page, fix a PR, watch CI — until it finishes or you stop it.',
    },
    {
      question: 'What can loops do?',
      answer:
        'Anything you do in a browser: GitHub, Gmail, Slack, docs, dashboards. If you can do it in a tab, Gator can loop on it.',
    },
    {
      question: 'Can I pause or override?',
      answer: 'Yes. Pause, resume, reassign, or stop any loop at any time.',
    },
    {
      question: 'What are OpenClaw Skills?',
      answer:
        '3,000+ plugins on ClawHub — coding, browser automation, DevOps, docs, and more. Extend what your loops can do.',
    },
    {
      question: 'Does Gator work with GitHub?',
      answer: 'Yes. Loops can open PRs, review code, fix CI, and commit — on real repos.',
    },
  ],
  Pricing: [
    {
      question: 'Do I need my own API keys?',
      answer: 'Yes. Bring your own OpenAI, Anthropic, or other keys. You pay providers directly — no markup.',
    },
    {
      question: 'What plans are available?',
      answer: `Local lifetime ${formatUsd(PRICING_USD.localLifetime)}. Solo Cloud lifetime ${formatUsd(PRICING_USD.cloudLifetime)}. Gator Cloud from ${formatUsd(PRICING_USD.cloudStandardMonthly)}/mo. Enterprise is custom.`,
    },
    {
      question: 'Is hosting included on Cloud?',
      answer: 'Yes. Gator Cloud includes hosted workspace and runtime — no servers to manage.',
    },
    {
      question: 'Can I self-host?',
      answer: 'Enterprise can deploy on your own infra with SSO, VPC, and custom security.',
    },
    {
      question: 'Discounts for startups?',
      answer: 'Yes — students, startups, and nonprofits. Email support@gator.so.',
    },
  ],
  Technical: [
    {
      question: 'Is my data secure?',
      answer: 'Isolated workspaces, encrypted connections. API keys stay on your side. Enterprise adds SSO and VPC.',
    },
    {
      question: 'What integrations work?',
      answer: 'GitHub, Gmail, Slack, Discord, WhatsApp, Telegram, Notion, Linear, and 3,000+ OpenClaw skills.',
    },
    {
      question: 'Can agents run shell commands?',
      answer: 'On Cloud and self-hosted plans, yes — sandboxed on the always-on virtual PC.',
    },
    {
      question: 'Can I build custom skills?',
      answer: 'Yes. SKILL.md + setup files for your internal APIs and tools.',
    },
    {
      question: 'Can I export my data?',
      answer: 'Yes. Workflows, agents, and workspace data can be exported anytime.',
    },
  ],
};

interface FAQCellProps {
  question: string;
  answer: string;
  index: number;
  totalCount: number;
}

const FAQCell: React.FC<FAQCellProps> = ({ question, answer, index, totalCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLastMobile = index === totalCount - 1;
  const borderClasses = !isLastMobile ? 'border-b border-slate-100 md:border-b-0' : '';

  return (
    <div className={`relative rounded-xl bg-white shadow-sm ring-1 ring-black/5 ${borderClasses}`}>
      <button
        className="w-full text-left px-4 py-4 sm:px-6 sm:py-6 flex items-start gap-3 sm:gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-semibold text-slate-900 text-[14px] sm:text-base leading-snug">
          {question}
        </span>
        <span
          className="font-mono text-slate-400 text-base leading-none mt-0.5 select-none"
          aria-hidden="true"
        >
          {isOpen ? '[−]' : '[+]'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-sm leading-relaxed text-slate-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('General');
  const activeFaqs = faqs[activeTab];

  return (
    <div className="px-0 pt-4 sm:pt-6 pb-12 sm:pb-20 max-w-7xl mx-auto">
      <div className="max-w-2xl">
        <h2 className="font-funneldisplay text-[1.65rem] sm:text-4xl tracking-tight text-slate-900">
          FAQ
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-3">
          More questions?{' '}
          <a
            href="mailto:support@gator.so"
            className="text-fern hover:underline"
            target="_blank"
            rel="noopener"
          >
            support@gator.so
          </a>
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-b border-slate-100 sm:mt-8 sm:gap-x-6">
        {Object.keys(faqs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`-mb-px pb-2.5 sm:pb-3 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.12em] sm:tracking-[0.15em] transition-colors ${
              activeTab === tab
                ? 'text-slate-900 border-b-2 border-fern'
                : 'text-slate-500 hover:text-slate-800 border-b-2 border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {activeFaqs.map((faq, index) => (
          <FAQCell
            key={`${activeTab}-${index}`}
            question={faq.question}
            answer={faq.answer}
            index={index}
            totalCount={activeFaqs.length}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

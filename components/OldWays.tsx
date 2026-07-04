'use client';

import { useEffect, useRef, useState } from 'react';
import MerlinFeaturePanel from '@/components/MerlinFeaturePanel';
import GatorCharacter from '@/components/GatorCharacter';
import SmartRoutingSection from './SmartRoutingSection';
import DataSourcesSection from './DataSourcesSection';
import { CAPABILITY_MERLIN_IMAGES } from '@/lib/trooperFeatureMerlinImages';
import { capabilityCharacterIds } from '@/lib/gatorCharacters';

function FeatureKicker({ index, label }: { index: string; label: string }) {
  return (
    <p className="kicker text-sm sm:text-base">
      <span className="text-ink-faint/80">[{index}]</span>{' '}
      <span className="normal-case">{label}</span>
    </p>
  );
}

const sectionXPadding = 'px-4 sm:px-6 lg:px-8';

export default function OldWays() {
  const [cardTransforms, setCardTransforms] = useState<Array<{ scale: number; opacity: number; y: number }>>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    { tag: 'AI ORGANIZATIONS', title: 'AI organizations, not', highlight: 'single-purpose agents.', description: 'Gator lets you create AI organizations made up of multiple AI employees. Each organization works together on tasks, shares context, and coordinates execution — similar to how real teams operate.' },
    { tag: 'SKILLS & INTEGRATIONS', title: 'AI employees with real', highlight: 'skills and system access.', description: "AI employees can be connected to skills like GitHub, Gmail, Apple Notes, databases, APIs, and internal tools through OpenClaw. They don't just think — they operate inside your actual systems." },
    { tag: 'ACTION, NOT ANSWERS', title: 'AI that takes', highlight: 'action, not just questions.', description: 'Instead of replying with suggestions, AI employees create issues, update files, send emails, take screenshots, post updates, and complete real tasks from start to finish.' },
    { tag: 'INFINITE MEMORY', title: 'Persistent memory across', highlight: 'tasks, projects, and time.', description: 'AI employees remember past work, decisions, preferences, and project context. Every task builds on previous knowledge, so work gets faster and more accurate over time.' },
    { tag: 'WEEKS-LONG RUNS', title: 'Runs for weeks without', highlight: 'losing context.', description: "AI employees don't forget after a session ends. They maintain full context across weeks-long projects, coordinating deadlines, tracking progress, and keeping your team aligned from start to finish." },
    { tag: 'OPENCLAW RUNTIME', title: 'Powered by OpenClaw', highlight: 'private server for each org.', description: 'Gator deploys OpenClaw backend on a private server, keeping your company data siloed and safe. Also giving you full untampered access to OpenClaw with a beautiful UI.' },
    { tag: 'TICKET SYSTEM', title: 'Every conversation traced.', highlight: 'Every decision explained.', description: 'You communicate with agents through tickets. Every instruction, every response, every tool call and decision is recorded with full tracing. Nothing happens in the dark.' },
    { tag: 'GOAL ALIGNMENT', title: 'Keep your agents aligned', highlight: 'on the goal.', description: 'Every piece of work is given context that traces back to the company mission. Your agents will know what to do and why. Goals cascade from company → project → agent → task.' },
    { tag: 'BRING YOUR OWN AGENT', title: 'Bring your own bot.', highlight: '', description: "Your OpenClaw, Claude, Cursor, and Codex — organized under one org structure, pointed at one goal. If it can receive a heartbeat, it's hired." },
  ];

  useEffect(() => {
    const calculateTransforms = () => {
      const isMobile = window.innerWidth < 1024;
      const stickyTop = window.innerHeight * 0.15;
      const transforms: { scale: number; opacity: number; y: number }[] = [];

      if (isMobile) {
        setCardTransforms(cards.map(() => ({ scale: 1, opacity: 1, y: 0 })));
        return;
      }

      let activeCardIndex = 0;
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        if (card.getBoundingClientRect().top <= stickyTop + 10) activeCardIndex = index;
      });
      cardRefs.current.forEach((card, index) => {
        if (!card) {
          transforms.push({ scale: 1, opacity: 1, y: 0 });
          return;
        }
        const cardsOnTop = Math.max(0, activeCardIndex - index);
        if (cardsOnTop > 0) {
          transforms.push({
            scale: Math.max(0.94, 1 - 0.02 * cardsOnTop),
            opacity: Math.max(0.55, 1 - 0.1 * cardsOnTop),
            y: -6 * cardsOnTop,
          });
        } else {
          transforms.push({ scale: 1, opacity: 1, y: 0 });
        }
      });
      setCardTransforms((prev) => {
        if (
          prev.length === transforms.length &&
          prev.every(
            (p, i) =>
              p.scale === transforms[i].scale &&
              p.opacity === transforms[i].opacity &&
              p.y === transforms[i].y,
          )
        ) {
          return prev;
        }
        return transforms;
      });
    };
    calculateTransforms();
    let rafId: number | undefined;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(calculateTransforms);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateTransforms);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateTransforms);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const renderCapabilityCard = (card: (typeof cards)[number], index: number, displayNum: string) => {
    const t = cardTransforms[index] || { scale: 1, opacity: 1, y: 0 };
    const cardIndex = displayNum;
    const featureImage = CAPABILITY_MERLIN_IMAGES[index] ?? CAPABILITY_MERLIN_IMAGES[0];

    return (
      <div
        key={index}
        ref={(el) => {
          cardRefs.current[index] = el;
        }}
        className="lg:sticky lg:top-[14vh] pb-16"
        style={{
          zIndex: cards.length + index,
        }}
      >
        <article
          className="relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 will-change-transform"
          style={{
            transform: `scale(${t.scale}) translateY(${t.y}px)`,
            opacity: t.opacity,
            transformOrigin: 'center top',
            transition:
              'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {index === 8 && (
            <span className="absolute top-3 right-3 z-20 rounded-sm bg-fern-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-fern-800 ring-1 ring-fern-200 sm:top-4 sm:right-4">
              Flagship
            </span>
          )}

          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className={`${sectionXPadding} flex flex-col justify-center py-8 sm:py-10 md:py-12 lg:py-14`}>
              <FeatureKicker index={cardIndex} label={card.tag} />
              <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-balance text-ink sm:mt-5 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]">
                {card.title}{' '}
                {card.highlight ? <span className="text-ink-muted">{card.highlight}</span> : null}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-[15px] sm:leading-7">
                {card.description}
              </p>
              <GatorCharacter
                id={capabilityCharacterIds[index] ?? 'laptop'}
                size="sm"
                className="mt-6"
              />
            </div>

            <div className="relative min-h-[320px] border-t border-[var(--color-line)] sm:min-h-[380px] lg:min-h-[500px] lg:border-t-0 lg:rounded-r-xl">
              <MerlinFeaturePanel src={featureImage} alt={card.tag} className="absolute inset-0" />
            </div>
          </div>
        </article>
      </div>
    );
  };

  return (
    <div className="relative pb-6 sm:pb-10 md:pb-14">
      <div className="relative space-y-4 sm:space-y-5 md:space-y-6" style={{ perspective: '1000px' }}>
        {renderCapabilityCard(cards[0], 0, '01')}
        {renderCapabilityCard(cards[1], 1, '02')}
        {renderCapabilityCard(cards[2], 2, '03')}
        {renderCapabilityCard(cards[3], 3, '04')}
        <DataSourcesSection kicker="05" />
        {renderCapabilityCard(cards[4], 4, '06')}
        {renderCapabilityCard(cards[5], 5, '07')}
        {renderCapabilityCard(cards[6], 6, '08')}
        {renderCapabilityCard(cards[7], 7, '09')}
        <SmartRoutingSection kicker="10" />
        {renderCapabilityCard(cards[8], 8, '11')}
      </div>
    </div>
  );
}

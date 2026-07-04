'use client';

import GatorLogo from '@/components/ui/GatorLogo';
import DownloadExtensionButton from '@/components/ui/DownloadExtensionButton';
import Link from 'next/link';
import {
  Twitter,
  Github,
  Users,
  CheckCircle,
  Brain,
  Globe,
  Terminal,
  Mail,
  Puzzle,
  Network,
  Zap,
} from 'lucide-react';

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
};

type CellGroup = {
  heading: string;
  links: LinkItem[];
};

type FooterColumn = {
  eyebrow: string;
  groups: CellGroup[];
};

const featureColumn: FooterColumn = {
  eyebrow: 'Features',
  groups: [
    {
      heading: 'Features',
      links: [
        { label: 'AI Workforce', href: '/features/ai-workforce', icon: <Users className="h-3.5 w-3.5 text-emerald-500" /> },
        { label: 'GitHub Integration', href: '/features/github-integration', icon: <Github className="h-3.5 w-3.5 text-orange-500" /> },
        { label: 'Task Execution', href: '/features/task-execution', icon: <CheckCircle className="h-3.5 w-3.5 text-yellow-500" /> },
        { label: 'Persistent Memory', href: '/features/persistent-memory', icon: <Brain className="h-3.5 w-3.5 text-green-500" /> },
        { label: 'Browser Control', href: '/features/browser-control', icon: <Globe className="h-3.5 w-3.5 text-emerald-500" /> },
        { label: 'System Access', href: '/features/system-access', icon: <Terminal className="h-3.5 w-3.5 text-indigo-500" /> },
        { label: 'Email & Communication', href: '/features/email-automation', icon: <Mail className="h-3.5 w-3.5 text-violet-500" /> },
        { label: 'Chat Anywhere', href: '/features/chat-interfaces', icon: <Mail className="h-3.5 w-3.5 text-green-500" /> },
        { label: 'Messaging Channels', href: '/channels', icon: <Mail className="h-3.5 w-3.5 text-blue-500" /> },
        { label: 'Skills & Plugins', href: '/features/skills-plugins', icon: <Puzzle className="h-3.5 w-3.5 text-pink-500" /> },
        { label: 'Multi-Agent Teams', href: '/features/multi-agent-collaboration', icon: <Network className="h-3.5 w-3.5 text-cyan-500" /> },
        { label: 'Plugin Integrations', href: '/plugin', icon: <Zap className="h-3.5 w-3.5 text-purple-500" /> },
        { label: 'OpenClaw Skills', href: '/integration', icon: <Puzzle className="h-3.5 w-3.5 text-violet-500" /> },
        { label: 'Agent Loops', href: '/loops', icon: <Zap className="h-3.5 w-3.5 text-emerald-600" /> },
      ],
    },
    {
      heading: 'Get help',
      links: [
        { label: 'Contact us', href: 'mailto:support@gator.so' },
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Terms of service', href: '/terms' },
      ],
    },
  ],
};

const productColumn: FooterColumn = {
  eyebrow: 'Product',
  groups: [
    {
      heading: 'Product',
      links: [
        { label: 'How it works', href: '/' },
        { label: 'Plugin Integrations', href: '/plugin' },
        { label: 'OpenClaw Skills', href: '/integration' },
        { label: 'Agent Loops', href: '/loops' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Changelog', href: 'https://app.gator.so/changelog', external: true },
        { label: 'Download', href: '/download' },
        { label: 'Dashboard', href: 'https://app.gator.so', external: true },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Industries', href: '/industries' },
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Alternatives', href: '/alternatives' },
        { label: 'Documentation', href: 'https://docs.openclaw.ai', external: true },
        { label: 'Blog', href: 'https://app.gator.so/blog', external: true },
        { label: 'Changelog', href: 'https://app.gator.so/changelog', external: true },
      ],
    },
  ],
};

const ecosystemColumn: FooterColumn = {
  eyebrow: 'OpenClaw Ecosystem',
  groups: [
    {
      heading: 'OpenClaw Ecosystem',
      links: [
        { label: 'OpenClaw AI', href: 'https://openclaw.ai', external: true },
        { label: 'GitHub OpenClaw', href: 'https://github.com/openclaw/openclaw', external: true },
        { label: 'ClawHub Skills', href: 'https://clawhub.com', external: true },
        { label: 'Discord Community', href: 'https://discord.com/invite/clawd', external: true },
        { label: 'OpenClaw Docs', href: 'https://docs.openclaw.ai', external: true },
      ],
    },
  ],
};

function CellHeader({ eyebrow }: { eyebrow: string }) {
  return (
    <div className="text-sm font-semibold text-slate-900">{eyebrow}</div>
  );
}

function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="space-y-1.5">
      {links.map((l) => {
        const className =
          'group flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900';
        const content = (
          <>
            {l.icon ? <span className="shrink-0">{l.icon}</span> : null}
            <span>{l.label}</span>
          </>
        );
        if (l.external) {
          return (
            <li key={l.label}>
              <a
                className={className}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            </li>
          );
        }
        return (
          <li key={l.label}>
            <Link className={className} href={l.href}>
              {content}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function FooterColumnCell({
  column,
}: {
  column: FooterColumn;
}) {
  return (
    <div className="flex flex-col gap-6 px-6 py-8 md:px-8 md:py-10">
      <CellHeader eyebrow={column.eyebrow} />
      {column.groups.map((group, gIdx) => (
        <div
          key={group.heading}
          className={gIdx > 0 ? 'border-t border-slate-100 pt-5' : ''}
        >
          {column.groups.length > 1 && (
            <div className="mb-3 text-sm font-semibold text-slate-900">{group.heading}</div>
          )}
          <LinkList links={group.links} />
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  const linkColumns = [featureColumn, productColumn, ecosystemColumn];
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-12">
          <div className="flex flex-col gap-5 px-6 sm:col-span-2 md:px-8 lg:col-span-1">
            <CellHeader eyebrow="Gator" />
            <GatorLogo
              variant="wordmark"
              iconClassName="h-10 w-10 sm:h-11 sm:w-11 object-contain"
            />
            <p className="text-sm leading-relaxed text-slate-600">
              Browser agent loops powered by OpenClaw. Research, code, review, and ship from any tab.
            </p>
            <p className="text-sm text-slate-600">
              Built by{' '}
              <a
                className="text-emerald-600 hover:underline"
                href="https://twitter.com/absurdfounder"
                target="_blank"
                rel="noopener noreferrer"
              >
                @absurdfounder
              </a>
              .
            </p>
            <ul className="mt-auto space-y-1.5 pt-2">
              <li>
                <a
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/absurdfounder"
                >
                  <Twitter className="h-3.5 w-3.5 text-slate-400" />
                  <span>Twitter (X)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Link cells */}
          {linkColumns.map((col) => (
              <div key={col.eyebrow}>
                <FooterColumnCell column={col} />
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-100 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 md:text-sm">
            <span>© Boring Sites LLC. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
          </div>
          <DownloadExtensionButton size="sm" />
        </div>

        {/* Giant gator. watermark */}
        <div className="overflow-x-hidden border-t border-slate-100 pb-5 pt-3 sm:pb-6 sm:pt-4 md:pb-8">
          <p
            aria-hidden
            className="pointer-events-none select-none whitespace-nowrap text-center font-display lowercase leading-none tracking-tight text-slate-200 text-[clamp(2.75rem,18vw,12rem)]"
          >
            gator.
          </p>
        </div>
      </div>
    </footer>
  );
}

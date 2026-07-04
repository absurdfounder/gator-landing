import { playbookContent, workflow } from '../helpers';

export const emailAutomationPlaybookWorkflow = playbookContent(
  'Email playbooks',
  'inbox to action.',
  'Inbound parsing, draft replies, and send gates — traced with Gmail and Slack.',
  [
    workflow(
      'inbound-parse',
      'Inbound parse',
      'Email received',
      [
        { label: 'Inbox message', kind: 'trigger', iconDomain: 'gmail.com' },
        { label: 'Parse intent', kind: 'agent', agent: 'Codex' },
        { label: 'Create ticket', kind: 'agent', agent: 'Claude Code' },
        { label: 'Route owner', kind: 'integration', iconDomain: 'gator' },
        { label: 'Triage gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Misclassification', value: 'Down 58%' },
    ),
    workflow(
      'draft-reply',
      'Draft reply',
      'Reply needed',
      [
        { label: 'Awaiting reply', kind: 'trigger', iconDomain: 'gmail.com' },
        { label: 'Load thread context', kind: 'agent', agent: 'OpenCode' },
        { label: 'Draft response', kind: 'agent', agent: 'Claude Code' },
        { label: 'Hold in drafts', kind: 'integration', iconDomain: 'gmail.com' },
        { label: 'Send gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Draft acceptance', value: '82% sent as-is' },
    ),
    workflow(
      'send-gate',
      'Send gate',
      'Outbound ready',
      [
        { label: 'Reply approved', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Final tone check', kind: 'agent', agent: 'Codex' },
        { label: 'Send email', kind: 'agent', agent: 'Claude Code' },
        { label: 'Log to ticket', kind: 'integration', iconDomain: 'gator' },
        { label: 'Archive gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Send latency', value: '4 hr → 8 min' },
    ),
  ],
);

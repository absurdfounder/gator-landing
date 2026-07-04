import { playbookContent, workflow } from '../helpers';

export const businessDevelopmentPlaybookWorkflow = playbookContent(
  'BD playbooks',
  'that compound.',
  'Partner research, intro drafts, and pipeline sync — traced with LinkedIn, HubSpot, and Gmail.',
  [
    workflow(
      'partner-research',
      'Partner research',
      'Target list updated',
      [
        { label: 'Partner target', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Firmographic scan', kind: 'agent', agent: 'Codex' },
        { label: 'Fit scoring', kind: 'agent', agent: 'Claude Code' },
        { label: 'Log to HubSpot', kind: 'integration', iconDomain: 'hubspot.com' },
        { label: 'BD lead gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Research time', value: '2 hr → 20 min per target' },
    ),
    workflow(
      'intro-draft',
      'Intro draft',
      'Warm intro request',
      [
        { label: 'Intro ask', kind: 'trigger', iconDomain: 'gmail.com' },
        { label: 'Draft double-opt', kind: 'agent', agent: 'Claude Code' },
        { label: 'LinkedIn context', kind: 'agent', agent: 'OpenCode' },
        { label: 'Send intro email', kind: 'integration', iconDomain: 'gmail.com' },
        { label: 'Partner gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Intro acceptance', value: '+28% vs cold' },
    ),
    workflow(
      'pipeline-sync',
      'Pipeline sync',
      'Cron weekly',
      [
        { label: 'Weekly BD review', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Pipeline digest', kind: 'agent', agent: 'Codex' },
        { label: 'Next actions', kind: 'agent', agent: 'Claude Code' },
        { label: 'Update CRM', kind: 'integration', iconDomain: 'hubspot.com' },
        { label: 'Leadership gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Stale deals flagged', value: '100% weekly coverage' },
    ),
  ],
);

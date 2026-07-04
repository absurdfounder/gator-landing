import { playbookContent, workflow } from '../helpers';

export const browserControlPlaybookWorkflow = playbookContent(
  'Browser playbooks',
  'agents execute.',
  'Form fills, scrape-and-act flows, and authenticated sessions — traced on the live browser canvas.',
  [
    workflow(
      'form-fill',
      'Form fill',
      'Form mission',
      [
        { label: 'Form URL', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Navigate + read', kind: 'agent', agent: 'Claude Code' },
        { label: 'Fill fields', kind: 'agent', agent: 'Codex' },
        { label: 'Capture screenshot', kind: 'integration', iconDomain: 'gator' },
        { label: 'Submit gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Form error rate', value: 'Down 78%' },
    ),
    workflow(
      'scrape-act',
      'Scrape + act',
      'Research task',
      [
        { label: 'Target page', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Extract data', kind: 'agent', agent: 'Codex' },
        { label: 'Structured output', kind: 'agent', agent: 'OpenCode' },
        { label: 'Save artifact', kind: 'integration', iconDomain: 'gator' },
        { label: 'Quality gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Extraction accuracy', value: '96% verified' },
    ),
    workflow(
      'auth-flow',
      'Authenticated flow',
      'Login required',
      [
        { label: 'Auth needed', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Session login', kind: 'agent', agent: 'Claude Code' },
        { label: 'Execute steps', kind: 'agent', agent: 'Codex' },
        { label: 'Log trace', kind: 'integration', iconDomain: 'gator' },
        { label: 'Human gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Session failures', value: '< 2% retry rate' },
    ),
  ],
);

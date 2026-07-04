import { playbookContent, workflow } from '../helpers';

export const multiAgentCollaborationPlaybookWorkflow = playbookContent(
  'Multi-agent playbooks',
  'fan-out and merge.',
  'Fan-out research, merge synthesis, and verifier passes — traced on one ticket.',
  [
    workflow(
      'fan-out-research',
      'Fan-out research',
      'Broad question',
      [
        { label: 'Research brief', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Split subtasks', kind: 'agent', agent: 'Codex' },
        { label: 'Parallel agents', kind: 'agent', agent: 'Claude Code' },
        { label: 'Collect results', kind: 'integration', iconDomain: 'gator' },
        { label: 'Lead gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Research speedup', value: '3.2× vs serial' },
    ),
    workflow(
      'merge-synthesis',
      'Merge synthesis',
      'Subtasks done',
      [
        { label: 'All agents done', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Dedupe findings', kind: 'agent', agent: 'OpenCode' },
        { label: 'Synthesize report', kind: 'agent', agent: 'Claude Code' },
        { label: 'Attach deliverable', kind: 'integration', iconDomain: 'gator' },
        { label: 'Publish gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Duplicate work', value: 'Down 67%' },
    ),
    workflow(
      'verifier-pass',
      'Verifier pass',
      'Draft ready',
      [
        { label: 'Worker complete', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Verifier rubric', kind: 'agent', agent: 'Codex' },
        { label: 'Fix or approve', kind: 'agent', agent: 'Claude Code' },
        { label: 'Log verdict', kind: 'integration', iconDomain: 'gator' },
        { label: 'Ship gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Defect escape rate', value: 'Down 74%' },
    ),
  ],
);

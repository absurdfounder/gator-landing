import { playbookContent, workflow } from '../helpers';

export const persistentMemoryPlaybookWorkflow = playbookContent(
  'Memory playbooks',
  'that compound.',
  'Context load, memory updates, and cross-agent recall — traced on every mission.',
  [
    workflow(
      'context-load',
      'Context load',
      'Mission started',
      [
        { label: 'Ticket opened', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Load org memory', kind: 'agent', agent: 'Codex' },
        { label: 'Inject context', kind: 'agent', agent: 'Claude Code' },
        { label: 'Attach to thread', kind: 'integration', iconDomain: 'gator' },
        { label: 'Scope gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Context hit rate', value: '94% relevant docs' },
    ),
    workflow(
      'memory-update',
      'Memory update',
      'Decision made',
      [
        { label: 'Outcome logged', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Extract learnings', kind: 'agent', agent: 'OpenCode' },
        { label: 'Write memory file', kind: 'agent', agent: 'Claude Code' },
        { label: 'Sync to unit', kind: 'integration', iconDomain: 'gator' },
        { label: 'Editor gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Memory freshness', value: '< 24 hr lag' },
    ),
    workflow(
      'cross-agent-recall',
      'Cross-agent recall',
      'Handoff event',
      [
        { label: 'Agent switch', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Recall prior work', kind: 'agent', agent: 'Codex' },
        { label: 'Merge thread context', kind: 'agent', agent: 'Claude Code' },
        { label: 'Continue mission', kind: 'integration', iconDomain: 'gator' },
        { label: 'Continuity gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Context loss incidents', value: 'Near zero' },
    ),
  ],
);

import { playbookContent, workflow } from '../helpers';

export const openclawPoweredPlaybookWorkflow = playbookContent(
  'OpenClaw playbooks',
  'on your devices.',
  'Node tasks, device actions, and sync status — traced from cloud to connected machines.',
  [
    workflow(
      'node-task',
      'Node task',
      'Device online',
      [
        { label: 'Node connected', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Route to node', kind: 'agent', agent: 'Codex' },
        { label: 'Execute locally', kind: 'agent', agent: 'Claude Code' },
        { label: 'Stream results', kind: 'integration', iconDomain: 'gator' },
        { label: 'Device gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Node task success', value: '95% first attempt' },
    ),
    workflow(
      'device-action',
      'Device action',
      'User request',
      [
        { label: 'MacBook task', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Validate allowlist', kind: 'agent', agent: 'OpenCode' },
        { label: 'Run on device', kind: 'agent', agent: 'Claude Code' },
        { label: 'Confirm output', kind: 'integration', iconDomain: 'gator' },
        { label: 'User ack gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Blocked actions', value: '100% pre-flight' },
    ),
    workflow(
      'sync-status',
      'Sync status',
      'Cron 5 min',
      [
        { label: 'Health poll', kind: 'trigger', iconDomain: 'gator' },
        { label: 'Check node fleet', kind: 'agent', agent: 'Codex' },
        { label: 'Report drift', kind: 'agent', agent: 'OpenCode' },
        { label: 'Alert #ops', kind: 'integration', iconDomain: 'slack.com' },
        { label: 'Reconnect gate', kind: 'gate', iconDomain: 'gator' },
      ],
      { label: 'Offline detection', value: '< 5 min' },
    ),
  ],
);

/** Canonical local install — copy-paste as-is in terminal. */
export const TROOPER_CLI_COMMAND = 'npx -y trooper-cli';

/** @deprecated Use TROOPER_CLI_COMMAND */
export const TROOPER_ONBOARD_COMMAND = TROOPER_CLI_COMMAND;

export type SetupTargetId = 'trooper' | 'claude-code' | 'cursor' | 'openclaw' | 'codex';

export type SetupTarget = {
  id: SetupTargetId;
  label: string;
  /** Local asset when brand favicon is wrong or unavailable */
  iconSrc?: string;
  /** Domain for colored favicon via getFaviconUrl */
  iconDomain?: string;
  command: string;
  prompt: string;
};

export const SETUP_TARGETS: SetupTarget[] = [
  {
    id: 'trooper',
    label: 'Gator CLI',
    iconSrc: '/images/gator-icon.png',
    command: TROOPER_CLI_COMMAND,
    prompt:
      'Install Gator on your machine, then open the app and connect your API keys:\n\nnpx -y trooper-cli',
  },
  {
    id: 'claude-code',
    label: 'Claude Code',
    iconDomain: 'anthropic.com',
    command: TROOPER_CLI_COMMAND,
    prompt:
      'Set up Gator locally, then point Claude Code at your Gator workspace:\n\nnpx -y trooper-cli',
  },
  {
    id: 'cursor',
    label: 'Cursor',
    iconDomain: 'cursor.com',
    command: TROOPER_CLI_COMMAND,
    prompt:
      'Install Gator on your laptop and connect Cursor to your Gator agents:\n\nnpx -y trooper-cli',
  },
  {
    id: 'openclaw',
    label: 'OpenClaw',
    iconDomain: 'openclaw.ai',
    command: TROOPER_CLI_COMMAND,
    prompt:
      'Install Gator with the OpenClaw runtime on your machine:\n\nnpx -y trooper-cli',
  },
  {
    id: 'codex',
    label: 'ChatGPT Codex',
    iconDomain: 'openai.com',
    command: TROOPER_CLI_COMMAND,
    prompt:
      'Install Gator locally, then run Codex against your Gator workspace:\n\nnpx -y trooper-cli',
  },
];

export const DEFAULT_SETUP_TARGET_ID: SetupTargetId = 'trooper';

export function getSetupTarget(id: SetupTargetId) {
  return SETUP_TARGETS.find((target) => target.id === id) ?? SETUP_TARGETS[0];
}

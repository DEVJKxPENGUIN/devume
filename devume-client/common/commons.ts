import {SymbolKind} from "vscode-languageserver-types";
import Boolean = SymbolKind.Boolean;

export enum BTN_TYPES {
  NORMAL = 'normal',
  LARGE = 'large',
  LARGE_ACCENT = 'large accent',
}

export enum PHASE {
  LOCAL = 'local',
  PROD = 'prod',
}

export function getPhase(): PHASE {
  const config = useRuntimeConfig();
  return config.public.phase as PHASE;
}

export function isLocal(): Boolean {
  const config = useRuntimeConfig();
  return config.public.phase === PHASE.LOCAL;
}

export function isProd(): Boolean {
  const config = useRuntimeConfig();
  return config.public.phase === PHASE.PROD;
}
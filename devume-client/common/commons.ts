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
  return (process.env.PHASE || PHASE.LOCAL) as PHASE;
}

export function isLocal(): Boolean {
  return getPhase() === PHASE.LOCAL;
}

export function isProd(): Boolean {
  return getPhase() === PHASE.PROD;
}

export function getGrpcUrl(): string {
  return process.env.GRPC_API_URL || 'localhost:9090';
}
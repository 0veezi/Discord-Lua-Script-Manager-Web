import { create } from 'zustand';
import { Script, Webhook, LogEntry } from '../types';

interface AppState {
  botSecret: string;
  webhooks: Webhook[];
  scripts: Script[];
  logs: LogEntry[];
  setBotSecret: (secret: string) => void;
  addWebhook: (webhook: Webhook) => void;
  removeWebhook: (id: string) => void;
  updateWebhook: (id: string, webhook: Partial<Webhook>) => void;
  addScript: (script: Script) => void;
  removeScript: (id: string) => void;
  updateScript: (id: string, script: Partial<Script>) => void;
  toggleScript: (id: string) => void;
  addLog: (log: LogEntry) => void;
  clearLogs: () => void;
}

export const useStore = create<AppState>((set) => ({
  botSecret: '',
  webhooks: [],
  scripts: [],
  logs: [],
  setBotSecret: (secret) => set({ botSecret: secret }),
  addWebhook: (webhook) =>
    set((state) => ({ webhooks: [...state.webhooks, webhook] })),
  removeWebhook: (id) =>
    set((state) => ({
      webhooks: state.webhooks.filter((w) => w.id !== id),
    })),
  updateWebhook: (id, webhook) =>
    set((state) => ({
      webhooks: state.webhooks.map((w) =>
        w.id === id ? { ...w, ...webhook } : w
      ),
    })),
  addScript: (script) =>
    set((state) => ({ scripts: [...state.scripts, script] })),
  removeScript: (id) =>
    set((state) => ({
      scripts: state.scripts.filter((s) => s.id !== id),
    })),
  updateScript: (id, script) =>
    set((state) => ({
      scripts: state.scripts.map((s) =>
        s.id === id ? { ...s, ...script } : s
      ),
    })),
  toggleScript: (id) =>
    set((state) => ({
      scripts: state.scripts.map((s) =>
        s.id === id ? { ...s, enabled: !s.enabled } : s
      ),
    })),
  addLog: (log) =>
    set((state) => ({ logs: [log, ...state.logs].slice(0, 1000) })),
  clearLogs: () => set({ logs: [] }),
}));
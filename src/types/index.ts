export interface Webhook {
  id: string;
  name: string;
  url: string;
}

export interface Script {
  id: string;
  name: string;
  content: string;
  interval: number;
  enabled: boolean;
  lastExecution: string | null;
  nextExecution: string | null;
}

export interface LogEntry {
  id: string;
  scriptId: string;
  scriptName: string;
  timestamp: string;
  status: 'success' | 'error';
  duration: number;
  output: string;
  error?: string;
}
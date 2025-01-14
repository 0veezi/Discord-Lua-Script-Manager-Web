import React, { useRef, useEffect } from 'react';
import { useStore } from '../store';
import { Trash2 } from 'lucide-react';

function Console() {
  const { logs, clearLogs } = useStore();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Console</h1>
        <button
          onClick={clearLogs}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
        >
          <Trash2 className="w-5 h-5 mr-2" />
          Clear Logs
        </button>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg p-4 h-[70vh] overflow-y-auto">
        <div className="space-y-2">
          {logs.map((log) => (
            <div
              key={log.id}
              className={`p-2 rounded ${
                log.status === 'success'
                  ? 'bg-green-900/20 border-l-4 border-green-500'
                  : 'bg-red-900/20 border-l-4 border-red-500'
              }`}
            >
              <div className="flex justify-between text-gray-400 text-sm">
                <span>{log.scriptName}</span>
                <span>{new Date(log.timestamp).toLocaleString()}</span>
              </div>
              <div className="mt-1">
                <pre className="text-white whitespace-pre-wrap">
                  {log.output}
                </pre>
                {log.error && (
                  <pre className="text-red-400 whitespace-pre-wrap mt-2">
                    Error: {log.error}
                  </pre>
                )}
              </div>
              <div className="mt-1 text-gray-400 text-sm">
                Duration: {log.duration}ms
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}

export default Console;
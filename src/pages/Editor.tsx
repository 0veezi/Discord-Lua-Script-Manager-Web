import React from 'react';
import { useStore } from '../store';
import Editor from '@monaco-editor/react';

function ScriptEditor() {
  const { scripts, updateScript } = useStore();
  const [selectedScript, setSelectedScript] = React.useState<string | null>(null);

  const currentScript = scripts.find((s) => s.id === selectedScript);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Script Editor</h1>
        <select
          value={selectedScript || ''}
          onChange={(e) => setSelectedScript(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a script</option>
          {scripts.map((script) => (
            <option key={script.id} value={script.id}>
              {script.name}
            </option>
          ))}
        </select>
      </div>

      {currentScript ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Editor
            height="70vh"
            defaultLanguage="lua"
            value={currentScript.content}
            onChange={(value) =>
              updateScript(currentScript.id, { content: value || '' })
            }
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              automaticLayout: true,
            }}
          />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8 text-center text-gray-500">
          Select a script to start editing
        </div>
      )}
    </div>
  );
}

export default ScriptEditor;
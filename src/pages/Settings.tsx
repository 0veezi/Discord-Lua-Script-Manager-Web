import React, { useState } from 'react';
import { useStore } from '../store';
import { Plus, Trash2 } from 'lucide-react';

function Settings() {
  const { botSecret, webhooks, setBotSecret, addWebhook, removeWebhook, updateWebhook } = useStore();
  const [newWebhookName, setNewWebhookName] = useState('');
  const [newWebhookUrl, setNewWebhookUrl] = useState('');

  const handleAddWebhook = () => {
    if (newWebhookName && newWebhookUrl) {
      addWebhook({
        id: crypto.randomUUID(),
        name: newWebhookName,
        url: newWebhookUrl,
      });
      setNewWebhookName('');
      setNewWebhookUrl('');
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Bot Authentication</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Discord Bot Secret Key
            </label>
            <input
              type="password"
              value={botSecret}
              onChange={(e) => setBotSecret(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your bot secret key"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Webhook Management</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={newWebhookName}
              onChange={(e) => setNewWebhookName(e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Webhook Name"
            />
            <input
              type="url"
              value={newWebhookUrl}
              onChange={(e) => setNewWebhookUrl(e.target.value)}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Webhook URL"
            />
            <button
              onClick={handleAddWebhook}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Webhook
            </button>
          </div>

          <div className="space-y-2">
            {webhooks.map((webhook, index) => (
              <div
                key={webhook.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-md"
              >
                <span className="font-medium text-gray-700">
                  {index + 1}. {webhook.name}
                </span>
                <input
                  type="url"
                  value={webhook.url}
                  onChange={(e) =>
                    updateWebhook(webhook.id, { url: e.target.value })
                  }
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <button
                  onClick={() => removeWebhook(webhook.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
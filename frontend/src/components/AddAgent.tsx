import React, { useState } from 'react';

interface Agent {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  password: string; // added password to Agent type
}

interface AddAgentProps {
  onAddAgent: (agent: Agent) => void;
}

const AddAgent: React.FC<AddAgentProps> = ({ onAddAgent }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');  // new state for password
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('https://listpilot.onrender.com/api/agents/addAgent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, mobile, password }),  // send password
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to add agent');
      }
      const newAgent = await res.json();
      onAddAgent(newAgent);
      // clear form fields
      setName('');
      setEmail('');
      setMobile('');
      setPassword('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add New Agent</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        disabled={loading}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        disabled={loading}
      />
      <input
        type="text"
        placeholder="Mobile"
        required
        value={mobile}
        onChange={e => setMobile(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Agent'}
      </button>
    </form>
  );
};

export default AddAgent;

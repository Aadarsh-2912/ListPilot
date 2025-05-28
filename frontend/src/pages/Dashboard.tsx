import React, { useEffect, useState } from 'react';
import ShowAgents from '../components/ShowAgents';
import FileUpload from '../components/FileUpload';
import AddAgent from '../components/AddAgent';
import TaskDistribution from '../components/TaskDistribution';

interface Agent {
  _id: string;
  name: string;
  email: string;
  mobile: string;
}

const Dashboard: React.FC = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch agents function to be reused
  const fetchAgents = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/agents/getAgents');
      if (!res.ok) throw new Error('Failed to fetch agents');
      const data = await res.json();
      setAgents(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Fetch agents on mount
  useEffect(() => {
    fetchAgents();
  }, []);

  // Add a new agent to the state immediately
  const addAgentToList = (newAgent: Agent) => {
    setAgents(prevAgents => [newAgent, ...prevAgents]);
  };

  // Handle agent delete
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this agent?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/agents/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete agent');

      setAgents(prev => prev.filter(agent => agent._id !== id));
    } catch (err: any) {
      setError(err.message || 'Failed to delete agent');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add Agent Form on left */}
        <AddAgent onAddAgent={addAgentToList} />

        {/* File Upload on right */}
        <FileUpload />
      </div>

      {/* Show Agents full width below the grid */}
      <div>
        {loading ? (
          <p>Loading agents...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <ShowAgents agents={agents} handleDelete={handleDelete} refreshAgents={fetchAgents} />
        )}
      </div>

      {/* Task Distribution below */}
      <TaskDistribution />
    </div>
  );
};

export default Dashboard;

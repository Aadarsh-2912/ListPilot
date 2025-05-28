import React from 'react';

interface Agent {
  _id: string;
  name: string;
  email: string;
  mobile: string;
}

interface ShowAgentsProps {
  agents: Agent[];
  handleDelete: (id: string) => void;
  refreshAgents: () => void;
}

const ShowAgents: React.FC<ShowAgentsProps> = ({ agents, handleDelete, refreshAgents }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-xl font-semibold">Agent Details</h2>
        <button
          onClick={refreshAgents}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Show Agents
        </button>
      </div>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Mobile No.</th>
            <th className="border p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {agents.map(agent => (
            <tr key={agent._id}>
              <td className="border p-2">{agent.name}</td>
              <td className="border p-2">{agent.email}</td>
              <td className="border p-2">{agent.mobile}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(agent._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {agents.length === 0 && (
            <tr>
              <td colSpan={4} className="border p-2 text-center text-gray-500">
                No agents found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAgents;

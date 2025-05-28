import React, { useState } from 'react';

interface Agent {
  _id: string;
  name: string;
  email: string;
  mobile: string;
}

interface Task {
  _id: string;
  firstName: string;
  phone: string;
  notes: string;
  agent: string;
}

interface TaskDistributionData {
  agent: Agent;
  tasks: Task[];
}

const TaskDistribution: React.FC = () => {
  const [showData, setShowData] = useState(false);
  const [taskData, setTaskData] = useState<TaskDistributionData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setShowData(true);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://listpilot.onrender.com/api/files/tasks');
      if (!response.ok) {
        throw new Error('Failed to fetch task distribution data');
      }
      const data: TaskDistributionData[] = await response.json();
      setTaskData(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">Task Distribution</h2>
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Show Task Distribution
      </button>

      {showData && (
        <div className="mt-4">
          {loading && <p className="text-gray-500">Loading data...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading &&
            !error &&
            taskData.map((entry) => (
              <div key={entry.agent._id} className="mb-6">
                <h4 className="font-semibold text-lg">
                  {entry.agent.name} ({entry.agent.email})
                </h4>
                <ul className="list-disc list-inside ml-4 mt-2">
                  {entry.tasks.map((task) => (
                    <li key={task._id}>
                      {task.firstName} - {task.phone}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </section>
  );
};

export default TaskDistribution;

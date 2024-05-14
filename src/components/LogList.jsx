import axios from 'axios';
import { useState } from 'react';

function LogList() {
    const [logs, setLogs] = useState([]);
    const [query, setQuery] = useState({
        property: '',
        value: '',
    });

    const fetchLogs = async (property, value) => {
        try {
            const response = await axios.get('http://localhost:3000/api/logs', {
                params: { [property]: value }, });
            setLogs(response.data);
        } catch (error) {
        console.error('Error fetching logs:', error);
        }
    };

    const handleInputChange = (field, value) => {
        setQuery((prevQuery) => ({ ...prevQuery, [field]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (query.property && query.value) {
        fetchLogs(query.property, query.value);
        }
    };

    return (
        <div className="px-32 py-32 mx-auto">
        <h1 className="mb-4 text-3xl font-bold">Log Query Interface</h1>
        <form onSubmit={handleFormSubmit} className="mb-4">
            <div className="flex space-x-4">
            <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="property">
                Select Property:
                </label>
                <select
                id="property"
                name="property"
                className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={(e) => handleInputChange('property', e.target.value)}
                >
                <option value="">Select...</option>
                <option value="level">Level</option>
                <option value="message">Message</option>
                <option value="resourceId">Resource ID</option>
                <option value="timestamp">Timestamp</option>
                <option value="traceId">Trace ID</option>
                <option value="spanId">Span ID</option>
                <option value="commit">Commit</option>
                <option value="metadata.parentResourceId">Parent Resource ID</option>
                </select>
            </div>

            <div>
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="value">
                Enter Value:
                </label>
                <input
                type="text"
                id="value"
                name="value"
                className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter value"
                value={query.value}
                onChange={(e) => handleInputChange('value', e.target.value)}
                />
            </div>

            <div>
                <button
                type="submit"
                // onClick={fetchLogs}
                className="px-5 py-2 font-bold text-white bg-blue-500 rounded mt-7 items-bottom hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                Query Logs
                </button>
            </div>
            </div>
        </form>

        {logs.length > 0 && (
            <table className="table-auto">
            <thead>
                <tr>
                <th className="px-4 py-2">Level</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Resource ID</th>
                <th className="px-4 py-2">Timestamp</th>
                <th className="px-4 py-2">Trace ID</th>
                <th className="px-4 py-2">Span ID</th>
                <th className="px-4 py-2">Commit</th>
                <th className="px-4 py-2">Metadata : Parent Resource ID</th>
                </tr>
            </thead>
            <tbody>
                {logs.map((log) => (
                <tr key={log._id}>
                    <td className="px-4 py-2 border">{log.level}</td>
                    <td className="px-4 py-2 border">{log.message}</td>
                    <td className="px-4 py-2 border">{log.resourceId}</td>
                    <td className="px-4 py-2 border">{log.timestamp}</td>
                    <td className="px-4 py-2 border">{log.traceId}</td>
                    <td className="px-4 py-2 border">{log.spanId}</td>
                    <td className="px-4 py-2 border">{log.commit}</td>
                    <td className="px-4 py-2 border">{log.metadata.parentResourceId}</td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </div>
    );
}

export default LogList;
import axios from 'axios';
import { useState } from 'react';
function LogIngestForm() {
    const [formData, setFormData] = useState({
        level: '',
        message: '',
        resourceId: '',
        timestamp: '',
        traceId: '',
        spanId: '',
        commit: '',
        metadata: {
            parentResourceId: '',
        },
    });
    const handleInsertPresentTime = () => {
        const currentTime = new Date().toISOString();
        setFormData((prevData) => ({ ...prevData, timestamp: currentTime }));
    };

    const handleInputChange = (e) => {
        setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await axios.post(`${import.meta.env.VITE_SERVER}`, formData);
        
        setFormData({ level: '', message: '', resourceId: '' , timestamp: '', traceId: '', spanId: '', commit: '', parentResourceId: ''});
        console.log('Log ingested successfully!');
        } catch (error) {
        console.error('Error ingesting log:', error);
        }
    };

    return (
        <div className="px-10 mx-auto my-2 md:flex">
            <div className="mx-auto my-auto">
                <div>
                    <h1 className="text-5xl font-yanone">Log Ingest</h1>
                    <p>Ingest new log entries</p>
                </div> 
            </div>
            <div className="max-w-md mx-auto ">
            <form className="mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="level">
                Level
                </label>
                <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="level"
                type="text"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="message">
                Message
                </label>
                <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="resourceId">
                Resource ID
                </label>
                <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="resourceId"
                type="text"
                name="resourceId"
                value={formData.resourceId}
                onChange={handleInputChange}
                />
            </div>
            <div className="flex items-center mb-4">
                <label className="block mb-2 mr-2 font-bold text-gray-700" htmlFor="timestamp">
                Timestamp
                </label>
                <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="timestamp"
                type="text"
                name="timestamp"
                value={formData.timestamp}
                onChange={handleInputChange}
                />
                <button
                type="button"
                className="px-4 py-2 ml-2 text-sm font-bold text-gray-800 transition-all rounded bg-amber-300 hover:bg-green-300 focus:outline-none focus:shadow-outline"
                onClick={handleInsertPresentTime}
                >
                Insert Current Time
                </button>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="traceId">
                Trace ID
                </label>
                <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="traceId"
                type="text"
                name="traceId"
                value={formData.traceId}
                onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="spanId">
                Span ID
                </label>
                <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="spanId"
                type="text"
                name="spanId"
                value={formData.spanId}
                onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="commit">
                Commit
                </label>
                <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="commit"
                type="text"
                name="commit"
                value={formData.commit}
                onChange={handleInputChange}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700" htmlFor="metadata">
                Metadata: 
                </label>
                <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="metadata"
                type="text"
                name="parentResourceId"
                value={formData.parentResourceId}
                onChange={handleInputChange}
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 font-bold text-white transition-all bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
                Ingest Log
            </button>
            </form>
        </div>
    </div>
    );
}

export default LogIngestForm;
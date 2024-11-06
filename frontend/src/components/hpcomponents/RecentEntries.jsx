import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RecentEntries() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        const fetchEntries = async () => {
            const response = await axios.get('http://localhost:4000/Home/recent-entries');
            setEntries(response.data);
        };
        fetchEntries();
    }, []);

    return (
        <div>
            <h2>Recent Entries</h2>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>{entry.name} - {entry.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecentEntries;

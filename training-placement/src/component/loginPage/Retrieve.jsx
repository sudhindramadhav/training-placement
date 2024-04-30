// Retrieve.jsx
import React, { useEffect, useState } from 'react';

export default function Retrieve() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/retrieve')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the data received from the server
        setData(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Retrieved Data</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item._id}>
              ID: {item.id}, Password: {item.password}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

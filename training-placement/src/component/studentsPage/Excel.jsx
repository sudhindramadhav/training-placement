import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios'; 

const Excel = () => {
    const [data, setData] = useState([]);

    const changeHandler = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const reader = new FileReader();
            reader.readAsBinaryString(files[0]);
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const parsedData = XLSX.utils.sheet_to_json(sheet);
                setData(parsedData);
                sendDataToBackend(parsedData); // Sending data to backend
            };
        }
    };  

    const sendDataToBackend = async (data) => {
        try {
            const response = await axios.post('http://localhost:8000/insertdata', { data });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };
    


    return (
        <div>
            <input
                type="file"
                accept=".xlsx,.xls"
            />
            <input
                type="button"
                value="insert"
                onClick={changeHandler}
            />
            <br />
            {data.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Excel;

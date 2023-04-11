import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const assignments = [
        { id: 1, assignment: '1', mark: 60 },
        { id: 2, assignment: '2', mark: 60 },
        { id: 3, assignment: '3', mark: 59 },
        { id: 4, assignment: '4', mark: 60 },
        { id: 5, assignment: '5', mark: 56 },
        { id: 6, assignment: '6', mark: 57 },
        { id: 7, assignment: '7', mark: 60 },
        { id: 8, assignment: '8', mark: 60 }
    ];

    return (
        <div className='mt-24 items-center'>
            <div className='text-indigo-500 font-bold text-3xl text-center mt-5 mb-10'>
                Assignment marks
            </div>
            <ResponsiveContainer width="90%" height={400}>
                <AreaChart
                    data={assignments}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 30,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="assignment" />
                    <YAxis />
                    <Tooltip />
                    <Area dataKey="mark" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;

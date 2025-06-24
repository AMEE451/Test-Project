import React, { useState } from 'react'
import Card from '../components/Card';
import { homes } from '../data/homes';

const Dashboard = () => {

    const [filter, setfilter] = useState('')

    const filteredHomes = homes.filter((home) =>
        home.location.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className='w-full overflow-x-hidden overflow-y-hidden m-0 p-0'>
            <input type="text" placeholder='Filter by Location' value={filter}
                onChange={(e) => setfilter(e.target.value)} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2 border border-gray-300 mb-6 rounded-md hover:border-blue-500' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredHomes.map(home => <Card key={home.id} home={home} />)}
            </div>
        </div>
    )
}

export default Dashboard
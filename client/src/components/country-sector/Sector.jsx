import './Sector.css'
import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';

const Sector = () => {
    const [apiData, setApiData] = useState();

    useEffect(() => {
        fetch('/api/country_sector').then((res) => res.json()).then((res) => {
            const filter_data = res.filter((res) => {
                return res._id.sector !== '' && res._id.country !== '';
            });
            setApiData(filter_data);
        }).catch((err) => console.log(err));
    }, []);


    return (
        <div className='sector'>
           {apiData && <BarChart res={apiData}/>}
        </div>
    )
}

export default Sector;
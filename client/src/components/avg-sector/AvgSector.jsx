import './AvgSector.css'
import React, { useState, useEffect } from 'react';
import BarShift from '../BarShift';
import BarChart from '../BarChart';

const AvgSector = () => {
    const [apiData, setApiData] = useState();

    useEffect(() => {
        fetch('/chart_data').then((res) => res.json()).then((res) => {
            setApiData(res);
        }).catch((err) => console.log(err));
    }, []);


    return (
        <div>
            {
                apiData &&
                <>
                    <BarChart res={apiData} />
                    <BarShift res={apiData} />
                </>
            }
        </div>
    )
}

export default AvgSector;
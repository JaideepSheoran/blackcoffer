import React, { useState } from 'react';
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import './BarChart.css'
  
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const BarShift = ({res}) => {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

  const [data, setData] = useState(
	{
		labels : ['Intensity', 'Likelihood', 'Relevance'],
		datasets : res.map((res, i) => {
            return {
                _id : i + 1,
                label : res._id.sector,
                data : [res.total_intensity, res.total_likelihood, res.total_relevance],
                backgroundColor : getRandomColor(),
            }
        })
	  }
  );
  return (
    <div className='chart-box-container'>
          	<Bar 
        		datasetIdKey='id'
				options={{
					plugins: {
						legend: {
							labels: {
								// This more specific font property overrides the global property
								font: {
									size: 14,
									weight : 'bold'
								},
								color : 'white'
							}
						}
					}
				}}
          		data={data}
      		/>
    </div>
  );
}

export default BarShift
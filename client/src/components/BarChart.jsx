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


const BarChart = ({res}) => {

  const [data, setData] = useState(
	{
		labels : res.map((res) => (res._id.sector === '') ? 'General' : res._id.sector),
		datasets : [
		  {
			  id : 1,
			  label : "Intensity",
			  data : res.map(res => res.total_intensity),
			  backgroundColor : '#f70a69',
		  },
		  {
			  id : 2,
			  label : "Likelihood",
			  data : res.map(res => res.total_likelihood),
			  backgroundColor : '#a0f70a',
		  },
		  {
			  id : 3,
			  label : "Relevance",
			  data : res.map(res => res.total_relevance),
			  backgroundColor : '#0a98f7',
		  }
		]
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

export default BarChart
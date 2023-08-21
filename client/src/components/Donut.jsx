import React, { useState } from 'react';
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import './BarChart.css'

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const Donut = ({ res }) => {

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const filterData = () => {
        const colors = res.map(res => getRandomColor());
        const data = {
            labels: res.map((res) => (res._id.sector === '') ? 'General' : res._id.sector),
            datasets: [
                {
                    id: 4,
                    label: "Likelihood",
                    data: res.map(res => res.total_likelihood),
                    backgroundColor: colors,
                    borderWidth : 0
                },
                {
                    id: 5,
                    label: "Relevance",
                    data: res.map(res => res.total_relevance),
                    backgroundColor: colors,
                    borderWidth : 0
                }
            ]
        }
        return data;
    }

    const [data, setData] = useState(filterData());


    return (
        <div className='chart-box-container'>
            <Doughnut
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
    )
}

export default Donut;
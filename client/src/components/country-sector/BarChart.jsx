import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import './BarChart.css';
  
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({res}) => {

    const [country, setCountry] = useState('United States of America');
    const [data, setData] = useState();

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        const country_filter = res.filter((doc) => {
            return doc._id.country == country
        });
        const filtered_data = {
            labels : ['Average Intensity', 'Average Likelihood', 'Average Relevance', 'Average Impact'],
            datasets : country_filter.map((doc, i) => {
                return {
                    _id : i + 1,
                    label : doc._id.sector,
                    data : [doc.intensity, doc.likelihood, doc.relevance, doc.impact],
                    backgroundColor : getRandomColor()
                }
            })
        }
        setData(filtered_data);
    }, [country]);

  return (
    <div className='country-main'>
        <select value={country} onChange={(e) => {setCountry(e.target.value)}} name="country" id="country">
            {
                [...new Set(res.map(ele => ele._id.country))].map(doc => {
                    return <option value={doc}>{doc}</option>
                })
            }
        </select>
        <div className="country-chart">
        { data && <Bar 
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
      	/>}
        </div>
    </div>
  )
}

export default BarChart
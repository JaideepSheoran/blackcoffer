import { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import Donut from './components/Donut';
import BarShift from './components/BarShift';

function App() {

	const [apiData, setApiData] = useState();

	useEffect(() => {
		fetch('/chart_data').then((res) => res.json()).then((res) => {
			setApiData(res);
		}).catch((err) => console.log(err));
	}, []);

	return (
		<div className="main">
			<h1 className='navbar'>BlackCoffer</h1>
			{
				apiData && 
				<>
					<BarChart res={apiData} />
					<Donut res={apiData} />
					<BarShift res={apiData} />
				</>
			}
		</div>
	);
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sector from './components/country-sector/Sector';
import AvgSector from './components/avg-sector/AvgSector';
import Home from './components/home/Home';

function App() {

	return (
		<div className="main">
			<div className='navbar'>
				<h2><a href="/">BlackCoffer</a></h2>
				<div className="navbar-links">
					<a href="/cnt-sector">Country-Sector</a>
					<a href="/avg-sector">Average Based on Sector</a>
				</div>
			</div>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path="/cnt-sector" element={<Sector />}/>
					<Route exact path="/avg-sector" element={<AvgSector />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';
import TvShowsPage from './pages/TvShowsPage';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<AboutPage />}></Route>
				<Route path='/about' element={<AboutPage />}></Route>
				<Route path='/movies' element={<MoviesPage />}></Route>
				<Route path='/series' element={<SeriesPage />}></Route>
				<Route path='/tvshows' element={<TvShowsPage />}></Route>
			</Routes>
		</>
	);
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import MoviesPage from './pages/MoviesPage';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<AboutPage />}></Route>
				<Route path='/about' element={<AboutPage />}></Route>
				<Route path='/movies' element={<MoviesPage />}></Route>
			</Routes>
		</>
	);
}

export default App;

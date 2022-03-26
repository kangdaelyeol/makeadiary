import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Create from './components/create/Create';
import styles from "./app.module.css";
import Manager from './services/dbmanager';

const dbManager = new Manager();

const App = () => {
	const [db, setDB] = useState({
		1: {
			id: 1, // Number
			background: "", // String 
			title: 'myDiary', // String
			createAt: '2022-03-22', // String 
			content: // String
				"hello!! my name is daniel. \n I am in Australia, It's hot today \n See u!",
		},
	});

	const onCreate = () => {

	}

	return (
		<BrowserRouter>
		<Routes>
			<Route element={<Home db={db} setDB={setDB} />} path="/" />
			<Route element={<Create onCreate={onCreate} />} path="/create" />
		</Routes>
		</BrowserRouter>
	);
}

export default App;

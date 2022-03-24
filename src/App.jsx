import React, { useState } from 'react';

function App() {
	const [db, setDB] = useState({
		1: {
			id: 1,
			title: 'myDiary',
			createAt: '2022-03-22',
			content:
				"hello!! my name is daniel. \n I am in Australia, It's hot today \n See u!",
		},
	});

	return (
		<div className='App'>
			<h1>hello!</h1>
		</div>
	);
}

export default App;

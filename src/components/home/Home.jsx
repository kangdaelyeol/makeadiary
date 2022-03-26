import React from 'react';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';
import Diary from '../diary/Diary';

/* if any components are rerendered by useState function
   all arguments which are outside of every components is not refreshed.
   so you don't have to care any more about them. */

const Home = ({ db, setDB }) => {
	const navigate = useNavigate();

	const onCreate = () => {
		console.log("onCreatee!");
		navigate('/create');
	};
	return (
		<div className={styles.main}>
			<button onClick={() => {onCreate()}} className={styles.createBtn}>
				Create
			</button>
			<div className={styles.items}>
				{Object.keys(db).map(key => {
					<Diary {...db[key]} key={db[key].id} />
				})}
			</div>
		</div>
	);
};

export default Home;

import './App.css';
import { ToastContainer } from 'react-toastify';
import ToolBar from './components/UI/ToolBar/ToolBar.tsx';
import { useState } from 'react';
import type { IUser } from './types';
import UserForm from './components/UserForm/UserForm.tsx';

const App = () => {
    
	const [users, setUsers] = useState<IUser[]>([
		{ name: 'Eldar', email:'eldar', role: 'admin', online: false, id: '1' },
	]);

	const addUser = (data: IUser) => {
		setUsers((prevState) => [...prevState, data]);
	};



	return (
		<>
			<ToastContainer />
			
			<header>
				<ToolBar/>
			</header>
            
			<main>
				<UserForm addUser={addUser}/>

			</main>
            
		</>
	);
};

export default App;

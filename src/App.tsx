import './App.css';
import { ToastContainer } from 'react-toastify';
import ToolBar from './components/UI/ToolBar/ToolBar.tsx';
import { useState } from 'react';
import type { IUser } from './types';
import UserForm from './components/UserForm/UserForm.tsx';
import UserList from './components/UserList/UserList.tsx';

const App = () => {
    
	const [users, setUsers] = useState<IUser[]>([]);

	const addUser = (data: IUser) => {
		setUsers((prevState) => [...prevState, data]);
	};

	const changeOnline = (id: string) => {
		setUsers((prevUsers) =>
			prevUsers.map((user) =>
				user.id === id ? { ...user, online: !user.online } : user));
		console.log(users);
	};

	return (
		<>
			<ToastContainer />
			
			<header>
				<ToolBar/>
			</header>
            
			<main className="row">
				<UserForm addUser={addUser}/>
				<div className='col'>
					<UserList users={users} changeOnline={changeOnline}/>
				</div>
			</main>
            
		</>
	);
};

export default App;

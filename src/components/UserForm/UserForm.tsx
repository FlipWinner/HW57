import React, { useState } from 'react';
import type { IUser, UserMutation } from '../../types';
import { toast } from 'react-toastify';

interface Props {
    addUser: (newUser: IUser) => void;    
}


const UserForm: React.FC<Props> = ({ addUser }) => {
    
	const [form, setForm] = useState<UserMutation>({
		name:'',
		email: '',
		online: false,
		role: 'user',
	});
    
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setForm((prevState) => ({ ...prevState, [name]: value }));
	};

	const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        
		if (form.name === '' || form.email === '') {
			toast.error('Please enter a valid name/email');
		} else {
			addUser({
				...form,
				id: String(new Date().toISOString()),
				online: false,
			});
			toast.success('User added!');
		}

		setForm({
			name:'',
			email: '',
			online: false,
			role: 'user',
		});
	};
    
	return (
		<div className="col-5 border border-5 rounded-3 p-4 bg-warning">
			<h2>User Application</h2>
			<form onSubmit={onSubmit} className="form row">
				<label htmlFor="name">Name:</label>
				<input className='mb-3' type="text" name="name" value={form.name} onChange={onInputChange} />

				<label htmlFor="email">Email:</label>
				<input type="email" name="email" value={form.email} onChange={onInputChange} />

				<label htmlFor="role" className='mt-5'>Role:</label>
				<select name="role" value={form.role} onChange={onInputChange}>
					<option value="user">user</option>
					<option value="editor">editor</option>
					<option value="admin">admin</option>
				</select>

				<button type='submit'>Submit</button>
			</form> 
		</div>
	);
};

export default UserForm;
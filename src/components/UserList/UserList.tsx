import React from 'react';
import type { IUser } from '../../types';
import UserProfile from './UserProfile/UserProfile.tsx';

interface Props {
    users: IUser[];
    changeOnline: (id: string) => void;
}

const UserList: React.FC<Props> = ({ users, changeOnline }) => {
	return (
		<>
			{users.map(user => (
				<UserProfile
					key={user.id}
					name={user.name}
					online={user.online}
					id={user.id}
					email={user.email}
					role={user.role}>
					<input type="checkbox" onChange={() => changeOnline(user.id)} />
				</UserProfile>
			))}
		</>
	);
};

export default UserList;
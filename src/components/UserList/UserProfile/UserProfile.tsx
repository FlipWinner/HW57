import React from 'react';

interface Props {
    id: string;
    name: string;
    email: string;
    online: boolean;
    role: string;
    children?: React.ReactNode;
}

const UserProfile: React.FC<Props> = ({ name, email, online, role, children }) => {
	return (
		<div className="text-start border border-5 ">
			<h3>{name}</h3>
			<p>{email}</p>
			<span>{role}</span>
			{online ? (<div className='active'/>) : (<div className='offline'/>)}
			<div>{children}</div>
		</div>
	);
};

export default UserProfile;
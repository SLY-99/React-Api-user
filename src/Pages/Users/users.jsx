import React from 'react';
import '../Users/users.scss';
import {NavLink} from "react-router-dom";

function Users() {

	const [users, setUsers] = React.useState({});
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			});
	}, []);


	if (isLoading) {
		return <h1>Loading ... </h1>;
	} else {
		return (
			<>
            <div className='users__wrapper'>
                <h1 className='users__title'>Users</h1>
                <p className='users__number'>Number of Users: {users.length}</p>
                <ul className='users__list'>
                  {users.length > 0 &&
					users.map((user) => (
                        <li className='users__item' key={user.id}>
                            <NavLink to={"/posts/"+user.id} className="users__name">{user.name}</NavLink>
                            <p className='users__text'>Email: <span className='users__link'>{user.email}</span></p>
                            <p className='users__text'>Country: <span className='users__span'>{user.address.city}</span></p>
                            <p className='users__text'>Company: <span className='users__span'>{user.company.name}</span></p>
                            <p className='users__text'>Website:<span className='users__link'> {user.website}</span></p>
                        </li>
					))}
                </ul>

            </div>
				
			</>
		);
	}

}

export default Users;

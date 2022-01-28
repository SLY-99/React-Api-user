import React from 'react';
import '../Posts/posts.scss';
import {useNavigate , useParams , NavLink} from "react-router-dom";

function Posts() {
  const navigate = useNavigate(); 

  const { id } = useParams();

	const [users, setUsers] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
                console.log(data);
			});
	}, [id]);


	if (isLoading) {
		return <h1>Loading ... </h1>;
	} else {
		return (
			<>
				<button onClick={() => navigate(-1)} >Back</button>
				<button onClick={() => navigate(1)} >Forward</button>

                <div className='posts__wrapper'>
                <h1 className='posts__title'>Posts of user {id}</h1>
                <p className='posts__number'>Number of posts: {users.length}</p>
                <ul className='posts__list'>
                  {users.length > 0 &&
					users.map((user , index) => (
                        <li className='posts__item' key={user.id}>
                            <NavLink to={"/comments/"+(index+1)} className="posts__name">{user.title}</NavLink>
                            <p className='posts__text'>Posts: <span className='posts__span'>{user.body}</span></p>
                        </li>
					))}
                </ul>

            </div>

			</>
		);
	}

}

export default Posts;
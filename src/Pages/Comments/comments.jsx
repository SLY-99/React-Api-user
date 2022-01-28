import React from 'react';
import '../Comments/comments.scss';
import {useNavigate , useParams} from "react-router-dom";

function Comments() {
  const navigate = useNavigate(); 

  const { id } = useParams();

	const [users, setUsers] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
			.then((response) => response.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			});
	}, [id]);


	if (isLoading) {
		return <h1>Loading ... </h1>;
	} else {
		return (
			<>
				<button onClick={() => navigate(-1)} >Back</button>

                <div className='comments__wrapper'>
                <h1 className='comments__title'>Comments of post {id}</h1>
                <p className='comments__number'>Number of posts: {users.length}</p>
                <ul className='comments__list'>
                  {users.length > 0 &&
					users.map((user) => (
                        <li className='comments__item' key={user.id}>
                            <h3 className="comments__name">Title: <span className='comments__title2'>{user.name}</span></h3>
                            <p className='comments__text'>Email: <span className='comments__link'>{user.email}</span> </p>
                            <p className='comments__text'>Comments: <span className='comments__span'>{user.body}</span></p>
                        </li>
					))}
                </ul>

            </div>

			</>
		);
	}

}

export default Comments;
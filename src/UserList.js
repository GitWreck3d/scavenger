const UserList = ({user, title, handleDelete}) => {

    return(
        <div className="userList">
            <h2>{title}</h2>
            {user.map((user) =>(
                <div className="preview" key={user.id}>
                    <h3>{[user.firstName, ' ', user.lastName]}</h3>
                    <button onClick={() => handleDelete(user.id)}>Delete User</button>
                </div>))}
        </div>

    )
}

export default UserList;
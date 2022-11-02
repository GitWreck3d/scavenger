// import useFetch from "./useFetch";
import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";
import { Simulate } from "react-dom/test-utils";
import Table from "./Table";
import UserList from "./UserList";
const Home = () => {
    const [user, setUser] = useState([
        { firstName: 'sam', lastName: 'smith', DOB: '10/15/1976', phone: '7', email: 'butt@butt.com', streetAddress: '123', city: 'city', state: 'state', zip: 'zip', country: 'country', id: 1, createdAt: '02242019' },
        { firstName: 'loser', lastName: 'smith', DOB: '10/15/1976', phone: '7', email: 'butt@butt.com', streetAddress: '123', city: 'city', state: 'state', zip: 'zip', country: 'country', id: 2, createdAt: '02242019' }

    ]);

    const [name, setName] = useState('idiom');
    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, []);

    const handleDelete = (id) => {
        const newUser = user.filter(user => user.id !== id);
        setUser(newUser);
    }
    return (
        <div className="home">
            <h2>Administrator Home</h2>
            <UserList user={user} title='All Users' handleDelete={handleDelete} />
            <Table
                user = {user}
            />
        </div>
    );
}

export default Home;
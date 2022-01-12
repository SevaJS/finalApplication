import './App.css';
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import UserService from "./service/UserService";
import LoginForm from "./components/LoginForm";

const App = () => {
    const {store} = useContext(Context)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    })

    if (store.isAuth) {
        return (
            <div className="App">
                <h1>{store.isAuth ? 'Авторизован' : 'Не авторизован'}</h1>
                <button onClick={() => store.logout()}>Выйти</button>
                <div>
                    <button onClick={getUsers}>Получить пользователей</button>
                </div>
                <div>
                    {users.map(user =>
                        <div key={user.email}>
                            {user.email}
                        </div>)}

                </div>
            </div>
        )
    }

    async function getUsers() {
        try {
            const res = await UserService.fetchUsers();
            setUsers(res.data)

        } catch (e) {

        }
    }


    return (
        <div className="App">
            <header>
                <div>
                    <LoginForm/>
                </div>
            </header>
            <nav>

            </nav>
            <main>

            </main>

        </div>
    );
}

export default observer(App);

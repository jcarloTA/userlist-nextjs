"use client"; // This is a client component 👈🏽

import { useEffect, useState, useContext } from "react";
import { getUsers } from "../data/api";
import { UsersContext, UserInteface } from '../context/userContext';


function UsersList({ users }: { users: Array<UserInteface> }) {
    return (
        <div className="w-full p-10 font-siz overflow-x-auto relative overflow-x-auto" >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Nombre</th>
                        <th scope="col" className="px-6 py-3">Apellido</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user:any) => (
                    <tr key={user.id}>
                        <td className="px-6 py-4 text-center">{user.id}</td>
                        <td className="px-6 py-4 text-center">{user.first_name}</td>
                        <td className="px-6 py-4 text-center">{user.last_name}</td>
                        <td className="px-6 py-4 text-center">{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-8 flex-col md:flex-row">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l">
                    Anterior
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                    Siguiente
                </button>
            </div>
        </div>
    );
}

export default function Page() {

    const { state, dispatch } = useContext(UsersContext);

    useEffect(() => {
        getUsers().then((data) => {
            dispatch({payload: data, type: "SET_USERS"});
        });
    }, []);

    return (
        <div>
            <h1 className="text-center font-bold text-2xl mt-8">Listado de usuario</h1>
            <UsersList users={state.users} />
        </div>
    );
}

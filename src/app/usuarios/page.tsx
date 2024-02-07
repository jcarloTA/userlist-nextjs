"use client"; // This is a client component 👈🏽

import { useEffect, useState, useContext } from "react";
import { getUsers } from "../data/api";
import { UsersContext, UserInteface } from '../context/userContext';
import UsersListComponent from "../components/table";

import Link from 'next/link';

export default function Page() {

    const { state, dispatch } = useContext(UsersContext);

    useEffect(() => {
        getUsers().then((data) => {
            dispatch({payload: data, type: "SET_USERS"});
        });
    }, []);

    return (
        <div>
            <h1 className="text-center font-bold text-2xl mt-8">Listado de usuario utilizando Api Context</h1>
            <div className="flex justify-end px-8">
                <Link href="/" className="mt-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Regresar
                </Link>
            </div>
            <UsersListComponent users={state.users} />
        </div>
    );
}

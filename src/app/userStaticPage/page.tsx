

import {  use, cache } from "react";
import UsersListComponent from "../components/table";

import Link from 'next/link';
import { UserInteface } from "../context/userContext";

const getUsers = cache(() =>
  fetch("https://reqres.in/api/users").then((res) => res.json())
);

export default function Page() {
    let users = use<{data:Array<UserInteface>}>(getUsers());

    return (
        <div>
            <h1 className="text-center font-bold text-2xl mt-8">Listado de usuarios estaticos</h1>
            <div className="flex justify-end px-8">
                <Link href="/" className="mt-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Regresar
                </Link>
            </div>
            <UsersListComponent users={users.data} />
        </div>
    );
}
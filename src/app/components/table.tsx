import { UserInteface } from "../context/userContext";


export default function UsersListComponent({ users }: { users: Array<UserInteface> }) {
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
        </div>
    );
}

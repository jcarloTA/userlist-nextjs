import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>Plataforma de usuarios</h1>
      </div>
      <Link href="/usuarios" className="mt-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
        Ver Usuarios
      </Link>
    </main>

  );
}

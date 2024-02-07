import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full h-full bg-white flex gap-8 flex-col p-8">
      <div>
        <h1 className='text-center text-2xl font-bold'>Plataforma de usuarios</h1>
      </div>
      <div className='flex justify-center gap-8'>
        <Link href="/usuarios" className="mt-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-[18rem] text-center">
          Ver Usuarios
        </Link>
        <Link href="/userStaticPage" className="mt-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-[18rem] text-center">
          Ver Usuarios en pagina estatica
        </Link>
      </div>
    </main>

  );
}

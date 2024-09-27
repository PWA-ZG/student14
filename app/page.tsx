"use client"

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Aplikacija za 5. laboratorij
      </h1>
      <p className="text-lg text-gray-700 mb-5">
        Integrirana kamera za snimanje fotografije unutar PWA aplikacije.
      </p>
      <Link href="/camera" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Kamera
        
      </Link>
      <style jsx>{`
        div {
          background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
        }
      `}</style>
    </div>
  );
}

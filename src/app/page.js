"use client";
import React, { useState } from "react";
import Image from "next/image";

const pokemonsIniciais = [
  {
    id: 1,
    name: "bulbasaur",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },
  {
    id: 4,
    name: "charmander",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  },
  {
    id: 7,
    name: "squirtle",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
  },
];

export default function BuscarPokemon() {
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(false);
  const [alerta, setAlerta] = useState("");
  const [pokemons, setPokemons] = useState(pokemonsIniciais);

  const buscarPorNomeOuId = async () => {
    if (!busca.trim()) {
      setAlerta("Digite um nome ou ID válido");
      return;
    }
    setAlerta("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${busca.toLowerCase()}`
      );
      if (!res.ok) throw new Error("Pokémon não encontrado");

      const data = await res.json();

      setPokemons([data]);
    } catch {
      setAlerta("Não foi possível encontrar o Pokémon.");
      setPokemons([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 py-10 px-4 font-sans">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Buscar Pokémon por Nome ou ID
        </h1>
      </header>
      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder=" O Nome ou ID até: 25"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="px-4 py-2 w-64 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={buscarPorNomeOuId}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Buscar
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Carregando...</p>}
      {alerta && (
        <p className="text-center text-red-600 font-medium">{alerta}</p>
      )}

      <div className="flex flex-wrap justify-center gap-6 mt-6 flex-grow">
        {pokemons.map(({ id, name, sprites }) => (
          <div
            key={id}
            className="bg-white shadow-md rounded-lg p-4 w-40 text-center"
          >
            <Image
              src={sprites.front_default}
              alt={name}
              width={80}
              height={80}
              unoptimized
              className="mx-auto mb-2"
            />
            <p className="text-sm text-gray-700">
              <strong>ID:</strong> {id}
            </p>
            <h4 className="capitalize font-semibold text-blue-700">{name}</h4>
          </div>
        ))}
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 mt-10">
        © 2025 Pokémon
      </footer>
    </div>
  );
}

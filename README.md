# 🔎 Buscar Pokémon (Next.js + React)

Este projeto é uma aplicação feita com **Next.js**, **React** e **Tailwind CSS** que permite buscar informações de Pokémon pelo **nome** ou **ID** através da [PokeAPI](https://pokeapi.co/).

---

## 🚀 Funcionalidades

- Buscar Pokémon por **nome** (ex: `pikachu`) ou **ID** (ex: `25`).
- Exibir:
  - Imagem oficial (sprite).
  - Nome.
  - ID.
- Lista inicial com três Pokémon clássicos:
  - Bulbasaur
  - Charmander
  - Squirtle
- Mensagens de erro personalizadas:
  - Caso o Pokémon não seja encontrado.
  - Caso o campo de busca esteja vazio.
- Feedback de carregamento durante a busca.

---

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokeAPI](https://pokeapi.co/)

---

## 📂 Estrutura do Projeto

📦 projeto
┣ 📂 app
┃ ┣ 📜 BuscarPokemon.jsx # Página principal de busca
┃ ┗ 📜 layout.jsx # Layout base com fontes do Google
┣ 📜 globals.css # Estilos globais
┣ 📜 package.json
┗ 📜 README.md # Documentação

💡 Exemplos de Uso

Digite 1 → retorna Bulbasaur.

Digite charmander → retorna Charmander.

Digite 25 ou pikachu → retorna Pikachu.

🌐 Deploy

O projeto está disponível online em:
 ws-frontend-fabrica25-2-three.vercel.app
---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/buscar-pokemon.git
cd buscar-pokemon


👨‍💻 Autor

José Victor da Silva Nascimento


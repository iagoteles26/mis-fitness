"use client";

import { useState } from "react";

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    {
      id: 1,
      nome: "Legging Fitness Premium",
      preco: 129.9,
      imagem:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600",
    },
    {
      id: 2,
      nome: "Top Fitness Luxo",
      preco: 89.9,
      imagem:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600",
    },
    {
      id: 3,
      nome: "Shorts Fitness Elegance",
      preco: 79.9,
      imagem:
        "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600",
    },
    {
      id: 4,
      nome: "Conjunto Fitness Exclusivo",
      preco: 199.9,
      imagem:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600",
    },
  ];

  function adicionarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  function removerProduto(index) {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  }

  function total() {
    return carrinho
      .reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* HEADER */}
      <header className="flex justify-between items-center p-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <img src="/logo.png" className="h-12" />
          {/* Nome removido */}
        </div>
        <nav className="flex gap-6 font-medium">
          <span className="cursor-pointer hover:text-pink-500 transition">Início</span>
          <span className="cursor-pointer hover:text-pink-500 transition">Produtos</span>
          <span className="cursor-pointer hover:text-pink-500 transition">Contato</span>
        </nav>
      </header>

      {/* FRASE DA MARCA */}
      <section className="text-center py-8">
        <p className="text-pink-500 text-lg">Sua melhor versão começa aqui ✨</p>
      </section>

      {/* CARRINHO */}
      <section className="bg-gray-50 p-6 mx-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Carrinho ({carrinho.length})</h2>

        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul className="mb-3">
            {carrinho.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-1">
                <span>{item.nome} - {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                <button
                  onClick={() => removerProduto(index)}
                  className="bg-pink-500 text-white px-2 py-1 rounded text-sm hover:bg-pink-600 transition"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="font-bold mb-3">Total: {total()}</p>

        <a
          href={
            carrinho.length > 0
              ? `https://wa.me/5588997427649?text=Olá, vim pelo site da loja MIS Fitness e quero finalizar meu pedido. Itens: ${carrinho.map(p => p.nome).join(
                  ", "
                )} Total: ${total()}`
              : "#"
          }
          target="_blank"
          className={`block w-full text-center py-3 rounded ${carrinho.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"} transition`}
        >
          Finalizar Pedido no WhatsApp
        </a>
      </section>

      {/* PRODUTOS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {produtos.map((produto) => (
          <div key={produto.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <img src={produto.imagem} className="w-full h-64 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold mb-2">{produto.nome}</h3>
              <p className="text-pink-500 font-bold text-lg mb-3">
                {produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </p>
              <button
                onClick={() => adicionarCarrinho(produto)}
                className="mt-auto bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* RODAPÉ */}
      <footer className="bg-black text-white text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} MIS Fitness. Todos os direitos reservados.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="text-pink-500 hover:text-pink-600 transition">Instagram</a>
          <a href="#" className="text-pink-500 hover:text-pink-600 transition">Facebook</a>
          <a href="#" className="text-pink-500 hover:text-pink-600 transition">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}

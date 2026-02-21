"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);

  // Persistir carrinho no localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("carrinho");
      if (stored) setCarrinho(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  }, [carrinho]);

  const produtos = [
    { id: 1, nome: "Legging Fitness Premium", preco: 129.9, imagem: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600" },
    { id: 2, nome: "Top Fitness Luxo", preco: 89.9, imagem: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600" },
    { id: 3, nome: "Shorts Fitness Elegance", preco: 79.9, imagem: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600" },
    { id: 4, nome: "Conjunto Fitness Exclusivo", preco: 199.9, imagem: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600" },
  ];

  const adicionarProduto = (produto) => setCarrinho([...carrinho, produto]);
  const removerProduto = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const total = () =>
    carrinho.reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">

      {/* HEADER */}
      <header className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200 w-full max-w-6xl">
        <img src="/logo.png" className="h-8 sm:h-10" alt="Logo" />
        <div className="relative">
          <span className="text-sm sm:text-base font-medium cursor-pointer">Carrinho</span>
          {carrinho.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {carrinho.length}
            </span>
          )}
        </div>
      </header>

      {/* FRASE DA MARCA */}
      <section className="text-center py-6 sm:py-8">
        <p className="text-pink-500 text-sm sm:text-base">Sua melhor versão começa aqui ✨</p>
      </section>

      {/* PRODUTOS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 max-w-6xl w-full">
        {produtos.map((produto) => (
          <div key={produto.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <img src={produto.imagem} className="w-full h-48 sm:h-56 object-cover" alt={produto.nome} />
            <div className="p-3 sm:p-4 flex flex-col flex-grow">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">{produto.nome}</h3>
              <p className="text-pink-500 font-bold text-sm sm:text-base mb-2">
                {produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </p>
              <button
                onClick={() => adicionarProduto(produto)}
                className="mt-auto bg-black text-white py-2 rounded text-sm sm:text-base hover:bg-gray-800 transition"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* CARRINHO */}
      <section className="w-full max-w-2xl bg-gray-50 p-4 sm:p-6 rounded-lg mb-8">
        <h2 className="text-lg sm:text-xl font-bold mb-3">Carrinho ({carrinho.length})</h2>

        {carrinho.length === 0 ? (
          <p className="text-sm sm:text-base">O carrinho está vazio.</p>
        ) : (
          <ul className="mb-3 sm:mb-4">
            {carrinho.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-1 sm:mb-2 text-sm sm:text-base">
                <span>{item.nome} - {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                <button
                  onClick={() => removerProduto(index)}
                  className="bg-pink-500 text-white px-2 py-1 rounded text-xs sm:text-sm hover:bg-pink-600 transition"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}

        <p className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Total: {total()}</p>

        <a
          href={`https://wa.me/5588997427649?text=Olá, vim pelo site da loja MIS Fitness e quero finalizar meu pedido. Itens: ${carrinho.map(p => p.nome).join(', ')} Total: ${total()}`}
          target="_blank"
          className={`block w-full text-center py-3 rounded text-sm sm:text-base ${carrinho.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-gray-800'} transition`}
        >
          Finalizar Pedido no WhatsApp
        </a>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-black text-white text-center py-4 w-full">
        <p className="text-sm sm:text-base">© {new Date().getFullYear()} MIS Fitness. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

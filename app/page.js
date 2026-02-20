"use client";

import { useState } from "react";

export default function Home() {
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    {
      id: 1,
      nome: "Legging Fitness Premium",
      preco: 129.9,
      imagem: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600",
    },
    {
      id: 2,
      nome: "Top Fitness Luxo",
      preco: 89.9,
      imagem: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600",
    },
    {
      id: 3,
      nome: "Shorts Fitness Elegance",
      preco: 79.9,
      imagem: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600",
    },
    {
      id: 4,
      nome: "Conjunto Fitness Exclusivo",
      preco: 199.9,
      imagem: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600",
    },
  ];

  function adicionarCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  function total() {
    return carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2);
  }

  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>

      <h1 style={{ textAlign: "center", fontSize: 40 }}>
        MIS Fitness
      </h1>

      <p style={{ textAlign: "center" }}>
        Sua melhor versão começa aqui ✨
      </p>

      <h2>Carrinho ({carrinho.length})</h2>
      <p>Total: R$ {total()}</p>

      <a
        href="https://wa.me/5588997427649?text=Olá,%20vim%20pelo%20site%20da%20loja%20MIS%20Fitness%20e%20quero%20finalizar%20meu%20pedido."
        target="_blank"
      >
        <button>
          Finalizar no WhatsApp
        </button>
      </a>

      <hr />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20
      }}>
        {produtos.map(produto => (
          <div key={produto.id} style={{
            border: "1px solid #ddd",
            padding: 10,
            borderRadius: 10
          }}>
            <img src={produto.imagem} width="100%" />

            <h3>{produto.nome}</h3>

            <p>R$ {produto.preco}</p>

            <button onClick={() => adicionarCarrinho(produto)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}

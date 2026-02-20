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
    <main style={{ fontFamily: "Arial", background: "#fff", minHeight: "100vh" }}>

      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #eee",
          background: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <img src="/logo.png" style={{ height: 50 }} />
          {/* Nome removido */}
        </div>

        <nav style={{ display: "flex", gap: 30, fontWeight: 500 }}>
          <span style={{ cursor: "pointer" }}>Início</span>
          <span style={{ cursor: "pointer" }}>Produtos</span>
          <span style={{ cursor: "pointer" }}>Contato</span>
        </nav>
      </header>

      {/* FRASE DA MARCA */}
      <div style={{ textAlign: "center", padding: 30 }}>
        <p style={{ color: "#ff69b4", fontSize: 18 }}>
          Sua melhor versão começa aqui ✨
        </p>
      </div>

      {/* CARRINHO */}
      <div
        style={{
          padding: 20,
          background: "#fafafa",
          margin: "20px 40px",
          borderRadius: 10,
        }}
      >
        <h2>Carrinho ({carrinho.length})</h2>

        {carrinho.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {carrinho.map((item, index) => (
              <li key={index} style={{ marginBottom: 5 }}>
                {item.nome} - {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                <button
                  onClick={() => removerProduto(index)}
                  style={{
                    marginLeft: 10,
                    background: "#ff69b4",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    padding: "2px 6px",
                    fontSize: 12,
                  }}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}

        <p style={{ fontWeight: "bold" }}>Total: {total()}</p>

        <a
          href={
            carrinho.length > 0
              ? `https://wa.me/5588997427649?text=Olá, vim pelo site da loja MIS Fitness e quero finalizar meu pedido. Itens: ${carrinho.map(p => p.nome).join(
                  ", "
                )} Total: ${total()}`
              : "#"
          }
          target="_blank"
          style={{ pointerEvents: carrinho.length === 0 ? "none" : "auto" }}
        >
          <button
            style={{
              background: carrinho.length === 0 ? "#ccc" : "#000",
              color: "#fff",
              padding: "12px 20px",
              border: "none",
              borderRadius: 6,
              cursor: carrinho.length === 0 ? "not-allowed" : "pointer",
              marginTop: 10,
            }}
          >
            Finalizar Pedido no WhatsApp
          </button>
        </a>
      </div>

      {/* PRODUTOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 30,
          padding: 40,
        }}
      >
        {produtos.map((produto) => (
          <div
            key={produto.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              background: "#fff",
            }}
          >
            <img
              src={produto.imagem}
              style={{ width: "100%", height: 300, objectFit: "cover" }}
            />

            <div style={{ padding: 20 }}>
              <h3>{produto.nome}</h3>

              <p
                style={{
                  color: "#ff69b4",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              <button
                onClick={() => adicionarCarrinho(produto)}
                style={{
                  width: "100%",
                  background: "#000",
                  color: "#fff",
                  padding: 10,
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RODAPÉ */}
      <footer
        style={{
          background: "#000",
          color: "#fff",
          textAlign: "center",
          padding: "30px 20px",
          marginTop: 40,
        }}
      >
        <p>© {new Date().getFullYear()} MIS Fitness. Todos os direitos reservados.</p>
        <div style={{ marginTop: 10 }}>
          <a href="#" style={{ color: "#ff69b4", margin: "0 10px" }}>Instagram</a>
          <a href="#" style={{ color: "#ff69b4", margin: "0 10px" }}>Facebook</a>
          <a href="#" style={{ color: "#ff69b4", margin: "0 10px" }}>WhatsApp</a>
        </div>
      </footer>

    </main>
  );
}

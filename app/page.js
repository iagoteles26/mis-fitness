<header style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px 40px",
borderBottom:"1px solid #eee",
background:"#fff"
}}>

<div style={{display:"flex",alignItems:"center",gap:"10px"}}>

<img 
src="/logo.png"
style={{height:"50px"}}
/>

<span style={{
fontSize:"22px",
fontWeight:"bold",
letterSpacing:"2px"
}}>
MIS Fitness
</span>

</div>

<div style={{display:"flex",gap:"20px"}}>

<span style={{cursor:"pointer"}}>Início</span>
<span style={{cursor:"pointer"}}>Produtos</span>
<span style={{cursor:"pointer"}}>Contato</span>

</div>

</header>
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
    return carrinho
      .reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  return (
    <main style={{ fontFamily: "Arial", background: "#fff", minHeight: "100vh" }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", padding: 30, borderBottom: "1px solid #eee" }}>
        <h1 style={{ fontSize: 42, color: "#000", marginBottom: 5 }}>
          MIS Fitness
        </h1>
        <p style={{ color: "#ff69b4", fontSize: 18 }}>
          Sua melhor versão começa aqui ✨
        </p>
      </div>

      {/* CARRINHO */}
      <div style={{ padding: 20, background: "#fafafa" }}>
        <h2 style={{ marginBottom: 5 }}>
          Carrinho ({carrinho.length})
        </h2>
        <p style={{ fontWeight: "bold", fontSize: 18 }}>
          Total: {total()}
        </p>

        <a
          href="https://wa.me/5588997427649?text=Olá,%20vim%20pelo%20site%20da%20loja%20MIS%20Fitness%20e%20quero%20finalizar%20meu%20pedido."
          target="_blank"
        >
          <button style={{
            background: "#000",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            marginTop: 10
          }}>
            Finalizar no WhatsApp
          </button>
        </a>
      </div>

      {/* PRODUTOS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 25,
        padding: 30
      }}>
        {produtos.map(produto => (
          <div key={produto.id} style={{
            border: "1px solid #eee",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            background: "#fff"
          }}>
            <img
              src={produto.imagem}
              style={{ width: "100%", height: 300, objectFit: "cover" }}
            />

            <div style={{ padding: 15 }}>
              <h3 style={{ marginBottom: 8 }}>
                {produto.nome}
              </h3>

              <p style={{
                color: "#ff69b4",
                fontWeight: "bold",
                fontSize: 18
              }}>
                {produto.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>

              <button
                onClick={() => adicionarCarrinho(produto)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  background: "#000",
                  color: "#fff",
                  padding: 10,
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer"
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}

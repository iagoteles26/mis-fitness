
export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        MIS Fitness
      </h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>
        Sua melhor versão começa aqui
      </p>
      <button style={{
        padding: '12px 24px',
        background: 'black',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        Comprar Agora
      </button>
    </main>
  );
}

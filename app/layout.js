
export const metadata = {
  title: "MIS Fitness",
  description: "Sua melhor versão começa aqui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}

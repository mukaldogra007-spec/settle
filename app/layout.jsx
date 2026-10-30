
export const metadata = {
  title: "Settle — A Study in Motion",
  description: "An interactive scrolling card experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}


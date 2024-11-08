import "./globals.css";
import NavBar from "@/components/NavBar";
import AuthProvider from "@/components/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <NavBar />

            <main style={{ flexGrow: 1 }}>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

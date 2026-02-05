import "./globals.css";

export const metadata = {
  title: "oxeoforum",
  description: 'oxeoforum'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

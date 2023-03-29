import styles from "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={styles.global}>
      <head />
      <body>{children}</body>
    </html>
  );
}

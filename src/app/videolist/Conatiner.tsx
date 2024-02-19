export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-full bg-gray-200">{children}</div>
      </body>
    </html>
  );
}

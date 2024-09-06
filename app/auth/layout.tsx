export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex items-center justify-center md:h-[800px] mt-10">
      {children}
    </main>
  );
}

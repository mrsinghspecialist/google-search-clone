import SearchHeader from "@/components/SearchHeader/SearchHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}

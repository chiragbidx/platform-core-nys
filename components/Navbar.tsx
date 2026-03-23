import { getContent } from "@/content/content";

export const Navbar = () => {
  const { navbar } = getContent();

  return (
    <header className="px-10 pt-8">
      <span className="text-[22px] font-bold tracking-tight">
        {navbar.brandPrefix}
        <span className="text-[15px]">{navbar.brandSuffix}</span>
      </span>
    </header>
  );
};

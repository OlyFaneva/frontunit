import Avatar from "@/components/tools/avatar";
import Logo from "@/components/tools/logo";
import Panier from "@/components/tools/panier";
import SearchBar from "@/components/tools/search-bar";
import SelectRegion from "@/components/tools/select-region";

export default function Navbar() {
  return (

    <header className="flex flex-row items-center justify-between py-2 h-auto px-16 max-md:px-10">

      <Logo />
      <SearchBar />
      <div className="flex flex-row items-center gap-10">
        <SelectRegion />
        <Panier />
        <Avatar />
      </div>
    </header>
  );
}

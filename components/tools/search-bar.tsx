import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <div className="relative w-full mt-2 max-w-[628px] h-[46px]">
  <Input
    placeholder="Rechercher BIM objets"
    className="rounded-full pr-16 py-2 h-[36px]" 
  />
  <Button
    variant={"default"}
    size={"icon"}
    className="absolute right-0 top-0 w-14 h-[36px] rounded-[0_24px_24px_0]"
  >
    <Search size={20} />
  </Button>
</div>
  );
}

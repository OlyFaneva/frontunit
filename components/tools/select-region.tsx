import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectRegion() {
  return (
    <Select defaultValue="Montréal">
      <SelectTrigger style={{ borderRadius: '30px' }} className="w-[202px] h-[46px] border-none bg-bgred text-[#373135] font-bold shadow-none focus:ring-0">
        <SelectValue placeholder="Région" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Montréal">Montréal</SelectItem>
        <SelectItem value="Québec">Québec</SelectItem>
        <SelectItem value="Mauricie">Mauricie</SelectItem>
        <SelectItem value="Côte-Nord">Côte-Nord</SelectItem>
        <SelectItem value="Laval">Laval</SelectItem>
      </SelectContent>
    </Select>
  );
}

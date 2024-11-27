import ScrollableSlider from "@/components/tools/slider";

const items = [
  
  { id: 8, image: "/images/Rectangle 16 (11).png", title: "Table ronde", subtitle: "GARAGA" },
  { id: 13, image: "/images/Rectangle 16 (16).png", title: "Buffet", subtitle: "Thermoplaste" },
  { id: 10, image: "/images/Rectangle 16 (13).png", title: "Tabouret", subtitle: "Thermoplaste" },
  { id: 11, image: "/images/Rectangle 16 (14).png", title: "Tapis", subtitle: "Tanguay" },
  { id: 12, image: "/images/Rectangle 16 (15).png", title: "Buffet", subtitle: "Thermoplaste" },
  { id: 3, image: "/images/Rectangle 36 (7).png", title: "Veilleuse", subtitle: "ID Zen" },
  { id: 4, image: "/images/Rectangle 16 (12).png", title: "Miniteur", subtitle: "ID Zen" },
  { id: 5, image: "/images/Rectangle 16 (15).png", title: "Lampe interieure", subtitle: "Tanguay" },
  { id: 6, image: "/images/Rectangle 36 (6).png", title: "Ventilateur murale", subtitle: "ID Zen" },
  { id: 2, image: "/images/Rectangle 16 (14).png", title: "Lampe", subtitle: "GARAGA" },
  { id: 1, image: "/images/Rectangle 16 (4).png", title: "Chaise", subtitle: "GARAGA" },
  { id: 9, image: "/images/Rectangle 16 (12).png", title: "Tiroir Télévision", subtitle: "Thermoplaste" },
  { id: 7, image: "/images/Rectangle 16 (10).png", title: "Chaise", subtitle: "GARAGA" },
];

const scrollbar: React.FC = () => {
  return (
    <div>
      <ScrollableSlider items={items} title="Nos Articles les plus vendus" />
    </div>
  );
};

export default scrollbar;

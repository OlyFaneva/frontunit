import { FaLayerGroup } from "react-icons/fa";

export default function DivisionSection({
  images = {} as Record<string, string>,
  title = "Divisions",
  description = "Explorez toutes les divisions disponibles dans notre catalogue.",
  imageSize = "h-18 w-18",
  gridCols = "grid-cols-3",
  icon = <FaLayerGroup className="text-red-600 text-4xl" />, 
}: {
  images: Record<string, string>;
  title: string;
  description: React.ReactNode;
  imageSize?: string;
  gridCols?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-[#fff5f5] flex p-12 px-16 gap-8">
      <div className={`grid ${gridCols}`}>
        {Object.keys(images).map((key) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={key}
            src={images[key]}
            alt={key}
            className={`${imageSize} object-contain`}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3">
          {icon} 
          <h1 className="text-red-600 text-3xl font-bold">{title}</h1>
        </div>
        <p className="mt-2 px-12 w-[650px] text-red-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

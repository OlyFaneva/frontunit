import Link from "next/link";

export default function Avatar() {
  return (
    <div className="p-4">
      <Link href="/division/details">
        <img src="/images/pannier.png" alt="" className="w-14"/>
      </Link>
    </div>
  );
}

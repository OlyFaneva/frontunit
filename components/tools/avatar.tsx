import { UserRound } from "lucide-react";
import Link from "next/link";

export default function Avatar() {
  return (
    <div className="rounded-full bg-bgred p-4">
      <Link href="/login">
        <UserRound size={24} className="text-primary" />
      </Link>
    </div>
  );
}

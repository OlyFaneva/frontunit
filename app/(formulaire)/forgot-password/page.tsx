import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto mt-10 flex w-2/3 flex-row rounded-[20px] bg-white shadow-[0_0_30px_0_rgba(218,26,49,0.1)]">
      <div className="w-1/2 px-10 py-14">
        <form className="flex flex-col gap-7">
          <h4 className="text-[24px] font-bold text-primary">
            Réinitialiser le mot de passe
          </h4>
          <Input placeholder="Email" type="email" />
          <Button type="submit">Envoyer le code</Button>
          <Link href="/login">
            <span className="font-semibold text-primary flex justify-center hover:underline underline-offset-4">
              Se connecter
            </span>
          </Link>
        </form>
      </div>
      <div className="w-1/2 overflow-hidden rounded-[0_20px_20px_0]">
        <img
          src="/images/login.png"
          alt="image réinitialisation"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

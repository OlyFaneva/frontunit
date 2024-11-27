import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto mt-10 flex w-2/3 flex-row rounded-[20px] bg-white shadow-[0_0_30px_0_rgba(218,26,49,0.1)]">
      <div className="w-1/2 px-10 pt-14">
        <form className="flex flex-col gap-7">
          <h4 className="text-[21px] font-bold text-primary">Se connecter</h4>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Mot de passe" type="password" />
          <div className="flex flex-col gap-4">
            <p className="text-disabled">
              Avez-vous oublié votre mot de passe ?
            </p>
            <Link href="/forgot-password">
              <span className="font-semibold text-primary hover:underline underline-offset-4">
                Réinitialiser le mot de passe
              </span>
            </Link>
          </div>
          <Button type="submit">Connexion</Button>
          <span className="text-center text-disabled">Ou continue avec</span>
          <div className="flex w-full justify-around">
            <Button variant="outline" type="button" className="w-40">
              <img src="/images/google.png" alt="google" className="h-6 w-6" />
              Google
            </Button>
            <Button variant="outline" type="button" className="w-40">
              <img
                src="/images/linkedin.png"
                alt="facebook"
                className="h-6 w-6"
              />
              LinkedIn
            </Button>
          </div>
          <Link href="/signUp/acount">
            <span className="font-semibold text-primary flex justify-center hover:underline underline-offset-4">
              S&apos;inscrire
            </span>
          </Link>
        </form>
      </div>
      <div className="w-1/2 overflow-hidden rounded-[0_20px_20px_0]">
        <img
          src="/images/login.png"
          alt="login image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

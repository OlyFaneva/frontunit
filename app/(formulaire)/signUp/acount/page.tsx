"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import StepIndicator from "@/components/tools/StepIndicator";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/signUp/preference");
  };

  return (
    <div className="mx-auto mt-10 flex w-2/3 flex-col rounded-[20px] bg-white shadow-[0_0_30px_0_rgba(218,26,49,0.1)]">
      <div className="flex flex-row">
        <div className="w-1/2 px-10">
          <form className="flex flex-col gap-6">
            <div className="mt-6">
              <StepIndicator currentStep={1} />
            </div>
            <h4 className="text-[21px] font-bold text-primary">S&apos;inscrire</h4>
            <Input placeholder="Email" type="email" />
            <div className="flex gap-4">
              <Input placeholder="Prénom" type="text" />
              <Input placeholder="Nom" type="text" />
            </div>
            <div className="text-sm">
              <p>
                En créant votre compte, vous acceptez nos{" "}
                <Link href="/terms">
                  <span className="text-primary hover:underline">
                    termes d&apos;utilisation
                  </span>
                </Link>{" "}
                et notre{" "}
                <Link href="/privacy-policy">
                  <span className="text-primary hover:underline">
                    Privacy Policy (GDPR)
                  </span>
                </Link>
                .
              </p>
            </div>
            <Button type="button" className="bg-primary hover:bg-primary-dark" onClick={handleNext}>
              Suivant
            </Button>
            <span className="text-center text-disabled">Ou</span>
            <div className="flex w-full justify-around">
              <Button variant="outline" type="button" className="w-40">
                <img
                  src="/images/google.png"
                  alt="google"
                  className="h-6 w-6"
                />
                Google
              </Button>
              <Button variant="outline" type="button" className="w-40">
                <img
                  src="/images/linkedin.png"
                  alt="linkedin"
                  className="h-6 w-6"
                />
                LinkedIn
              </Button>
            </div>
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
            alt="login image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

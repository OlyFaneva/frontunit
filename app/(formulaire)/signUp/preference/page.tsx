"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import StepIndicator from "@/components/tools/StepIndicator";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Importation des icônes depuis React Icons
import { FaUserTie, FaCogs, FaPalette, FaBuilding, FaTools, FaProjectDiagram } from "react-icons/fa";

export default function SignUpPage() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const router = useRouter();

    const handleNext = () => {
      router.push("/signUp/profil");
    };

    const options = [
        { title: "Architecte", icon: <FaBuilding size={24} /> },
        { title: "Ingénieur", icon: <FaCogs size={24} /> },
        { title: "Designer", icon: <FaPalette size={24} /> },
        { title: "Gestionnaire BIM", icon: <FaTools size={24} /> },
        { title: "Gestionnaire d'immeuble", icon: <FaUserTie size={24} /> },
        { title: "Gestionnaire de projets", icon: <FaProjectDiagram size={24} /> },
    ];

    return (
        <div className="mx-auto mt-10 flex w-2/3 flex-col rounded-[20px] bg-white shadow-[0_0_30px_0_rgba(218,26,49,0.1)]">
            <div className="flex flex-row">
                <div className="w-1/2 px-10 pb-4">
                    <form className="flex flex-col gap-5">
                        <div className="mt-6">
                            <StepIndicator currentStep={2} />
                        </div>
                        <h4 className="text-[21px] font-bold text-primary">
                            Dans quel domaine vous travaillez?
                        </h4>
                        <div className="grid grid-cols-3 gap-x-14 gap-y-2">
                            {options.map((option) => (
                                <div
                                    key={option.title}
                                    onClick={() => handleOptionClick(option.title)}
                                    className={`cursor-pointer flex flex-col items-center justify-center border rounded-lg p-2 transition-all ${
                                        selectedOption === option.title
                                            ? "border-primary bg-[#DA1A31] text-white"
                                            : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
                                    style={{ height: "80px" }}
                                >
                                    <div className="flex items-center justify-center">
                                        {option.icon}
                                    </div>
                                    <p className="mt-2 text-center text-sm font-medium text-[12px]">
                                        {option.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Input placeholder="Entreprise" type="email" />
                        <div className="flex gap-4">
                            <Input placeholder="Pays" type="text" />
                            <Input placeholder="Ville" type="text" />
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
                        <Button
                            type="button"
                            className="bg-primary hover:bg-primary-dark"
                            onClick={handleNext}
                        >
                            Suivant
                        </Button>
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

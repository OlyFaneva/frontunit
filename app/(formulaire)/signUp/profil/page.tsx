"use client";

import React from "react";
import { FaWrench, FaDoorOpen, FaPlug, FaBuilding, FaPlus, FaCheck } from "react-icons/fa";
import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { Button } from "@/components/ui/button";
import CompanyCard from "@/components/ui/companyCard";
import StepIndicator from "@/components/tools/StepIndicator";

export default function SignUpPage() {
    const brands = [
        { logoPath: "/images/tanguay.png" },
        { logoPath: "/images/garaga.png" },
        { logoPath: "/images/thermoplast.png" },
        { logoPath: "/images/idzen.png" },
    ];

    return (
        <div className="mx-auto mt-10 flex w-2/3 flex-col rounded-[20px] bg-white shadow-[0_0_30px_0_rgba(218,26,49,0.1)]">
            <div className="flex flex-row">
                {/* Gauche : Formulaire */}
                <div className="w-1/2 px-10 pb-4">
                    <div className="flex flex-col gap-5">
                        <div className="mt-6">
                            <StepIndicator currentStep={3} />
                        </div>
                        <h4 className="text-[21px] font-bold text-primary">
                            Quelles sont vos divisions d&apos;intérêts?
                        </h4>
                        <div className="flex gap-4 flex-wrap">
                            <AnimatedButton
                                label="Plomberie"
                                iconMain={<FaWrench />}
                                iconBefore={<FaPlus />}
                                iconAfter={<FaCheck />}
                            />
                            <AnimatedButton
                                label="Porte"
                                iconMain={<FaDoorOpen />}
                                iconBefore={<FaPlus />}
                                iconAfter={<FaCheck />}
                            />
                            <AnimatedButton
                                label="Électricité"
                                iconMain={<FaPlug />}
                                iconBefore={<FaPlus />}
                                iconAfter={<FaCheck />}
                            />
                            <AnimatedButton
                                label="Matériaux de construction"
                                iconMain={<FaBuilding />}
                                iconBefore={<FaPlus />}
                                iconAfter={<FaCheck />}
                            />
                        </div>

                        <h4 className="text-[21px] font-bold text-[#BEB8B8]">
                            Suggestion de marque
                        </h4>

                        {/* Section de suggestion de marque */}
                        <div className="grid grid-cols-2 gap-4">
                            {brands.map((brand, index) => (
                                <CompanyCard key={index} logoPath={brand.logoPath} />
                            ))}
                        </div>

                        {/* Liens et Boutons */}
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
                        <div className="flex justify-between">
                            <button className="h-[51px] px-8 text-red-500 bg-red-100 rounded-lg">
                                Sauter
                            </button>
                            <Button type="button" className="bg-primary hover:bg-primary-dark">
                                Terminer
                            </Button>

                        </div>
                    </div>
                </div>

                {/* Droite : Image */}
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

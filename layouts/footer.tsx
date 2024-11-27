import Logo from "@/components/tools/logo";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaGlobe,
FaShieldAlt } from "react-icons/fa";


const Footer: React.FC = () => {
return (
    <div>
<footer className="bg-[#373135] text-[#A1A1A1] pb-5 pt-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
            <Logo />
            <div className="mt-4 text-sm space-y-3">
                <p> Nos services d’expertise en bâtiment sont offerts aux clients </p>
                <p> résidentiels, commerciaux, municipaux et gouvernementaux </p>
                <p> partout au
                    Québec.</p>
            </div>
        </div>

        <div>
            <h3 className="text-red-600 text-lg font-semibold mb-10">Nous joindre</h3>
            <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-4">
                    <FaGlobe className="text-gray-400 mt-[2px]" />
                    <span>
                        <strong>Service en numérisation/animation:</strong>
                        <br />
                        154 rue Guyer Chateauguay, <br /> J6K 2J2
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <FaPhoneAlt className="text-gray-400" />
                    <span>Tel: 1-888-566-3229</span>
                </li> <br />
                <li className="flex items-start gap-4">
                    <FaGlobe className="text-gray-400 mt-[3px]" />
                    <span>
                        <strong>Québec:</strong>
                        <br />
                        1720 Père-Lelièvre QC, bureau 100 G1M 3M6
                    </span>
                </li>
                <li className="flex items-start gap-4">
                    <FaPhoneAlt className="text-gray-400 mt-[3px]" />
                    <span>Tel: 1-888-566-3229</span>
                </li> <br />
                <li className="flex items-start gap-4">
                    <FaGlobe className="text-gray-400 mt-[2px]" />
                    <span>
                        <strong>Montérégie</strong>
                        <br />
                        270 ave Dulwich Saint-Lambert Qc, <br /> J4P 2Z1
                    </span>
                </li>
                <li className="flex items-center gap-4">
                    <FaPhoneAlt className="text-gray-400" />
                    <span>Tél: 1-888-566-3229</span>
                </li> <br />
                <li className="flex items-start gap-4">
                    <FaGlobe className="text-gray-400 mt-[3px]" />
                    <span>
                        <strong>Estrie</strong>
                        <br />
                        1875 chemin de Georgeville <br /> J1X 0M7
                    </span>
                </li>
                <li className="flex items-start gap-4">
                    <FaPhoneAlt className="text-gray-400 mt-[3px]" />
                    <span>Tel: 1-888-566-3229</span>
                </li> <br />
                <li className="flex items-start gap-4">
                    <FaClock className="text-gray-400 mt-[2px]" />
                    <span>
                        Lundi - Vendredi: 8:30 à 12:00 et 13:00 à 16:30
                    </span>
                </li>
                <li className="flex items-start gap-4">
                    <FaClock className="text-gray-400 mt-[2px]" />
                    <span>
                    Samedi - Dimanche: Fermé
                    </span>
                </li>

            </ul>
        </div>
        <div>
            <ul className="space-y-5 text-sm">
                <li className="font-semibold ">À propos</li>
                <li className="font-semibold ">Services</li>
                <li className="font-semibold ">Projets</li>
                <li className="font-semibold ">Partenaires</li>
                <li className="font-semibold ">Nous joindre</li>
                <li className="font-semibold ">Demande de services</li>
                <li className="font-semibold ">
                    Politique de confidentialité / Termes et conditions
                </li>
            </ul>
        </div>
    </div>
</footer>
<div className="w-full h-14 bg-gray-700 text-white flex items-center justify-center">© 2024 Ebax, services en bâtiment | TOUS DROITS RÉSERVÉS</div>

</div>
);
};

export default Footer;
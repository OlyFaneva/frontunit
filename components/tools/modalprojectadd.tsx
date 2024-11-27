import React, { useState } from 'react';
import { Input } from '../ui/input';
import img1 from "@/public/images/Rectangle 16 (4).png"
interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1); // Étape actuelle
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleNext = () => {
    if (currentStep === 1 && projectName.trim() && projectDescription.trim()) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-[5px]  flex items-center justify-center">
      <div className="bg-white rounded-lg w-[600px] h-[60vh] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-gray-600 font-semibold">
            {currentStep === 1 ? 'Ajouter un projet' : 'Ajouter un projet'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
        </div>
        <div className="flex justify-between items-center space-x-4 mb-6">
          <div>
          <div className={`h-1 w-[250px] mb-1 rounded-xl ${
            currentStep === 1 ? 'bg-red-500' : 'bg-gray-300'
          }`}></div>
          <div className="flex space-x-2">
            <span
              className={`w-4 h-4 rounded-full ${
                currentStep === 1 ? 'bg-red-500' : 'bg-gray-300'
              }`}
            >
            </span>
            <span className="text-sm">Informations sur le projet</span>
          </div>
          </div>
          <div>
          <div className={`h-1 w-[250px]  mb-1 rounded-xl ${
            currentStep === 2 ? 'bg-red-500' : 'bg-gray-300'
          }`}></div>
          <div className="flex space-x-2">
            <span
              className={`w-4 h-4  rounded-full ${
                currentStep === 2 ? 'bg-red-500' : 'bg-gray-300'
              }`}
            >
            </span>
            <span className="text-sm">Ajout de BIM Project</span>
          </div>

          </div>
        </div>
        {currentStep === 1 ? (
          <div>
            <div className="mb-4">
              
              <Input
                id="projectName"
                type="text"
                className="w-full"
                placeholder='Nom du Projet'
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div className="mb-6">
             
              <textarea
                id="projectDescription"
                className="w-full h-24 rounded-md border border-disabled bg-transparent text-gray-500 px-3 py-1 text-base font-bold transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-disabled focus-visible:border-primary focus-visible:shadow-[0_0_0_4px_rgba(218,26,49,0.5)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                rows={4}
                value={projectDescription}
                placeholder='Description du projet'
                onChange={(e) => setProjectDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        ) : (
          <div>
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Rechercher"
                className="w-full"
              />
              
            </div>
            <div className="grid grid-cols-2  gap-4">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="p-4 border h-[200px] border-gray-300 rounded text-center"
                >
                  <img
                    src={img1.src}
                    alt="Chaise intérieure"
                    className="mb-2 w-64 h-44 z-10 object-cover"
                  />
                  <span>Chaise intérieure</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-end gap-3 absolute top-[550px] left-[820px]  items-center mt-6">
          <button
            onClick={currentStep === 1 ? onClose : handlePrevious}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
          >
            {currentStep === 1 ? 'Annuler' : 'Précédent'}
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === 1 && (!projectName.trim() || !projectDescription.trim())}
            className={`py-2 px-4 rounded ${
              currentStep === 2
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
            }`}
          >
            {currentStep === 1 ? 'Suivant' : 'Terminer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;

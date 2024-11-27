import React from "react";

interface Step {
  name: string;
  index: number;
}

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps: Step[] = [
    { name: "Compte", index: 1 },
    { name: "Profil", index: 2 },
    { name: "Préférence", index: 3 },
  ];

  return (
    <div className="flex items-center justify-center space-x-8">
      {steps.map((step, idx) => (
        <React.Fragment key={step.index}>
          <div className="flex flex-col items-center space-y-2">
            <span
              className={`${
                currentStep === step.index ? "text-red-500" : "text-gray-400"
              } font-medium`}
            >
              {step.name}
            </span>
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                currentStep === step.index
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-gray-100 text-gray-400 border-gray-300"
              }`}
            >
              {currentStep === step.index && (
                <span className="w-3 h-3 bg-white rounded-full"></span>
              )}
            </div>
          </div>
          {idx < steps.length - 1 && (
            <div className="w-16 border-t-2 border-dashed border-gray-300"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;

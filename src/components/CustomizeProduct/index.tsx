"use client";

import { useState } from "react";
import Modal from "@app/components/Modal";
import StepAlcohol from "./StepAlcohol";
import StepAdditive from "./StepAdditive";
import StepBottle from "./StepBottle";
import StepLabel from "./StepLabel";

import StepSummary from "./StepSummary";
import StepPayment from "./StepPayment";
import useAppState from "@app/state/useAppState";
import { CartItem, Alcohol, Additive, Bottle } from "@app/types";

enum Steps {
  ALCOHOL = 0,
  ADDITIVE = 1,
  BOTTLE = 2,
  LABEL = 3,
  SUMMARY = 4,
  PAYMENT = 5,
}

export default function CustomizeProduct() {
  const { modal, dispatch } = useAppState();
  const [step, setStep] = useState<Steps>(Steps.ALCOHOL);
  const [selection, setSelection] = useState<CartItem>({
    alcohol: Alcohol.BLANCO35,
    additive: Additive.AGAVE,
    bottle: Bottle.SHORT,
    price: 0,
    qty: 0,
    label: "",
    paymentMethod: "",
    labelPosition: { x: 50, y: 50 }, // Add default position
  });

  const update =
    <K extends keyof CartItem>(key: K) =>
    (value: CartItem[K]) => {
      setSelection((prev) => ({ ...prev, [key]: value }));
    };
  const close = () => dispatch({ type: "MODAL_TOGGLE" });

  const handleNext = () => {
    if (step < Steps.PAYMENT) {
      setStep((prev) => prev + 1);
    } else {
      // Handle final submission
      console.log("Order completed:", selection);
      close();
    }
  };

  const handlePrevious = () => {
    setStep((prev) => Math.max(Steps.ALCOHOL, prev - 1));
  };
  const getNextButtonText = (currentStep: Steps): string => {
    const nextStepMap = {
      [Steps.ALCOHOL]: "Choose Additive →",
      [Steps.ADDITIVE]: "Choose Bottle →",
      [Steps.BOTTLE]: "Choose Label →",
      [Steps.LABEL]: "Review Summary →",
      [Steps.SUMMARY]: "Proceed to Payment →",
      [Steps.PAYMENT]: "Complete Order →",
    };

    return nextStepMap[currentStep];
  };
  const getStepLabel = (stepNumber: number) => {
    const labels = [
      "Choose Type",
      "Choose Additive",
      "Bottle Shape",
      "Custom Label",
      "Order Summary",
      "Payment",
    ];
    return labels[stepNumber];
  };

  return (
    <Modal visible={modal} onClose={close} title="Craft Your Tequila">
      <div className="flex flex-row h-full">
        {/* Progress Tracker */}
        <div className="w-1/4 p-6 border-r">
          <ol className="space-y-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <li
                key={index}
                className={`text-lg ${
                  index === step ? "text-black font-bold" : "text-gray-400"
                }`}
              >
                <span className="mr-2">{index + 1}.</span>
                {getStepLabel(index)}
              </li>
            ))}
          </ol>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6">
          <StepAlcohol
            visible={step === Steps.ALCOHOL}
            current={selection.alcohol}
            onUpdate={update("alcohol")}
          />
          <StepAdditive
            visible={step === Steps.ADDITIVE}
            current={selection.additive}
            onUpdate={update("additive")}
          />
          <StepBottle
            visible={step === Steps.BOTTLE}
            current={selection.bottle}
            onUpdate={update("bottle")}
          />

          <StepLabel
            visible={step === Steps.LABEL}
            selectedBottle={selection.bottle}
            onLabelUpload={(file, position) => {
              update("label")(URL.createObjectURL(file));
              update("labelPosition")(position);
            }}
          />
          <StepSummary visible={step === Steps.SUMMARY} selection={selection} />
          <StepPayment
            visible={step === Steps.PAYMENT}
            onUpdate={update("paymentMethod")}
          />
          {/* Navigation Controls */}
          <div className="mt-8 pt-4 border-t">
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className={`px-4 py-2 ${
                  step === Steps.ALCOHOL
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black hover:text-gray-600"
                }`}
                disabled={step === Steps.ALCOHOL}
              >
                ← Previous
              </button>

              <button
                onClick={handleNext}
                className="px-6 py-2 bg-teal-500 hover:bg-teal-700 text-white rounded-lg  transition-colors"
              >
                {getNextButtonText(step)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

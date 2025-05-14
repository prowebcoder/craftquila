import { CartItem, Bottle } from "@app/types";
import Image from "next/image";

const bottleImages = {
  [Bottle.SHORT]: "/images/bottles/short-bottle.png",
  [Bottle.CYLINDER]: "/images/bottles/cylinder-bottle.png",
  [Bottle.CIRCLE]: "/images/bottles/circle-bottle.png",
  [Bottle.TALL]: "/images/bottles/tall-bottle.png",
};

interface StepSummaryProps {
  visible: boolean;
  selection: CartItem;
}

export default function StepSummary({ visible, selection }: StepSummaryProps) {
  if (!visible) return null;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Order Summary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bottle Preview */}
        <div className="relative h-96">
          <Image
            src={bottleImages[selection.bottle]}
            alt="Selected bottle"
            fill
            className="object-contain"
          />
          {selection.label && (
            <div
              className="absolute w-1/2 h-1/3"
              style={{
                left: `${selection.labelPosition.x}%`,
                top: `${selection.labelPosition.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={selection.label}
                alt="Custom label"
                fill
                className="object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          )}
        </div>

        {/* Order Details */}
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold">Your Selections</h3>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <dt className="text-sm text-gray-600">Tequila Type</dt>
              <dd className="font-medium">{selection.alcohol}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm text-gray-600">Additive</dt>
              <dd className="font-medium">{selection.additive}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm text-gray-600">Bottle Shape</dt>
              <dd className="font-medium">{selection.bottle}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm text-gray-600">Custom Label</dt>
              <dd className="font-medium">
                {selection.label ? "Applied" : "None"}
              </dd>
            </div>
          </dl>

          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold">$89.99</span>
            </div>
          </div>
        </div>
      </div>

      {/* Process Info */}
    </div>
  );
}

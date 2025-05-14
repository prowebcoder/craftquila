import { Bottle } from "@app/types";
import BoxButton from "./BoxButton";
import Image from "next/image";

interface Props {
  visible: boolean;
  current: Bottle;
  onUpdate(value: Bottle): void;
}

const bottleOptions = [
  {
    type: Bottle.SHORT,
    label: "Short bottle with short neck",
    image: "/images/bottles/short-bottle.png",
    description: "Classic short tequila bottle with wide base",
  },
  {
    type: Bottle.CYLINDER,
    label: "Cylinder bottle with medium neck",
    image: "/images/bottles/cylinder-bottle.png",
    description: "Sleek cylindrical design with elegant neck",
  },
  {
    type: Bottle.CIRCLE,
    label: "Circle shaped bottle",
    image: "/images/bottles/circle-bottle.png",
    description: "Unique spherical bottle design",
  },
  {
    type: Bottle.TALL,
    label: "Tall skinny bottle",
    image: "/images/bottles/tall-bottle.png",
    description: "Elegant tall and slender profile",
  },
];

export default function StepBottle({ visible, current, onUpdate }: Props) {
  if (!visible) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Choose Your Bottle Design</h3>

      <div className="grid grid-cols-2 gap-6">
        {bottleOptions.map((bottle) => (
          <div
            key={bottle.type}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              current === bottle.type
                ? "border-black bg-gray-50"
                : "border-gray-200 hover:border-gray-400"
            }`}
            onClick={() => onUpdate(bottle.type)}
          >
            <div className="flex flex-row gap-5">
              <div className="relative w-100" style={{ width: "70px" }}>
                <Image
                  src={bottle.image}
                  alt={bottle.label}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="">
                <h4 className="font-medium text-lg">{bottle.label}</h4>
                <p className="text-gray-600 text-sm mt-1">
                  {bottle.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

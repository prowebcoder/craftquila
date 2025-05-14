import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Bottle } from "@app/types";

interface StepLabelProps {
  visible: boolean;
  selectedBottle: Bottle;
  onLabelUpload: (file: File, position: { x: number; y: number }) => void;
}

const bottleImages = {
  [Bottle.SHORT]: "/images/bottles/short-bottle.png",
  [Bottle.CYLINDER]: "/images/bottles/cylinder-bottle.png",
  [Bottle.CIRCLE]: "/images/bottles/circle-bottle.png",
  [Bottle.TALL]: "/images/bottles/tall-bottle.png",
};

export default function StepLabel({
  visible,
  selectedBottle,
  onLabelUpload,
}: StepLabelProps) {
  const [labelImage, setLabelImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 }); // Percentage-based positioning
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!visible) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLabelImage(event.target?.result as string);
        onLabelUpload(file, position);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updatePosition = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  const centerLabel = () => {
    setPosition({ x: 50, y: 50 });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Customize Your Label</h3>

      <div className="flex flex-col items-center">
        {/* Bottle with label overlay container */}
        <div
          ref={containerRef}
          className="relative w-64 h-96 mb-6 cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <Image
            src={bottleImages[selectedBottle]}
            alt="Selected bottle"
            fill
            className="object-contain"
          />

          {labelImage && (
            <div
              className="absolute w-1/2 h-1/3 border-2 border-dashed border-blue-500"
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                transform: "translate(-50%, -50%)",
                cursor: isDragging ? "grabbing" : "grab",
              }}
            >
              <Image
                src={labelImage}
                alt="Custom label"
                width={400}
                height={400}
                className="object-contain p-2" // Add padding inside the label area
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex gap-4 mb-4">
          {/* <button
            onClick={centerLabel}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            disabled={!labelImage}
          >
            Center Label
          </button> */}

          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            {labelImage ? "Change Label" : "Upload Label"}
          </button>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        {/* <div className="text-sm text-gray-500">
          <p>• Drag label to position</p>
          <p>• PNG/JPG (max 2MB)</p>
          <p>• Click 'Center Label' to reset position</p>
        </div> */}
      </div>
    </div>
  );
}

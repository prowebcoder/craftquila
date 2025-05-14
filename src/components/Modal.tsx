interface Props {
  visible: boolean;
  onClose(): void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ visible, onClose, children, title }: Props) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl mx-4 min-h-[600px] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl p-2 hover:text-gray-600"
        >
          &times;
        </button>

        {/* Header */}
        <div className="p-6 border-b">
          <h3 className="text-2xl font-semibold text-center">
            {title || "Craft Your Tequila"}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

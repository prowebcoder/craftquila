interface Props {
  active?: boolean;
  children: React.ReactNode;
  onClick(): void;
}

export default function Alcohol({ active = false, children, onClick }: Props) {
  return (
    <div
      className={`border-2 rounded-xl p-6 mx-3 cursor-pointer transition-all
  ${active ? "border-black bg-gray-50" : "border-gray-200"}
  hover:border-gray-400 min-w-[200px] text-center`}
      onClick={onClick}
      style={{ width: "50%" }}
    >
      <h4 className="text-lg font-semibold mb-2">{children}</h4>
      <p className="text-sm text-gray-600">Lorem ipsum description</p>
    </div>
  );
}

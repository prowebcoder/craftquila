interface StepPaymentProps {
  visible: boolean;
  onUpdate: (value: string) => void;
}

export default function StepPayment({ visible, onUpdate }: StepPaymentProps) {
  if (!visible) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Select Payment Method</h3>
      <div className="space-y-3">
        {["VISA", "PayPal", "Other"].map((method) => (
          <label
            key={method}
            className="flex items-center p-4 border rounded-lg hover:bg-gray-50"
          >
            <input
              type="radio"
              name="payment"
              className="mr-3"
              onChange={() => onUpdate(method)}
            />
            {method}
          </label>
        ))}
      </div>
    </div>
  );
}

import { Alcohol } from "@app/types";

import BoxButton from "./BoxButton";

interface Props {
  visible: boolean;
  current: Alcohol;
  onUpdate(value: Alcohol): void;
}

export default function StepAlcohol({ visible, current, onUpdate }: Props) {
  const update = (selection: Alcohol) => () => onUpdate(selection);
  return (
    <div className={`flex flex-2 flex-col ${visible ? "visible" : "collapse"}`}>
      <div className="flex justify-center flex-row mb-5">
        <BoxButton
          active={current === Alcohol.BLANCO35}
          onClick={update(Alcohol.BLANCO35)}
        >
          Blanco 35%
        </BoxButton>
        <BoxButton
          active={current === Alcohol.BLANCO37}
          onClick={update(Alcohol.BLANCO37)}
        >
          Blanco 37%
        </BoxButton>
      </div>

      <div className="flex justify-center flex-row">
        <BoxButton
          active={current === Alcohol.BLANCO40}
          onClick={update(Alcohol.BLANCO40)}
        >
          Blanco 40%
        </BoxButton>
        <BoxButton
          active={current === Alcohol.BLANCO42}
          onClick={update(Alcohol.BLANCO42)}
        >
          Blanco 42%
        </BoxButton>
      </div>
    </div>
  );
}

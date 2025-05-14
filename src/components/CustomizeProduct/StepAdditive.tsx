import { Additive } from "@app/types";

import BoxButton from "./BoxButton";

interface Props {
  visible: boolean;
  current: Additive;
  onUpdate(value: Additive): void;
}

export default function StepAdditive({ visible, current, onUpdate }: Props) {
  const update = (selection: Additive) => () => onUpdate(selection);
  return (
    <div className={`flex flex-2 flex-col ${visible ? "visible" : "collapse"}`}>
      <div className="flex justify-center flex-row mb-5">
        <BoxButton
          active={current === Additive.AGAVE}
          onClick={update(Additive.AGAVE)}
        >
          Agave
        </BoxButton>
        <BoxButton
          active={current === Additive.VANILLA}
          onClick={update(Additive.VANILLA)}
        >
          Vanilla
        </BoxButton>
      </div>

      <div className="flex justify-center flex-row">
        <BoxButton
          active={current === Additive.ORANGE}
          onClick={update(Additive.ORANGE)}
        >
          Orange
        </BoxButton>
        <BoxButton
          active={current === Additive.POISON}
          onClick={update(Additive.POISON)}
        >
          Poison
        </BoxButton>
      </div>
    </div>
  );
}

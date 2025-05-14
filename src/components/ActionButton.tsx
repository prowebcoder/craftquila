"use client";

import useAppState from "@app/state/useAppState";

interface Props {
  label: string;
}

export default function ActionButton({ label }: Props) {
  const { modal, dispatch } = useAppState();

  const activate = () =>
    dispatch({
      type: "MODAL_TOGGLE",
    });

  return (
    <div>
      <button
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full transition duration-700 ease-in-out"
        onClick={activate}
      >
        {label} {modal ? "On" : "Off"}
      </button>
    </div>
  );
}

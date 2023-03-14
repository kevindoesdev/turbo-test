import * as React from "react";

const label = process.env.NEXT_PUBLIC_BUTTON_MESSAGE ?? 'BUTTON_MESSAGE not found';

export const Button = () => {
  return <button>{label}</button>;
};

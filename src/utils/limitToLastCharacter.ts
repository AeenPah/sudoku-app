import { ChangeEvent } from "react";

import onlyNumber from "./validation";

function limitToLastCharacter(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const value: string = event.target.value;
  if (!value) return;

  if (!onlyNumber.test(value)) event.target.value = "";
  else if (value.length > 1) {
    event.target.value = value.slice(-1);
  }
}

export default limitToLastCharacter;

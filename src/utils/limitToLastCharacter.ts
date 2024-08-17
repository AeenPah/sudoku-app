import { ChangeEvent } from "react";

function limitToLastCharacter(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const value: string = event.target.value;
  if (!value) return;

  if (value.length > 1) {
    event.target.value = value.slice(-1);
  }
}

export default limitToLastCharacter;

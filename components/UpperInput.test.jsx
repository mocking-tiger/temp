import { render, screen, fireEvent } from "@testing-library/react";
import UpperInput from "./UpperInput";

describe("Upper Input", () => {
  test("render", () => {
    render(<UpperInput />);
    const inputElement = screen.getByLabelText(/upper/i);
    const text = "text";
    fireEvent.change(inputElement, { target: { value: text } });
    expect(inputElement.value).toEqual(text.toUpperCase());
  });
});

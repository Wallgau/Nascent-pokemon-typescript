import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import fields from "../../pages/contact/fieldData";
import Input from ".";

interface FieldProps {
  fieldName: string;
  type: string;
  required: boolean;
  pattern: string;
  errorMessage: string;
  placeholder: string;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => jest.spyOn;
const handleValidation = (e: React.ChangeEvent<HTMLInputElement>) => jest.spyOn;

test("test userValues updating input value", () => {
  const userValues = {
    name: "Julie",
    lastname: "Schiller",
    phoneNumber: "226-781-3434",
    address: "55 Adelaide Street",
    city: "Toronto",
    postalCode: "M5V 2T8",
  };
  fields.map((field: FieldProps, index: number) => {
    const fieldName = field.fieldName as keyof typeof userValues;
    const userValue = userValues[fieldName];
    render(
      <Input
        handleChange={handleChange}
        handleValidation={handleValidation}
        value={userValue}
        isValid={true}
        {...field}
      />
    );
    const setup = () => {
      const input = screen.getByPlaceholderText(
        field.placeholder
      ) as HTMLInputElement;
      return {
        input,
      };
    };
    const { input } = setup();
    fireEvent.change(input, { target: { value: userValue } });
    expect(input.value).toEqual(userValue);
    fireEvent.blur(input);
    //it shouldn't show error message
    expect(
      screen.queryByTestId("test-span") as HTMLElement | null
    ).not.toBeInTheDocument();
  });
});

test("test validation", () => {
  const userValues = {
    name: "333",
    lastname: "333",
    phoneNumber: "hhhh",
    address: "55lklklk",
    city: "444o",
    postalCode: "ggg",
  };
  fields.map((field: FieldProps, index: number) => {
    const fieldName = field.fieldName as keyof typeof userValues;
    const userValue = userValues[fieldName];
    render(
      <Input
        handleChange={handleChange}
        handleValidation={handleValidation}
        value={userValue}
        isValid={true}
        {...field}
      />
    );
    const setup = () => {
      const input = screen.getByPlaceholderText(
        field.placeholder
      ) as HTMLInputElement;
      return {
        input,
      };
    };
    const { input } = setup();
    fireEvent.change(input, { target: { value: userValue } });
    fireEvent.blur(input);
    const spanTextContent: string | null =
      screen.getAllByTestId("test-span")[index].textContent;
    expect(input.value).toEqual(userValue);
    //it should display the span and show error message
    expect(
      screen.getAllByTestId("test-span")[index] as HTMLElement
    ).toBeInTheDocument();
    expect(spanTextContent).toEqual(field.errorMessage);
  });
});

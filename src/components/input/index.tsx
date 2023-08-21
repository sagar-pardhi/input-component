import { ComponentPropsWithRef } from "react";
import styled from "styled-components";
import { Textarea } from "../textarea";

const Container = styled.div<{ $error?: boolean; $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: ${(props) => (props.$fullWidth ? "100%" : "fit-content")};

  &:focus-within {
    color: blue;
  }
`;

const Label = styled.label<{ $error?: boolean }>`
  font-size: 1rem;
  color: ${(props) => (props.$error ? "red" : "")};
`;

const InputContainer = styled.div<{
  $error?: boolean;
  $disabled?: boolean;
  $variantSize?: string;
}>`
  display: flex;
  border: ${(props) => (props.$error ? "1px solid red" : "1px solid gray")};
  width: auto;
  height: auto;
  padding: ${(props) =>
    props.$variantSize === "sm" ? "0.7rem 0.2rem" : "1rem 0.5rem"};
  border-radius: 0.5rem;
  background-color: ${(props) => (props.$disabled ? "#f6f7fb" : "")};
  cursor: ${(props) => props.$disabled && "not-allowed"};

  &:hover {
    border: ${(props) => (props.$disabled ? "" : "1px solid black")};
  }

  &:focus-within {
    border: ${(props) => (props.$error ? "1px solid red" : "1px solid blue")};
  }
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

const InputElement = styled.input<{
  $disabled?: boolean;
}>`
  outline: none;
  border: none;
  background-color: ${(props) => (props.$disabled ? "#f6f7fb" : "")};
  cursor: ${(props) => props.$disabled && "not-allowed"};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 100%;
`;

const HelperText = styled.p<{ $error?: boolean }>`
  font-size: 0.8rem;
  padding-top: 0.2rem;
  color: ${(props) => (props.$error ? "red" : "")};
`;

interface CommonTypes {
  error?: boolean;
  helperText?: string;
  startIcon?: string;
  endIcon?: string;
  fullWidth?: boolean;
  variantSize?: "sm" | "md";
}

interface InputProps extends ComponentPropsWithRef<"input">, CommonTypes {
  multiline?: false;
}
interface TextareaProps extends ComponentPropsWithRef<"textarea">, CommonTypes {
  multiline?: true;
}

type Props = InputProps | TextareaProps;

export const Input: React.FC<Props> = ({
  error,
  helperText,
  startIcon,
  endIcon,
  fullWidth,
  variantSize,
  multiline,
  ...props
}) => {
  return (
    <Container $fullWidth={fullWidth}>
      <Label $error={error}>Label</Label>
      <InputContainer
        $error={error}
        $disabled={props.disabled}
        $variantSize={variantSize}
      >
        {startIcon && <Icon src={startIcon} />}
        {multiline ? (
          <Textarea {...(props as TextareaProps)} />
        ) : (
          <InputElement $disabled={props.disabled} {...(props as InputProps)} />
        )}
        {endIcon && <Icon src={endIcon} />}
      </InputContainer>
      {helperText && <HelperText $error={error}>{helperText}</HelperText>}
    </Container>
  );
};

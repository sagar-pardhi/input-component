import { TextareaHTMLAttributes } from "react";
import styled from "styled-components";

const TextareaElement = styled.textarea<{ $disabled?: boolean }>`
  outline: none;
  border: none;
  background-color: ${(props) => (props.$disabled ? "#f6f7fb" : "")};
  cursor: ${(props) => props.$disabled && "not-allowed"};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 100%;
  resize: none;
`;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <TextareaElement
      $disabled={props.disabled}
      {...props}
      rows={props.rows || 1}
    />
  );
};

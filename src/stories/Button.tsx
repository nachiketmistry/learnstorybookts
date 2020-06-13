import React, { FC } from "react";

export type ButtonProps = {
  /**
   * Button label
   */
  label: string;
  
  /**
   * Is primary button
   * @default false
   */
  primary?: boolean;

  /**
   * Simple click handler
   */
  onClick?: () => void;
};

/**
 * The world's most _basic_ button
 */
export const Button: FC<ButtonProps> = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick} type="button">
    {label}
  </button>
);
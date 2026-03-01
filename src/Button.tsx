import React from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}

const styles = {
  base: {
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    transition: "opacity 0.2s",
  } as React.CSSProperties,

  variants: {
    primary: { backgroundColor: "#3b82f6", color: "#fff" },
    secondary: { backgroundColor: "#e5e7eb", color: "#111" },
    danger: { backgroundColor: "#ef4444", color: "#fff" },
  },

  sizes: {
    small: { padding: "4px 10px", fontSize: "12px" },
    medium: { padding: "8px 16px", fontSize: "14px" },
    large: { padding: "12px 24px", fontSize: "16px" },
  },

  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  } as React.CSSProperties,
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  size = "medium",
}) => {
  const style: React.CSSProperties = {
    ...styles.base,
    ...styles.variants[variant],
    ...styles.sizes[size],
    ...(disabled ? styles.disabled : {}),
  };

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

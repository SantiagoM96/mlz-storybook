import './button.css';
import "../index.css"
interface ButtonProps {
  mode?: "ghost" | "solid" | "bordered";
  backgroundColor?: string;
  color?: string;
  label: string;
  icon?: string;
  iconPosition?: "close" | "separate";
  onClick?: () => void;
}

export const Button = ({
  label,
  backgroundColor = "#236999",
  color,
  icon,
  iconPosition,
  mode = "ghost",
  ...props
}: ButtonProps) => {

  const textColor = (!color && mode === "solid") ? "#fff" : (color || "#236999")
  const borderColor = mode === "bordered" ? textColor : "hsla(0, 0%, 100%, 0)"
  const background = mode === "solid" ? backgroundColor : "hsla(0, 0%, 100%, 0)"

  console.log(borderColor)
  return (
    <button
      type="button"
      className={`button button-${iconPosition} button-${mode}`}
      style={{ backgroundColor: background, color: textColor, borderColor }}
      {...props}
    >
      {label}
      {icon && (<span className='material-symbols-outlined'>{icon}</span>)}
    </button>

  );
};

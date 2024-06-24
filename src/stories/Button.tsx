import './button.css';
import "../index.css"
interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  icon?: string;
  iconPosition?: "close" | "separate";
  onClick?: () => void;
}

export const Button = ({
  label,
  backgroundColor,
  color,
  icon,
  iconPosition,
  ...props
}: ButtonProps) => {

  return (
    <button
      type="button"
      className={`button ${iconPosition === "close" ? "button-close" : "button-separate"}`}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
      {icon && (<span className='material-symbols-outlined'>{icon}</span>)}
    </button>

  );
};

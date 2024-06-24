import './button.css';
import "../index.css"
interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  label: string;
  icon?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

export const Button = ({
  label,
  backgroundColor,
  color,
  icon = "chevron_right",
  iconPosition = "right",
  ...props
}: ButtonProps) => {


  return (
    <button
      type="button"
      className="button"
      style={{ backgroundColor, color }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className='material-symbols-outlined'>{icon}</span>}
      {label}
      {icon && iconPosition === 'right' && <span className='material-symbols-outlined'>{icon}</span>}
    </button>

  );
};

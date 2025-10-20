import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Button = ({
  text,
  icon,
  bg = "bg-info",
  path = "/",
  link = false,
  type = "button",
  onClick,
  disabled = false,
  size = "medium",
  className = "",
  iconPosition = "right",
  ...props
}) => {
  // Size variants
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  // Base styles
  const baseClasses =
    "text-white uppercase tracking-wide  hover:bg-primary-hover transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const buttonClasses = twMerge(baseClasses, sizeClasses[size], bg, className);

  const buttonContent = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {text}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </>
  );

  if (link) {
    return (
      <Link href={path} className="inline-block">
        <button className={buttonClasses} disabled={disabled} {...props}>
          {buttonContent}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      {...props}>
      {buttonContent}
    </button>
  );
};

export default Button;
// Add propTypes for better development experience (optional)
import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  bg: PropTypes.string,
  path: PropTypes.string,
  link: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

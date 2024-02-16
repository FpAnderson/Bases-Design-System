import React from "react"

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';  
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariantStyle(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
  
    switch (variant) {
      case 'primary':
        return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
      case 'secondary':
        return disabled ? 'bg-disabled text-disabled' : 'bg-quaternary text-primary';
      case 'tertiary':
        return disabled ? 'bg-disabled text-disabled' : 'bg-tertiary text-white';
      default:
        return disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white';
    }
    
  }

const Button = ({ variant = 'primary', children, className, disabled, ...rest }: ButtonProps) => {  
    const generalStyle = 'rounded-md px-6 py-2';
    return <button
      className={`${generalStyle} ${getVariantStyle(variant, disabled)} ${className}`}
      disabled={disabled}
      {...rest}
    >
      { children }
    </button>
}

export default Button

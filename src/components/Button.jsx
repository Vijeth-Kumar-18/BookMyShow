import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import { DivideIcon as LucideIcon } from 'lucide-react';

const Button = ({ 
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  disabled = false,
  onClick
}) => {
  return (
    <BootstrapButton
      variant={variant}
      size={size}
      className={`d-flex align-items-center justify-content-center gap-2 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : size ==='lg' ? 24 : 20} />}
      {children}
    </BootstrapButton>
  );
};

export default Button;
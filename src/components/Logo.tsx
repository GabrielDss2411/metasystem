import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/src/components/logo/logo.png" // Substitua pelo caminho real da sua imagem
        alt="MetaSystem Logo"
        className={className}
        style={{ height: '64px', width: 'auto' }}
      />
    </div>
  );
};
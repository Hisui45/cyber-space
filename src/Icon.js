import React from 'react';

const Icon = ({ name, size = '36px', className = 'bg-primary-elevation-1 p-2 rounded-2xl w-12 h-12 md:w-16 md:h-16' }) => {
  return <img src={require(`./assets/icons/icons8-${name}.png`)} alt={name}  className={className} />;
};

export default Icon;
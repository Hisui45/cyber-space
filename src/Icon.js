import React from 'react';

const Icon = ({ name, size = '36px', className = 'bg-primary-elevation-1 p-1 rounded' }) => {
  return <img src={require(`./assets/icons/icons8-${name}.png`)} alt={name} style={{ width: size, height: 'auto' } } className={className} />;
};

export default Icon;
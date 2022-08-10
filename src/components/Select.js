import React from 'react';

export const Select = ({
  error = '',
  label = '',
  option = [],
  register = {},
}) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register} defaultValue={''}>
        <option value={''} disabled hidden>
          Choose here
        </option>
        {option.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <span className={'error'}>{error}</span>
    </div>
  );
};

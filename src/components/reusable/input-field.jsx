import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const InputField = ({ name, placeholder, defaultValue, ...rest }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <input {...field} placeholder={placeholder} {...rest} />
        )}
      />
    </div>
  );
};

export default InputField;
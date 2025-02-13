import React, { forwardRef } from "react";

interface InputProps {
  title?: string;
  iconName?: string;
  type: string;
  placeholder?: string;
  readonly?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ title, type, iconName, placeholder, readonly = false }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {/* {title && <div className="font-medium tracking-wide">{title}</div>} */}
        <div className="flex flex-row items-center py-3 border border-white rounded-md bg-gradient-to-l from-secondary from-70% to-black w-full">
          {iconName && (
            <i
              className={`fi ${iconName} text-center px-2 mb-[-.3rem] text-lg text-white`}
            ></i>
          )}
          <input
            type={type}
            placeholder={placeholder}
            readOnly= {readonly}
            ref={ref} // Attach the ref here
            className="outline-none border-l px-2 bg-transparent text-white border-white w-full"
          />
        </div>
      </div>
    );
  }
);

export default InputField;

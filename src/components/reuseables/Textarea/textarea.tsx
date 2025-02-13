import React, { forwardRef, TextareaHTMLAttributes } from "react";//+

interface InputProps {
  title?: string;
  iconName?: string;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(//+
  ({ title, type, iconName, placeholder, readonly = false }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        {/* {title && <div className="font-medium tracking-wide">{title}</div>} */}
        <div className="flex flex-row items-center py-3 rounded-md border border-white bg-gradient-to-l from-secondary from-70% to-black w-full">
          <textarea
            rows={7}
            placeholder={placeholder}
            readOnly={readonly}//+
            ref={ref as React.RefObject<HTMLTextAreaElement>} // Attach the ref here//+
            className="outline-none px-2 bg-transparent text-white w-full"
          />
        </div>
      </div>
    );
  }
);

export default TextArea;

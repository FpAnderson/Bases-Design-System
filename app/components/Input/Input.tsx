export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = ({ label, multiline, ...props }: InputProps) => {
  if (multiline) {
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

const Input = ({ label, className, multiline, ...props }: InputProps) => {
  return (
    <div className='relative'>
      {label && <label className='absolute pt-1 pl-3 text-xs'>{label}</label>}
      <InputOrTextArea
        label={label}
        multiline={multiline}
        className={`
          bg-dark text-gray-primary rounded-md p-3
          disabled:bg-disabled disabled:border-2 disabled:border-disabled disabled:text-disabled
          ${label && 'pt-5'}
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;

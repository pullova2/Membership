import React from "react";

export interface InputProps {
  type: string;
  data?: any[];
  name: string;
  label?: string;
  labelStyles?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  handleOnclick?: () => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

const Input = ({
  type,
  name,
  label,
  labelStyles,
  placeholder,
  className: styles,
  defaultValue,
  handleOnclick,
  isDisabled,
  data,
  children,
}: InputProps) => {
  if (type === "button" || type === "submit") {
    return (
      <button
        onClick={handleOnclick}
        className={`p-4  bg-primary-dark cursor-pointer rounded-full ${styles}`}
      >
        {name}
        {children}
      </button>
    );
  }
  if (type === "select") {
    return (
      <div className="flex flex-col gap-4">
        <label
          className={`capitalize leading-[150%] font-medium ${labelStyles} text-primary-dark`}
          htmlFor=""
        >
          {label}
        </label>
        <select
          className={`p-3 border rounded-md border-primary-dark rounded-md${styles}`}
        >
          {data?.map((item, index) => {
            return <option>{item?.name}</option>;
          })}
        </select>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 ">
      <label
        className={`${labelStyles} capitalize leading-[150%] font-medium  text-primary-dark`}
        htmlFor=""
      >
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        type={type}
        disabled={isDisabled}
        name={name}
        onClick={handleOnclick}
        placeholder={placeholder}
        className={`${styles} p-3 border rounded-md border-primary-dark`}
      />
    </div>
  );
};

export default Input;

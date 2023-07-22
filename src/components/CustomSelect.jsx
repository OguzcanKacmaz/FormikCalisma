import { useField } from "formik";
import React from "react";

export default function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "inpur-error" : ""}
      />
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

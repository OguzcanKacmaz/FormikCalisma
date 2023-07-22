import { useField } from "formik";
import React from "react";

export default function CustomChecbox({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.error ? "inpur-error" : ""}
        />
        <span>Kullanım koşullarını kabul ediyorum</span>
      </div>
      {meta.error && <p className="error">{meta.error}</p>}
    </>
  );
}

import { useField } from "formik";

export const Input = ({ onChange, title, ...restProps }) => {
  const [field, meta] = useField(restProps);
  return (
    <>
      <div
        className="Error-show"
        style={meta?.error ? { color: "red" } : { color: "green" }}
      >
        <p>{title}</p> <p>{meta?.error}</p>
      </div>
      <input
        style={
          meta?.error
            ? { borderColor: "#ff000089" }
            : { borderColor: "#dfe3fa" }
        }
        {...field}
        {...restProps}
      />
    </>
  );
};

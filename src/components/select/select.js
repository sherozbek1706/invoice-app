import { useField } from "formik";

export const Select = () => {
  const [field] = useField("term");
  return (
    <select name="term" {...field}>
      <option value="1">Net 1 Days</option>
      <option value="7">Net 7 Days</option>
      <option value="14">Net 14 Days</option>
      <option value="30">Net 30 Days</option>
    </select>
  );
};

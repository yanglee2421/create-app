// Redux Imports
import { sliceLogin, useAppDispatch } from "@/redux";

// Form Imports
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ItemEmail, ItemPassword, ItemIsRemember } from "./form-items";

export function Component() {
  const dispatch = useAppDispatch();

  const schema = getSchema();
  const formReturn = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  // Submit & reset
  const handleReset = () => formReturn.reset();
  const handleSubmit = formReturn.handleSubmit((data) => {
    console.log(data);
    dispatch(sliceLogin.actions.islogged(true));
  });

  return (
    <div className="h-100">
      <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
        <FormProvider {...formReturn}>
          <ItemEmail name={"email"}></ItemEmail>
          <ItemPassword name={"passwd"}></ItemPassword>
          <ItemIsRemember name={"isRemember"}></ItemIsRemember>
        </FormProvider>
        <div>
          <button type="submit">login</button>
          <button type="reset">reset</button>
        </div>
      </form>
    </div>
  );
}

// Validate fields rules
function getSchema() {
  return yup.object().shape({
    email: yup
      .string()
      .required()
      .email()
      .max(30)
      .test((v, { createError }) => {
        if (v === "yanglee2421@gmail.com") return true;
        return createError({ message: "Email不正确" });
      }),
    passwd: yup
      .string()
      .required()
      .max(16)
      .test((v, { createError }) => {
        if (v === "admin") return true;
        return createError({ message: "密码不正确" });
      }),
    isRemember: yup.boolean().test((v, { createError }) => {
      if (v) return true;
      return createError({ message: "不记住你登nm" });
    }),
  });
}

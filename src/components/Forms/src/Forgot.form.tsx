// node_modules
import { useFormik } from "formik";
import * as Yup from "yup";

// packages
import UIComponents from "@src-path/packages/UIComponents";

interface IFormFields {
  email: string;
}

interface IForgotFormProps {
  onSubmit: (values: IFormFields) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}

const Forgot = ({ onSubmit, isLoading, error }: IForgotFormProps) => {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Email: invalid.").required("Email: required."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      await onSubmit(values);
    },
  });

  return (
    <form
      className="flex flex-col m-5 font-oswald"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col">
        <UIComponents.Input
          id="email"
          label="Email"
          type="Email"
          placeholder="Your email"
          error={formik.touched.email ? formik.errors.email : undefined}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <span className="mx-auto my-2 text-xs text-red-600">{error}</span>
      <UIComponents.Button buttonColor="blue" buttonColorIntensity={700}>
        <p className="text-white">REQUEST NEW PASSWORD</p>
      </UIComponents.Button>
    </form>
  );
};

export default Forgot;

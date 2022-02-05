// node_modules
import { useFormik } from "formik";
import * as Yup from "yup";

// packages
import UIComponents from "@src-path/packages/UIComponents";

interface IFormFields {
  username: string;
  name: string;
  email: string;
  password: string;
}

interface ISignUpFormProps {
  onSubmit: (values: IFormFields) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}

const SignUp = ({ onSubmit, isLoading, error }: ISignUpFormProps) => {
  const SignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username: too short (min 3 characters).")
      .max(30, "Username: too long (max 30 characters).")
      .matches(/^[a-zA-Z0-9]+$/, "Username: just letters and numbers.")
      .required("Username: required."),

    name: Yup.string()
      .min(3, "Name: too short (min 3 characters).")
      .max(30, "Name: too long (max 30 characters).")
      .matches(/^[a-zA-Z\s]+$/, "Name: just letters.")
      .required("Name: required."),

    email: Yup.string().email("Email: invalid.").required("Email: required."),

    password: Yup.string()
      .min(6, "Password: too short (min 6 characters).")
      .max(30, "Password: too long (max 30 characters).")
      .matches(
        /^[a-zA-Z0-9!#$%&*+-,.:;<=>?@_]+$/,
        "Password: just accept a-zA-Z0-9!#$%&*+-,.:;<=>?@_"
      )
      .required("Password: required."),

    confirmPassword: Yup.string()
      .min(6, "Confirm Password: too short (min 6 characters).")
      .max(30, "Confirm Password: too long (max 30 characters).")
      .matches(
        /^[a-zA-Z0-9!#$%&*+-,.:;<=>?@_]+$/,
        "Confirm Password: just accept a-zA-Z0-9!#$%&*+-,.:;<=>?@_"
      )
      .oneOf(
        [Yup.ref("password"), null],
        "Confirm Password: passwords must match."
      )
      .required("Confirm Password: required."),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      const valuesToSend = {
        username: values.username,
        name: values.name,
        email: values.email,
        password: values.password,
      };

      await onSubmit(valuesToSend);
    },
  });

  return (
    <form
      className="flex flex-col m-5 font-oswald"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col">
        <UIComponents.Input
          id="username"
          label="Username"
          placeholder="Your username"
          error={formik.touched.username ? formik.errors.username : undefined}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        <UIComponents.Input
          id="name"
          label="Name"
          placeholder="Your name"
          error={formik.touched.name ? formik.errors.name : undefined}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
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
        <UIComponents.Input
          id="password"
          label="Password"
          type="password"
          placeholder="Your password"
          error={formik.touched.password ? formik.errors.password : undefined}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <UIComponents.Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Repeat your password"
          error={
            formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : undefined
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
      </div>
      <span className="mx-auto my-2 text-xs text-red-600">{error}</span>
      <UIComponents.Button
        buttonColor="blue"
        buttonColorIntensity={700}
        isLoading={isLoading}
      >
        <p className="text-white">SIGN UP</p>
      </UIComponents.Button>
    </form>
  );
};

export default SignUp;

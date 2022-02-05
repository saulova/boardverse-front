// node_modules
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

// packages
import UIComponents from "@src-path/packages/UIComponents";
import Icons from "@src-path/packages/Icons";

interface IFormFields {
  username: string;
  password: string;
}

interface ISignInFormProps {
  onSubmit: (values: IFormFields) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}

const Login = ({ onSubmit, isLoading, error }: ISignInFormProps) => {
  const SignInSchema = Yup.object().shape({
    username: Yup.string()
      .min(3)
      .max(30)
      .matches(/^[a-zA-Z0-9]+$/)
      .required()
      .typeError("Username or password is invalid"),

    password: Yup.string()
      .min(3)
      .max(30)
      .matches(/^[a-zA-Z0-9!#$%&*+-,.:;<=>?@_]+$/)
      .required()
      .typeError("Username or password is invalid"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: SignInSchema,
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
          id="username"
          label="Username"
          placeholder="Your Username"
          icon={<Icons.HeroIcons.Outline.User />}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <UIComponents.Input
          id="password"
          label="Password"
          type="password"
          placeholder="Your Password"
          icon={<Icons.HeroIcons.Outline.LockOpen />}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <p className="font-sans text-sm text-right">
          Forgot your password?{" "}
          <Link href="/forgot">
            <a className="text-blue-900">Click here!</a>
          </Link>
        </p>
      </div>
      <span className="mx-auto my-2 text-red-600">
        {error
          ? error
          : formik.errors.username
          ? formik.errors.username
          : formik.errors.password && formik.errors.password}
      </span>
      <UIComponents.Button
        buttonColor="blue"
        buttonColorIntensity={700}
        isLoading={isLoading}
      >
        <p className="text-white">SIGN IN</p>
      </UIComponents.Button>
      <p className="mt-5 font-sans text-center">
        Don&apos;t have an account?{" "}
        <Link href="/signup">
          <a className="text-blue-900">Sign up!</a>
        </Link>
      </p>
    </form>
  );
};

export default Login;

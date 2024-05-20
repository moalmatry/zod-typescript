import "./App.css";
// import Dummy from "./components/Dummy";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const signupSchema = z
    .object({
      first_name: z.string().min(1, { message: "First Name is required" }),
      last_name: z.string().min(1, { message: "Last Name is required" }),
      email: z.string().email({ message: "Email is required" }),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" }),
      confirm_password: z.string().min(8),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Password must be match",
      path: ["confirm_password"],
    });

  type InputSingUp = z.infer<typeof signupSchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<InputSingUp>({
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<InputSingUp> = (data) => {
    console.log(data);

    setTimeout(() => {
      reset();
    }, 3000);
  };
  return (
    <>
      <h2>Hello React </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter you first name"
          {...register("first_name", { required: true })}
        />
        {errors.first_name && <span>{errors.first_name.message}</span>}
        <input
          type="text"
          placeholder="Enter your last name"
          {...register("last_name", { required: true })}
        />
        {errors.last_name && <span>{errors.last_name.message}</span>}

        <input
          type="email"
          placeholder="enter your  email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <input
          type="password"
          placeholder="confirm your password"
          {...register("confirm_password", { required: true })}
        />
        {errors.confirm_password && (
          <span>{errors.confirm_password.message}</span>
        )}

        <button type="submit">Sign up</button>
      </form>
    </>
  );
}

export default App;

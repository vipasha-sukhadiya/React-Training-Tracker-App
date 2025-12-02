import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(12, "Email must be at least 12 characters")
    .email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        className="bg-white shadow p-8 rounded w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        {/* Email Field */}
        <label className="block mb-2">Email</label>
        <input
          className="w-full p-2 border rounded"
          type="text"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}

        {/* Password Field */}
        <label className="block mt-2 mb-2">Password</label>
        <input
          className="w-full p-2 border rounded"
          type="password"
          id="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
        <button
          className="w-full bg-indigo-500 text-white p-2 mt-6 rounded hover:bg-indigo-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

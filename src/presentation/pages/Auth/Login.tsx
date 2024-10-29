import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { ILoginRequest } from "../../../use-case/interfaces";
import { useMutation } from "react-query";
import { AuthService } from "../../../use-case/services/auth/login.service";
import useAuthStore from "../../../domain/auth/auth.store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // React Hooks
  const navigate = useNavigate();

  // Store
  const setToken = useAuthStore((state) => state.setToken);

  const { register, handleSubmit } = useForm<ILoginRequest>({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: AuthService.login,
    onError: console.log,
    onSuccess: (r) => {
      setToken(r.token);
      navigate("/dashboard/home");
    },
  });

  const login = (data: ILoginRequest) => mutate(data);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Typography variant="h3" component="h3">
        Welcome Juliusbox
      </Typography>

      <form
        onSubmit={handleSubmit(login)}
        className="border-2 border-white p-5 mt-7 rounded"
      >
        <div className="mb-3">
          <TextField
            label="User Name"
            variant="outlined"
            className="w-72"
            type="text"
            {...register("name")}
          />
        </div>

        <div>
          <TextField
            label="Password"
            variant="outlined"
            className="w-72"
            type="password"
            {...register("password")}
          />
        </div>

        <div className="flex justify-center mt-3">
          <Button variant="contained" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

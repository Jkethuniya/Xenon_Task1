import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../react-query/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { Spin } from "antd";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
import { setUserInfo } from "../../utils/localStorage";

function Login() {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    mutation.mutate(data);
  };
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data, variables, context) => {
      setLoading(false);
      console.log(data);
      setUserInfo(data.token);

      toast.success("Successfully login");
      data.role === "Admin" ? navigate("/admin") : navigate("/");
    },
    onError: (error, variables, context) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
    onSettled: (data, error, variables, context) => {},
  });

  return (
    <div className="flex items-center justify-center h-screen w-full px-5 sm:px-0">
      {
        // mutation.isSuccess ? console.log('dfd'): console.log('ca')
      }
      <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full">
        
        <div className="w-full p-8 lg:w-1/2" style={{border:"1px solid #898989",borderRadius:"10px"}}>
          <p className="text-2xl text-gray-600 text-center"><h3>Login</h3></p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("userId")}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                required
              />
            </div>
            <div className="mt-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password")}
                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                type="password"
              />
              <a
                href="#"
                className="text-xs text-gray-500 hover:text-gray-900 text-end w-full mt-2"
              >
                Forget Password?
              </a>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-black text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                {loading ? <Spin pinning={loading} /> : "Login"}
              </button>
            </div>
          </form>

          <a
            href="#"
            className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          >
          
          </a>
          <div className="mt-4 flex items-center w-full text-center">
            <a
              href="#"
              className="text-xs text-gray-500 capitalize text-center w-full"
            >
              Don&apos;t have any account yet?
              <span
                className="text-blue-700"
                onClick={() => navigate("/register")}
              >
                {" "}
                Sign Up
              </span>
            </a>
          </div>
        </div>
      
  
         <img src="data:image/jpeg;base64,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" alt="" srcset="" style={{aspectRatio:"3/2", width:"50%"}} 
            
         />
      </div>
    </div>
  );
}

export default Login;

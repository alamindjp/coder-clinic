import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import github from '../../../Assets/icons/github.gif';
import google from '../../../Assets/icons/google.svg';
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../../SharedPage/Footer/Loader";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../SharedPage/useToken";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, , gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);


  const navigate = useNavigate();
  let signInError;


  const [token] = useToken(user || gUser || gitUser)

  console.log(user)
  if (loading || gLoading || gitLoading || updating) {
    return <Loading></Loading>;
  }



  if (error || gError || gitError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (user || gUser || gitUser) {
    console.log(user || gUser);
  }

  if (token) {

  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
    console.log(data)
    navigate("/");


  };

  return (
    <div className="flex h-screen backgroundImg justify-center items-center">
      <div className="card w-96 bg-base-100  bg-transparent shadow-2xl ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-gradient-to-r to-primary"
          >
            <div className="form-control w-full max-w-xs">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt ">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered  w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt ">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt ">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt ">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt ">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn w-full max-w-xs  mt-6"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p>
            <small className="font-bold text-center">
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Please login
              </Link>
            </small>
          </p>
          <div className="divider text-red-700">OR</div>
          <div className=" flex justify-evenly items-center">
            <button
              onClick={() => signInWithGoogle()}
            >
              <img src={google} alt=''></img>
            </button>
            <button
              onClick={() => signInWithGithub()}
            >
              <img style={{ width: '50px', height: '50px' }} src={github} alt=''></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
        }
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline border-2 btn-neutral w-full rounded-md"
      >
        <span>
          <FaGoogle />
        </span>
        Sign in With Google
      </button>
    </div>
  );
};

export default SocialLogin;

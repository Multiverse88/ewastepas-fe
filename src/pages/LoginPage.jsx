import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import InputEmail from "../components/Input/InputEmail";
import InputPassword from "../components/Input/InputPassword";
import { Login } from "../utils/Api";
import Cookies from "js-cookie";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
   e.preventDefault();

   // Clear previous error messages
   setEmailError("");
   setPasswordError("");

   let valid = true;

   // Check if email is empty
   if (email.trim() === "") {
     setEmailError("Email wajib diisi.");
     valid = false;
   }

   // Check if password is empty
   if (password.trim() === "") {
     setPasswordError("Kata sandi wajib diisi.");
     valid = false;
   }

   if (!valid) {
     return; // Prevent form submission if there are validation errors
   }

   try {
     const result = await Login(email, password);

     // If login is successful, store the JWT token and user info in cookies
     localStorage.setItem("token", result.token);
     Cookies.set(
       "profile",
       JSON.stringify({
         name: result.name, // Assuming the API returns user's name
         email: email, // You already have the email
       })
     );

     console.log("Login successful", result.message);

     // Redirect to the home page immediately after a successful login
     navigate("/");
   } catch (error) {
     console.error(error);

     if (error.response && error.response.data) {
       const { message } = error.response.data;
       if (message === "Pengguna tidak ditemukan") {
         setAlertMessage("Pengguna tidak ditemukan. Silakan cek email Anda.");
       } else if (
         message ===
         "Akun belum diverifikasi. Silakan periksa email Anda untuk OTP."
       ) {
         setAlertMessage(
           "Akun Anda belum diverifikasi. Silakan periksa email Anda untuk OTP."
         );
       } else if (message === "Password tidak valid") {
         setAlertMessage("Kata sandi tidak valid. Silakan coba lagi.");
       } else {
         setAlertMessage("Terjadi kesalahan. Silakan coba lagi.");
       }
     } else {
       setAlertMessage("Terjadi kesalahan. Silakan coba lagi.");
     }

     setShowAlert(true);
   }
 };


  return (
    <div className="container px-1 mt-28 md:mt-14 lg:mt-14 xl:mt-14 flex justify-center md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 xl:mx-8 lg:mx-6">
        <div className="hidden xl:block lg:block md:block md:my-8 md:mx-4 md:w-90 xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img src="/images/register.png" alt="Registrasi" />
        </div>
        <div className="p-6 w-full max-w-md">
          <div className="flex justify-center mb-8 -mt-10">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-52 md:w-56 xl:w-64"
            />
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold mb-2 -mt-5 text-gray-800">
            Masuk
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Masuk untuk mengakses akun Anda
          </h5>

          <form onSubmit={handleSubmit}>
            <div>
              <InputEmail
                id="email"
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Email"}
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">{emailError}</p>
              )}
            </div>

            <div className="mt-4">
              <InputPassword
                id="password"
                label={"Kata Sandi"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Kata Sandi"}
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>

            <div className="my-3 flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="form-checkbox text-blue-600"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm xl:text-base ml-3 text-gray-700 text-md"
                >
                  Ingatkan saya
                </label>
              </div>
              <a
                href="ForgotPasswordPage"
                className="text-sm xl:text-base text-red-500 text-md"
              >
                Lupa kata sandi
              </a>
            </div>
            <button
              type="submit"
              className="text-sm xl:text-base w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded"
            >
              Masuk
            </button>
          </form>
          <div className="text-sm xl:text-base text-center mt-2">
            <p>
              Anda belum memiliki akun?{" "}
              <a href="RegisterPage" className="text-red-500">
                Registrasi
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Alert Box for error messages */}
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <div className="mb-4">
              <img
                src="/images/gagal.png"
                alt="Alert Icon"
                className="w-20 h-20 mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
              Login Gagal!
            </h2>
            <p className="text-gray-700 text-sm text-center mb-4">
              {alertMessage}
            </p>
            <div className="text-center">
              <button
                onClick={() => setShowAlert(false)}
                className="bg-primary text-white py-2 px-4 hover:bg-primary-dark"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;

import { useState } from "react";
import "../styles/style.css";
import InputEmail from "../components/Input/InputEmail";
import { IoIosArrowRoundBack } from "react-icons/io";
import { forgotPassword } from "../utils/Api";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const [loading, setLoading] = useState(false); // New state for loading status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage(""); // Reset success message on form submission
    setLoading(true); // Set loading to true when starting the request

    try {
      await forgotPassword(email);
      // Set success message if email is sent successfully
      setSuccessMessage("Tautan reset kata sandi telah dikirim ke email Anda.");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("Email tidak ditemukan.");
      } else {
        alert("Terjadi kesalahan pada server.");
      }
    } finally {
      setLoading(false); // Set loading to false after request is completed
    }
  };

  return (
    <div className="container px-1 mt-28 md:mt-14 lg:mt-14 xl:mt-14 flex justify-center md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 xl:mx-8 lg:mx-6">
        <div className="hidden xl:block lg:block md:block md:my-8 md:mx-4 md:w-90 xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img src="/images/forgot.png" alt="Lupa Kata Sandi" />
        </div>
        <div className="p-6 w-full max-w-md">
          <div className="flex justify-center mb-10 -mt-10">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-52 md:w-56 xl:w-64"
            />
          </div>
          <h1 className="text-3xl xl:text-4xl font-bold mb-2 -mt-5 text-gray-800">
            Lupa Kata Sandi
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Masukkan email Anda untuk atur ulang kata sandi
          </h5>

          {/* Conditional rendering of success message */}
          {successMessage && (
            <div className="text-green-500 text-sm mb-3">{successMessage}</div>
          )}

          {/* Conditional rendering of the error message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            <InputEmail
              id="email"
              label={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Email"}
            />

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded cursor-pointer"
              disabled={loading} // Disable button when loading
            >
              {loading ? "Memproses..." : "Kirim"}{" "}
              {/* Display processing or submit text */}
            </button>
          </form>
          <div className="text-sm xl:text-base my-3 flex items-center justify-center">
            <a href="/LoginPage" className="text-black flex items-center">
              <IoIosArrowRoundBack size={28} className="mr-2" /> Kembali ke
              Halaman Masuk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/style.css";
import InputPassword from "../components/Input/InputPassword";
import { verifyOtp } from "../utils/Api";

function OtpPage() {
  const [otp, setOtp] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { from, email } = location.state || { from: "RegisterPage", email: "" };
  if (!email) {
    console.error("Email not found in location state");
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("Attempting OTP verification with:", email, otp);
    const response = await verifyOtp(email, otp);
    console.log("Server response:", response);

    if (response.message.includes("berhasil diverifikasi")) {
      setAlertType("success");
      setShowAlert(true);
    } else {
      setAlertType("error");
      setShowAlert(true);
    }
  } catch (error) {
    console.error(
      "Error during OTP verification:",
      error.response ? error.response.data : error.message
    );
    setAlertType("error");
    setShowAlert(true);
  }
};




  const closeAlert = () => {
    setShowAlert(false);
    if (alertType === "success") {
      if (from === "RegisterPage") {
        navigate("/LoginPage");
      }
    }
  };

  return (
    <div className="container px-1 mt-28 md:mt-14 lg:mt-14 xl:mt-14 flex justify-center md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-8 lg:gap-7 md:gap-6 xl:mx-8 lg:mx-6 ">
        <div className="hidden xl:block lg:block md:block md:my-8 md:mx-4 md:w-90 xl:w-100 xl:my-5 lg:w-95 lg:my-5">
          <img src="/images/otp.png" alt="Registrasi" />
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
            Verifikasi OTP
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Kode verifikasi telah dikirim melalui email Anda
          </h5>

          <form onSubmit={handleSubmit}>
            <InputPassword
              id="otp"
              label={"Masukkan Kode"}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder={"Kode OTP"}
            />
            <div className="my-3 text-sm xl:text-base">
              <p>
                Tidak mendapatkan kode OTP?{" "}
                <a href="#" className="text-red-500">
                  Kirim ulang
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded"
            >
              Verifikasi
            </button>
          </form>
        </div>
      </div>

      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
            <div className="mb-4">
              <img
                src={
                  alertType === "success"
                    ? "/images/berhasil.png"
                    : "/images/gagal.png"
                }
                alt="Alert Icon"
                className="w-20 h-20 mx-auto"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
              {alertType === "success"
                ? "Verifikasi Berhasil!"
                : "Verifikasi Gagal!"}
            </h2>
            <p className="text-gray-700 text-sm text-center mb-4">
              {alertType === "success"
                ? "Akun Anda berhasil dibuat. Silakan login untuk melanjutkan."
                : "Kode OTP yang Anda masukkan tidak valid. Silakan coba lagi."}
            </p>
            <div className="text-center">
              <button
                onClick={closeAlert}
                className="bg-primary text-white py-2 px-4 hover:bg-primary-dark"
              >
                {alertType === "success" ? "Masuk Sekarang" : "Coba Lagi"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OtpPage;

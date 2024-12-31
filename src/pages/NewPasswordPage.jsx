import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/style.css";
import InputPassword from "../components/Input/InputPassword";
import { resetPassword } from "../utils/Api";

function NewPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { email } = useParams();
  const navigate = useNavigate();

  // Password validation checks
  const isValidLength = newPassword.length >= 8 && newPassword.length <= 20;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasNumber = /\d/.test(newPassword);
  const hasSpecialChar = /[#!?$&@.]/.test(newPassword);

  useEffect(() => {
    if (!isFocused && newPassword) {
      if (!isValidLength || !hasUppercase || !hasNumber || !hasSpecialChar) {
        setErrors((prev) => ({
          ...prev,
          newPassword:
            "Password tidak valid. Pastikan password memenuhi syarat.",
        }));
        setIsPasswordValid(false);
      } else {
        setErrors((prev) => ({
          ...prev,
          newPassword: "",
        }));
        setIsPasswordValid(true);
      }
    }
  }, [
    isFocused,
    newPassword,
    isValidLength,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  ]);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Start loading

  if (newPassword !== confirmNewPassword) {
    alert("Kata sandi tidak sesuai!");
    setLoading(false); // Stop loading
    return;
  }

  try {
    await resetPassword(email, newPassword);

    // Show the success alert and stop loading
    setShowAlert(true);
    setLoading(false);
  } catch (error) {
    alert(`Terjadi kesalahan: ${error.message}`);
    setLoading(false); // Stop loading
  }
};

  const closeAlert = () => {
    setShowAlert(false);
    navigate("/LoginPage");
  };

  const validationMessage = (
    <div className="flex flex-col items-start text-sm mt-2">
      <p className="text-gray-700">
        Kata sandi Anda setidaknya harus memiliki:
      </p>
      <p className={isValidLength ? "text-green-500" : "text-red-500"}>
        ✓ 8 karakter (maksimal 20)
      </p>
      <p
        className={
          hasUppercase && hasNumber ? "text-green-500" : "text-red-500"
        }
      >
        ✓ 1 huruf kapital dan 1 angka
      </p>
      <p className={hasSpecialChar ? "text-green-500" : "text-red-500"}>
        ✓ 1 karakter khusus (contoh: . # ? ! $ & @)
      </p>
    </div>
  );

  // Disable submit if password is invalid or if there are other validation errors
  const isSubmitDisabled =
    !isPasswordValid || !!errors.newPassword || !!errors.confirmNewPassword;

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
          <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 -mt-5 text-gray-800">
            Buat Kata Sandi Baru
          </h1>
          <h5 className="text-sm xl:text-base mb-2 text-black opacity-50 font-semibold">
            Permintaan atur ulang kata sandi diterima. <br />
            Silakan masukkan kata sandi baru Anda!
          </h5>

          <form onSubmit={handleSubmit}>
            <InputPassword
              id="newPassword"
              label={"Kata Sandi Baru"}
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setErrors((prev) => ({ ...prev, newPassword: "" }));
              }}
              placeholder={"Kata Sandi Baru"}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {errors.newPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.newPassword}
              </div>
            )}
            {isFocused && validationMessage}

            <InputPassword
              id="confirmNewPassword"
              label={"Konfirmasi Kata Sandi Baru"}
              value={confirmNewPassword}
              onChange={(e) => {
                const value = e.target.value;
                setConfirmNewPassword(value);
                if (value && value !== newPassword) {
                  setErrors((prev) => ({
                    ...prev,
                    confirmNewPassword: "Kata sandi tidak cocok.",
                  }));
                } else {
                  setErrors((prev) => ({
                    ...prev,
                    confirmNewPassword: "",
                  }));
                }
              }}
              placeholder={"Konfirmasi Kata Sandi Baru"}
            />
            {errors.confirmNewPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.confirmNewPassword}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded cursor-pointer"
              disabled={loading || isSubmitDisabled}
            >
              {loading ? "Memproses..." : "Ubah Kata Sandi"}
            </button>
          </form>

          {/* Custom success alert */}
          {showAlert && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm">
                <div className="mb-4">
                  <img
                    src="/images/berhasil.png"
                    alt="Alert Image"
                    className="w-20 h-20 mx-auto"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  Berhasil!!
                </h2>
                <p className="text-gray-700 text-sm text-center mb-4">
                  Password Anda telah berhasil diperbarui
                </p>
                <div className="text-center">
                  <button
                    onClick={closeAlert}
                    className="bg-primary text-white py-2 px-4 hover:bg-primary-dark"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewPasswordPage;

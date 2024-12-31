import { useState, useEffect } from "react";
import InputPassword from "../Input/InputPassword";
import { changePassword } from "../../utils/Api";

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true); 
  const [showAlert, setShowAlert] = useState(false); 

  
  const isValidLength = newPassword.length >= 8 && newPassword.length <= 20;
  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasNumber = /\d/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

  useEffect(() => {
    if (!isFocused && newPassword) {
      if (!isValidLength || !hasUppercase || !hasNumber || !hasSpecialChar) {
        setError("Kata sandi baru tidak memenuhi syarat.");
        setIsPasswordValid(false);
      } else {
        setError("");
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
    setError("");
    setLoading(true);

 
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError("Semua kolom harus diisi.");
      setLoading(false);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("Kata sandi baru dan konfirmasi kata sandi tidak cocok.");
      setLoading(false);
      return;
    }

    if (!isPasswordValid) {
      setError("Kata sandi baru tidak memenuhi syarat.");
      setLoading(false);
      return;
    }

    try {
      const response = await changePassword(
        currentPassword,
        newPassword,
        confirmNewPassword
      );

      if (response.status === 200) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setShowAlert(true); 
      } else {
        setError("Terjadi masalah saat mengganti kata sandi. Coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error?.response?.data || error.message);
      if (error?.response?.data?.message === "Current password is incorrect") {
        setError("Password lama tidak sesuai.");
      } else if (error?.response?.data?.message === "Password is too weak") {
        setError("Password baru terlalu lemah.");
      } else if (error?.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Gagal mengganti kata sandi. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
  };

  const closeAlert = () => {
    setShowAlert(false); 
  };

  const validationMessage = (
    <div className="flex flex-col items-start text-sm mt-2">
      <p className="text-gray-700">Kata sandi baru harus memiliki:</p>
      <p className={isValidLength ? "text-green-500" : "text-red-500"}>
        ✓ Minimal 8 karakter (maksimal 20)
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

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-md border border-gray-300"
      >
        <h5 className="text-xl font-semibold mb-6">Ubah Kata Sandi</h5>
        <hr className="border-t-1 border-black -mt-4 mb-5" />
        <div className="space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <InputPassword
            id="currentPassword"
            label="Kata Sandi Lama"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Kata sandi lama"
          />
          <InputPassword
            id="newPassword"
            label="Kata Sandi Baru"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Kata sandi baru"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {isFocused && validationMessage}{" "}
          <InputPassword
            id="confirmNewPassword"
            label="Konfirmasi Kata Sandi Baru"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Konfirmasi kata sandi baru"
          />
          <div className="flex justify-end mt-6 space-x-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white hover:bg-primary"
              disabled={loading || !isPasswordValid || error}
            >
              {loading ? "Memproses..." : "Simpan"}
            </button>
          </div>
        </div>
      </form>
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
              Berhasil!
            </h2>
            <p className="text-gray-700 text-sm text-center mb-4">
              Kata sandi Anda telah berhasil diubah.
            </p>
            <div className="text-center">
              <button
                onClick={closeAlert}
                className="bg-primary text-white py-2 px-4 hover:bg-primary-dark"
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePasswordForm;

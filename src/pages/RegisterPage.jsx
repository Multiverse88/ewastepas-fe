import { useState } from "react";
import "../styles/style.css";
import InputText from "../components/Input/InputText";
import InputEmail from "../components/Input/InputEmail";
import InputPassword from "../components/Input/InputPassword";
import { FcGoogle } from "react-icons/fc";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Kata sandi tidak sesuai!");
      return;
    }
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <>
      <div className="container px-4 py-16 mx-32 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-4/5">
            <img src="images/register.png" alt="Registrasi" />
          </div>
          <div className="p-6 w-full max-w-md">
            <div className="flex justify-center mb-10 -mt-10">
              <img src="/images/logo.png" alt="Logo" className="w-64" />
            </div>
            <h1 className="text-4xl font-bold mb-4 -mt-5 text-gray-800">
              Registrasi
            </h1>
            <h5 className="text-md mb-4 text-black opacity-50 font-semibold">
              Mari siapkan semuanya agar Anda dapat mengakses akun Anda
            </h5>

            <form onSubmit={handleSubmit}>
              <InputText
                id="name"
                type={"text"}
                label={"Nama Pengguna"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Nama Pengguna"}
              />
              <InputEmail
                id="email"
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Email"}
              />
              <InputPassword
                id="password"
                label={"Kata Sandi"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={"Kata Sandi"}
              />
              <InputPassword
                id="confirmPassword"
                label={"Konfirmasi Kata Sandi"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={"Konfirmasi Kata Sandi"}
              />

              <div className="mb-2">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="form-checkbox text-blue-600"
                  required
                />
                <label
                  htmlFor="agreeToTerms"
                  className="ml-3 text-gray-700 text-sm"
                >
                  Saya menyetujui semua{" "}
                  <a href="#" className="text-red-500">
                    Syarat
                  </a>{" "}
                  dan{" "}
                  <a href="#" className="text-red-500">
                    Kebijakan Privasi
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded"
              >
                Daftar
              </button>
            </form>
            <div className="text-center mt-2">
              <p>
                Anda sudah memiliki akun?{" "}
                <a href="LoginPage" className="text-red-500">
                  Masuk
                </a>
              </p>
              {/* Garis dan teks "Atau daftar dengan" */}
              <div className="flex items-center justify-center mt-1">
                <hr className="w-24 border-gray-300" />
                <p className="text-gray-500 mx-3">Atau daftar dengan</p>
                <hr className="w-24 border-gray-300" />
              </div>

              {/* Button di tengah */}
              <div className="flex justify-center mt-1">
                <button className="relative flex justify-center items-center w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:shadow-lg transition duration-300">
                  <FcGoogle size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;

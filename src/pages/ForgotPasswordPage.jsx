import { useState } from "react";
import "../styles/style.css";
import InputEmail from "../components/Input/InputEmail";
import { IoIosArrowRoundBack } from "react-icons/io";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email });
  };

  return (
    <>
      <div className="container px-4 py-16 mx-32 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-4/5">
            <img src="/public/images/forgot.png" alt="Registrasi" />
          </div>
          <div className="p-6 w-full max-w-md">
            <div className="flex justify-center mb-10 -mt-10">
              <img src="/public/images/Logo.png" alt="Logo" className="w-64" />
            </div>
            <h1 className="text-4xl font-bold mb-4 -mt-5 text-gray-800">
              Lupa Kata Sandi
            </h1>
            <h5 className="text-md mb-4 text-black opacity-50 font-semibold">
              Masukkan email Anda untuk atur ulang kata sandi{" "}
            </h5>

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
                className="w-full bg-primary hover:bg-primary-dark font-semibold text-white py-2 px-4 rounded mt-3"
              >
                Kirim
              </button>
            </form>
            <div className="my-3 flex items-center justify-center">
              <a href="LoginPage" className="text-black flex items-center">
                <IoIosArrowRoundBack size={28} className="mr-2" /> Kembali ke
                Halama Masuk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordPage;

import { useState } from "react";
import InputText from "../Input/InputText";
import InputEmail from "../Input/InputEmail";
import { FaPenToSquare } from "react-icons/fa6";

const Profile = () => {
  const initialValues = {
    nama: "",
    email: "",
    nomorTelepon: "",
    tanggalLahir: "",
    alamat: "",
  };

  const [nama, setNama] = useState(initialValues.nama);
  const [email, setEmail] = useState(initialValues.email);
  const [nomorTelepon, setNomorTelepon] = useState(initialValues.nomorTelepon);
  const [tanggalLahir, setTanggalLahir] = useState(initialValues.tanggalLahir);
  const [alamat, setAlamat] = useState(initialValues.alamat);
  const [profilePhoto, setProfilePhoto] = useState(
    "../../../public/images/profile.png" 
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleCancel = () => {
    setNama(initialValues.nama);
    setEmail(initialValues.email);
    setNomorTelepon(initialValues.nomorTelepon);
    setTanggalLahir(initialValues.tanggalLahir);
    setAlamat(initialValues.alamat);
    setProfilePhoto("../../../public/images/profile.png"); 
    console.log("Changes discarded, form reset to initial values");
  };


  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-lg shadow-md border border-gray-300"
    >
      <h5 className="text-xl font-semibold mb-6">Profil</h5>
      <hr className="border-t-1 border-black -mt-4 mb-5" />
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <label
            htmlFor="photoInput"
            className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full cursor-pointer hover:bg-primary"
          >
            <FaPenToSquare size={20} />
          </label>
          <input
            type="file"
            id="photoInput"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <InputText
            id="nama"
            type="text"
            label={"Nama"}
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder={"Nama"}
          />
        </div>
        <div>
          <InputEmail
            id="email"
            label={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Email"}
          />
        </div>
        <div>
          <InputText
            id="nomorTelepon"
            type="text"
            label={"Nomor Telepon"}
            value={nomorTelepon}
            onChange={(e) => setNomorTelepon(e.target.value)}
            placeholder={"Nomor Telepon"}
          />
        </div>
        <div>
          <InputText
            id="tanggalLahir"
            type="date"
            label={"Tanggal Lahir"}
            value={tanggalLahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
            placeholder={"Tanggal Lahir"}
          />
        </div>
        <div className="col-span-2">
          <InputText
            id="alamat"
            type="text"
            label={"Alamat"}
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder={"Alamat"}
          />
        </div>
      </div>
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
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default Profile;

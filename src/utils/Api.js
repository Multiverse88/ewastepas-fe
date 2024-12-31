import axios from "axios";

import Cookies from "js-cookie";

const API_BASE_URL = "http://localhost:3000/auth";

export async function Register(name, email, password, confirmPassword) {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      name,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function verifyOtp(email, otp_code) {
  try {
    console.log("Verifying OTP with:", { email, otp_code });
    const response = await axios.post(`${API_BASE_URL}/verify-otp`, {
      email,
      otp_code,
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during OTP verification:", error);
    throw error;
  }
}

export async function Login(email, password, rememberMe) {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
      rememberMe,
    });

    console.log("Login response:", response);

    if (response.data && response.data.token) {
      const expires = rememberMe ? 7 : 1;

      Cookies.set("token", response.data.token, { expires });

      if (response.data.profile) {
        Cookies.set("profile", JSON.stringify(response.data.profile), {
          expires,
        });
      }

      return response.data;
    } else {
      throw new Error("Token tidak ditemukan dalam respons");
    }
  } catch (error) {
    console.error("Error saat login:", error);
    throw new Error(
      error?.response?.data?.message || "Login gagal. Silakan coba lagi."
    );
  }
}

export async function forgotPassword(email) {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error during forgot password request:", error);
    throw error;
  }
}

export async function resetPassword(email, newPassword) {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/reset-password/${email}`,
      {
        newPassword,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error during password reset:", error);
    throw error;
  }
}

export const Logout = async () => {
  try {
    await axios.post(`${API_BASE_URL}/logout`);

    Cookies.remove("token");
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

export async function changePassword(
  currentPassword,
  newPassword,
  confirmNewPassword
) {
  try {
    const token = Cookies.get("token");

    if (!token) {
      throw new Error("Token tidak ditemukan, silakan login kembali.");
    }

    const payload = {
      currentPassword,
      newPassword,
      confirmNewPassword,
    };

    const response = await axios.put(
      `${API_BASE_URL}/change-password`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error during password change:", error);
    throw error;
  }
}

export async function fetchProfileData() {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("No token found");
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user[0];
  } catch (error) {
    console.error("Error fetching profile data: ", error);
    throw error;
  }
}

export async function updateProfile(profileData) {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("No token found");
  }

  try {
    const response = await axios.put(`${API_BASE_URL}/profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
}

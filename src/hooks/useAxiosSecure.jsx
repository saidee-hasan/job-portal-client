import axios from "axios";
import { linkWithCredential } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAuth from "./useAuth";
import { useNavigate, useNavigation } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://server-jobs.vercel.app",
  withCredentials: true,
});

function useAxiosSecure() {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.status === 401 || err.status === 403) {
          signOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.error("Error signing out:", error);
              // Optionally, show an error message to the user
            });
        }
        return Promise.reject(err);
      }
    );
  });
  return instance;
}
export default useAxiosSecure;

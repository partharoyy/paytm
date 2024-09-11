import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useCheckAuth = ({ redirectOnSuccess = "/dashboard", redirectOnFailure = "/signup" } = {}) => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/me`, {
          headers,
        });

        if (response.data.success) {
          setUserId(response.data.userId);
          if (redirectOnSuccess) navigate(redirectOnSuccess);
        } else {
          if (redirectOnFailure) navigate(redirectOnFailure);
        }
      } catch (error) {
        console.error("Error making request:", error);
        if (redirectOnFailure) navigate(redirectOnFailure);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate, redirectOnFailure, redirectOnSuccess]);

  return { userId, loading };
};

export default useCheckAuth;

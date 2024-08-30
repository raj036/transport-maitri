import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "../helper/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// Define the shape of the context
interface AuthContextType {
  isAuthenticated: boolean;
  userData: any; // New state to store user data
  login: (email: string, password: string, file?: File) => Promise<void>;
  logout: () => void;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Check localStorage for existing authentication state
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? true : false;
  });

  const [userData, setUserData] = useState<any>(() => {
    // Retrieve user data from localStorage if available
    const savedUserData = localStorage.getItem("userData");
    return savedUserData ? JSON.parse(savedUserData) : null;
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Store the user data in localStorage whenever it changes
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  // Define the login function
  const login = async (email: string, password: string, file?: File) => {
    try {
      const formData = new FormData();
      formData.append("user_email", email);
      formData.append("user_password", password);
      if (file) {
        formData.append("file", file);
      }

      const response = await axios.post("/AI_surveillance_login/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
        setUserData(response.data); // Store user data in state
        navigate("/page");
      }
    } catch (error) {
      Swal.fire({
        title: "Login Failed.",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      console.log(error);
    }
  };

  // Define the logout function
  const logout = async () => {
    if (isAuthenticated) {
      // const result = await Swal.fire({
      //   title: "Are you sure you want to logout?",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, log out",
      // });
      // if (result.isConfirmed) {
        setIsAuthenticated(false);
        setUserData(null); // Clear user data from state
        localStorage.removeItem("userData"); // Remove user data from localStorage
        navigate("/");
      // }
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

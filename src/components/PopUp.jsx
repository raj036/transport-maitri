import React, { useEffect } from "react";
import { useAuth } from "../AuthContext/LoginContext";
import { useLocation, useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { type } = location.state || {}; // Get 'type' from state

  const {userData} = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (logout()) {
        navigate("/");
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [logout]);

  return (
    <div className="mx-auto my-0 max-w-[426px] h-screen bg-[#3d4b5e] flex items-center justify-center">
      <div className=" bg-gradient-to-b from-[#002966] to-[#0075FF] bg-opacity-20 rounded-xl p-14 text-center">
        <div className="mb-4">
          <img src="/tick.svg" alt="tick icon" className="w-16 h-16 mx-auto " />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Verification done
        </h2>
        <p className="text-white text-lg">
          {type === "arrival"
            ? `Submit your keys in box number :- ${userData.assigned_keys}`
            : "Welcome! The gate is open now."}
        </p>
      </div>
    </div>
  );
};

export default VerificationPage;

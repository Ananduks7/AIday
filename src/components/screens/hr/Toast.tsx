import React, { useEffect } from "react";

interface SuccessToastProps {
  message: string;
  duration?: number; // milliseconds to auto-hide, default 3 seconds
  onClose: () => void;
}

const SuccessToast: React.FC<SuccessToastProps> = ({
  message,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        backgroundColor: "#28a745", // green
        color: "white",
        padding: "1rem 1.5rem",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        fontWeight: "bold",
        zIndex: 10000,
        minWidth: "250px",
      }}
    >
      {message}
    </div>
  );
};

export default SuccessToast;

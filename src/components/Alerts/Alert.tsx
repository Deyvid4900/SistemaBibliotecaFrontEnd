import React from "react";

interface AlertProps {
  alertFlag: boolean;
  children: React.ReactNode;
}

const AlertComponent: React.FC<AlertProps> = ({ alertFlag,children }) => {
  return (
    <div
      className="alert alert-success position-absolute end-0 w-25 z-3"
      role="alert"
      style={{
        transition: "opacity 0.5s ease-in-out",
        opacity: alertFlag ? 1 : 0,
        pointerEvents: alertFlag ? "auto" : "none",
        zIndex: alertFlag ? 1 : -1
      }}
    >
      {children}
    </div>
  );
};

export default AlertComponent;

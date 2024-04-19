import { useEffect, useState } from "react";
import "./ChekingAuth.scss";

export const ChekingAuth = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      {/* {loading && <p>Loading...</p>} */}
    </div>
  );
};

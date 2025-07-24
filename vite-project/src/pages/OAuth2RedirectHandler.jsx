// src/pages/OAuth2RedirectHandler.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OAuth2RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      // JWT 저장 (보통 localStorage에 저장)
      localStorage.setItem("accessToken", token);

      console.log("성공" + token);
      // 홈으로 이동
      navigate("/");
    } else {
      // 실패 시 로그인 페이지로
      navigate("/login?error=true");
    }
  }, []);

  return <div>로그인 처리 중입니다…</div>;
};

export default OAuth2RedirectHandler;
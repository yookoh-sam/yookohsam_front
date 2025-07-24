import React from "react";
import shopImage from "../assets/image_pizza.png"
import { ProfileBar } from "../components/ProfileBar";
import { useNavigate } from "react-router-dom";
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
const images = [img1, img2, img3, img4];

export const ShopInfo = () => {
    const navigate = useNavigate();

    const handleNavigateProfile = () => {
        navigate('/profile');
    }

  return (

    <div className="w-full max-w-md mx-auto bg-white min-h-screen">
        <ProfileBar />
      {/* 상단 영역 */}
      <div className="pl-4 mt-3">
        <h2 className="text-xl font-bold">부자 피자 1호점</h2>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <span className="text-blue-500 mr-1">★ 4.4</span>
          <span>· 주민 리뷰 56 · 내 맛집 등록수 12</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">성산 1동</div>
        <button className="mt-2 px-3 py-1 border rounded-full text-sm text-blue-500 border-blue-500">
          리뷰 작성
        </button>
      </div>

      {/* 이미지 */}
      <div className="pl-4 mt-4 flex gap-2">
        <img src={shopImage} alt="store" className="w-1/2 rounded-md" />
        <img src={shopImage} alt="store" className="w-1/2 rounded-md" />
      </div>

        {/* 등록한 사람들 */}
        <div className="mt-6 px-4">
        <h3 className="font-semibold text-base mb-4">
            내 맛집으로 등록한 사람들
        </h3>

        <div className="overflow-y-auto max-h-[240px] pr-1 space-y-4">
            {images.map((imgSrc, idx) => (
            <div key={idx} className="relative w-full">
                <img
                src={imgSrc}
                alt={`유저 ${idx + 1}`}
                className="w-full rounded-lg"
                />

                {/* 프로필 보기 버튼 */}
                <button
                onClick={() => handleNavigateProfile(idx)}
                className="absolute top-2 right-2 inline-flex h-[25px] px-[13px] py-[6px] items-center gap-[10px] rounded-[5px] bg-[#DBE9FF] text-[#0064FF] font-medium text-[11px] leading-none font-pretendard shadow-sm"
                >
                프로필 보기
                </button>
            </div>
            ))}
        </div>
        </div>



      {/* 하단 픽 버튼 */}
      <div className="mt-8 px-4 mb-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer" onClick={(()=>alert('기능 구현 예정입니다!'))} >
          내 맛집으로 픽하기
        </button>
      </div>
    </div>
  );
};

export default ShopInfo;
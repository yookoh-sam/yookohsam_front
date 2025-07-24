import React from "react";
import shopImage from "../assets/image_pizza.png"
import { ProfileBar } from "../components/ProfileBar";
import { useNavigate } from "react-router-dom";

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
        <h3 className="font-semibold text-base mb-4">내 맛집으로 등록한 사람들</h3>
        <div className="overflow-y-auto max-h-[240px] pr-1 space-y-4">
        {/* 유저 카드 반복 */}
        {[1, 2, 3, 4, 5].map((_, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start mb-4 border-b pb-4"
          >
            <div className="px-2 mt-3 flex gap-3">
              {/* 프로필 + 뱃지 */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div className="absolute -top-2 -left-2 bg-pink-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {idx + 1}
                </div>
              </div>
              <div>
                <div className="text-sm font-bold">user <span className="text-gray-500 text-xs">성산동 주민</span></div>
                <div className="text-xs text-gray-400">21시간 전</div>
                <div className="mt-1 text-sm">가게 리뷰 내<br />응....................................<span className="text-blue-500">더보기</span></div>
              </div>
            </div>
            <button className="inline-flex h-[25px] px-[13px] py-[6px] items-start gap-[10px] rounded-[5px] bg-[#DBE9FF] text-[#0064FF] font-medium text-[11px] leading-none font-pretendard"
            onClick={handleNavigateProfile}>
              프로필 보기
            </button>
            
          </div>
        ))}
        </div>
      </div>

      {/* 하단 픽 버튼 */}
      <div className="mt-8 px-4 mb-4">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer" >
          내 맛집으로 픽하기
        </button>
      </div>
    </div>
  );
};

export default ShopInfo;
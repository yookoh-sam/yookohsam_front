import { useNavigate } from "react-router-dom";

const reviewCard = ({ reviews }) => {
  const nav = useNavigate();

  const handleNavigateProfile = () => {
    nav("/profile");
  };
  return (
    <div
      key={reviews.reviewId}
      className="flex justify-between items-start mb-4 border-b pb-4"
    >
      <div className="px-2 mt-3 flex gap-3">
        {/* 프로필 + 뱃지 */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div className="absolute -top-2 -left-2 bg-pink-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
            {reviews.reviewId}
          </div>
        </div>
        <div>
          <div className="text-sm font-bold">
            {reviews.userInfo.nickname}
            <span className="text-gray-500 text-xs">성산동 주민</span>
          </div>
          <div className="text-xs text-gray-400">21시간 전</div>
          <div className="mt-1 text-sm">
            {reviews.content}
            <span className="text-blue-500">더보기</span>
          </div>
        </div>
      </div>
      <button
        className="inline-flex h-[25px] px-[13px] py-[6px] items-start gap-[10px] rounded-[5px] bg-[#DBE9FF] text-[#0064FF] font-medium text-[11px] leading-none font-pretendard"
        onClick={handleNavigateProfile}
      >
        프로필 보기
      </button>
    </div>
  );
};

export default reviewCard;

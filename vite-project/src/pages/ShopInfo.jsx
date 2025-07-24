import React, { useEffect, useState } from "react";
import shopImage from "../assets/image_pizza.png";
import { ProfileBar } from "../components/ProfileBar";
import { useNavigate, useParams } from "react-router-dom";
import { getStoreById, getReviewById } from "../apis/store";
import ReviewCard from "../components/ReviewCard";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
const images = [img1, img2, img3, img4];


export const ShopInfo = () => {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const [store, setStore] = useState(null);
  const [reviewData, setReviewData] = useState(null);


  useEffect(() => {
    const getStoreInfo = async () => {
      try {
        const data = await getStoreById(storeId);
        setStore(data);
        console.log("가게 정보:", data);
      } catch (error) {
        console.log("가게 정보 없음", error);
      }
    };
    if (storeId) getStoreInfo();
  }, [storeId]);

  useEffect(() => {
    const getReview = async () => {
      try {
        const data = await getReviewById(storeId);
        setReviewData(data);
      } catch (error) {
        console.log("리뷰 정보 없음", error);
      }
    };
    if (storeId) getReview();
  }, [storeId]);

  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen">
      <ProfileBar />

      {/* 상단 영역 */}
      <div className="pl-4 mt-3">
        <h2 className="text-xl font-bold">{store?.name ?? "로딩 중..."}</h2>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <span className="text-blue-500 mr-1">★ 4.4</span>
          <span>
            · 주민 리뷰 {reviewData?.numOfReviews ?? 0} · 내 맛집 등록수 12
          </span>
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
          {reviewData?.reviews?.map((review) => (
            <ReviewCard key={review.reviewId} reviews={review} />
          ))}
        </div>
      </div>

      {/* 하단 픽 버튼 */}
      <div className="mt-8 px-4 mb-4">
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer"
          onClick={() => alert("기능 구현 예정입니다!")}
        >
          내 맛집으로 픽하기
        </button>
      </div>
    </div>
  );
};

export default ShopInfo;

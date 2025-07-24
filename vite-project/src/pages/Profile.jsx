import userProfile from "../assets/userprofile.png"
import { BackButton } from "../components/BackButton"
import profile from "../assets/Profile.png"
import profile_footer from "../assets/profile_footer.png"
import { useNavigate } from "react-router-dom"

export const Profile = () => {
    const navigate = useNavigate();

    const handleMyPage = () => {
        navigate('/myPage')
    }
    return(
        <div className="flex flex-col px-4 mt-3">
            <div className="relative flex items-center justify-between">
                <BackButton />

                <span className="absolute left-1/2 -translate-x-1/2 text-[15px] font-semibold leading-normal font-pretendard">
                    부자 피자 1호점
                </span>

                <img src={profile} alt="" className="w-[32px] h-[32px]" onClick={handleMyPage} />
            </div>

            <img src={userProfile} alt="" className="mt-8"/>
            
            <span className="text-[15px] mt-7 font-semibold leading-normal font-pretendard">꾸덕초코님의 pick 맛집 TOP 6</span>

            <img src={profile_footer} alt="" className="mt-8"/>

            <span className="mt-9 text-[15px] font-semibold leading-normal font-pretendard">꾸덕초코님의 주민 리뷰</span>
        </div>
    )
}
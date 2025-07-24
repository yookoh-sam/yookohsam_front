import authentication from "../assets/icon_local.png"
import profile_footer from "../assets/profile_footer.png"
import my_profile_score from "../assets/my_profile_score.png"
import profile from "../assets/Profile.png"
import { BackButton } from "../components/BackButton"

export const MyPage = () => {
    return(
        <div className="flex flex-col px-5">
            <BackButton />
            <div className="flex justify-between items-center mt-5">

                <div className="flex items-center">
                    <img
                    src={profile}
                    alt="프로필 사진"
                    className="w-[56px] h-[56px]"
                    />
                    <div className="ml-4">
                    <div className="text-[15px] font-medium leading-none font-pretendard">
                        육오삼
                    </div>
                    <div className="text-[11px] font-medium text-[#6B6B6B] leading-none font-pretendard mt-1">
                        서강동 주민
                    </div>
                    </div>
                </div>

                <img
                    src={authentication}
                    alt="주민 인증 완료"
                    className="w-[88px] h-[28px]"
                />
            </div>

            <p className="mt-4 text-[15px] font-semibold leading-normal font-pretendard">나의 활동</p>

            <img src={my_profile_score} alt="" className="mt-2 w-[360px] h-[140px]" />

            <p className="mt-4 text-[15px] font-semibold leading-normal font-pretendard">나의 pick 맛집 Top 6</p>

            <img src={profile_footer} alt="프로필" className="mt-4 w-[360px] h-[400px]" />

        </div>
    )
}
import KakaoLogo from '../assets/KakaoTalk_logo.png';
import { BackButton } from '../components/BackButton';

export const Login = () => {
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
    console.log(REDIRECT_URI);

    const handleLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className='flex flex-col items-center w-80 h-140 rounded-xl bg-[#FFFFFF] shadow'>
                        <BackButton/>
                        
                        {/* 문구 */}
                        <div className='font-semibold text-lg px-4 text-center self-center pt-[200px]'>
                            3초만에 로그인하고 앱이름을 <br/>200% 즐겨보세요
                        </div>

                        {/* 로그인버튼 */}
                        <button 
                        className="flex items-center bg-[#FFE808] w-70 h-14 cursor-pointer rounded-2xl mt-[180px]"
                        onClick={handleLogin}>
                            <img src={KakaoLogo} className='pl-2 pr-8 h-12'/>
                            <span className='font-semibold'>카카오톡으로 로그인하기</span> 
                        </button>
                </div>
            </div>
    )
}

export default Login;
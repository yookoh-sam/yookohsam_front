import { useNavigate } from "react-router-dom";

export const BackButton = () => {

    const navigate = useNavigate();

    return(
        <div>
            {/* < 모양 버튼 */}
                        <button onClick={() => navigate(-1)} className="left-4 pr-70 mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
        </div>
    )
}
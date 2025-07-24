import { ProfileBar } from "../components/ProfileBar"

export const ShopInfo = () => {
    return(
        <div className="flex flex-col">
            <header>
                <ProfileBar />
            </header>
            <body>
                <div className=""></div>
                <div>부자 피자 1호점</div>
                <button>+ 리뷰 작성</button>
            </body>
        </div>
    )
}
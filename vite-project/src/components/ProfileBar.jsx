import { BackButton } from "./BackButton"
import Profile from "../assets/Profile.png"

export const ProfileBar = () => {
    return(
        <div>
            <div className="flex flex-row px-4 justify-between mt-[22px]">
                <BackButton />
                <img src={Profile} className="w-[38px] h-[38px]"/>
            </div>
        </div>
    )
}
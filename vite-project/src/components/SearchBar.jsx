import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleProfile = () => {
        navigate('/myPage');
    }
  return (
    <div className="flex items-center absolute top-4 left-1/2 -translate-x-1/2 w-[90%] h-12 px-4 rounded-lg bg-white z-10">
      {/* 검색 아이콘 */}

      {/* 입력창 */}
      <input
        type="text"
        className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
        placeholder="여기서 상점 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 프로필 버튼 */}
      <button className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center ml-2" onClick={handleProfile}>
      </button>
    </div>
  );
};

export default SearchBar;

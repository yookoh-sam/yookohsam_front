import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center w-full max-w-md h-12 px-4 rounded-full border border-gray-300 bg-white shadow-sm">
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
      <button className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center ml-2">
        {/* 실제 프로필 이미지가 있다면 <img src=... /> */}
      </button>
    </div>
  );
};

export default SearchBar;

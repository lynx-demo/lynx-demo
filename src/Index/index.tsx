import '@lynx-js/react/debug'
import { root, useState } from '@lynx-js/react'

import '../App.css'

import Header from "../components/Index/Header.jsx";
import List from "../components/Index/List.jsx";
import Search from "../components/Index/Search.jsx";
import SearchResult from "../components/Index/SearchResult.jsx";
import Footer from "../components/Index/Footer.jsx";
import Detail from "../components/Index/Detail.jsx";

function App() {
  const [navIndex, setNavIndex] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showDetail, setShowDetail] = useState(false);
  const [detailItemData, setDetailItemData] = useState(null);

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
    setShowSearch(false);
    setShowSearchResult(true);
  };

  const handleBackFromResult = () => {
    setShowSearchResult(false);
    setShowSearch(true);
  };

  const handleItemClick = (itemData: any) => {
    setDetailItemData(itemData);
    setShowDetail(true);
  };

  const handleBackFromDetail = () => {
    setShowDetail(false);
    setDetailItemData(null);
  };

  return (
    <view className='App'>
        <Header navIndex={navIndex} setNavIndex={setNavIndex} onOpenSearch={() => setShowSearch(true)} />
        <List key={navIndex} navIndex={navIndex} onItemClick={handleItemClick} />
        {showSearch && <Search onClose={() => setShowSearch(false)} onSearch={handleSearch} />}
        {showSearchResult && <SearchResult keyword={searchKeyword} onBack={handleBackFromResult} />}
        {showDetail && detailItemData && <Detail itemData={detailItemData} onBack={handleBackFromDetail} />}
        <Footer />
    </view>
  );
}

root.render(<App />)

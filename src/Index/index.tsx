import '@lynx-js/react/debug'
import { root, useState } from '@lynx-js/react'

import '../App.css'

import Header from "../components/Index/Header.jsx";
import List from "../components/Index/List.jsx";
import Search from "../components/Index/Search.jsx";
import SearchResult from "../components/Index/SearchResult.jsx";
import Footer from "../components/Index/Footer.jsx";

function App() {
  const [navIndex, setNavIndex] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword: string) => {
    setSearchKeyword(keyword);
    setShowSearch(false);
    setShowSearchResult(true);
  };

  const handleBackFromResult = () => {
    setShowSearchResult(false);
    setShowSearch(true);
  };

  return (
    <view className='App'>
        <Header navIndex={navIndex} setNavIndex={setNavIndex} onOpenSearch={() => setShowSearch(true)} />
        <List key={navIndex} navIndex={navIndex} />
        {showSearch && <Search onClose={() => setShowSearch(false)} onSearch={handleSearch} />}
        {showSearchResult && <SearchResult keyword={searchKeyword} onBack={handleBackFromResult} />}
        <Footer />
    </view>
  );
}

root.render(<App />)

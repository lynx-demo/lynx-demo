import "../../scss/index.scss";
import type { TouchEvent } from "@lynx-js/types";
import { useState } from "@lynx-js/react";
import backIcon from "../../assets/back.png";
import { List } from "./List.jsx";

interface SearchResultProps {
  keyword: string;
  onBack: () => void;
}

export const SearchResult = ({ keyword, onBack }: SearchResultProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const [currentSearchKeyword, setCurrentSearchKeyword] = useState(keyword);

  const tabs = [
    { id: 0, name: "全部", icon: "☰" },
    { id: 1, name: "用户" },
    { id: 2, name: "商品" },
    { id: 3, name: "地点" },
    { id: 4, name: "群聊" },
    { id: 5, name: "问一问" }
  ];

  const handleBack = (e: TouchEvent) => {
    onBack();
  };

  const handleInput = (e: any) => {
    setSearchKeyword(e?.detail?.value ?? "");
  };

  const handleClear = () => setSearchKeyword("");

  const handleTabChange = (tabId: number) => {
    setActiveTab(tabId);
  };

  const handleSearch = () => {
    // 更新当前搜索词并触发新的搜索
    const newKeyword = searchKeyword.trim();
    if (newKeyword) {
      setCurrentSearchKeyword(newKeyword);
    }
  };

  return (
    <view className="search-result-mask">
      <view className="search-result-panel">
        {/* 顶部搜索栏 */}
        <view className="search-result-header">
          <image className="search-back" src={backIcon} bindtap={handleBack} />
          <view className="search-input-wrapper">
            <input
              className="search-input"
              value={searchKeyword}
              placeholder="搜索笔记、视频…"
              bindinput={handleInput}
            />
            {searchKeyword ? (
              <text className="search-clear" bindtap={handleClear}>×</text>
            ) : null}
          </view>
          <text className="search-submit" bindtap={handleSearch}>搜索</text>
        </view>

        {/* 分类导航 */}
        <view className="search-tabs">
          {tabs.map((tab) => (
            <view 
              key={tab.id}
              className={`search-tab ${activeTab === tab.id ? 'active' : ''}`}
              bindtap={() => handleTabChange(tab.id)}
            >
              {tab.icon && <text className="tab-icon">{tab.icon}</text>}
              <text className="tab-text">{tab.name}</text>
            </view>
          ))}
        </view>

        {/* 搜索结果列表 */}
        <view className="search-result-content">
          <List navIndex={activeTab} searchKeyword={currentSearchKeyword} />
        </view>
      </view>
    </view>
  );
};

export default SearchResult; 
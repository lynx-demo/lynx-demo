import "../../scss/index.scss";
import type { TouchEvent } from "@lynx-js/types";
import { useState, useEffect } from "@lynx-js/react";
import searchIcon from "../../assets/search.png";
import backIcon from "../../assets/back.png";

interface SearchProps {
  onClose: () => void;
  onSearch?: (keyword: string) => void;
}

export const Search = ({ onClose, onSearch }: SearchProps) => {
  const [keyword, setKeyword] = useState("");
  let [history, setHistory] = useState<string[]>([]);

  const handleClose = (e: TouchEvent) => {
    onClose();
  };

  const handleInput = (e: any) => {
    setKeyword(e?.detail?.value ?? "");
  };

  const handleClear = () => setKeyword("");

  const commitSearch = (q: string) => {
    const v = (q || "").trim();
    if (!v) return;
    setKeyword(v);
    setHistory(prev => {
      const next = [v, ...prev.filter(i => i !== v)].slice(0, 20);
      return next;
    });
    // 触发搜索回调
    if (onSearch) {
      onSearch(v);
    }
  };

  useEffect(() => {
    try {
      const storage = (globalThis as any)?.localStorage;
      storage?.setItem("search_history", JSON.stringify(history));
    } catch {}
  }, [history]);

  return (
    <view className="search-mask">
      <view className="search-panel">
        <view className="search-bar">
          <image className="search-back" src={backIcon} bindtap={handleClose}/>
          <view className="search-input-wrapper">
            <image className="search-icon" src={searchIcon} />
            <input
              className="search-input"
              value={keyword}
              placeholder="搜索笔记、视频…"
              bindinput={handleInput}
              focus
            />
            {keyword ? (
              <text className="search-clear" bindtap={handleClear}>×</text>
            ) : null}
          </view>
          <text className="search-submit" bindtap={() => commitSearch(keyword)}>搜索</text>
        </view>

        <view className="search-content">
          (
            <>
              <text className="search-section-title">热门搜索</text>
              <view className="search-tags">
                <text className="search-tag" bindtap={() => commitSearch("旅行")}>旅行</text>
                <text className="search-tag" bindtap={() => commitSearch("家居")}>家居</text>
                <text className="search-tag" bindtap={() => commitSearch("美食")}>美食</text>
                <text className="search-tag" bindtap={() => commitSearch("穿搭")}>穿搭</text>
              </view>

              <view className="search-header-row">
                <text className="search-section-title">历史记录</text>
                {history.length ? (
                  <text className="search-trash" bindtap={() => setHistory([])}>🗑</text>
                ) : null}
              </view>
              <view className="search-history">
                {history.length ? (
                  history.map(h => (
                    <text className="search-history-item" bindtap={() => commitSearch(h)}>{h}</text>
                  ))
                ) : (
                  <text className="search-history-item">暂无历史</text>
                )}
              </view>

              <text className="search-section-title" style="margin-top:16px;">猜你想搜</text>
              <view className="guess-grid">
                {(["开始点动漫音乐嘉年华","高鑫家园租房","碳酸氢钠是酸还是碱","幽门螺旋试纸准吗","日本前驻华大使","滴滴拉黑司机他知道吗"]).map(item => (
                  <text className="guess-item" bindtap={() => commitSearch(item)}>{item}</text>
                ))}
              </view>

              <view className="hot-header">
                <text className="hot-logo">小红书热点</text>
              </view>
              <view className="hot-list">
                {([
                  { t: "赵露思同款粥已经吃上了", tag: "", count: "910.2万" },
                  { t: "九头身裁判给小红书网友跳舞啦", tag: "独家", count: "888.7万" },
                  { t: "iPhone17 系列外观曝光", tag: "热", count: "773.9万" },
                  { t: "中美暂停实施24%的关税90天", tag: "热", count: "644.2万" },
                  { t: "C罗向乔治娜求婚成功", tag: "", count: "629.2万" },
                  { t: "再也没有夏天可以用来浪费了", tag: "热", count: "625.5万" },
                  { t: "韩国人以为沈佳润是财阀千金", tag: "新", count: "594.4万" },
                  { t: "金饰克价已跌到千元以内", tag: "新", count: "547.4万" },
                  { t: "蔡徐坤 你是懂怎么宣传新歌的", tag: "", count: "527.3万" },
                  { t: "画画要显贵", tag: "热", count: "525.7万" },
                ] as {t:string;tag:string;count:string}[]).map((it, i) => (
                  <view className="hot-item" bindtap={() => commitSearch(it.t)}>
                    <text className={`hot-rank ${i < 3 ? 'hot-rank--top' : ''}`}>{i+1}</text>
                    <view className="hot-main">
                      <text className="hot-title">{it.t}</text>
                      {it.tag ? <text className={`hot-badge hot-badge--${it.tag}`}>{it.tag}</text> : null}
                    </view>
                    <text className="hot-count">{it.count}</text>
                  </view>
                ))}
              </view>
            </>
          )
        </view>
      </view>
    </view>
  );
};

export default Search;
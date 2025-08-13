import { useState, useCallback, useEffect } from "react";
import "../../scss/index.scss";
import { ItemView } from "./ListItem.jsx";

interface ListProps {
  navIndex: number;
  searchKeyword?: string;
}

export const List = ({ navIndex, searchKeyword }: ListProps) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const size = 20;

  // 监听 navIndex 变化，重置列表状态并回到顶部
  useEffect(() => {
    // 当导航切换时，重置列表状态
    setPage(1);
    setLoading(false);
    setHasMore(true);
    
    // 回到页面顶部
    setTimeout(() => {
      try {
        // 使用 lynx 的 API 滚动到顶部
        lynx.createSelectorQuery()
          .select('.list-container')
          .invoke({
            method: 'scrollTo',
            params: {
              top: 0,
              animated: true
            },
            fail: function (error) {
              // 备用方案：使用 scrollTop
              lynx.createSelectorQuery()
                .select('.list-container')
                .invoke({
                  method: 'setData',
                  params: {
                    scrollTop: 0
                  }
                })
                .exec();
            }
          })
          .exec();
      } catch (error) {
      }
    }, 150); // 延迟150ms确保DOM更新完成
  }, [navIndex]);

  // 加载更多数据
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    setPage(prev => prev + 1);
    setLoading(false);
  }, [loading, hasMore, page]);

  // 滚动到底部时触发加载
  const handleScrollToLower = useCallback(() => {
    loadMore();
  }, [loadMore]);

  return (
    <list
      className="list-container"
      list-type="waterfall"
      span-count={2}
      scroll-orientation="vertical"
      bindscrolltolower={handleScrollToLower}
      lower-threshold={100}
    >
      {Array.from({ length: page * size }).map((item, index) => {
        return (
          <list-item
            className="list-item"
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          >
            <ItemView index={index} navIndex={navIndex} searchKeyword={searchKeyword} />
          </list-item>
        );
      })}
      
      {/* 加载状态指示器 */}
      {loading && (
        <list-item className="loading-item" item-key="loading">
          <view className="loading-container">
            <text className="loading-text">加载中...</text>
          </view>
        </list-item>
      )}
      
      {/* 没有更多数据提示 */}
      {!hasMore && (
        <list-item className="no-more-item" item-key="no-more">
          <view className="no-more-container">
            <text className="no-more-text">没有更多数据了</text>
          </view>
        </list-item>
      )}
    </list>
  );
};

export default List;

import { useState } from "@lynx-js/react";
import "../../scss/index.scss";
import backIcon from "../../assets/back.png";
import shareIcon from "../../assets/share.png";

interface DetailProps {
  itemData: {
    index: number;
    navIndex: number;
    imageUrl: string;
    title: string;
  };
  onBack: () => void;
}

export const Detail = ({ itemData, onBack }: DetailProps) => {
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set());
  
  // 模拟评论数据
  const comments = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/150?u=1",
      username: "说点什么...",
      time: "",
      content: "",
      isInput: true
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/150?u=2",
      username: "叫我小肉丸",
      time: "1天前 福建 回复",
      content: "有一次玩狼人杀碰到一群小学生\n他们说了一句让我尴尬的话\n她声音好像和我们不一样\n可能是个老东西我们把她投出去",
      likes: 1099
    },
    {
      id: 3,
      avatar: "https://i.pravatar.cc/150?u=3",
      username: "莫石头日记",
      time: "昨天 02:18 广东 回复",
      content: "虽然真的很好笑但是让我\"窘\"是什么\n啊 hhhhhhh",
      likes: 702
    },
    {
      id: 4,
      avatar: "https://i.pravatar.cc/150?u=4",
      username: "小白兔",
      time: "2天前 北京 回复",
      content: "哈哈哈哈哈，这个真的太搞笑了，我要转发给我朋友们看",
      likes: 523
    },
    {
      id: 5,
      avatar: "https://i.pravatar.cc/150?u=5",
      username: "测试用户",
      time: "3天前 上海 回复", 
      content: "狼人杀确实是个很有趣的游戏，但是遇到不会玩的人就很崩溃了\n不过小学生的想法确实很可爱",
      likes: 234
    },
    {
      id: 6,
      avatar: "https://i.pravatar.cc/150?u=6",
      username: "游戏爱好者",
      time: "4天前 深圳 回复",
      content: "我也遇到过类似的情况，有些新手玩家的逻辑真的让人哭笑不得",
      likes: 156
    }
  ];

  const handleLikeClick = (commentId: number) => {
    setLikedComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  };

  return (
    <view className="detail-mask">
      <view className="detail-panel">
        {/* 头部 */}
        <view className="detail-header">
          <image 
            className="detail-back" 
            src={backIcon} 
            bindtap={onBack}
          />
          <view className="detail-user-info">
            <image 
              className="detail-avatar" 
              src="https://via.placeholder.com/40x40/67c23a/fff?text=小"
            />
            <text className="detail-username">小羊失棉了</text>
          </view>
          <view className="detail-follow-btn">
            <text className="detail-follow-text">关注</text>
          </view>
          <image 
            className="detail-share" 
            src={shareIcon}
          />
        </view>

        {/* 内容区域 */}
        <scroll-view className="detail-content" scroll-y={true}>
          {/* 图片区域 */}
          <view className="detail-image-container">
            <image 
              className="detail-image" 
              src={itemData.imageUrl}
            />
          </view>

          {/* 文本内容 */}
          <view className="detail-text-content">
            <text className="detail-text">
              崩不住了哈哈哈哈
            </text>
            <view className="detail-tags">
              <text className="detail-tag">#文字</text>
              <text className="detail-tag">#发疯文学</text>
              <text className="detail-tag">#狼人杀</text>
              <text className="detail-tag">#热门</text>
            </view>
            <view className="detail-meta">
              <text className="detail-time">1天前</text>
              <text className="detail-location">福建</text>
            </view>
          </view>

          {/* 评论区 */}
          <view className="detail-comments">
            <view className="comments-header">
              <text className="comments-count">共 193 条评论</text>
              <image className="comments-arrow" src={backIcon} />
            </view>
            
            <view className="comments-list">
              {comments.map((comment) => (
                <view key={comment.id} className="comment-item">
                  {comment.isInput ? (
                    <view className="comment-input-container">
                      <image className="comment-avatar" src={comment.avatar} />
                      <view className="comment-input-wrapper">
                        <text className="comment-input-placeholder">{comment.username}</text>
                      </view>
                    </view>
                  ) : (
                    <view className="comment-content-container">
                      <image className="comment-avatar" src={comment.avatar} />
                      <view className="comment-content">
                        <text className="comment-username">{comment.username}</text>
                        <text className="comment-text">{comment.content}</text>
                        <text className="comment-meta">{comment.time}</text>
                      </view>
                      <view className="comment-like" bindtap={() => handleLikeClick(comment.id)}>
                        <text 
                          className="comment-like-icon"
                          style={{
                            color: likedComments.has(comment.id) ? '#ff2742' : '#dad9df'
                          }}
                        >
                          ♥
                        </text>
                        <text className="comment-like-count">{comment.likes}</text>
                      </view>
                    </view>
                  )}
                </view>
              ))}
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  );
};

export default Detail;

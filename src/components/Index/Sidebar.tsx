import "../../scss/index.scss";

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

export const Sidebar = ({ visible, onClose }: SidebarProps) => {
  if (!visible) return null;

  const menuItems = [
    {
      icon: "👥",
      text: "发现好友",
      hasNotification: false
    },
    {
      icon: "🎉",
      text: "小红书兴趣季",
      hasNotification: false
    },
    {
      icon: "💡",
      text: "创作者中心",
      hasNotification: false
    },
    {
      icon: "📝",
      text: "我的草稿",
      hasNotification: false
    },
    {
      icon: "💬",
      text: "我的评论",
      hasNotification: false
    },
    {
      icon: "🕒",
      text: "浏览记录",
      hasNotification: false
    },
    {
      icon: "⬇️",
      text: "我的下载",
      hasNotification: false
    },
    {
      icon: "📋",
      text: "订单",
      hasNotification: false
    },
    {
      icon: "🛒",
      text: "购物车",
      hasNotification: true
    },
    {
      icon: "💰",
      text: "钱包",
      hasNotification: false
    },
    {
      icon: "🔗",
      text: "小程序",
      hasNotification: false
    }
  ];

  const handleMaskClick = () => {
    onClose();
  };

  return (
    <view className="sidebar-mask" bindtap={handleMaskClick}>
      <view className="sidebar-panel">
        {/* 菜单列表 */}
        <scroll-view className="sidebar-menu" scroll-y={true}>
          {menuItems.map((item, index) => (
            <view key={index} className="sidebar-menu-item">
              <view className="sidebar-item-content">
                <text className="sidebar-item-icon">{item.icon}</text>
                <text className="sidebar-item-text">{item.text}</text>
              </view>
              {item.hasNotification && (
                <view className="sidebar-notification-dot"></view>
              )}
            </view>
          ))}
        </scroll-view>

        {/* 底部功能区 */}
        <view className="sidebar-footer">
          <view className="sidebar-footer-item">
            <text className="sidebar-footer-icon">📱</text>
            <text className="sidebar-footer-text">扫一扫</text>
          </view>
          <view className="sidebar-footer-item">
            <text className="sidebar-footer-icon">🎧</text>
            <text className="sidebar-footer-text">帮助与客服</text>
          </view>
          <view className="sidebar-footer-item">
            <text className="sidebar-footer-icon">⚙️</text>
            <text className="sidebar-footer-text">设置</text>
          </view>
        </view>
      </view>
    </view>
  );
};

export default Sidebar;

import "../../scss/index.scss";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import type { TouchEvent } from "@lynx-js/types";

interface HeaderProps {
  navIndex: number;
  setNavIndex: (index: number) => void;
  onOpenSearch?: () => void;
  onOpenSidebar?: () => void;
}

export const Header = ({ navIndex, setNavIndex, onOpenSearch, onOpenSidebar }: HeaderProps) => {
  interface navListRef {
    title: String;
    badge?: Number
  }
  const navList: navListRef[] = [{
    title: '关注',
    badge: 7
  }, {
    title: '发现'
  }, {
    title: '附近'
  }]

  const navChange = (e: TouchEvent): void => {
      const {currentTarget} = e
      setNavIndex(Number(currentTarget.dataset.index))
  }
  return (
    <view className="header">
      <view className="header__menu-wrapper" bindtap={onOpenSidebar}>
        <image src={menu} className="header__menu" />
      </view>
      <view className="header__nav">
        {navList.map((nav: navListRef, index: number) => (
          <view data-index={index} className={`header__nav-item ${navIndex === index ? 'active' : ''}`} bindtap={navChange}>
            <text className="header__nav-text">{nav.title}</text>
            {nav.badge && (
              <text className="header__badge">{nav.badge.toString()}</text>
            )}
          </view>
        ))}
      </view>
      <view className="header__search-wrapper" bindtap={onOpenSearch}>
        <image src={search} className="header__search" />
      </view>
    </view>
  );
};

export default Header;

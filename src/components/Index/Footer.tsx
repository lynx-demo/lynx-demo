import "../../scss/index.scss";
import { useState } from "@lynx-js/react";
import type { TouchEvent } from "@lynx-js/types";

export const Footer = () => {
  const [navIndex, setNavIndex] = useState(1);
  interface navListRef {
    title: String;
    badge?: Number
  }
  
  const navChange = (e: TouchEvent): void => {
      const {currentTarget} = e
      setNavIndex(currentTarget.dataset.index)
  }
  return (
    <view className="footer">
      <view className="footer__item active"><text className="footer__item-text">首页</text></view>
      <view className="footer__item"><text className="footer__item-text">热门</text></view>
      <view className="footer__item footer__item-create"></view>
      <view className="footer__item"><text className="footer__item-text">消息</text><text className="footer__badge">99+</text></view>
      <view className="footer__item"><text className="footer__item-text">我</text></view>
    </view>
  );
};

export default Footer;

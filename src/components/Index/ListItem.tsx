import image_1 from "../../assets/waterfall/1.jpeg";
import image_2 from "../../assets/waterfall/2.jpeg";
import image_3 from "../../assets/waterfall/3.jpeg";
import image_4 from "../../assets/waterfall/4.jpeg";
import image_5 from "../../assets/waterfall/5.jpeg";
import image_6 from "../../assets/waterfall/6.jpeg";
import image_7 from "../../assets/waterfall/7.jpeg";
import image_8 from "../../assets/waterfall/8.jpeg";
import image_9 from "../../assets/waterfall/9.jpeg";
import image_10 from "../../assets/waterfall/10.jpeg";
import { useRef, useState, useMemo } from "@lynx-js/react";
import { randomInt1to10 } from "../../utils.jsx";

export const ItemView = (props: { index: number; navIndex: number }) => {
  const { index, navIndex } = props;
  const imageRef = useRef(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [imageHeight, setImageHeight] = useState<number>(0);

  // 导航名称映射
  const navNames = ['关注', '发现', '附近'];
  const currentNavName = navNames[navIndex] || '未知';

  const imageList = [image_1, image_2, image_3, image_4, image_5, image_6, image_7, image_8, image_9, image_10]
  
  // 使用 useMemo 确保随机索引只在组件首次渲染时计算一次
  const imageUrl = useMemo(() => {
    const randomIndex = randomInt1to10() - 1;
    return imageList[randomIndex];
  }, []);

  const handleImageLoad = (e: any) => {
    const { width = 0, height = 0 } = (e && e.detail) || {};
    setImageSize({ width, height });
    
    // 直接在事件处理函数中计算高度
    const itemWidth = (SystemInfo.pixelWidth / SystemInfo.pixelRatio - 30) / 2;
    const value = (height / width) * itemWidth;
    setImageHeight(value);
  };

  return (
    <view
      className="list-item-view"
      ref={imageRef}
      clip-radius={true}
    >
      <image
        className="list-item-image"
        style={{
          height: imageHeight + 'px'
        }}
        bindload={handleImageLoad}
        src={imageUrl}
      />
      <text className="list-item-text">
        {`${currentNavName}-item-${index}`}
      </text>
    </view>
  );
};
import '@lynx-js/react/debug'
import { root, useState, useEffect } from '@lynx-js/react'

import '../App.css'

import Header from "../components/Index/Header.jsx";
import List from "../components/Index/List.jsx";
import Footer from "../components/Index/Footer.jsx";

function App() {
  const [navIndex, setNavIndex] = useState(1);

  return (
    <view className='App'>
        <Header navIndex={navIndex} setNavIndex={setNavIndex} />
        <List key={navIndex} navIndex={navIndex} />
        <Footer />
    </view>
  );
}

root.render(<App />)

// 头部组件
// 在lg以下的尺寸下，头部组件显示为收起的状态，点击展开，且固定头部
// 在lg以上的尺寸下，头部组件显示为展开的状态，且固定头部

import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { home, styles } from "~/constants";

// 在lg以上的尺寸下，当位于浏览器顶部时，头部显示且透明，当下滚动时，头部收起，当上滚动时，头部展开
const BaseHeader = () => {
  // 移动端下菜单的显隐
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={classNames(
        "flex justify-between items-center lg:fixed top-0 left-0 w-full z-[999] lg:py-4 py-3 lg:bg-transparent bg-slate-800",
        styles.paddingX
      )}
    >
      <img
        src="/images/logo.svg"
        alt=""
        className="lg:w-16 lg:h-16 w-10 h-10"
      />
      <ul className="lg:flex hidden">
        {home.menus.map((item, index) => (
          <li
            key={`home_menu_${index}`}
            className={classNames(
              styles.menuText,
              "relative hover:text-[#60ad58] after:block after:absolute after:w-full after:h-0 after:-bottom-8 after:left-0 after:bg-[#60ad58] after:transition-height after:duration-300 after:ease-in-out hover:after:h-1.5 cursor-pointer transition duration-300 ease-in-out"
            )}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="lg:hidden block">
        <img
          src={toggle ? "/images/close.svg" : "/images/menu.svg"}
          alt=""
          className={classNames(
            toggle ? "w-6 h-6" : "w-8 h-8",
            "cursor-pointer"
          )}
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </header>
  );
};

export default BaseHeader;

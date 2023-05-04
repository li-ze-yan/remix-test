import type { V2_MetaFunction } from "@remix-run/node";
import classNames from "classnames";
import { home, styles } from "~/constants";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="w-full">
      <div className="w-full h-[100vh] relative z-0 bg-[#333]">
        <video
          src="/videos/MARVEL.mp4"
          autoPlay
          controls={false}
          loop
          muted
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full object-cover h-full"
        ></video>
        <div
          className={classNames(
            "absolute z-10 xs:top-1/3 top-1/4  -translate-y-1/2",
            styles.headText,
            styles.paddingX
          )}
        >
          {home.frontSentences.map((item, index) => (
            <p
              key={`home_frontSentences_${index}`}
              className={classNames(index === 3 && "text-[#34d399]")}
            >
              {item}
            </p>
          ))}
        </div>
        <div
          className={classNames(
            "absolute z-10 bottom-0 rounded-t-xl left-0 w-full lg:flex block lg:justify-between lg:items-center bg-slate-800 highlight-white/5",
            styles.paddingX,
            styles.paddingY,
            styles.text
          )}
        >
          <div>
            <div className="flex items-center">
              <img
                src="/images/avatar.jpg"
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <div className="ml-4">
                <p className="text-white font-bold">{home.name}</p>
                <p className="text-sm leading-6 text-[#91a3b8]">
                  {home.develop}
                </p>
              </div>
            </div>
            <p className={classNames(styles.subText, "text-[#34d399] my-3")}>
              {home.connect}
            </p>
          </div>
          <div
            className={classNames(
              "lg:w-[70vw] w-full italic font-bold",
              styles.text
            )}
          >
            {home.bannerSentences.map((item, index) => (
              <p
                key={`home_bannerSentences_${index}`}
                className={classNames(index === 1 ? "" : "mb-5")}
              >
                {item}
              </p>
            ))}
            {/* <p className="mb-5">
            我是一名专注于React框架及其生态系统，能够快速构建高质量的Web应用程序的前端工程师，曾参与多个React项目的开发，乐于与其他开发者合作，分享经验和知识。
          </p>
          <p>
            总之，我是一名充满激情和创造力的React开发者，热爱探索新技术，拥有良好的团队协作能力
          </p> */}
          </div>
        </div>
      </div>
      占位
    </div>
  );
}

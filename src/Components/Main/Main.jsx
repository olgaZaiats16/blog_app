import React from "react";
import SocialConnectPart from "../Header/SocialIcon/SocialConnectPart";
import AllPost from "./AllPost/AllPost";
import BannerPost from "./BannerPost/BannerPost";
import SubscribeForm from "./SubscribeForm/SubscribeForm";

const Main = () => {
  return (
    <div>
      <BannerPost/>
      <SubscribeForm/>
      <AllPost/>
      <SocialConnectPart/>
    </div>
  );
};

export default Main;

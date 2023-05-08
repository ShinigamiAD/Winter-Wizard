import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Phone,
  Twitter,
} from '@material-ui/icons';
import React from 'react';

const Footer = () => {
  const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white';
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">You Can Find Us At!</h1>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <Instagram />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
        </div>
        <h1 className="text-[25px] uppercase">About</h1>
        <p>
          WinterWizard.com is an online fashion store for taste-makers and
          trend-breakers all over the country. When it comes to online shopping
          for women looking for the latest fashion trends, Winter Wizard is the
          one-stop destination. Started in 2012, this online fashion store
          comprises of the trendiest tops Jeans, jackets, shoes, bags,
          accessories for Men/Women online shopping. Every new season brings
          fresh and latest fashion and New Arrivals. And it becomes important
          for you to keep up with the current trend. However, WinterKing has all
          your styling stress sussed!
        </p>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined className="text-[#8a4af3]" />
          <p className="pl-3">State of California</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined className="text-[#521da8]" />
          <p className="pl-3">+92 12345678</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined className="text-[#8a4af3]" />
          <p className="pl-3">winter_wizard@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

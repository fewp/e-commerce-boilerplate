import React, { useState } from "react";

interface IconProps {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
  const [icon, setIcon] = useState(<svg></svg>);

  React.useEffect(() => {
    switch (name) {
      case "user":
        setIcon(
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4C11.9367 4 9.44444 6.59716 9.44444 9.78947C9.44444 12.9818 11.9367 15.5789 15 15.5789C18.0633 15.5789 20.5556 12.9818 20.5556 9.78947C20.5556 6.59716 18.0633 4 15 4ZM15 13.2632C13.1622 13.2632 11.6667 11.7046 11.6667 9.78947C11.6667 7.87432 13.1622 6.31579 15 6.31579C16.8378 6.31579 18.3333 7.87432 18.3333 9.78947C18.3333 11.7046 16.8378 13.2632 15 13.2632ZM25 26V24.8421C25 20.3738 21.51 16.7368 17.2222 16.7368H12.7778C8.48889 16.7368 5 20.3738 5 24.8421V26H7.22222V24.8421C7.22222 21.6498 9.71444 19.0526 12.7778 19.0526H17.2222C20.2856 19.0526 22.7778 21.6498 22.7778 24.8421V26H25Z" fill="white"/>
          </svg>
        );
        break;
      case "cart":
        setIcon(
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7775 9.53876C25.6625 9.3726 25.509 9.23678 25.33 9.14295C25.1511 9.04912 24.9521 9.00007 24.75 9.00001H7.66625L6.22375 5.53751C6.03461 5.08153 5.71434 4.69199 5.30353 4.41827C4.89273 4.14455 4.40989 3.99897 3.91625 4.00001H1V6.50001H3.91625L9.84625 20.7313C9.94123 20.959 10.1015 21.1534 10.3068 21.2902C10.5121 21.427 10.7533 21.5 11 21.5H21C21.5212 21.5 21.9875 21.1763 22.1712 20.69L25.9212 10.69C25.9921 10.5008 26.0161 10.2972 25.991 10.0967C25.966 9.89619 25.8927 9.70474 25.7775 9.53876ZM20.1337 19H11.8337L8.70875 11.5H22.9462L20.1337 19Z" fill="white"/>
            <path d="M11.625 26.5C12.6605 26.5 13.5 25.6605 13.5 24.625C13.5 23.5895 12.6605 22.75 11.625 22.75C10.5895 22.75 9.75 23.5895 9.75 24.625C9.75 25.6605 10.5895 26.5 11.625 26.5Z" fill="white"/>
            <path d="M20.375 26.5C21.4105 26.5 22.25 25.6605 22.25 24.625C22.25 23.5895 21.4105 22.75 20.375 22.75C19.3395 22.75 18.5 23.5895 18.5 24.625C18.5 25.6605 19.3395 26.5 20.375 26.5Z" fill="white"/>
          </svg>
        );
        break;
      case "logout":
        setIcon(
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.6667 14.1954L21.3753 9.90398C21.2697 9.7983 21.1442 9.71448 21.0062 9.65729C20.8681 9.6001 20.7201 9.57066 20.5707 9.57066C20.4212 9.57066 20.2733 9.6001 20.1352 9.65729C19.9971 9.71448 19.8717 9.7983 19.766 9.90398C19.5526 10.1174 19.4327 10.4068 19.4327 10.7086C19.4327 11.0104 19.5526 11.2998 19.766 11.5132L22.1149 13.8621H9.68969C9.38789 13.8621 9.09845 13.982 8.88505 14.1954C8.67165 14.4088 8.55176 14.6982 8.55176 15C8.55176 15.3018 8.67165 15.5912 8.88505 15.8046C9.09845 16.0181 9.38789 16.1379 9.68969 16.1379H22.1149L19.766 18.4868C19.5526 18.7002 19.4327 18.9896 19.4327 19.2914C19.4327 19.5932 19.5526 19.8827 19.766 20.0961C19.9794 20.3095 20.2689 20.4294 20.5707 20.4294C20.8725 20.4293 21.1619 20.3095 21.3753 20.096L25.6667 15.8046C25.8801 15.5912 26 15.3018 26 15C26 14.6982 25.8801 14.4088 25.6667 14.1954Z" fill="white"/>
            <path d="M17.2759 21.4483C16.9741 21.4483 16.6846 21.5682 16.4712 21.7816C16.2578 21.995 16.1379 22.2844 16.1379 22.5862V23.7241H6.27586V6.27586H16.1379V7.41379C16.1379 7.71559 16.2578 8.00503 16.4712 8.21843C16.6846 8.43184 16.9741 8.55172 17.2759 8.55172C17.5776 8.55172 17.8671 8.43184 18.0805 8.21843C18.2939 8.00503 18.4138 7.71559 18.4138 7.41379V5.89655C18.4138 5.64749 18.3647 5.40087 18.2694 5.17077C18.1741 4.94067 18.0344 4.7316 17.8583 4.55549C17.6822 4.37938 17.4731 4.23968 17.243 4.14437C17.0129 4.04906 16.7663 4 16.5172 4H5.89655C5.39355 4 4.91116 4.19981 4.55549 4.55549C4.19981 4.91116 4 5.39355 4 5.89655V24.1034C4 24.6064 4.19981 25.0888 4.55549 25.4445C4.91116 25.8002 5.39355 26 5.89655 26H16.5172C16.7663 26 17.0129 25.9509 17.243 25.8556C17.4731 25.7603 17.6822 25.6206 17.8583 25.4445C18.0344 25.2684 18.1741 25.0593 18.2694 24.8292C18.3647 24.5991 18.4138 24.3525 18.4138 24.1034V22.5862C18.4138 22.2844 18.2939 21.995 18.0805 21.7816C17.8671 21.5682 17.5776 21.4483 17.2759 21.4483Z" fill="white"/>
          </svg>
        );
        break;
    }
  }, []);

  return <>{icon}</>;
};

export default Icon;

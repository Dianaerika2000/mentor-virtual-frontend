import Lottie from "lottie-react";
import avatarData from "../../../../assets/avatar.json";

export const Avatar = () => {

 
  return (
    <div style={{ width: "150px", height: "150px" }}>
      <Lottie 
        animationData={avatarData} 
        loop={true} 
        autoplay={true} 
      />
    </div>
    
  );
};


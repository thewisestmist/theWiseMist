import React from "react";
import Spritesheet from 'react-responsive-spritesheet';

const Avatar = props => {
  let avatarDirection = ""
  switch (props.avatarDirection) {
    case "up": 
      avatarDirection= "72px left"
    break;

    case "right":
      avatarDirection= "50%"
    break;

    case "down": 
      avatarDirection="0"
    break;

    case "left": 
      avatarDirection="bottom left"
    break;

    default:
    break;
  }
  console.log(avatarDirection);
  return (
    
    <Spritesheet
      className="tile avatar"
      image="./assets/spacemanSpriteSheet.png"
      widthFrame={45}
      heightFrame={36}
      steps={3}
      fps={9}
      autoplay={true}
      loop={true}
    />
  )
};

export default Avatar;

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  let [like, setLike] = useState(false);

  const toggle = () => {
    setLike(!like);
    onClick();
  };

  if (like) {
    return (
      <>
        <AiFillHeart color="" size={20} onClick={toggle}></AiFillHeart>
      </>
    );
  }

  return (
    <>
      <AiOutlineHeart size={20} onClick={toggle}></AiOutlineHeart>
    </>
  );
};

export default Like;

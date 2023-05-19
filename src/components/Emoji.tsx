import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bull-eye.png";
import meh from "../assets/meh.svg";
import thumpsUp from "../assets/thumps-up.png";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumpsUp, alt: "recommend", boxSize: "35px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;

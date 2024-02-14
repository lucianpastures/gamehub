import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: any } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((p) => (
        <Icon
          key={p.id}
          as={iconMap[p.slug]}
          color="gray.500"
          fontSize={{ base: "md", md: "lg" }}
        />
      ))}
    </HStack>
  );
}

export default PlatformIconList;

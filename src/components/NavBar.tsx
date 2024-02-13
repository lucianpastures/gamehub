import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorToggle from "./ColorToggle";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding={{ base: "10px" }}>
      <Image src={logo} boxSize={{ base: "40px", md: "60px" }} />
      <ColorToggle />
    </HStack>
  );
}

export default NavBar;

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize={{ base: "40px", md: "60px" }} />
      <Text fontSize={{ base: "lg", md: "2xl" }}>GameHub</Text>
    </HStack>
  );
}

export default NavBar;

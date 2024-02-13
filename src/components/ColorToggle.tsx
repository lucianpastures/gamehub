import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorToggle() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{colorMode.toUpperCase()} Mode</Text>
    </HStack>
  );
}

export default ColorToggle;

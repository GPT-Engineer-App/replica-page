import { Box, Flex, Link, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex maxW="container.xl" mx="auto" align="center">
        <Link href="/" color="white" fontSize="xl" fontWeight="bold">Home</Link>
        <Spacer />
        <Link href="/about" color="white" fontSize="xl" fontWeight="bold">About</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
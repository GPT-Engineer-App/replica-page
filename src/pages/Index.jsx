import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Link, Text, VStack, Image } from "@chakra-ui/react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        {/* Left Section */}
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="white">
          <Link href="#" fontSize="2xl" fontWeight="bold" color="blue.500">
            <Image src="/logo.png" alt="Finotic Logo" boxSize="50px" />
          </Link>
          <Box w="full" p={5} borderWidth={1} borderRadius="lg" borderColor="gray.200">
            <Text fontSize="lg" fontWeight="bold" color="gray.500">
              CURRENT BALANCE
            </Text>
            <Text fontSize="3xl" fontWeight="bold" color="blue.500">
              $24,359
            </Text>
          </Box>
          <Box w="full" p={5} borderWidth={1} borderRadius="lg" borderColor="gray.200">
            <Text fontSize="lg" fontWeight="bold" color="gray.500">
              34% Food
            </Text>
            <Image src="/pie-chart.png" alt="Pie Chart" boxSize="100px" />
          </Box>
          <Box w="full" p={5} borderWidth={1} borderRadius="lg" borderColor="gray.200">
            <Text fontSize="lg" fontWeight="bold" color="gray.500">
              New transaction
            </Text>
            <Button variant="outline" colorScheme="blue" mt={2}>
              Upload .xls file
            </Button>
          </Box>
        </VStack>

        {/* Right Section */}
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50">
          <Text fontSize="3xl" fontWeight="bold">
            Welcome back!
          </Text>
          <Text fontSize="md" color="gray.500">
            Start managing your finance faster and better
          </Text>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="you@example.com" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="At least 8 characters" />
          </FormControl>
          <Link href="#" color="blue.500" alignSelf="flex-end">
            Forgot password?
          </Link>
          <Button colorScheme="blue" w="full">
            Login
          </Button>
          <Text textAlign="center" w="full">
            or
          </Text>
          <Button leftIcon={<FaGoogle />} colorScheme="red" variant="outline" w="full">
            Login with Google
          </Button>
          <Button leftIcon={<FaFacebook />} colorScheme="facebook" variant="outline" w="full">
            Login with Facebook
          </Button>
          <Text textAlign="center" w="full">
            Don't you have an account?{" "}
            <Link href="#" color="blue.500">
              Sign Up
            </Link>
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
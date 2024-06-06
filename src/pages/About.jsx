import { Box, Container, Heading, Text, Link, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} alignItems="flex-start">
        <Heading as="h1" size="2xl">About Us</Heading>
        <Text fontSize="lg">
          Welcome to our website! Our purpose is to help you manage your finances better and faster. We provide tools and resources to help you keep track of your expenses, investments, and savings.
        </Text>
        <Link href="/" color="blue.500">Back to Home</Link>
      </VStack>
    </Container>
  );
};

export default About;
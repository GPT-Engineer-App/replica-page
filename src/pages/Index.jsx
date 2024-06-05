import { Box, Container, Flex, Link, Text, VStack } from "@chakra-ui/react";

const newsItems = [
  {
    title: "AI headphones let you listen to a single person in crowd, by looking at them",
    source: "washington.edu",
    points: 373,
    time: "6 hours ago",
    comments: 143,
  },
  {
    title: "Three Laws of Software Complexity",
    source: "matheshba.bitbucket.io",
    points: 5,
    time: "2 hours ago",
    comments: 24,
  },
  {
    title: "TTE: Terminal Text Effects",
    source: "chrisbuilds.github.io",
    points: 1322,
    time: "14 hours ago",
    comments: 209,
  },
  {
    title: "NSA Ghidra open-source reverse engineering framework",
    source: "ghidra-sre.org",
    points: 395,
    time: "5 hours ago",
    comments: 120,
  },
  {
    title: "Llama 3-V: Matching GPT-4-V with a 100x smaller model and 500 dollars",
    source: "aksh-garg.medium.com",
    points: 395,
    time: "14 hours ago",
    comments: 55,
  },
  {
    title: "ChatTTS-Best open source TTS Model",
    source: "github.com/2noise",
    points: 122,
    time: "10 hours ago",
    comments: 18,
  },
  {
    title: "Reproducing GPT-2 in 1min.",
    source: "github.com/karpathy",
    points: 90,
    time: "18 hours ago",
    comments: 3,
  },
  {
    title: "Google Search document leak reveals inner workings of ranking algorithm",
    source: "searchengineland.com",
    points: 19,
    time: "54 minutes ago",
    comments: 1,
  },
  {
    title: "Galios/Counter Mode and random nonces",
    source: "neilmadden.blog",
    points: 47,
    time: "1 hour ago",
    comments: 8,
  },
  {
    title: "Paris's Catacomb Mushrooms (2017)",
    source: "atlasobscura.com",
    points: 47,
    time: "5 hours ago",
    comments: 8,
  },
  {
    title: "USB disk as /dev/sda on a non-rooted smartphone using Termux, QEMU, Alpine Linux",
    source: "gist.github.com",
    points: 73,
    time: "3 hours ago",
    comments: 18,
  },
  {
    title: "A Former OpenAI board member explains why they fired Sam Altman",
    source: "theverge.com",
    points: 93,
    time: "3 hours ago",
    comments: 14,
  },
  {
    title: "Show HN: I made a free app to calibrate your turntable by simply playing a song",
    source: "okat.best",
    points: 230,
    time: "19 hours ago",
    comments: 193,
  },
  {
    title: "Ask HN: Can anyone recommend a Windows Systems programming book?",
    source: "okat.best",
    points: 21,
    time: "3 hours ago",
    comments: 6,
  },
  {
    title: "Princeton astrophysicists re-imagined world map (2021)",
    source: "princeton.edu",
    points: 17,
    time: "3 hours ago",
    comments: 6,
  },
  {
    title: "Writing an NVMe Driver in Rust (pdf)",
    source: "tum.de",
    points: 15,
    time: "14 hours ago",
    comments: 3,
  },
  {
    title: "How to use 12C devices in (Apache NutX: Adding support for an I2C device",
    source: "embeddedrelated.com",
    points: 29,
    time: "8 hours ago",
    comments: 4,
  },
  {
    title: "Shadaw: A particle simulation programming environment for everyone",
    source: "tinlizzie.org",
    points: 15,
    time: "19 hours ago",
    comments: 3,
  },
  {
    title: "Proposal to change default annotation processing policy in JDK 23",
    source: "opendjk.org",
    points: 64,
    time: "1 hour ago",
    comments: 16,
  },
  {
    title: "What We Learned from a Year of Building with LLMs",
    source: "oreilly.com",
    points: 127,
    time: "19 hours ago",
    comments: 16,
  },
  {
    title: "Webview: Tiny cross-platform webview library for C/C++",
    source: "github.com/webview",
    points: 29,
    time: "8 hours ago",
    comments: 19,
  },
  {
    title: "STM32: How to use the new CH32V003 Microcontroller",
    source: "github.com/brian-smith-github",
    points: 29,
    time: "8 hours ago",
    comments: 19,
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg">
      <Box bg="orange.500" p={4}>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Text fontSize="xl" fontWeight="bold" color="white" mr={4}>
              Y
            </Text>
            <Link href="#" color="white" mr={4}>
              Hacker News
            </Link>
            <Link href="#" color="white" mr={4}>
              new
            </Link>
            <Link href="#" color="white" mr={4}>
              past
            </Link>
            <Link href="#" color="white" mr={4}>
              comments
            </Link>
            <Link href="#" color="white" mr={4}>
              ask
            </Link>
            <Link href="#" color="white" mr={4}>
              show
            </Link>
            <Link href="#" color="white" mr={4}>
              jobs
            </Link>
            <Link href="#" color="white" mr={4}>
              submit
            </Link>
          </Flex>
          <Link href="#" color="white">
            login
          </Link>
        </Flex>
      </Box>
      <VStack spacing={4} mt={4} align="stretch">
        {newsItems.map((item, index) => (
          <Box key={index} p={4} borderBottom="1px" borderColor="gray.200">
            <Text fontSize="lg">
              {index + 1}.{" "}
              <Link href="#" color="blue.600">
                {item.title}
              </Link>{" "}
              <Text as="span" color="gray.500">
                ({item.source})
              </Text>
            </Text>
            <Text fontSize="sm" color="gray.500">
              {item.points} points by user {item.time} | hide | {item.comments}{" "}
              comments
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
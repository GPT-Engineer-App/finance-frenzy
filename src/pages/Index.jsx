import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, StackDivider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
          <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
          <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex mt={8} direction={{ base: "column", md: "row" }} spacing={8}>
        {/* Headline News Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Headline News</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Breaking News Title 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md">Breaking News Title 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar for Trending Articles */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Trending Articles</Heading>
          <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="gray.200" />}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Trending Article 1</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Trending Article 2</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Trending Article 3</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Trending Article 4</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
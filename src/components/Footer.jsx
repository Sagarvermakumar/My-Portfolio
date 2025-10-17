import { Box, Flex, Text, Link, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { useColors } from "../hooks/useColors";

const Footer = () => {

  const {cardBg} = useColors()
  return (
    <Box bg={cardBg} 
                  backdropFilter="blur(40px)" color="white" py={10} px={6}>
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        gap={6}
      >
        {/* About / Name */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold" fontSize="xl">
            Sagar Verma
          </Text>
          <Text fontSize="sm" maxW="300px" color="gray.400">
            MERN Stack Developer building scalable web & mobile applications with React, Node.js, Express, and MongoDB.
          </Text>
        </VStack>

        {/* Quick Links */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold">Quick Links</Text>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </VStack>

        {/* Social & Contact */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold">Connect</Text>
          <HStack spacing={3}>
            <IconButton
              as={Link}
              href="https://github.com/yourusername"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              colorScheme="whiteAlpha"
              size="md"
            />
            <IconButton
              as={Link}
              href="https://linkedin.com/in/yourusername"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              colorScheme="whiteAlpha"
              size="md"
            />
            <IconButton
              as={Link}
              href="https://twitter.com/yourusername"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              colorScheme="whiteAlpha"
              size="md"
            />
            <IconButton
              as={Link}
              href="mailto:youremail@example.com"
              aria-label="Email"
              icon={<FaEnvelope />}
              variant="ghost"
              colorScheme="whiteAlpha"
              size="md"
            />
          </HStack>
        </VStack>
      </Flex>

      {/* Copyright */}
      <Text textAlign="center" pt={10} fontSize="sm" color="gray.500">
        &copy; {new Date().getFullYear()} Sagar Verma. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;

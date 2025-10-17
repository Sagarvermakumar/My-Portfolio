import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import EarthCanvas from "../components/canvas/Earth";
import Outline3DBtn from "../components/Outline3DBtn";
import Solid3DBtn from "../components/Solid3DBtn";
import { useColors } from "../hooks/useColors";


const MotionBox = motion(Box);

const Hero3D = () => {
  const {  textSecondary, primary } = useColors();

  const roles = [
    "MERN Stack Developer",
    "React Native Developer",
    "Node.js Developer",
    "Frontend Developer",
  ];

  const [textRole] = useTypewriter({
    words: roles,
    loop: 0,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 50,
  });


  // Scroll animation
  const { scrollYProgress } = useViewportScroll();

  // left slides left, right slides right, opacity decreases
  const leftX = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <Box id="home" minH="100vh" position="relative" overflow="hidden" px={6}>
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        minH="100vh"
        gap={12}
      >
        {/* Left Content */}
        <MotionBox
          style={{ x: leftX, opacity: sectionOpacity }}
          w={{ base: "100%", md: "50%" }}
        >
          <VStack align="flex-start" spacing={6} textAlign="left">
            <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold" lineHeight={1.2}>
              Hi, I'm{" "}
              <Text as="span" bgGradient={`linear(to-r, ${primary}, #f80, #ff0080)`} bgClip="text">
                Sagar Kumar..
              </Text>
            </Heading>

            <Text fontSize={{ base: "md", md: "2xl" }} bgGradient={`linear(to-r, ${primary}, #f80)`} bgClip="text" fontWeight="semibold">
              {textRole}
              <Cursor cursorStyle="|" />
            </Text>

            <Text fontSize={{ base: "md", md: "lg" }} color={textSecondary} maxW="600px" lineHeight={1.7}>
              Building modern, scalable, and interactive web & mobile apps using React, React Native, Node.js, Express & MongoDB. Passionate about clean UI and seamless UX.
            </Text>

            <Flex gap={4} direction={{ base: "column", md: "row" }} w="100%" pt={2}>
              <Link to="projects" spy smooth duration={500}>
                <Solid3DBtn label={"View My Work"} />
              </Link>
              <Link to="contact" spy smooth duration={500}>
                <Outline3DBtn label={"Get In Touch"} />
              </Link>
            </Flex>
   
          </VStack>
        </MotionBox>

        {/* Right Earth Canvas */}
        <MotionBox
          style={{ x: rightX, opacity: sectionOpacity }}
          w={{ base: "300px", md: "600px" }}
          mt={{ base: 10, md: 0 }}
        >
          <EarthCanvas />
        </MotionBox>
      </Flex>
    </Box>
  );
};

export default Hero3D;
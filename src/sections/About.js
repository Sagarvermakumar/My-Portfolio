import {
  Badge,
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { theDev } from "../assets";
import { useColors } from "../hooks/useColors";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionCard = motion(Card);
const MotionImage = motion(Image);

const About = () => {
  const { text, textSecondary, primary, cardBg, glassBorder , } = useColors();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useBreakpointValue({ base: true, md: false });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Redux",
    "Next.js",
    "AWS",
    "Docker",
  ];

  const experiences = [
    {
      year: "Jan 2024 – Present",
      role: "Freelance MERN Stack Developer",
      company: "Self-Employed",
      description: `
        Designed and developed 2+ full-stack web applications using React, Node.js, Express, and MongoDB. 
        Built responsive UI with Chakra UI and Tailwind CSS for smooth and optimized UX. 
        Integrated secure authentication (JWT & Firebase) and implemented RESTful APIs for data flow. 
        Collaborated directly with clients to understand requirements and deliver tailored solutions.`,
    },
    {
      year: "Mar 2024 – Apr 2024",
      role: "Full Stack Developer (Zayka Express)",
      company: "Freelance Project",
      description: `
        Developed a complete fast-food delivery web app with admin and customer modules. 
        Implemented user authentication, order tracking, and menu management using React, Node.js, Express, and MongoDB. 
        Deployed the app using Render & Vercel with a modern UI built using Chakra UI.`,
    },
    {
      year: "May 2024 – Jun 2024",
      role: "MERN Developer (JobConnect Portal)",
      company: "Freelance Project",
      description: `
        Built a job portal with separate dashboards for jobseekers, employers, and admin. 
        Implemented role-based access, profile management, and job filtering features. 
        Used Redux Toolkit for state management and integrated Cloudinary for resume uploads.`,
    },
  ];

  return (
    <Box id="about" py={48} bg={"transparent"}>
      <Container maxW="container.xl" px={4}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <VStack spacing={4} mb={16} textAlign="center">
            <MotionHeading size="2xl" color={text} variants={itemVariants}>
              About Me
            </MotionHeading>
            <MotionText
              fontSize="lg"
              color={textSecondary}
              maxW="600px"
              variants={itemVariants}
            >
              Passionate developer with a love for creating exceptional digital
              experiences
            </MotionText>
          </VStack>

          {/* Main Content */}
          <Flex
            direction={isMobile ? "column" : "row"}
            align="center"
            gap={12}
            mb={16}
          >
            {/* Profile Image */}
            {/* Profile Image (3D Style) */}
            <MotionBox
              variants={imageVariants}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                perspective: "1000px",
              }}
            >
              <Box
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                bgGradient={`linear(to-b, ${cardBg}, ${cardBg}aa)`}
                border="1px solid"
                borderColor={glassBorder}
                boxShadow={`0 10px 30px ${primary}30, inset 0 0 30px ${primary}15`}
                backdropFilter="blur(25px)"
                transformStyle="preserve-3d"
                p={4}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "0",
                  left: "0",
                  w: "100%",
                  h: "100%",
                  bgGradient:
                    "linear(to-tr, rgba(255,255,255,0.1), transparent)",
                  zIndex: 1,
                }}
              >
                <MotionImage
                  src={theDev}
                  alt="Developer Photo"
                  w={isMobile ? "250px" : "300px"}
                  h={isMobile ? "250px" : "300px"}
                  objectFit="cover"
                  borderRadius="xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{
                    boxShadow: `0 8px 25px ${primary}55`,
                    transform: "translateZ(30px)",
                  }}
                />

                {/* Floating Badge */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    zIndex: 2,
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Badge
                    colorScheme="pink"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="bold"
                    boxShadow={`0 0 15px ${primary}60`}
                  >
                    Available
                  </Badge>
                </motion.div>

                {/* Optional glow reflection */}
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "30%",
                    background: `radial-gradient(circle at bottom, ${primary}30, transparent 70%)`,
                    filter: "blur(25px)",
                    zIndex: 0,
                  }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </Box>
            </MotionBox>

            {/* About Text */}
            <VStack
              align={isMobile ? "center" : "start"}
              spacing={6}
              flex={1}
              textAlign={isMobile ? "center" : "left"}
            >
              <MotionText
                fontSize={isMobile ? "md" : "lg"}
                color={textSecondary}
                lineHeight={1.8}
                variants={itemVariants}
              >
                I'm a passionate MERN Stack Developer with over 4 years of
                experience building scalable web applications. I love turning
                complex problems into simple, beautiful, and intuitive
                solutions.
              </MotionText>

              <MotionText
                fontSize={isMobile ? "md" : "lg"}
                color={textSecondary}
                lineHeight={1.8}
                variants={itemVariants}
              >
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blog posts and mentoring.
              </MotionText>

              <MotionFlex
                wrap="wrap"
                gap={2}
                justify={isMobile ? "center" : "start"}
                variants={itemVariants}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge
                      colorScheme="pink"
                      variant="subtle"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="sm"
                      _hover={{
                        bg: primary,
                        color: "white",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.3s ease"
                      cursor="default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </MotionFlex>
            </VStack>
          </Flex>

          {/* Experience Timeline */}
          {/* Experience Timeline */}
          <MotionBox variants={itemVariants}>
            <Heading size="lg" color={text} mb={8} textAlign="center">
              Experience
          </Heading>

            <VStack spacing={6} align="stretch">
              {experiences.map((exp, index) => (
                <MotionCard
                  key={index}
                  variants={itemVariants}
                  bg={cardBg}
                  borderColor={"whiteAlpha.200"}
                  borderWidth={'1px'}
                  backdropFilter={"blur(10px)"}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <CardBody p={6}>
                    <Flex
                      direction={isMobile ? "column" : "row"}
                      align={isMobile ? "center" : "start"}
                      gap={4}
                    >
                      <VStack
                        align={isMobile ? "center" : "start"}
                        spacing={2}
                        flex={1}
                        textAlign={isMobile ? "center" : "left"}
                      >
                        <Text
                          fontSize="sm"
                          color={primary}
                          fontWeight="bold"
                          letterSpacing="wide"
                        >
                          {exp.year}
                        </Text>
                        <Heading size="md" color={text}>
                          {exp.role}
                        </Heading>
                        <Text color={primary} fontWeight="semibold">
                          {exp.company}
                        </Text>
                      </VStack>

                      <Box flex={2}>
                        <Text color={textSecondary} lineHeight={1.6}>
                          {exp.description}
                        </Text>
                      </Box>
                    </Flex>
                  </CardBody>
                </MotionCard>
              ))}
            </VStack>
          </MotionBox>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;

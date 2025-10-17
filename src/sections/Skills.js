import {
  Box,
  Card,
  Container,
  Grid,
  Heading,
  HStack,
  Text,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
  FaWatchmanMonitoring,
} from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import {
  SiChakraui,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import TiltCard from '../components/TiltCard';
import { useColors } from '../hooks/useColors';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

// Tilt Card Component


const Skills = () => {
  const { text, textSecondary, primary } = useColors();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, level: 95, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6" },
        { name: "JavaScript", icon: FaJs, level: 95, color: "#F7DF1E" },
        { name: "HTML5", icon: FaHtml5, level: 98, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, level: 92, color: "#1572B6" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 93, color: "#339933" },
        { name: "Express", icon: SiExpress, level: 90, color: "#000000" },
        { name: "MongoDB", icon: FaWatchmanMonitoring, level: 88, color: "#47A248" },
        { name: "Python", icon: FaPython, level: 78, color: "#3776AB" },
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 92, color: "#F05032" },
        { name: "Docker", icon: FaDocker, level: 85, color: "#2496ED" },
        { name: "AWS", icon: FaAws, level: 80, color: "#FF9900" },
        { name: "Firebase", icon: SiFirebase, level: 75, color: "#FFCA28" },
        { name: "GitHub", icon: FaGithub, level: 90, color: "#181717" },
        { name: "NPM", icon: FaNpm, level: 88, color: "#CB3837" },
      ]
    },
    {
      title: "UI/UX",
      skills: [
        { name: "Chakra UI", icon: SiChakraui, level: 95, color: "#319795" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
        { name: "Redux", icon: SiRedux, level: 85, color: "#764ABC" },
        { name: "Framer Motion", icon: FaReact, level: 88, color: "#FF0055" },
      ]
    }
  ];

  return (
    <Box id="skills" py={20} bg="transparent">
      <Container maxW="container.xl" px={4}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <VStack spacing={4} mb={16} textAlign="center">
            <MotionHeading
              size="2xl"
              color={text}
              variants={itemVariants}
            >
              Skills & Technologies
            </MotionHeading>
            <MotionText
              fontSize="lg"
              color={textSecondary}
              maxW="600px"
              variants={itemVariants}
            >
              A comprehensive overview of my technical expertise and proficiency levels
            </MotionText>
          </VStack>

          {/* Skills Grid */}
          {skillCategories.map((category, categoryIndex) => (
            <MotionBox key={category.title} variants={itemVariants} mb={12}>
              <Heading
                size="lg"
                color={primary}
                mb={8}
                textAlign="center"
                position="relative"
              >
                {category.title}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '3px',
                    background: primary,
                    borderRadius: '2px',
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </Heading>
              {/* <SectionsHeading label={category.title}/> */}

              <Grid
                templateColumns={{
                  base: "repeat(auto-fit, minmax(200px, 1fr))",
                  md: "repeat(auto-fit, minmax(250px, 1fr))",
                  lg: "repeat(auto-fit, minmax(280px, 1fr))",
                }}
                gap={6}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                    }}
                    viewport={{ once: true }}
                  >
                    <TiltCard
                      icon={skill.icon}
                      title={skill.name}
                      level={skill.level}
                      color={skill.color}
                    />
                  </motion.div>
                ))}
              </Grid>
            </MotionBox>
          ))}

          {/* Additional Skills */}
          <MotionBox variants={itemVariants}>
            <Card
              bg="transparent"
              border="2px solid"
              borderColor={primary}
              borderRadius="2xl"
              p={8}
              textAlign="center"
            >
              <VStack spacing={4}>
                <Heading size="md" color={text}>
                  Additional Skills
                </Heading>
                <HStack spacing={8} wrap="wrap" justify="center">
                  {[
                    "Agile/Scrum", "RESTful APIs", "Microservices", "CI/CD",
                    "Responsive Design", "Performance Optimization", "Testing",
                    "Code Review", "Mentoring", "Technical Writing"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                    >
                      <Text
                        fontSize="sm"
                        color={textSecondary}
                        px={4}
                        py={2}
                        borderRadius="full"
                        bg="rgba(255, 0, 128, 0.1)"
                        border="1px solid"
                        borderColor="rgba(255, 0, 128, 0.2)"
                        _hover={{
                          bg: primary,
                          color: "white",
                          transform: "translateY(-2px)",
                        }}
                        transition="all 0.3s ease"
                        cursor="default"
                      >
                        {skill}
                      </Text>
                    </motion.div>
                  ))}
                </HStack>
              </VStack>
            </Card>
          </MotionBox>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;

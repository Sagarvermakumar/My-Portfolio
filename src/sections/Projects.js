import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Text,
  Heading,
  VStack,
  HStack,
  Card,
  CardBody,
  Image,
  Badge,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
  Link,
  Divider,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useColors } from '../hooks/useColors';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

// Project Card Component
const ProjectCard = ({ project, onOpen, setSelectedProject }) => {
  const { cardBg, glassBorder, shadow, primary, text, textSecondary } = useColors();

  return (
    <MotionCard
      bg={cardBg}
      backdropFilter="blur(20px)"
      border="1px solid"
      borderColor={glassBorder}
      boxShadow={shadow}
      borderRadius="2xl"
      overflow="hidden"
      h="100%"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        boxShadow: `0 20px 40px rgba(255, 0, 128, 0.2)`,
        borderColor: primary,
      }}
      cursor="pointer"
      onClick={() => {
        setSelectedProject(project);
        onOpen();
      }}
    >
      <Box position="relative" overflow="hidden">
        <MotionImage
          src={project.image}
          alt={project.title}
          w="100%"
          h="200px"
          objectFit="cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Overlay */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255,0,128,0.8), rgba(0,0,0,0.8))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <VStack spacing={2}>
            <Icon as={FaCode} w={8} h={8} color="white" />
            <Text color="white" fontWeight="bold">
              View Details
            </Text>
          </VStack>
        </motion.div>

        {/* Featured Badge */}
        {project.featured && (
          <Badge
            position="absolute"
            top={3}
            right={3}
            colorScheme="pink"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="sm"
            fontWeight="bold"
          >
            Featured
          </Badge>
        )}
      </Box>

      <CardBody p={6}>
        <VStack spacing={4} align="start" h="100%">
          <VStack spacing={2} align="start" flex={1}>
            <Heading size="md" color={text}>
              {project.title}
            </Heading>
            
            <Text color={textSecondary} fontSize="sm" lineHeight={1.6}>
              {project.description}
            </Text>

            <HStack spacing={2} wrap="wrap">
              {project.technologies.slice(0, 3).map((tech, index) => (
             <motion.div
                             key={tech}
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
                              //  py={2}
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
                               {tech}
                             </Text>
                           </motion.div>
              ))}
              {project.technologies.length > 3 && (
               
                  <Text
                               fontSize="sm"
                               color={textSecondary}
                               px={4}
                              //  py={2}
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
                               {project.technologies.length - 3} More
                             </Text>
              


              )}
            </HStack>
          </VStack>

          <HStack spacing={3} w="100%" justify="space-between">
            <Text fontSize="sm" color={textSecondary}>
              {project.category}
            </Text>
            <Text fontSize="sm" color={primary} fontWeight="semibold">
              View Project →
            </Text>
          </HStack>
        </VStack>
      </CardBody>
    </MotionCard>
  );
};

// Project Modal Component
const ProjectModal = ({ isOpen, onClose, project }) => {
  const { text, textSecondary, primary } = useColors();
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <ModalContent
              bg="rgba(26, 32, 44, 0.95)"
              backdropFilter="blur(20px)"
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.1)"
              borderRadius="2xl"
              mx={4}
            >
              <ModalHeader>
                <VStack align="start" spacing={2}>
                  <Heading size="lg" color={text}>
                    {project.title}
                  </Heading>
                  <Text color={textSecondary} fontSize="sm">
                    {project.category} • {project.date}
                  </Text>
                </VStack>
              </ModalHeader>
              <ModalCloseButton color={text} />
              
              <ModalBody pb={8}>
                <VStack spacing={6} align="stretch">
                  {/* Project Image */}
                  <Box borderRadius="xl" overflow="hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="100%"
                      h={isMobile ? "200px" : "300px"}
                      objectFit="cover"
                    />
                  </Box>

                  {/* Project Description */}
                  <Text color={textSecondary} lineHeight={1.8}>
                    {project.fullDescription}
                  </Text>

                  {/* Features */}
                  <Box>
                    <Heading size="md" color={text} mb={3}>
                      Key Features
                    </Heading>
                    <VStack align="start" spacing={2}>
                      {project.features.map((feature, index) => (
                        <HStack key={index} spacing={3}>
                          <Box
                            w={2}
                            h={2}
                            bg={primary}
                            borderRadius="full"
                            flexShrink={0}
                          />
                          <Text color={textSecondary} fontSize="sm">
                            {feature}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  {/* Technologies */}
                  <Box>
                    <Heading size="md" color={text} mb={3}>
                      Technologies Used
                    </Heading>
                    <HStack spacing={2} wrap="wrap">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          colorScheme="pink"
                          variant="subtle"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>

                  {/* Links */}
                  <HStack spacing={4} justify="center">
                    {project.github && (
                      <Button
                        as={Link}
                        href={project.github}
                        target="_blank"
                        leftIcon={<FaGithub />}
                        variant="glass"
                        size="lg"
                      >
                        View Code
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        as={Link}
                        href={project.live}
                        target="_blank"
                        leftIcon={<FaExternalLinkAlt />}
                        colorScheme="pink"
                        size="lg"
                      >
                        Live Demo
                      </Button>
                    )}
                  </HStack>
                </VStack>
              </ModalBody>
            </ModalContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

const Projects = () => {
  const { text, textSecondary, primary } = useColors();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      fullDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard. The application handles thousands of concurrent users with optimized performance.",
      category: "Full Stack",
      date: "2023",
      featured: true,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redux"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for management",
        "Responsive design for all devices"
      ],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      fullDescription: "A modern task management application that enables teams to collaborate effectively. Built with real-time features, drag-and-drop functionality, and comprehensive project tracking capabilities.",
      category: "Frontend",
      date: "2023",
      featured: true,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Socket.io", "Node.js", "PostgreSQL", "Chakra UI"],
      features: [
        "Real-time collaboration",
        "Drag and drop task management",
        "Team member assignment",
        "Progress tracking and analytics",
        "File attachment support",
        "Notification system"
      ],
      github: "https://github.com/username/task-manager",
      live: "https://taskmanager-demo.com"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      fullDescription: "A comprehensive dashboard for managing multiple social media accounts. Provides analytics, scheduling, and engagement tracking across various platforms.",
      category: "Full Stack",
      date: "2022",
      featured: false,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "Chart.js", "Tailwind CSS"],
      features: [
        "Multi-platform social media integration",
        "Advanced analytics and reporting",
        "Content scheduling and automation",
        "Engagement tracking",
        "Team collaboration tools",
        "Custom dashboard widgets"
      ],
      github: "https://github.com/username/social-dashboard",
      live: "https://social-dashboard-demo.com"
    },
    {
      id: 4,
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts",
      fullDescription: "A sleek weather application that provides accurate forecasts with beautiful animations and intuitive user interface. Features include location-based weather, extended forecasts, and weather alerts.",
      category: "Frontend",
      date: "2022",
      featured: false,
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "OpenWeather API", "Framer Motion", "Chakra UI", "Geolocation API"],
      features: [
        "Current weather conditions",
        "7-day extended forecast",
        "Location-based weather",
        "Weather alerts and notifications",
        "Beautiful animations",
        "Offline functionality"
      ],
      github: "https://github.com/username/weather-app",
      live: "https://weather-app-demo.com"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Modern blogging platform with CMS capabilities",
      fullDescription: "A full-featured blogging platform with content management capabilities. Includes rich text editing, media management, SEO optimization, and user engagement features.",
      category: "Full Stack",
      date: "2021",
      featured: false,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Quill.js", "Cloudinary"],
      features: [
        "Rich text editor with media support",
        "User authentication and roles",
        "SEO optimization",
        "Comment system",
        "Tag and category management",
        "Analytics dashboard"
      ],
      github: "https://github.com/username/blog-platform",
      live: "https://blog-platform-demo.com"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time messaging app with video calling",
      fullDescription: "A modern chat application with real-time messaging, file sharing, and video calling capabilities. Built with WebRTC for peer-to-peer communication.",
      category: "Full Stack",
      date: "2021",
      featured: false,
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["React", "Socket.io", "WebRTC", "Node.js", "Express", "MongoDB"],
      features: [
        "Real-time messaging",
        "Video and voice calls",
        "File sharing",
        "Group chat functionality",
        "Message encryption",
        "Push notifications"
      ],
      github: "https://github.com/username/chat-app",
      live: "https://chat-app-demo.com"
    }
  ];

  return (
    <Box id="projects" py={20} bg="transparent">
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
              Featured Projects
            </MotionHeading>
            <MotionText
              fontSize="lg"
              color={textSecondary}
              maxW="600px"
              variants={itemVariants}
            >
              A showcase of my recent work and personal projects
            </MotionText>
          </VStack>

          {/* Projects Grid */}
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onOpen={onOpen}
                  setSelectedProject={setSelectedProject}
                />
              </motion.div>
            ))}
          </Grid>

          {/* View More Button */}
          <MotionBox
            textAlign="center"
            mt={12}
            variants={itemVariants}
          >
            <Button
              as={Link}
              href="https://github.com/username"
              target="_blank"
              leftIcon={<FaGithub />}
              size="lg"
              variant="glass"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 10px 25px rgba(255, 0, 128, 0.3)",
              }}
            >
              View More on GitHub
            </Button>
          </MotionBox>
        </motion.div>
      </Container>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        project={selectedProject}
      />
    </Box>
  );
};

export default Projects;

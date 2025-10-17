import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  Textarea,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa';
import Solid3DBtn from '../components/Solid3DBtn';
import { useColors } from '../hooks/useColors';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionCard = motion(Card);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionFormControl = motion(FormControl);
const MotionLink = motion(Link);

const Contact = () => {
  const { text, textSecondary, primary, cardBg, glassBorder, shadow } = useColors();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Show success message (you can implement a toast notification here)
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'sksagarkumarverma@gmail.com',
      href: 'mailto:sksagarkumarverma@gmail.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+918434131226',
      href: 'tel:+918434131226',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Jharkhand Deoghar',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      href: 'https://github.com/Sagarvermakumar',
      color: '#333',
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sagar-kumar-479a92219/',
      color: '#0077B5',
    },
   
  ];

  return (
    <Box id="contact" py={20} bg="transparent">
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
              Get In Touch
            </MotionHeading>
            <MotionText
              fontSize="lg"
              color={textSecondary}
              maxW="600px"
              variants={itemVariants}
            >
              Ready to work together? Let's discuss your next project or just say hello!
            </MotionText>
          </VStack>

          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr",
            }}
            gap={12}
            alignItems="start"
          >
            {/* Contact Information */}
            <MotionBox variants={itemVariants}>
              <VStack spacing={8} align="stretch">
                <Card
                  bg={cardBg}
                  backdropFilter="blur(20px)"
                  border="1px solid"
                  borderColor={glassBorder}
                  boxShadow={shadow}
                  borderRadius="2xl"
                  p={8}
                >
                  <CardBody>
                    <VStack spacing={6}>
                      <Heading size="md" color={text} textAlign="center">
                        Let's Connect
                      </Heading>
                      
                      <Text color={textSecondary} textAlign="center" lineHeight={1.8}>
                        I'm always open to discussing new opportunities, 
                        creative projects, or just having a chat about technology. 
                        Feel free to reach out!
                      </Text>

                      <Divider borderColor={glassBorder} />

                      <VStack spacing={0} w="100%">
                        {contactInfo.map((info, index) => (
                          <motion.div
                            key={info.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ width: '100%' }}
                          >
                            <Link
                              href={info.href}
                              _hover={{ textDecoration: 'none' }}
                              isExternal={info.title !== 'Location'}
                            >
                              <HStack
                                spacing={4}
                                p={4}
                                borderRadius="xl"
                                _hover={{
                                  bg: 'rgba(255, 0, 128, 0.1)',
                                  transform: 'translateX(5px)',
                                }}
                                transition="all 0.3s ease"
                                cursor="pointer"
                              >
                                <Icon
                                  as={info.icon}
                                  w={6}
                                  h={6}
                                  color={primary}
                                />
                                <VStack align="start" spacing={1}>
                                  <Text fontSize="sm" color={textSecondary} fontWeight="medium">
                                    {info.title}
                                  </Text>
                                  <Text color={text} fontSize="sm">
                                    {info.value}
                                  </Text>
                                </VStack>
                              </HStack>
                            </Link>
                          </motion.div>
                        ))}
                      </VStack>

                      <Divider borderColor={glassBorder} />

                      {/* Social Links */}
                      <VStack spacing={4}>
                        <Text color={text} fontWeight="semibold">
                          Follow Me
                        </Text>
                        <HStack spacing={4}>
                          {socialLinks.map((social, index) => (
                            <motion.div
                              key={social.name}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Link
                                href={social.href}
                                isExternal
                                _hover={{ textDecoration: 'none' }}
                              >
                                <Icon
                                  as={social.icon}
                                  w={8}
                                  h={8}
                                  color={social.color}
                                  _hover={{
                                    color: primary,
                                    transform: 'translateY(-2px)',
                                  }}
                                  transition="all 0.3s ease"
                                  cursor="pointer"
                                />
                              </Link>
                            </motion.div>
                          ))}
                        </HStack>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </VStack>
            </MotionBox>

            {/* Contact Form */}
            <MotionBox variants={itemVariants}>
              <Card
                bg={cardBg}
                backdropFilter="blur(20px)"
                border="1px solid"
                borderColor={glassBorder}
                boxShadow={shadow}
                borderRadius="2xl"
                p={8}
              >
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={6}>
                      <Heading size="md" color={text} textAlign="center" mb={4}>
                        Send a Message
                      </Heading>

                      <Grid
                        templateColumns={{
                          base: "1fr",
                          md: "1fr 1fr",
                        }}
                        gap={4}
                        w="100%"
                      >
                        <MotionFormControl
                          isInvalid={errors.name}
                          variants={itemVariants}
                        >
                          <FormLabel color={text} fontSize="sm" fontWeight="medium">
                            Name *
                          </FormLabel>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            variant="glass"
                            placeholder="Your full name"
                            _placeholder={{ color: 'gray.500' }}
                          />
                          <FormErrorMessage>{errors.name}</FormErrorMessage>
                        </MotionFormControl>

                        <MotionFormControl
                          isInvalid={errors.email}
                          variants={itemVariants}
                        >
                          <FormLabel color={text} fontSize="sm" fontWeight="medium">
                            Email *
                          </FormLabel>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            variant="glass"
                            placeholder="your.email@example.com"
                            _placeholder={{ color: 'gray.500' }}
                          />
                          <FormErrorMessage>{errors.email}</FormErrorMessage>
                        </MotionFormControl>
                      </Grid>

                      <MotionFormControl
                        isInvalid={errors.subject}
                        variants={itemVariants}
                        w="100%"
                      >
                        <FormLabel color={text} fontSize="sm" fontWeight="medium">
                          Subject *
                        </FormLabel>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          variant="glass"
                          placeholder="What's this about?"
                          _placeholder={{ color: 'gray.500' }}
                        />
                        <FormErrorMessage>{errors.subject}</FormErrorMessage>
                      </MotionFormControl>

                      <MotionFormControl
                        isInvalid={errors.message}
                        variants={itemVariants}
                        w="100%"
                      >
                        <FormLabel color={text} fontSize="sm" fontWeight="medium">
                          Message *
                        </FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          variant="glass"
                          placeholder="Tell me about your project or just say hello!"
                          _placeholder={{ color: 'gray.500' }}
                          rows={6}
                          resize="vertical"
                        />
                        <FormErrorMessage>{errors.message}</FormErrorMessage>
                      </MotionFormControl>

                      <Solid3DBtn label={"Send a Message"}/>
                    </VStack>
                  </form>
                </CardBody>
              </Card>
            </MotionBox>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;

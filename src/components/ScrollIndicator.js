import React, { useState, useEffect } from 'react';
import { Box, IconButton, VStack, Text } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useColors } from '../hooks/useColors';

const MotionBox = motion(Box);

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const { primary, glassBg, glassBorder, text } = useColors();

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show indicator when scrolled past hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);

      // Determine current section based on scroll position
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setCurrentSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getNextSection = () => {
    const currentIndex = sections.findIndex(s => s.id === currentSection);
    return currentIndex < sections.length - 1 ? sections[currentIndex + 1] : null;
  };

  const getPrevSection = () => {
    const currentIndex = sections.findIndex(s => s.id === currentSection);
    return currentIndex > 0 ? sections[currentIndex - 1] : null;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          position="fixed"
          right={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={1000}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
        >
          <VStack
            spacing={2}
            bg={glassBg}
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor={glassBorder}
            borderRadius="full"
            p={2}
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
          >
            {/* Scroll to Top */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                aria-label="Scroll to top"
                icon={<ChevronUpIcon />}
                size="sm"
                variant="ghost"
                color={text}
                _hover={{
                  bg: primary,
                  color: 'white',
                }}
                onClick={scrollToTop}
                borderRadius="full"
              />
            </motion.div>

            {/* Section Indicators */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Box
                    w={3}
                    h={3}
                    borderRadius="full"
                    bg={currentSection === section.id ? primary : 'gray.400'}
                    cursor="pointer"
                    _hover={{
                      bg: primary,
                      transform: 'scale(1.2)',
                    }}
                    transition="all 0.3s ease"
                    position="relative"
                    title={section.label}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Scroll Down */}
            {getNextSection() && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to={getNextSection().id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <IconButton
                    aria-label="Next section"
                    icon={<ChevronDownIcon />}
                    size="sm"
                    variant="ghost"
                    color={text}
                    _hover={{
                      bg: primary,
                      color: 'white',
                    }}
                    borderRadius="full"
                  />
                </Link>
              </motion.div>
            )}
          </VStack>
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;

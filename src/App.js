import React from 'react';
import { Box, ColorModeScript, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import theme from './theme';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ScrollIndicator from './components/ScrollIndicator';
import Banner from './components/Banner';
import Footer from './components/Footer';
import SEO from './components/SEO';


const MotionBox = motion(Box);

const App = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <SEO
        title="Sagar Verma | MERN Stack Developer"
        description="Portfolio of Sagar Verma, a MERN Stack Developer building modern web & mobile apps using React, Node.js, Express, and MongoDB."
        keywords="MERN Stack, React Developer, Node.js, MongoDB, Portfolio, Web Developer, Frontend, Backend"
        url="https://sagarverma.com"
        image="https://sagarverma.com/preview.png"
      />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      minH="100vh"
      display="flex"
      flexDirection="column"
    >


<Box
        position="fixed"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={-1}
        bg={colorMode === "dark" ? "rgba(0, 153, 51, 0.05)" : "gray.100"}
      >
        <Banner />
      </Box>
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <Hero />
          
          {/* About Section */}
          <About />
          
          {/* Skills Section */}
          <Skills />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Contact Section */}
          <Contact />

          <Footer />
        </MotionBox>

        {/* Floating Scroll Indicator */}
        <ScrollIndicator />
      </MotionBox>
    </>
  );
};

export default App;

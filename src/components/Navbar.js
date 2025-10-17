import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Link as ChakraLink,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useColors } from '../hooks/useColors';
import Logo from './Logo';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const NavLink = ({ children, to, onClose }) => (
  <Link
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={onClose}
  >
    <ChakraLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: '#ff0080',
      }}
      color="inherit"
      fontWeight="medium"
      cursor="pointer"
    >
      {children}
    </ChakraLink>
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  const { glassBg, glassBorder, text, primary } = useColors();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <MotionBox
      position="fixed"
      top={0}
      w="100%"
      zIndex={1000}
      bg={scrolled ? glassBg : 'transparent'}
      backdropFilter={scrolled ? 'blur(20px)' : 'none'}
      borderBottom={scrolled ? `1px solid ${glassBorder}` : 'none'}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="home" spy={true} smooth={true} duration={500}>
<Logo/>
</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </HStack>

          {/* Theme Toggle & Mobile Menu Button */}
          <Flex alignItems={'center'} gap={2}>
            <IconButton
              size="md"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle theme"
              onClick={toggleColorMode}
              variant="ghost"
              color={text}
              _hover={{
                bg: glassBg,
                color: primary,
              }}
            />

            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color={text}
              _hover={{
                bg: glassBg,
                color: primary,
              }}
            />
          </Flex>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen ? (
          <MotionBox
            pb={4}
            display={{ md: 'none' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <VStack as={'nav'} spacing={4}>
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClose={onClose}>
                  {item.label}
                </NavLink>
              ))}
            </VStack>
          </MotionBox>
        ) : null}
      </Box>
    </MotionBox>
  );
};

export default Navbar;

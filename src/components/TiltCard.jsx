import {
    Box,
    Card,
    CardBody,
    Heading,
    Icon,
    Progress,
    Text,
    VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useColors } from '../hooks/useColors';

const MotionCard = motion(Card);

const TiltCard = ({ children, icon, title, level, color, ...props }) => {
  const { cardBg, glassBorder, shadow, primary } = useColors();

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      style={{ perspective: 1000 }}
    >
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
        _hover={{
          boxShadow: `0 20px 40px rgba(255, 0, 128, 0.2)`,
          borderColor: primary,
        }}
        {...props}
      >
        <CardBody p={6} textAlign="center">
          <VStack spacing={4}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon
                as={icon}
                w={12}
                h={12}
                color={color || primary}
              />
            </motion.div>
            
            <Heading size="md" color="inherit">
              {title}
            </Heading>
            
            {level && (
              <Box w="100%">
                <Text fontSize="sm" mb={2} color="gray.500">
                  Proficiency: {level}%
                </Text>
                <Progress
                  value={level}
                  colorScheme="pink"
                  size="sm"
                  borderRadius="full"
                  bg="gray.200"
                />
              </Box>
            )}
            
            {children}
          </VStack>
        </CardBody>
      </MotionCard>
    </motion.div>
  );
};



export default TiltCard
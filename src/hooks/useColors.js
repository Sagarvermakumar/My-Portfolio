import { useColorModeValue } from '@chakra-ui/react';

export const useColors = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue(
    'rgba(255, 255, 255, 0.7)',
    'whiteAlpha.200'
  );
  const glassBg = useColorModeValue(
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.05)'
  );
  const glassBorder = useColorModeValue(
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.1)'
  );
  const text = useColorModeValue('gray.900', '#fff');
  const textSecondary = useColorModeValue('gray.600', 'gray.300');
  const primary = '#ff0080';
  const primaryHover = '#e60073';
  const shadow = useColorModeValue(
    '0 8px 32px rgba(0, 0, 0, 0.1)',
    '0 8px 32px rgba(0, 0, 0, 0.3)'
  );
  const primaryShadow = '0 10px 25px rgba(255, 0, 128, 0.3)';

  return {
    bg,
    cardBg,
    glassBg,
    glassBorder,
    text,
    textSecondary,
    primary,
    primaryHover,
    shadow,
    primaryShadow,
  };
};

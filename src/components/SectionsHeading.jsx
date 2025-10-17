


import { Heading, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const SectionsHeading = ({ label }) => {
    const { primary } = useColorMode();
    return (
        <Heading
            size="lg"
            color={primary}
            mb={8}
            textAlign="center"
            position="relative"
        >
            {label}
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
    )
}

export default SectionsHeading
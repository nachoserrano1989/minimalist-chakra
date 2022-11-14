import { Box, Image, Container, Text, Input} from '@chakra-ui/react';
export default function Alerts() {

    return (

        <Box
            w='100%'
            h='92px'
            bgColor='white'
            borderTop='2px solid grey'
            opacity='0.8'
            position='fixed'
            bottom='0'
        >
            <Box
                w='100%'
                h='100%'
                position='relative'
            >
                <Box
                    bgColor='blue'
                    w='50px'
                    h='52px'
                    p='10px'
                    borderRadius='50'
                    position='absolute'
                    top='-15px'
                    right='25px'
                    cursor='pointer'
                >
                    <Image 
                        src='assets/iconos/bell.svg' 
                        alt=''
                        filter='invert(1)'
                        w='100%'
                        h='100%'
                    />
                </Box>
                 
            </Box>
        </Box>
    )
}
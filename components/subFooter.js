import { Box, Image, Container, Text, Input} from '@chakra-ui/react';
export default function SubFooter() {

    return (

        <Box>
            <Container>
                <Box
                    maxW={{sm: '250px'}}
                    m={{sm: '0 auto'}}
                >
                    <Text
                        fontSize={{sm: 'xs'}}
                        color='grey'
                        fontWeight='500'
                        textAlign={{sm: 'center'}}
                        borderBottom={{sm: '1px solid grey'}}
                        maxW={{sm: '175px'}}
                        lineHeight='14px'
                        m={{sm: '0 auto 10px'}}
                        _hover={{border: 'none', m: '0 auto 11px'}}
                    >
                        Update Privacy Preferences
                    </Text>
                    <Text
                        fontSize={{sm: 'xs'}}
                        borderTop={{sm: '1px solid grey'}}
                        color='grey'
                    >
                        AN ELITE CAFEMEDIA FOOD PUBLISHER
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
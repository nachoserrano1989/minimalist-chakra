import { Box, Image, Container, Text, Button } from '@chakra-ui/react';
export default function PickWeek(props) {

    return (

        <Box
            w='100%'
        >
            <Container
                maxW='1200px'
                m={{sm: '0 auto 30px', md: '0 auto 40px'}}
                p={{xl: '0'}}
            >
                <Box
                    w='100%'
                    boxShadow='3px 3px 10px 0 rgb(0 0 0 / 20%)'
                    bgColor='#FBF8F3'
                    display={{md: 'flex'}}
                    justifyContent='space-between'
                >
                    <Box
                        textAlign='center'
                        p={{sm: '24px 20px', md: '80px 26px'}}
                        w={{md: 'calc(50% - 16px)'}}
                    >
                        <Text
                            fontSize={{sm: 'md', md: '3xl'}}
                            m={{sm: '0 0 32px 0'}}
                        >
                            {props.info.page.pickWeek.title}
                        </Text>
                        <Text
                            fontSize={{sm: '9xl', md: '10xl'}}
                            fontWeight='500'
                            lineHeight={{sm: '1.2'}}
                            m={{sm: '0 0 20px 0'}}
                        >
                            {props.info.page.pickWeek.subtitle}
                        </Text>
                        <Text
                            fontSize={{sm: 'xs', md: 'sm'}}
                            p={{sm: '0 9px', md: '0'}}
                            m={{sm: '0 0 20px 0'}}
                        >
                            {props.info.page.pickWeek.text}
                        </Text>
                        <Button
                            m='0 auto'
                            border='1px solid black'
                            fontSize={{sm:'xs', md: 'md'}}
                            fontWeight='500'
                            p='16px 32px'
                            borderRadius='2'
                            bgColor='transparent'
                            lineHeight='103.4px'
                            h={{sm: '56px',md: '60px'}}
                        >
                            {props.info.page.pickWeek.button}
                        </Button>
                    </Box>
                    <Box
                        w={{md: 'calc(50% - 16px)'}}
                        maxH='600px'
                    >
                        <Image 
                            src={props.info.page.pickWeek.src} 
                            alt={props.info.page.pickWeek.alt} 
                            h='100%'
                            w='100%'
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
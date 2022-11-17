import { Box, Image, Text, Container, Flex, Button } from '@chakra-ui/react';

export default function Deeper(props) {

    return (

        <Box
            m={{sm: '30px 0 52px'}}
        >
            <Container
                maxW='1200px'
            >
                <Box
                    position='relative'
                >
                    <Text
                        fontSize={{sm: '2xl'}}
                        textAlign={{sm: 'center'}}
                        w={{sm: '260px', md: '100%'}}
                        m={{sm: '0 auto'}}
                        dangerouslySetInnerHTML={{__html: props.info.faq.text}}
                        p={{lg: '0 35px 0 0'}}
                    >   
                    </Text>
                    <Image 
                        src={props.info.faq.src} 
                        alt='' 
                        w='32px'
                        h='20px'
                        position='absolute'
                        bottom={{sm: '7px', md: '-25px', lg: '6px', xl: '7px'}}
                        right={{sm: '60px', md: 'calc(50% - 16px)', lg: '140px', xl: '220px'}}
                    />
                </Box>
                <Text
                    fontSize={{sm: 'lg', md: 'xl', xl: '3xl'}}
                    letterSpacing={{sm: '3px', md: '4px', xl: '7px'}}
                    m={{sm: '60px 0 15px', md: '132px 0 19px', lg: '99px 0 19px'}}
                >
                    {props.info.title}
                </Text>
                <Text
                    fontSize={{sm: '17px', md: '19px'}}
                    lineHeight={{sm: '30px'}}
                >
                    {props.info.text}
                </Text>
                <Box
                    m={{sm: '14px 0 0'}}
                    display={{md: 'flex'}}
                    flexWrap={{md: 'wrap'}}
                    justifyContent={{md: 'space-between'}}
                >
                    {
                        props.info.cards.map((item, index) => (
                            <Box 
                                key={index}
                                display='flex'
                                borderBottom={{sm: '1px solid black'}}
                                p={{sm: '0 0 23px 0'}}
                                m={{sm: '0 0 10px 0', md: '2px 0 10px 0'}}
                                w={{md: 'calc(50% - 16px)'}}
                            >
                                <Image 
                                    src={item.src} 
                                    alt='' 
                                    w={{sm: '90px', md: '120px'}}
                                    h={{sm: '90px', md: '120px'}}
                                    m={{sm: '6px 0 0'}}
                                    cursor='pointer'
                                />
                                <Box
                                    w={{sm: '222px', lg: '100%'}}
                                    m={{sm: '0 0 0 16px', md: '0 0 0 31px', lg: '0 0 0 32px'}}
                                    lineHeight={{md: '30px'}}
                                >
                                    <Text
                                        fontSize={{sm: 'xl', md: '25.5px'}}
                                        fontWeight={{sm: '700'}}
                                        m={{md: '4px 0 0'}}
                                        _hover={{color: '#D56638', textDecoration: 'underline #D56638'}}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        fontSize={{sm: '17px', md: '19px'}}
                                        lineHeight={{sm: '30px', md: '32px', lg: '33px'}}
                                        m={{sm: '16px 0 0', lg: '20px 0 0'}}
                                    >
                                        {item.text}
                                    </Text>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    )
}
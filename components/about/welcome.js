import { Box, Image, Text, Container } from '@chakra-ui/react';
export default function Welcome(props) {

    return (

        <Box
            m={{sm: '0 0 52px', lg: '0 0 57px', xl: '0 0 58px'}}
        >
            <Container
                /* p={{sm: '0 0 0 36px'}} */
                maxW='1200px'
            >
                <Box
                    display={{md: 'flex'}}
                >
                    <Box
                        p={{sm: '0 0 0 20px'}}
                    >
                        <Box
                            w={{sm: '266px', md: '380px'}}
                            /* m={{sm: '42px 0 0 20px'}} */
                            m={{sm: '42px 0 25px', md: '64px 0 0', '2xl': '73px 0 0'}}
                            position='relative'
                            bgColor='red'
                        >
                            <Image 
                                src={props.info.src} 
                                alt='' 
                                w='100%'
                            />
                            <Image 
                                src={props.info.logo} 
                                alt='logo' 
                                w={{sm: '45px'}}
                                position='absolute'
                                top='25px'
                                right='-22.5px'
                                display={{md: 'none'}}
                            />
                        </Box>
                        
                        
                    </Box>
                    <Box
                        p={{sm: '0 0 0 20px'}}
                        m={{md: '65px 0 0 40px', lg: '67px 0 0 40px', '2xl': '76px 0 0 40px'}}
                    >
                        <Text
                            fontSize={{sm: 'xl', md: '2xl', xl: '4xl'}}
                            w={{sm: '200px', lg: '100%'}}
                            letterSpacing={{lg: '4px'}}
                        >
                            {props.info.title}
                        </Text>
                        <Text
                            fontSize={{sm: '17px', md: '19px'}}
                            m={{sm: '14px 0 0', lg: '16px 0 0'}}
                            lineHeight={{sm: '30px', lg: '33px'}}
                            w={{sm: '280px', md: '256px', lg: '99%'}}
                            /* bgColor='red' */
                            dangerouslySetInnerHTML={{__html: props.info.text}}
                        >
                        </Text>
                        <Text
                            fontSize={{sm: 'lg', md: '21px', '2xl': '2xl'}}
                            fontWeight={{sm: '500', lg: '700'}}
                            m={{sm: '19.5px 0 22px', md: '76px 0 22px', lg: '23px 0 22px', '2xl': '22px 0 20px'}}
                        >
                            {props.info.subtitle}

                        </Text>
                        <Text
                            w={{sm: '260px', md: '256px', lg: '100%'}}
                            fontSize={{sm: '17px', md: '19px'}}
                            lineHeight={{sm: '30px', md: '32px', '2xl': '34px'}}
                        >
                            {props.info.text1}
                        </Text>
                    </Box>
                </Box>
                
                <Box
                    m={{sm: '59.5px 0 0', md: '2px 0 0 60%', lg: '-172px 0 0 46%', xl: '-199px 0 0 39.5%', '2xl': '-197px 0 0 37.7%'}}
                >
                    <Text
                        fontSize={{sm: '17px', md: '19px'}}
                        lineHeight={{sm: '31px', lg: '33px'}}
                        w={{sm: '280px', lg: '100%'}}
                        m={{sm: '0 0 0 16px', lg: '0 0 0 16px'}}
                        p={{lg: '0 0 0 3px'}}

                    >
                        {props.info.text2}
                    </Text>
                    <Box
                        m={{sm: '16px 0 0', lg: '19px 0 0', '2xl': '18px 0 0'}}
                    >
                        {
                            props.info.list.map((item, index) => (
                                <Box 
                                    key={index}
                                    display={{sm: 'flex'}}
                                    m={{sm: '0 0 12px 0'}}
                                >
                                    <Box
                                        w={{sm: '60px', '2xl': '68px'}}
                                        h={{sm: '3px'}}
                                        bgColor={item.color}
                                        m={{sm: 'auto 20px auto 0'}}
                                    ></Box>
                                    <Text
                                        fontSize={{sm: '24px'}}
                                        fontWeight='700'
                                        w={{md: '210px', lg: '100%'}}
                                    >
                                        {item.text}
                                    </Text>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
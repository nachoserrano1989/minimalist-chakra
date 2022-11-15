import { Box, Image, Text, Container } from '@chakra-ui/react';
export default function Welcome(props) {

    return (

        <Box
            h='10000px'
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
                            m={{sm: '42px 0 25px', md: '64px 0 0'}}
                            position='relative'
                            bgColor='red'
                        >
                            <Image 
                                src={props.info.page.about.welcome.src} 
                                alt='' 
                                w='100%'
                            />
                            <Image 
                                src={props.info.page.about.welcome.logo} 
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
                        m={{md: '65px 0 0 40px'}}
                    >
                        <Text
                            fontSize={{sm: 'xl', md: '2xl'}}
                            w={{sm: '200px'}}
                        >
                            {props.info.page.about.welcome.title}
                        </Text>
                        <Text
                            fontSize={{sm: '17px', md: '19px'}}
                            m={{sm: '14px 0 0'}}
                            lineHeight={{sm: '30px'}}
                            w={{sm: '280px', md: '256px'}}
                            /* bgColor='red' */
                        >
                            At Minimalist Baker we share simple recipes that require 10 ingredients or less, 1 bowl, or 30 minutes or less to prepare.
                        </Text>
                        <Text
                            fontSize={{sm: 'lg', md: '21px'}}
                            fontWeight={{sm: '500'}}
                            m={{sm: '19.5px 0 22px', md: '76px 0 22px'}}
                        >
                            {props.info.page.about.welcome.subtitle}

                        </Text>
                        <Text
                            w={{sm: '260px', md: '256px'}}
                            fontSize={{sm: '17px', md: '19px'}}
                            lineHeight={{sm: '30px', md: '32px'}}
                        >
                            {props.info.page.about.welcome.text1}
                        </Text>
                    </Box>
                </Box>
                
                <Box
                    m={{sm: '59.5px 0 0', md: '0 0 0 auto'}}
                >
                    <Text
                        fontSize={{sm: '17px', md: '19px'}}
                        lineHeight={{sm: '31px'}}
                        w={{sm: '280px'}}
                        m={{sm: '0 0 0 16px'}}

                    >
                        {props.info.page.about.welcome.text2}
                    </Text>
                    <Box
                        m={{sm: '16px 0 0'}}
                    >
                        {
                            props.info.page.about.welcome.list.map((item, index) => (
                                <Box 
                                    key={index}
                                    display={{sm: 'flex'}}
                                    m={{sm: '0 0 12px 0'}}
                                >
                                    <Box
                                        w={{sm: '60px'}}
                                        h={{sm: '3px'}}
                                        bgColor={item.color}
                                        m={{sm: 'auto 20px auto 0'}}
                                    ></Box>
                                    <Text
                                        fontSize={{sm: '24px'}}
                                        fontWeight='700'
                                    >{item.text}</Text>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
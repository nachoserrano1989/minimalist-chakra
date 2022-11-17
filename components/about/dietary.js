import { Box, Image, Text, Container, Flex } from '@chakra-ui/react';
export default function Dietary(props) {

    return (

        <Box
            p={{sm: '32px 0 0', xl: '0', '2xl': '29px 0 0'}}
        >
            <Container
                maxW='1200px'
                display={{md: 'flex'}}
            >
                <Box
                    p={{md: '30px 64px 0 0', '2xl': '40px 64px 0 0'}}
                >
                    <Text
                        fontSize={{sm: '17px', md: '19px'}}
                        lineHeight={{sm: '29px'}}
                        dangerouslySetInnerHTML={{__html: props.info.left.text1}}
                        id="dietary"
                    >
                    </Text>
                    <Box
                        m={{sm: '88px 0 0', lg: '117px 0 0'}}
                    >
                        <Text
                            fontSize={{sm: 'sm'}}
                            w={{sm: '250px', lg: '100%'}}
                            textAlign={{sm: 'center'}}
                            m={{sm: '0 auto'}}
                            lineHeight={{sm: '20px'}}
                        >
                            {props.info.left.title}
                        </Text>
                        <Text
                            fontSize={{sm: 'xl'}}
                            textAlign={{sm: 'center'}}
                            m={{sm: '2px 0 0'}}
                            letterSpacing={{sm: '1px'}}
                        >
                            {props.info.left.subtitle}
                        </Text>
                        <Box
                            display={{lg: 'flex'}}
                            flexWrap={{lg: 'wrap'}}
                            m={{sm: '24px 0 0 32px', lg: '24px 0 0 0'}}
                            justifyContent={{lg: 'center'}}
                        >
                            {
                                props.info.left.recipesKey.map((item, index) => (
                                    <Box
                                        key={index}
                                        display='flex'
                                        flexWrap='wrap'
                                        m={{sm: '0 0 20px'}}
                                    >
                                        <Box 
                                            bgColor={item.bgColor}
                                            borderRadius='20px'
                                            w='32px'
                                            h='32px'
                                            cursor='pointer'
                                            /* ml='14px' */
                                            _hover={{bgColor: 'blue'}}
                                        >
                                            <Text
                                                textAlign='center'
                                                pt='3.5px'
                                                color={item.color}
                                                fontWeight='500'
                                            >
                                                {item.icon}
                                            </Text>
                                        </Box>
                                        <Text
                                            m={{sm: '4px 12px 0'}}
                                            fontSize={{sm: 'sm'}}
                                            letterSpacing={{sm: '0.5px'}}
                                        >
                                            {item.text}
                                        </Text>
                                    </Box>    
                                ))
                            }
                        </Box>
                        <Text
                            fontSize={{sm: '17px', md: '19px'}}
                            m={{sm: '77px 0 0', lg: '58px 0 0'}}
                            lineHeight={{sm: '30.5px', md: '34px'}}
                        >
                            {props.info.left.text}
                        </Text>
                        <Text
                            fontSize={{sm: 'xs'}}
                            m={{sm: '19px 0 0'}}
                            lineHeight={{sm: '26px'}}
                        >
                            {props.info.left.nota}
                        </Text>
                        <Box
                            w={{sm: '98%', md: '66%', lg: '37.5%', xl: '28.5%', '2xl': '26.5%'}}
                            border={{sm: '2px solid black'}}
                            p={{sm: '16px 0'}}
                            textAlign={{sm: 'center'}}
                            fontSize={{sm: '13px', md: 'sm'}}
                            fontWeight={{sm: '500'}}
                            letterSpacing={{sm: '2px'}}
                            m={{sm: '30px auto 0', md: '30px 0 0 5px'}}
                            borderRadius={{sm: '2'}}
                        >
                            SEE RECIPES
                        </Box>
                    </Box>
                </Box>
                <Box
                    display={{sm: 'none', md: 'block'}}
                >
                    <Box
                        w={{sm: '380px'}}
                    >
                        <Image 
                            src={props.info.right.src} 
                            alt='' 
                            w='100%'
                        />
                    </Box>
                </Box>
            </Container>
            
        </Box>
    )
}
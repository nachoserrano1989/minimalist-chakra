import { Box, Image, Text, Container, Flex, Button } from '@chakra-ui/react';
export default function Resources(props) {

    return (

        <Box
            m={{sm: '60px 0 0'}}
        >
            <Container
                maxW='1200px'
            >
                <Image 
                    src={props.info.logo} 
                    alt='logo'
                    w={{sm: '47px'}}
                    m={{sm: '0 auto 73px', xl: '0 auto 100px'}}
                />
                <Text
                    fontSize={{sm: 'xl', md: '2xl', xl: '4xl'}}
                    letterSpacing={{sm: '3px', xl: '4px'}}
                >
                    {props.info.title}
                </Text>
                <Text
                    fontSize={{sm: '17px', md: '19px'}}
                    m={{sm: '17px 0 0'}}
                    lineHeight={{sm: '30px', md: '32px'}}
                >
                    {props.info.text}
                </Text>
                <Box
                    display={{sm: 'flex'}}
                    flexWrap={{sm: 'wrap'}}
                    justifyContent={{sm: 'space-between'}}
                    m={{sm: '33px 0 0', md: '40px 0 0'}}
                >
                    {
                        props.info.images.map((item, index) => (
                            <Box key={index}
                                w={{sm: '156px', md: '172px', lg: '227.5px', xl: '267px', '2xl': '280px'}}
                                h={{sm: '242px', md: 'auto'}}
                                m={{sm: '0 0 15px 0'}}
                            >
                                <Image 
                                    src={item.src}
                                    alt=''
                                    w='100%' 
                                    h='100%'
                                />
                            </Box>
                        ))
                    }
                </Box>
                <Text
                    fontSize={{sm: 'xl', md: '2xl', xl: '4xl'}}
                    m={{sm: '20px 0 0', md: '27px 0 0'}}
                    letterSpacing={{sm: '3px', lg: '4px'}}
                >
                    {props.info.title2}
                </Text>
                <Text
                    fontSize={{sm: '17px', md: '19px'}}
                    lineHeight={{sm: '30px', md: '32px'}}
                    m={{sm: '15px 0 0'}}
                    dangerouslySetInnerHTML={{__html: props.info.text2}}
                ></Text>
                <Box
                    m={{sm: '40px 0 0', md: '45px 0 0'}}
                    display={{lg: 'flex'}}
                    flexWrap={{lg: 'wrap'}}
                >
                    {
                        props.info.buttons.map((item, index) => (
                            <Box 
                                key={index}
                                fontSize={{sm: '12px', md: 'xs'}}
                                p={{sm: '16px 32px'}}
                                border={{sm: '2px solid black'}}
                                m={{sm: '0 auto 4px', md: '0 0 8px 0'}}
                                borderRadius='3'
                                textAlign={{sm: 'center'}}
                                w={{sm: '98%', md: '60%'}}
                                fontWeight={{sm: '500'}}
                                letterSpacing={{sm: '3px'}}
                                lineHeight={{sm: '22px'}}
                                _hover={{bgColor: '#f78da7', border: '2px solid #f78da7'}}
                            >
                                {item.text}
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    )
}
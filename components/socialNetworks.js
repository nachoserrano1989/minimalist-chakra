import { Box, Image, Container, Text, Input} from '@chakra-ui/react';
export default function SocialNetwork(props) {

    return (

        <Box
            p={{sm: '40px 0 20px', lg: '45px 0 20px', '2xl': '45px 0 20px'}}
            /* maxW={{'2xl': '1200px'}} */
            bgColor='#FBF8F3'
        >
            <Container
                maxW={{md: '100%', '2xl': '1200px'}}
                display={{xl: 'flex'}}
                justifyContent={{xl: 'space-between'}}
                m={{'2xl': '0 auto'}}
            >
                <Box
                    bgImage={props.info.page.socialNetwork.background}
                    bgPosition={{sm: 'right center', '2xl': 'right center'}}
                    /* maxW={{sm: '100%', lg: '50%'}} */
                    /* bgColor='pink' */
                    bgRepeat='no-repeat'
                    h={{sm: '680px', lg: 'auto'}}
                    p={{sm: '25px 16px', lg: '43px 16px 95px', '2xl': '43px 16px 20px'}}
                    m={{sm: '0 0 40px 0', lg: '0 0 40px 0'}}
                    w={{xl: 'calc(50% - 22px)'}}
                    display={{'2xl': 'flex'}}
                >
                    <Image 
                        src={props.info.page.socialNetwork.left.src} 
                        alt=''
                        w={{sm: '231px', lg: '250px', '2xl': '231px'}}
                        h={{'2xl': '293px'}}
                        m={{sm: '0 auto'}}
                         
                    />
                    <Box
                        maxW={{md: '400px', lg: '450px', '2xl': '266px'}}
                        m={{md: '0 auto'}}
                    >
                        <Text
                            fontSize={{sm: 'xl'}}
                            textAlign='center'
                            lineHeight={{sm: '25px'}}
                            letterSpacing={{sm: '1.5px'}}
                            m={{sm: '20px 0 22px', '2xl': '0 0 22px'}}
                        >
                            {props.info.page.socialNetwork.left.title}
                        </Text>
                        <Text
                            fontSize={{sm: 'xs', lg: 'sm', '2xl': 'xs'}}
                            textAlign='center'
                            fontWeight='700'
                            /* maxW={{lg: '450px'}} */
                            m={{lg: '0 auto'}}
                            
                        >
                            {props.info.page.socialNetwork.left.subtitle}
                        </Text>
                        <Text
                            fontSize={{sm: 'xs', lg: 'sm', '2xl': 'xs'}}
                            textAlign='center'
                            m={{sm: '9px 0 0', lg: '9px auto 0'}}
                            
                            /* maxW={{lg: '450px'}} */
                        >
                            {props.info.page.socialNetwork.left.text}
                        </Text>
                        <Input 
                            placeholder={props.info.page.socialNetwork.left.placeholder}
                            _placeholder={{color: 'black', borderColor: 'black', fontSize: 'xs'}}
                            borderColor='black'
                            borderRadius='0'
                            m={{sm: '25px 0 0'/* , lg: '25px 25px 0' */}}
                            h='49px'
                            /* maxW={{lg: '400px'}} */
                        />
                        <Box
                            bgColor='white'
                            textAlign='center'
                            p={{sm: '16px 20px'}}
                            m={{sm: '15px 0 0'/* , lg: '15px 25px 0' */}}
                            fontSize={{sm: 'md'}}
                            fontWeight='500'
                            /* maxW={{lg: '400px'}} */
                            _hover={{bgColor: '#D56638'}}
                        >
                            {props.info.page.socialNetwork.left.button}
                        </Box>
                    </Box>
                </Box>
                <Box
                    /* maxW={{lg: '50%'}} */
                    w={{xl: 'calc(50% - 22px)'}}
                    m={{xl: '60px 0 0'}}
                >
                    <Box
                        display={{md: 'flex'}}
                    >
                        <Text>{props.info.page.socialNetwork.right.title}</Text>
                        <Text
                            fontWeight='700'
                            fontSize={{sm: 'xs'}}
                            m={{sm: '0 0 50px', md: '0 0 50px 10px'}}
                        >
                            {props.info.page.socialNetwork.right.title2}
                        </Text>
                    </Box>
                    <Box
                        display={{md: 'flex'}}
                        gap={{md: '24px'}}
                    >
                        {
                            props.info.page.socialNetwork.right.socialNetwork.map((item, index) => (
                                <Box 
                                    key={index}
                                    display='flex'
                                    justifyContent='space-between'
                                    alignItems='end'
                                    borderBottom='4px solid'
                                    borderColor={item.color}
                                    m={{sm: '0 0 30px 0'}}
                                    p={{sm: '0 0 5px 0'}}
                                    w={{md: 'calc(33.3% - 16px)'}}
                                    _hover={{color: '#D56638'}}
                                >
                                    <Text
                                        fontFamily={{sm: 'xs'}}
                                        fontWeight='700'
                                        
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        fontSize={{sm: '5xl'}}
                                        fontWeight='700'
                                        lineHeight='30px'
                                        m={{'2xl': '0 0 3px 0'}}
                                        
                                    >
                                        {item.followers}
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
import { Box, Image, Container, Text} from '@chakra-ui/react';
export default function Shop(props) {

    return (

        <Box
            h={{sm: '632px', md: '607px', lg: '570px', xl: '715px', '2xl': '690px'}}
            bgImage={props.info.page.shop.background}
            bgPosition={{sm: '50% 50%', lg: 'top', '2xl': 'center'}}
            bgRepeat='no-repeat'
            bgColor='red'
            bgSize={{sm: 'cover', lg: '130.5%', xl: '128.3%', '2xl': '100%'}}
            maxW='100%'
            p={{sm: '133px 32px 80px'}}
        >
            <Container
                bgColor='white'
                maxW={{sm: '100%', md: '500px', lg: '544px'}}
                h={{sm: '417px', md: '314px', lg: '341.5px'}}
                /* m={{sm: 'auto 0'}} */
                m={{md: '40px auto 0', lg: '55px auto 0', xl: '100px auto 0'}}
                p={{sm: '40px 30px', lg: '40px'}}
                position='relative'
            >
                <Box
                    position='absolute'
                    bgColor='white'
                    p='32px'
                    borderRadius='55'
                    top='-57px'
                    left='calc(50% - 57px)'
                >
                    <Image 
                        src={props.info.page.shop.logo} 
                        alt=''
                        w={{sm: '47px', lg: '50px'}}
                        h={{sm: '47px', lg: '50px'}}
                    />
                </Box>
                <Text
                    fontSize={{sm: '9xl'}}
                    fontWeight='500'
                    textAlign='center'
                >
                    {props.info.page.shop.title}
                </Text>
                <Text
                    fontSize={{sm: 'md'}}
                    textAlign='center'
                    m={{sm: '15px 0 23px'}}
                >
                    {props.info.page.shop.text}
                </Text>
                <Box
                    w={{sm: '100px'}}
                    h='1.5px'
                    m='0 auto'
                    bgColor='black'
                >
                </Box>
                <Box
                    display='flex'
                    justifyContent='center'
                    m={{sm: '20px 0', md: '30px 0'}}
                >
                    <Text
                        color='#D56638'
                        fontWeight='500'
                        fontSize={{sm: 'xs'}}
                        textAlign='center'
                        maxW={{sm: '150px', md: '250px'}}
                        letterSpacing={{md: '2px'}}
                    >
                        {props.info.page.shop.button}
                    </Text>
                    <Image 
                        src={props.info.page.shop.icon} 
                        alt='' 
                        w='24px'
                        h='24px'
                        m={{sm: '15px 0 0 0', md: '0 0 0 10px'}}
                    />
                </Box>
            </Container>
        </Box>
    )
}
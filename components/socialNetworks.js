import { Box, Image, Container, Text, Input} from '@chakra-ui/react';
export default function SocialNetwork(props) {

    return (

        <Box>
            <Container>
                <Box
                    bgImage={props.info.page.socialNetwork.left.background}
                    bgPosition={{sm: 'center'}}
                    maxW='100%'
                    bgColor='pink'
                    h={{sm: '680px'}}
                    p={{sm: '25px 16px'}}
                    m={{sm: '0 0 40px 0'}}
                >
                    <Image 
                        src={props.info.page.socialNetwork.left.src} 
                        alt=''
                        w={{sm: '231px'}}
                        m={{sm: '0 auto'}}
                         
                    />
                    <Box>
                        <Text
                            fontSize={{sm: 'xl'}}
                            textAlign='center'
                            lineHeight={{sm: '25px'}}
                            letterSpacing={{sm: '1.5px'}}
                            m={{sm: '20px 0 22px'}}
                        >
                            {props.info.page.socialNetwork.left.title}
                        </Text>
                        <Text
                            fontSize={{sm: 'xs'}}
                            textAlign='center'
                            fontWeight='700'
                        >
                            {props.info.page.socialNetwork.left.subtitle}
                        </Text>
                        <Text
                            fontSize={{sm: 'xs'}}
                            textAlign='center'
                            m={{sm: '9px 0 0'}}
                        >
                            {props.info.page.socialNetwork.left.text}
                        </Text>
                        <Input 
                            placeholder={props.info.page.socialNetwork.left.placeholder}
                            _placeholder={{color: 'black', borderColor: 'black', fontSize: 'xs'}}
                            borderColor='black'
                            borderRadius='0'
                            m={{sm: '25px 0 0'}}
                            h='49px'
                        />
                        <Box
                            bgColor='white'
                            textAlign='center'
                            p={{sm: '16px 20px'}}
                            m={{sm: '15px 0 0'}}
                            fontSize={{sm: 'md'}}
                            fontWeight='500'
                        >{props.info.page.socialNetwork.left.button}</Box>
                    </Box>
                </Box>
                <Box>
                    <Text>{props.info.page.socialNetwork.right.title}</Text>
                    <Text
                        fontWeight='700'
                        fontSize={{sm: 'xs'}}
                        m={{sm: '0 0 50px'}}
                    >
                        {props.info.page.socialNetwork.right.title2}</Text>
                    <Box>
                        {
                            props.info.page.socialNetwork.right.socialNetwork.map((item, index) => (
                                <Box 
                                    key={index}
                                    display='flex'
                                    justifyContent='space-between'
                                    alignItems='end'
                                    borderBottom='3px solid  black'
                                    m={{sm: '0 0 30px 0'}}
                                    p={{sm: '0 0 5px 0'}}
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
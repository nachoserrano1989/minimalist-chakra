import { Box, Image, Container, Text} from '@chakra-ui/react';
export default function Footer(props) {

    return (

        <Box
            w={{md: '100%'}}
            bgColor='#FBF8F3'
        >
            <Container
                m={{sm: '0', '2xl': '0 auto'}}
                maxW={{md: '1200px'}}
            >
                <Box
                    borderBottom={{sm: '2px solid black'}}
                    p={{sm: '0 0 28px 0'}}
                    m={{sm: '0 0 35px 0'}}
                    maxW={{md: '100%'}}
                    display={{xl: 'flex'}}
                    alignItems={{xl: 'center'}}
                >
                    <Box
                        display={{sm: 'flex'}}
                        justifyContent={{sm: 'center'}}
                        p={{sm: '30px 0 0'}}
                    >
                        <Text
                            fontSize={{sm: 'md', xl: 'lg}'}}
                            lineHeight={{sm: '18px'}}
                            m={{sm: '0 10px 0 0'}}
                        >
                            {props.info.page.footer.top.left.text}
                        </Text>
                        <Box
                            display={{sm: 'flex'}}
                            w={{sm: '150px'}}
                            justifyContent={{sm: 'space-between'}}
                        >
                            {
                                props.info.page.footer.top.left.icons.map((item, index) => (
                                    <Box key={index}>
                                        <Image 
                                            src={item.src} 
                                            alt={item.alt} 
                                            w={{sm: '18px'}}
                                            h={{sm: '18px'}}
                                            cursor='pointer'
                                        />
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    <Image 
                        src={props.info.page.footer.top.center.src} 
                        alt={props.info.page.footer.top.center.alt}
                        w={{sm: '80px'}}
                        m={{sm: '33px auto'}}
                        cursor='pointer'
                    />
                    <Box>
                        <Text
                            fontSize={{sm: 'md'}}
                            fontWeight={{sm: '700'}}
                            textAlign={{sm: 'center'}}
                        >
                            {props.info.page.footer.top.right.text1}
                        </Text>
                        <Text
                            fontSize={{sm: 'md'}}
                            fontWeight={{sm: '700'}}
                            textAlign={{sm: 'center'}}
                        >
                            {props.info.page.footer.top.right.text2}
                        </Text>
                    </Box>
                </Box>
                <Box>
                    <Box
                        display={{xl: 'flex'}}
                        justifyContent={{xl: 'center'}}
                    >
                        {
                            props.info.page.footer.bottom.menu.map((item, index) => (
                                <Box key={index}>
                                    <Text
                                        fontSize={{sm: 'md', md: 'lg', xl: 'xl'}}
                                        m={{sm: '17px 0 0', xl: '17px 20px 0'}}
                                        textAlign={{sm: 'center'}}
                                    >
                                        {item.text}
                                    </Text>
                                </Box>
                            ))
                        }
                    </Box>
                    <Box
                        p={{sm: '17px 0 33px'}}
                        display={{lg: 'flex'}}
                        justifyContent={{lg: 'center'}}
                    >
                        <Text
                            fontSize={{sm: 'xs', md: 'sm'}}
                            textAlign={{sm: 'center'}}
                            m={{sm: '12px 0 0', lg: '12px 20px'}}
                        >
                            {props.info.page.footer.bottom.subMenu.email}
                        </Text>
                        <Box>
                            <Text
                                fontSize={{sm: 'xs', md: 'sm'}}
                                textAlign={{sm: 'center'}}
                                m={{sm: '12px 0 0', lg: '12px 20px'}}
                                cursor='pointer'
                            >
                                {props.info.page.footer.bottom.subMenu.privacy}
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{sm: 'xs', md: 'sm'}}
                                textAlign={{sm: 'center'}}
                                m={{sm: '12px 0 0', lg: '12px 20px'}}
                                cursor='pointer'
                            >
                                {props.info.page.footer.bottom.subMenu.terms}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
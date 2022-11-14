import { Box, Image, Container, List, ListItem } from '@chakra-ui/react';

export default function Menu(props) {

    return (
        <Box 
            w='100%'
        >
            <Container
                /* p={{sm: '30px 16px 0', md: '40px 16px 0'}} */
                maxW='1200px'
                h={{sm: '103px', md: '130px', xl: '160px'}}
                p={{sm: '0 16px'}}
            >
                <Box
                    display={{sm: 'flex'}}
                    justifyContent={{sm: 'space-between'}}
                    borderBottom={{sm: '2px solid black'}}
                    alignItems='center'
                    h='100%'
                >
                    <Box
                        w={{sm: '30px', md: '50px'}}
                        h={{sm: '30px', md: '40px'}}
                        /* mt={{md: '5px'}} */
                        mr={{md: '5px'}}
                        display={{xl: 'none'}}
                    >
                        <Image 
                            src={props.info.page.menu.icon1.src} 
                            alt={props.info.page.menu.icon1.alt}
                            w={{sm: '100%'}}
                            h='100%'
                        />
                    </Box>

                    <Box
                        display={{sm: 'none', xl: 'block'}}
                    >
                        <List
                            display='flex'
                        >
                            {
                                props.info.page.menu.left[0].map((item, index) => (
                                    <ListItem 
                                        key={index}
                                        p={{xl: '13px 14px'}}
                                        fontSize={{xl: 'sm'}}
                                        cursor='pointer'
                                    >
                                        {item.text}
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>

                    <Box
                        w={{sm: '200px', md: '305px'}}
                        h={{sm: '58px', md: '88px', xl: '113.5px'}}
                    >
                        <Image 
                            src={props.info.page.menu.logo.src}
                            alt={props.info.page.menu.logo.alt}
                            w={{sm: '76%', xl:'100%'}}
                            h={{sm: '100%'}}
                            m={{sm: '0 auto'}}
                            cursor='pointer'
                        />
                    </Box>
                    <Box
                        w={{sm: '30px'}}
                        h={{sm: '30px'}}
                        mt={{md: '9px'}}
                        display={{xl: 'none'}}
                    >
                        <Image 
                            src={props.info.page.menu.icon2.src} 
                            alt={props.info.page.menu.icon2.alt}
                            transform=' scaleX(-1)'
                            w='27px'
                        />
                    </Box>

                    <Box
                        display={{sm: 'none', xl: 'block'}}
                    >
                        <List
                            display='flex'
                        >
                            {
                                props.info.page.menu.right[0].map((item, index) => (
                                    <ListItem 
                                        key={index}
                                        p={{xl: '13px 14px'}}
                                        fontSize={{xl: 'sm'}}
                                        cursor='pointer'
                                    >
                                        {item.text}
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
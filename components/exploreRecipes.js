import { Box, Image, Container, Text} from '@chakra-ui/react';
export default function ExploreRecipes(props) {

    return (

        <Box
            maxW='1200px'
            p={{sm: '50px 0 0 0'}}
        >
            <Container
                maxW='100%'
            >
                <Image 
                    src={props.info.page.exploreRecipes.logo} 
                    alt=''
                    w={{sm: '47px'}}
                    h={{sm: '47px'}} 
                    m={{sm: '0 auto 60px'}}
                />
                <Text
                    fontWeight='700'
                    fontSize={{sm: '3xl'}}
                    textAlign={{sm: 'center'}}
                    m={{sm: '0 0 40px 0'}}
                >
                    {props.info.page.exploreRecipes.title}
                </Text>
                <Box
                    display={{md: 'flex'}}
                    flexWrap={{md: 'wrap', xl: 'nowrap'}}
                    gap={{md: '10px'}}
                    m={{sm: '0 0 10px 0'}}
                >
                    {
                        props.info.page.exploreRecipes.menu.map((item, index) => (
                            <Box 
                                key={index}
                                w={{sm: '100%', md: 'calc(50% - 5px)'}}
                                borderColor={item.color}
                                border={{sm: '2px'}}
                                m={{sm: '0 0 8px 0'}}
                                p={{sm: '5px'}}
                                fontWeight='500'
                            >
                                <Text
                                    color={item.color}
                                    textAlign={{sm: 'center'}}
                                    fontSize={{sm: 'xs'}}
                                >{item.button}</Text>
                            </Box>
                        ))
                    }
                </Box>
                <Box
                    display='flex'
                    flexWrap={{sm: 'wrap'}}
                    gap={{sm: '10px'}}
                    
                >
                    {
                        props.info.page.exploreRecipes.cards.map((item, index) => (
                            <Box 
                                key={index}
                                w={{sm: 'calc(50% - 5px)', md: 'calc(25% - 10px)'}}
                                m={{sm: '0 0 40px 0'}}
                            >
                                <Image 
                                    src={item.src} 
                                    alt={item.title} 
                                    w={{sm:'100%'}}
                                    m={{sm: '0 0 5px 0'}}
                                />
                                <Text
                                    fontWeight='500'
                                    textAlign='center'
                                    fontSize={{sm: 'lg'}}
                                    lineHeight={{sm: '25px'}}
                                >
                                    {item.title}</Text>
                            </Box>
                        ))
                    }
                </Box>
                <Box
                    display={{sm: 'flex'}}
                    m={{sm: '0 auto'}}
                    justifyContent={{sm: 'center'}}
                    cursor='pointer'
                >
                    <Text
                        color='#D56638'
                        fontSize={{sm: 'md'}}
                        fontWeight='500'
                    >
                        GO TO ALL RECIPES
                    </Text>
                    <Image 
                        src='assets/iconos/arrow-right.svg' 
                        alt='' 
                        w={{sm: '24px'}}
                        m={{sm: '0 0 0 10px'}}
                    />
                </Box>
            </Container>
        </Box>
    )
}
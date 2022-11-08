import { Box, Image, Container, Text, Img} from '@chakra-ui/react';
export default function RecipeRound(props) {

    return (

        <Box
            borderTop='1px solid black'
            m={{sm: '0 15px', xl: '0 auto'}}
            p={{sm: '30px 0 0'}}
            maxW='1200px'
        >
            <Container
                p={{sm: '0'}}
                maxW={{sm: '100%'}}
            >
                <Box
                    display={{md: 'flex'}}
                    justifyContent={{md: 'space-between'}}
                >
                    <Text
                        fontSize={{sm: '2xl'}}
                        fontWeight='500'
                        p={{sm: '0 0 0 7px'}}
                    >
                        {props.info.page.recipeRound.title}
                    </Text>
                    <Box
                        display={{sm: 'none', md: 'flex'}}
                    >
                        <Text
                            fontSize={{md: 'sm'}}
                            fontWeight='500'
                        >
                            SHOW ME EVERYTHING
                        </Text>
                        <Image 
                            src={props.info.page.recipeRound.icon} 
                            alt='' 
                            w='24px'
                            h='24px'
                            ml='16px'
                        />
                    </Box>
                </Box>
                <Box
                    display={{md: 'flex'}}
                    flexWrap={{md: 'wrap'}}
                    gap={{md: '50px', lg: '15px'}}
                    justifyContent={{md: 'center'}}
                >
                    {
                        props.info.page.recipeRound.cards.map((item, index) => (

                            <Box 
                                key={index}
                                m={{sm: '20px 0 40px', md: '20px 0'}}
                                w={{md: '216px', lg: '227.5px', xl: '268px'}}
                            >
                                <Image 
                                    src={item.src} 
                                    alt={item.title} 
                                    w={{sm: '328px', md: '216px', lg: '100%', xl: '100%'}}
                                    h={{sm: '492px', md: '324px', lg: '341px', xl: '402px'}}
                                    m={{sm: '0 auto'}}
                                />
                                <Box
                                    display={{sm: 'flex'}}
                                    justifyContent={{sm: 'center'}}
                                    m={{sm: '10px 0', md: 'auto 0 auto auto'}}                           
                                >
                                    {
                                        item.recipesKey.map((item, index) => (
                                            <Box 
                                                key={index}
                                                display='flex'
                                                m={{md: '10px 0'}}
                                            >
                                                <Box
                                                    bgColor={item.bgColor}
                                                    borderRadius='20px'
                                                    w='32px'
                                                    h='32px'
                                                    cursor='pointer'
                                                    m={{sm: '0 6px 0 0', xl: '0 10px 0 0'}}
                                                >
                                                    <Text
                                                        textAlign='center'
                                                        pt='3.5px'
                                                        color={item.color}
                                                        fontWeight='700'
                                                        alignItems='center'
                                                    >
                                                        {item.icon}
                                                    </Text>
                                                </Box>
                                                
                                            </Box>
                                        ))
                                    }
                                </Box>
                                <Text
                                    textAlign='center'
                                    fontSize={{sm: 'md', lg: 'xl'}}
                                    fontWeight='500'
                                >
                                    {item.title}
                                </Text>
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    )
}
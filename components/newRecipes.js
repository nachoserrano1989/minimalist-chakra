import { Box, Image, Container, List, ListItem, Text } from '@chakra-ui/react';
import { Provider, Carousel, LeftButton, RightButton } from "chakra-ui-carousel";

export default function NewRecipes(props) {

    return (

        <Box 
            w='100%'
        >
            <Container
                maxW='1200px'
                m='0 auto'
            >
                <Box
                    w='100%'
                    display='flex'
                    m={{sm: '25px 0 0 0'}}
                >
                    <Image 
                        src='assets/images/brandmark.png'
                        alt='logo'
                        w={{sm: '43x'}}
                        h={{sm: '43px'}}
                        m={{sm: '0 20px 0 0 '}}
                    />
                    <Box
                        
                    >
                        <Text
                            fontSize={{sm: 'sm'}}
                            fontWeight='700'
                        >
                            Simple Recipes That
                        </Text>
                        <Text
                            fontSize={{sm: 'sm'}}
                            fontWeight='700'
                        >
                            Make You Feel Good
                        </Text>
                    </Box>
                </Box>
                <Text
                    fontSize={{sm: '3xl'}}
                    textAlign={{sm: 'center'}}
                    fontWeight='700'
                    m={{sm: '10px 0 0 0'}}
                >
                    NEW RECIPES
                </Text>

                <Box>
                    <Provider>
                        <Carousel gap={2}>
                            {/* {
                                props.info.page.newRecipe[].map((item, index) => (
                                    <Image
                                        key={index}
                                        src={item.src}
                                        alt={item.alt}
                                    />
                                ))
                            } */}
                            <Image src={props.info.page.newRecipe[0].src} alt='hola' />
                            <Image src={props.info.page.newRecipe[1].src} alt='adios' />
                            <Image src={props.info.page.newRecipe[2].src} alt='astaluego' />
                        </Carousel>
                        <LeftButton />
                        <RightButton />
                    </Provider>
                    
                </Box>

                <Box>
                    
                </Box>
            </Container>
        </Box>
    )
}
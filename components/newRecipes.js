import { Box, Image, Container, List, ListItem, Text, Button } from '@chakra-ui/react';
import Card from './card';

export default function NewRecipes(props) {

    

    return (

        <Box 
            w='100%'
            mb={{sm: '30px'}}
        >
            <Container
                maxW='1200px'
                m='0 auto'
                overflow='hidden'
            >
                <Box
                    w='100%'
                    display={{xl: 'flex'}}
                    justifyContent={{xl: 'space-between'}}
                    m={{sm: '25px 0 0 0', md: '24px 0 0 0'}}
                    p={{'2xl': '0 15px 0 0'}}
                >
                    <Box
                        w={{sm: '100%', xl: 'auto'}}
                        display='flex'
                        /* m={{sm: '25px 0 0 0', md: '24px 0 0 0'}} */
                        justifyContent={{md: 'center', xl: 'normal'}}
                    >
                        <Image 
                            src='assets/images/brandmark.png'
                            alt='logo'
                            w={{sm: '43x', md: '44px'}}
                            h={{sm: '43px', md: '44px'}}
                            m={{sm: '0 20px 0 0 ', xl: '10px 20px 0 0'}}
                        />
                        <Box
                            m={{sm: '0 auto', md: '9.5px 0 0 0'}}
                            display={{md: 'flex', xl: 'block'}}   
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
                        fontSize={{sm: '3xl', md: '6xl', xl: '8xl'}}
                        textAlign={{sm: 'center'}}
                        fontWeight={{sm:'700'}}
                        m={{sm: '10px 0 20px 0', md: '12px 0 28px 0'}}
                    >
                        NEW RECIPES
                    </Text>
                    <Box
                        display={{sm: 'none', xl: 'block'}}
                    >
                        <Box
                            display='flex'
                            justifyContent={{sm: 'center'}}
                            fontWeight='500'
                            m={{md: '35px auto 0'}}
                            w='237px'
                            cursor='pointer'
                        >
                            <Text
                                fontSize={{sm: 'md'}}
                                /* color='#D56638' */
                            >
                                SHOW ME EVERYTHING
                            </Text>
                            <Image 
                                src='assets/iconos/arrow-right.svg' 
                                alt='' 
                                w='24px'
                                h='24px'
                                ml='16px'
                            />
                        </Box>
                    </Box>
                </Box>
                

                
                <Box
                    w='100%'
                    /* minH='593px' */
                >
                    <Card data={props.info.page.newRecipe.cards} />
                </Box> 

                

                <Box
                    /* display={{xl: 'none'}} */
                >
                    <Box
                        display='flex'
                        justifyContent={{sm: 'center'}}
                        fontWeight='500'
                        m={{sm: '0 auto',md: '35px auto 0'}}
                        w='237px'
                        cursor='pointer'
                    >
                        <Text
                            fontSize={{sm: 'sm'}}
                            color='#D56638'
                        >
                            SHOW ME EVERYTHING
                        </Text>
                        <Image 
                            src='assets/iconos/arrow-right.svg' 
                            alt='' 
                            w='24px'
                            h='24px'
                            ml='16px'
                        />
                    </Box>
                </Box>
                
            </Container>
        </Box>
    )
}
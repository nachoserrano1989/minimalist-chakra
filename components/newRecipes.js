import { Box, Image, Container, List, ListItem, Text, Button } from '@chakra-ui/react';
import RecipeKeyGF from './recipeKeyGF';
import RecipeKeyVG from './recipeKeyVG';
import RecipeKeyV from './recipeKeyV';
import RecipeKeyDF from './recipeKeyDF';
import RecipeKeyNS from './recipeKeyNS';

export default function NewRecipes(props) {

    

    return (

        <Box 
            w='100%'
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
                >
                    <Box
                        w='100%'
                        display='flex'
                        /* m={{sm: '25px 0 0 0', md: '24px 0 0 0'}} */
                        justifyContent={{md: 'center'}}
                    >
                        <Image 
                            src='assets/images/brandmark.png'
                            alt='logo'
                            w={{sm: '43x', md: '44px'}}
                            h={{sm: '43px', md: '44px'}}
                            m={{sm: '0 20px 0 0 '}}
                        />
                        <Box
                            m={{sm: '0 auto', md: '9.5px 0 0 0'}}
                            display={{md: 'flex'}}   
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
                        fontSize={{sm: '3xl', md: '6xl'}}
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
                </Box>
                

                
                <Box
                    display='flex'
                    w='100%'
                    /* bgColor='blue' */
                    minH='593px'
                >
                    <Box
                        w={{sm: '100%',md: '50%'/* , lg:'calc(100% / 3 - 30px)' */}}
                        m={{sm: '0 20px', md: '0', lg: '0 15px'}}
                    >
                        <Image
                            src={props.info.page.newRecipe[0].src} 
                            alt='hola' 
                        />
                        <Box
                            display='flex'
                            justifyContent='center'
                            m='12px 0'
                        >
                            <RecipeKeyGF />
                            <RecipeKeyV />
                            <RecipeKeyDF />
                            <RecipeKeyNS />
                        </Box>
                        <Text
                            justifyContent='center'
                            textAlign='center'
                            fontSize='lg'
                            fontWeight={{sm: '500',lg: '700'}}
                            cursor='pointer'
                            _hover={{color: 'orange'}}
                            m={{sm: '0 2.5px'}}
                            lineHeight='22.8px'
                            /* bgColor='red' */
                        >
                            {props.info.page.newRecipe[0].title} 
                        </Text>
                    </Box>
                     <Box
                        w={{sm: '100%',md: '50%'/* , lg:'calc(100% / 3 - 30px)' */}}
                        m={{sm: '0 20px', md: '0', lg: '0 15px'}}
                    >
                        <Image 
                            src={props.info.page.newRecipe[1].src} 
                            alt='adios'
                        />
                        <Box
                            display='flex'
                            justifyContent='center'
                            m='12px 0'
                        >
                            <RecipeKeyGF />
                            <RecipeKeyVG />
                            <RecipeKeyV />
                            <RecipeKeyDF />
                            <RecipeKeyNS />
                        </Box>
                        <Text
                            justifyContent='center'
                            textAlign='center'
                            fontSize={{sm: 'lg'}}
                            fontWeight={{sm: '500',lg: '700'}}
                            cursor='pointer'
                            _hover={{color: 'orange'}}
                            m={{sm: '0 2.5px'}}
                            lineHeight='22.8px'
                        >
                            {props.info.page.newRecipe[1].title} 
                        </Text>
                    </Box>
                            
                    {/*<Box
                        w={{sm: '100%', lg:'calc(100% / 3 - 30px)'}}
                        m='0 15px'
                    >
                        <Image 
                            src={props.info.page.newRecipe[2].src} 
                            alt='astaluego'
                        />
                        <Box
                            display='flex'
                            justifyContent='center'
                            m='12px 0'
                        >
                            <RecipeKeyGF />
                            <RecipeKeyVG />
                            <RecipeKeyV />
                            <RecipeKeyDF />
                            <RecipeKeyNS />
                        </Box>
                        <Text
                            justifyContent='center'
                            textAlign='center'
                            fontSize='lg'
                            fontWeight='700'
                            _hover='orange'
                        >
                            {props.info.page.newRecipe[2].title} 
                        </Text>
                    </Box> */}      
                            
                        
                </Box>

                <Box
                    display={{xl: 'none'}}
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
import { Box, Image, Container, Text, Grid, GridItem } from '@chakra-ui/react';
export default function FavoritesRecipes(props) {

    return (

        <Box
            maxW={{md: '100%', xl: '70%', '2xl': '1200px'}}
            m={{'2xl': '0 auto'}}
        >
            <Container
                maxW={{'2xl': '70%'}}
                m={{'2xl': '0'}}
            >
                <Box
                    m={{sm: '30px 0 0 0'}}
                    display={{md: 'flex'}}
                    justifyContent={{md: 'space-between'}}
                >
                    <Text
                        fontSize={{sm: '2xl', md: '5xl'}}
                        fontWeight='500'
                        textAlign={{sm: 'center'}}
                    >
                        {props.info.page.favoriteRecipes.title}
                    </Text>
                    <Box
                        display='flex'
                        justifyContent={{sm: 'center'}}
                        m={{md: 'auto 0'}}
                    >
                        <Image 
                            src="assets/iconos/star.svg" 
                            alt='star' 
                            w={{sm: '26px'}}
                            h={{sm:'26px'}}
                        />
                        <Image 
                            src="assets/iconos/star.svg" 
                            alt='star' 
                            w={{sm: '26px'}}
                            h={{sm:'26px'}}
                        />
                        <Image 
                            src="assets/iconos/star.svg" 
                            alt='star' 
                            w={{sm: '26px'}}
                            h={{sm:'26px'}}
                        />
                        <Image 
                            src="assets/iconos/star.svg" 
                            alt='star' 
                            w={{sm: '26px'}}
                            h={{sm:'26px'}}
                        />
                        <Image 
                            src="assets/iconos/star.svg" 
                            alt='star' 
                            w={{sm: '26px'}}
                            h={{sm:'26px'}}
                        />
                    </Box>
                </Box>
                <Box>
                    {
                        props.info.page.favoriteRecipes.list.map((item, index) => (
                            <Box key={index}
                                p={{sm: '0 20px', md: '0'}}
                                display={{md: 'flex'}}
                                _hover={{bgColor: 'green'}}
                                /* justifyContent={{xl: 'space-between'}} */
                            >
                                <Box
                                    w={{sm: '278px', md: '130px'}} 
                                    h={{sm: '278px', md: '130px'}}
                                    m={{sm: '40px auto 10px', md: '10px 0 0'}}
                                >
                                    <Image 
                                        src={item.src} 
                                        alt={item.text}
                                        w='100%'
                                        h='100%'
                                    />
                                </Box>
                                <Box
                                    m={{md: 'auto 30px'}}
                                >
                                    <Text
                                        fontSize={{sm: '6xl'}}
                                        fontWeight='700'
                                        textAlign={{sm: 'center'}}
                                        
                                    >
                                        {item.number}
                                    </Text>
                                </Box>
                                <Box
                                    m={{md: 'auto 0'}}
                                    maxW={{md: '255px', md: '260px', lg: '470px', xl: '280px'}}
                                >
                                    <Text
                                        fontSize={{sm: 'xl', md: '2xl'}}
                                        textAlign={{sm: 'center', md: 'start'}}
                                    >
                                        {item.text}
                                    </Text>
                                </Box>
                                
                                <Box
                                    display={{sm: 'flex'}}
                                    justifyContent={{sm: 'center', md: 'end'}}
                                    m={{sm: '10px 0', md: 'auto 0 auto auto'}}                           
                                >
                                    {
                                        item.recipesKey.map((item, index) => (
                                            <Box 
                                                key={index}
                                                display='flex'
                                                m={{sm: '0 0 20px', md: '0'}}
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
                                                <Text
                                                    m={{sm: '3px 0 0'}}
                                                    display={{sm: 'none'}}
                                                >
                                                    {item.text}
                                                </Text>
                                            </Box>
                                        ))
                                    }
                                </Box>
                            </Box>
                        ))
                    }
                </Box>

                {/* <Grid
                    templateColumns={{sm: 'repeat(1, 1fr)', md: 'repeat(4, 130px 80px auto 232px)'}}
                >
                    {
                        props.info.page.favoriteRecipes.list.map((item, index) => (
                            <Box
                                key={index}
                                m={{sm: '60px 0'}}
                                display={{sm: 'flex'}}
                            >
                                <GridItem>
                                    <Image 
                                        src={item.src} 
                                        alt={item.title}
                                        w={{sm: '280px', md: '130px'}}
                                        h={{sm: '280px', md: '130px'}} 
                                        m={{sm: '0 auto'}}
                                    />
                                </GridItem>
                                <GridItem>
                                    <Text
                                        fontSize={{sm: '6xl'}}
                                        fontWeight='700'
                                        textAlign={{sm: 'center'}}
                                        m={{md: 'auto 30px'}}
                                    >
                                        {item.number}
                                    </Text>
                                </GridItem>
                                <GridItem>
                                    <Text
                                        fontSize={{sm: 'xl', md: '2xl'}}
                                        textAlign={{sm: 'center', md: 'start'}}
                                        m={{md: 'auto 64px auto 0'}}
                                        maxW={{md: '255px', md: '470px'}}
                                    >
                                        {item.text}
                                    </Text>
                                </GridItem>
                                <GridItem
                                    display={{sm: 'flex'}}
                                    justifyContent={{sm: 'center'}}
                                >
                                    {
                                        item.recipesKey.map((item, index) => (
                                            <Box 
                                                key={index}
                                                display='flex'
                                                m={{sm: '10px 0'}}
                                            >
                                                <Box
                                                    bgColor={item.bgColor}
                                                    borderRadius='20px'
                                                    w='32px'
                                                    h='32px'
                                                    cursor='pointer'
                                                    m={{sm: '0 6px 0 0'}}
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
                                                <Text
                                                    m={{sm: '3px 0 0'}}
                                                    display={{sm: 'none'}}
                                                >
                                                    {item.text}
                                                </Text>
                                            </Box>
                                        ))
                                    }
                                </GridItem>
                            </Box>   
                        ))
                        
                        
                    }
                    
                </Grid> */}
            </Container>
        </Box>
    )
}
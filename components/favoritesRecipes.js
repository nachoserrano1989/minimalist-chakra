import { Box, Image, Container, Text, Grid, GridItem } from '@chakra-ui/react';
export default function FavoritesRecipes(props) {

    return (


        <Box
            w={{md: '100%'}}
        >
            <Container
                maxW='1200px'
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
                {/* <Box>
                    {
                        props.info.page.favoriteRecipes.list.map((item, index) => (
                            <Box key={index}
                                p={{sm: '0 20px', md: '0'}}
                                display={{md: 'flex'}}
                                _hover={{bgColor: 'green'}}
                                justifyContent={{xl: 'space-between'}}
                            >
                                <Image 
                                    src={item.src} 
                                    alt={item.text}
                                    w={{sm: '278px', md: '130px'}} 
                                    h={{sm: '278px', md: '130px'}}
                                    m={{sm: '40px auto 10px', md: '10px 0 0'}}
                                />
                                <Text
                                    fontSize={{sm: '6xl'}}
                                    fontWeight='700'
                                    textAlign={{sm: 'center'}}
                                    m={{md: 'auto 30px'}}
                                >
                                    {item.number}
                                </Text>
                                <Text
                                    fontSize={{sm: 'xl', md: '2xl'}}
                                    textAlign={{sm: 'center', md: 'start'}}
                                    m={{md: 'auto 64px auto 0'}}
                                    maxW={{md: '255px', md: '470px'}}
                                >
                                    {item.text}
                                </Text>
                                <Box
                                    display={{sm: 'flex'}}
                                    justifyContent={{sm: 'center'}}
                                    m={{sm: '10px 0', md: 'auto 0'}}
                                >
                                    {
                                        item.recipesKey.map((item, index) => (
                                            <Box 
                                                key={index}
                                                display='flex'
                                                m={{sm: '0 0 20px'}}
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
                                </Box>
                            </Box>
                        ))
                    }
                </Box> */}

                <Grid
                    templateColumns={{sm: 'repeat(1, 1fr)'}}
                >
                    {
                        props.info.page.favoriteRecipes.list.map((item, index) => (
                            <Box
                                key={index}
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
                                >
                                    {
                                        item.recipesKey.map((item, index) => (
                                            <Box 
                                                key={index}
                                                display='flex'
                                                m={{sm: '0 0 20px'}}
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
                    
                </Grid>
            </Container>
        </Box>
    )
}
import { Box, Image, Text } from '@chakra-ui/react';

export default function Card(props) {

    console.log('data', props)

    return (

        <Box
            /* w={{sm: '100%',md: '50%', xl:'calc(100% / 3 - 30px)'}}
            m={{sm: '0 20px', md: '0', lg: '0 15px'}} */
        >
            {
                props.data.info.page.newRecipe.cards.map((item, index) => (
                    
                    <Box key={index}>
                        <Image src={item.src} alt={item.title} />
                        {
                            item.recipesKey.map((item, index) => (
                                <Box
                                    key={index}
                                    display='flex'
                                >
                                    <Box 
                                        bgColor={item.color}
                                        borderRadius='20px'
                                        w='32px'
                                        h='32px'
                                        cursor='pointer'
                                        ml='14px'
                                    >
                                        <Text
                                            textAlign='center'
                                            pt='3.5px'
                                            color='white'
                                            fontWeight='700'
                                        >
                                            {item.text}
                                        </Text>
                                    </Box> 
                                </Box>
                                
                            ))
                        }
                    </Box>
                ))
            }
        </Box>
    )
}
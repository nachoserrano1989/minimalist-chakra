import { Box, Image, Text } from '@chakra-ui/react';

export default function Card(props) {

    console.log('data', props)

    return (

        <Box
            w='100%'
            display='flex'
        >
            {
                props.data.map((item, index) => (
                    
                    <Box 
                        key={index}
                        w={{sm: '100%',md: '50%', xl:'calc(100% / 3 - 30px)'}}
                        m={{sm: '0 20px', md: '0', lg: '0 15px'}}
                    >
                        <Image 
                            src={item.src} 
                            alt={item.title} 
                            cursor='pointer'
                        />
                        <Box
                            display='flex'
                            justifyContent='center'
                            m='12px 0'
                        > 
                        {
                            item.recipesKey.map((item, index) => (
                                
                                    <Box 
                                        key={index}
                                        bgColor={item.bgColor}
                                        borderRadius='20px'
                                        w='32px'
                                        h='32px'
                                        cursor='pointer'
                                        ml='14px'
                                    >
                                        <Text
                                            textAlign='center'
                                            pt='3.5px'
                                            color={item.color}
                                            fontWeight='700'
                                        >
                                            {item.text}
                                        </Text>
                                    </Box> 
                                
                            ))
                        }
                        </Box>
                        <Text
                            textAlign='center'
                            fontWeight='500'
                            fontSize='lg'
                        >
                            {item.title}
                        </Text>
                    </Box>
                ))
            }
        </Box>
    )
}
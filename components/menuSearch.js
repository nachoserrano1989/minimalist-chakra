import { Box, Container, Text, Input, Button } from '@chakra-ui/react';
export default function MenuSearch(props) {

    return (

        <Box
            maxW='804px'
            p={{sm: '0 16px'}}
        >
            <Input 
                placeholder={props.info.page.menuSearch.placeholder}
                w='100%'
                bgImage={props.info.page.menuSearch.src}
                bgRepeat='no-repeat'
                bgSize='20px'
                bgPosition='96% center'
                p={{sm:' 14px 15px 16px'}}
                fontSize={{sm: 'sm'}}
                border='1px solid'
                borderColor='black'
                borderRadius='0'
                h='60px'
                _placeholder={{color: 'black'}}
            />  
            <Box>
                <Text>{props.info.page.menuSearch.title}</Text>

                <Box>
                    {
                        props.info.page.menuSearch.recipesKey.map((item, index) => (
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
                                    {item.icon}
                                </Text>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
import { Box, Container, Text, Input, Button } from '@chakra-ui/react';
export default function MenuSearch(props) {

    return (

        <Box
            maxW={{sm: '804px', lg: '100%', xl: '810px'}}
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
                h='55px'
                _placeholder={{color: 'black', fontSize: 'xs'}}
                m={{md: '40px 0 0'}}
            />  
            <Box
                p={{sm: '42px 32px 46px', md: '72px 32px 66px', xl: '72px 50px 66px'}}
                borderBottom={{sm: '1px solid black'}}
            >
                <Text
                    fontSize={{sm: 'md', md: 'xl'}}
                    fontWeight='500'
                    textAlign='center'
                    m={{sm: '0 0 24px'}}
                >
                    {props.info.page.menuSearch.title}
                </Text>

                <Box
                    display={{md: 'flex'}}
                    flexWrap={{md: 'wrap'}}
                    justifyContent={{md: 'center'}}
                >
                    {
                        props.info.page.menuSearch.recipesKey.map((item, index) => (
                            <Box 
                                key={index}
                                display='flex'
                                m={{sm: '0 0 20px', md: '0 0 20px 14px'}}
                            >
                                <Box
                                    bgColor={item.bgColor}
                                    borderRadius='20px'
                                    w='32px'
                                    h='32px'
                                    cursor='pointer'
                                    /* ml='14px' */
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
                                >
                                    {item.text}
                                </Text>
                            </Box>
                            
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
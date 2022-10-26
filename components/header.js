import { Box, Image, Container, Input } from '@chakra-ui/react';

export default function Header(props) {

    console.log('pros: ', props);

    return (
        <Box
            w='100%'
            h={{sm: '44px', md: '46px', xl: '49.5px'}}
            bgColor='#FFDED6'
        >
            <Container
                maxW={{sm: '1180px'}}
                m={{sm: '0 auto'}}
                display='flex'
                justifyContent={{sm: 'center', xl: 'space-between'}}
                pl={{lg: '40px', xl: '20px', '2xl': '10px'}}
            >
                <Box
                    w='30%'
                    h='100%'
                    pt='1.5px'
                    display={{sm: 'none', lg: 'block'}}
                >
                    <Input
                        bgImage={props.info.page.header?.top.left.src}
                        bgRepeat='no-repeat'
                        bgPosition='2% center'
                        bgSize='16px'
                        h='46px'
                        pl='30px'
                        placeholder={props.info.page.header.top.left.text}
                        _placeholder={{color: 'black'}}
                        fontSize={{xl: 'xs'}}
                        /* size='xs' */
                        focusBorderColor='#FFDED6'
                        _focus={{bgColor: 'white'}}
                        /* transform='scaleX(-1)' */
                    />
                </Box>

                <Box
                    display='flex'
                    h='24px'
                    m={{sm: '13px 0 0 0', md: '15px 0 0 0'}}
                    justifyContent='space-between'
                    w={{sm: '184px', lg: '186px'}}
                    float='right'
                >
                    {
                        props.info.page.header.top.right[0].map((item, index) => (
                            <Image 
                                src={item.src} 
                                alt={item.alt} 
                                key={index} 
                                w={{sm: '24px', lg: '25px'}}
                                h={{sm: '21px', lg: '22px'}}
                                _hover={{opacity: '0.7'}}
                                cursor='pointer'
                            />    
                        ))
                    }
                </Box>
                
            </Container>
        </Box>
    )
}
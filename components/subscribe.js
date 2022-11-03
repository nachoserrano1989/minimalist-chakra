import { Box, Container, Text, Input, Button } from '@chakra-ui/react';
export default function Subscribe(props) {

    return (

        <Box
            w='100%'
            m={{sm: '0 0 60px'}}
        >
            <Container
                maxW='1200px'
                m='0 auto'
                bgColor='#003811'
                textAlign={{sm: 'center', xl: 'start'}}
                p={{sm: '30px'}}
                display={{xl: 'flex'}}
                /* justifyContent={{xl: 'space-around'}} */
                /* gap={{xl: '50px'}} */
            >
                <Text
                    color='#FFDED6'
                    fontSize={{sm: 'xl', md: '3xl'}}
                    m={{sm: '0 0 16px', xl: '0 50px 16px 0'}}
                    fontWeight={{md: '500'}}
                    maxW={{xl: '180px'}}
                >
                    {props.info.page.subscribe.title}
                </Text>
                <Text
                    color='white'
                    fontSize={{sm: 'md', md: '19px'}}
                    m={{sm: '0 0 16px', xl: '0 50px 16px'}}
                    maxW={{xl: '330px'}}
                >
                    {props.info.page.subscribe.text}
                </Text>
                <Box
                    display='flex'
                    m={{sm: '10px 0'}}
                >
                    <Input 
                        placeholder={props.info.page.subscribe.placeholder} 
                        bgColor='white'
                        colro='black'
                        p={{sm: '20px'}}
                        borderRadius='0'
                        h={{sm: '60px'}}
                        w={{xl: '400px'}}
                    />
                    <Button
                        borderRadius='0'
                        p={{sm: '20px', md: '20px 27.5px'}}
                        bgColor='#FFDED6'
                        h={{sm: '60px'}}
                    >
                        {props.info.page.subscribe.button}
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}
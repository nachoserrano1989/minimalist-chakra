import { Box, Image, Text } from '@chakra-ui/react';
import Dietary from '../components/about/dietary';
import Welcome from '../components/about/welcome';
import Header from '../components/header';
import Menu from '../components/menu';
import Subscribe from '../components/subscribe';
export default function About(props) {

    return (

        <Box
          h='10000px'
        >
            <Header info={props} />
            <Menu info={props} />
            <Welcome info={props} />
            <Subscribe info={props} />
            <Dietary info={props} />
        </Box>
    )
}

export async function getStaticProps() {
    try {
      const resPage = await fetch('https://nacho-web.s3.amazonaws.com/minimalist-chakra/index.json');
      const page = await resPage.json();
  
      return {
        props: {
          page
        }
      }
    } catch (error) {
      console.log(error);
    }
}
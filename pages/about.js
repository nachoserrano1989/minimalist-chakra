import { Box, Image, Text } from '@chakra-ui/react';
import Deeper from '../components/about/deeper';
import Dietary from '../components/about/dietary';
import Resources from '../components/about/resources';
import Welcome from '../components/about/welcome';
import Header from '../components/header';
import Menu from '../components/menu';
import Subscribe from '../components/subscribe';
/* import '../styles/global.css'; */

export default function About(props) {

    return (

        <Box
          h='10000px'
        >
            <Header info={props} />
            <Menu info={props} />
            <Welcome info={props.page.about.welcome} />
            <Subscribe info={props} />
            <Dietary info={props.page.about.dietary} />
            <Resources info={props.page.about.resources} />
            <Deeper info={props.page.about.deeper} />
            <Subscribe info={props} />
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
import React from "react";
import { FaBeer, FaFacebook, FaInstagram } from "react-icons/fa";
import { useTheme } from "@chakra-ui/react";
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  Link,
  Grid,
} from "@chakra-ui/react";
import BigMenuItem from "@components/BigMenuItem";

function Hero() {
  const { colors, fonts } = useTheme();
  return (
    <Box // Section container
      bg={colors.backgroundDark}
      w='100vw'
      h={["100vh", "100vh", "100vh", "100vh"]}
      position='relative'>
      <Flex // Hero text container
        flexDirection={"column"}
        justifyContent='space-between'
        position='absolute'
        top={["35%", "35%", "20%", "20%"]}
        left={["5%", "5%", "5%", "10%"]}
        w={["fit-content", "fit-content", "fit-content", "fit-content"]}
        zIndex={9}>
        <Box //Logo and link container top stay top
        >
          <Box //NongBu Logo
            zIndex={8}
            w={["300px", "340px", "380px", "420px"]}>
            <Image src='/src/assets/images/nongbu-hero.png'></Image>
          </Box>

          <Box // Link button container
            width='fit-content'
            flexDirection='column'
            position='relative'
            zIndex={8}
            gap='4'
            mt='4'
            textAlign={["left", "left", "right"]}>
            <Link
              variant='heroLink'
              textAlign={["left", "left", "right"]}
              my='10%'
              noOfLines={1}>
              Our menu <ArrowForwardIcon />
            </Link>

            <Link
              variant='heroLink'
              textAlign={["left", "left", "right"]}
              my='10%'
              noOfLines={1}>
              Book a table
              <ArrowForwardIcon />
            </Link>
          </Box>
        </Box>
      </Flex>

      <Grid
        gap='2vh'
        position='absolute'
        bottom={["5%", "5%", "5%", "10%"]}
        right={["50%", "5%", "5%", "10%"]}
        h='25%'
        w='300px'
        p='24px'
        transform={[
          "translateX(50%)",
          "translateX(0%)",
          "translateX(0)",
          "translateX(0)",
        ]}
        zIndex='99'
        bg={colors.backgroundLight}
        color={colors.dark}>
        <Heading variant='footerHeading'>HOURS</Heading>

        <Flex flexDirection='column'>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <span>Tue - Thu</span> <span>4pm - 9pm</span>
          </Flex>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <span>Fri & Sat</span> <span>4pm - 10pm</span>
          </Flex>
          <Flex justifyContent={"space-between"} letterSpacing='2px'>
            <span>Sun & Mon</span> <span>Closed</span>
          </Flex>
        </Flex>
      </Grid>

      <Box // Image background container
        position='absolute'
        top='0'
        right='0'
        w={["100%", "100%", "80%"]}
        h={["30%", "30%", "100%"]}>
        <Image
          src='/src/assets/images/nongbu-1.png'
          fallbackSrc='https://via.placeholder.com/1126x710'></Image>
      </Box>
    </Box>
  );
}

export default Hero;

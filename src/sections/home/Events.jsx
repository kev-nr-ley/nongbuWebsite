import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import ChakraLinkArrow from "@components/ChakraLinkArrow";

function Events(props) {
  const { colors } = useTheme();

  return (
    <Flex //section container,
      flexDirection={["column", "row-reverse", "row-reverse", "row-reverse"]}
      bg={colors.backgroundDark}
      color={colors.light}
      gap={["0", "12", "12", "12"]}
      h={["auto", "80vh", "80vh", "80vh"]}
      pb='10vh'
      w='100vw'
      maxW='100%'
      overflow='hidden'
      // fix
      {...props}>
      <Box //image container
        w={["100vw", "auto", "70vw", "70vw"]}
        h={["30vh", "80vh", "80vh", "80vh"]}
        overflow='hidden'>
        <Image
          h='100%'
          src='/images/nongbu-3.webp'
          objectPosition={["0% 50%", "20% 50%", "0% 0%", "0% 0%"]}
          objectFit='cover'
        />
      </Box>








      <Flex //section content
        flexDirection={"column"}
        justifyContent='center'
        justifySelf='center'
        alignself='center'
        gap='8'
        mt='8'
        px='5vw'
        w={["100%", "30%", "30%", "30%"]}
        minW='300px'
        h={["auto", "100%", "100%", "100%"]}>c
        <Heading variant='sectionHeading' color={olors.light}>
          Use our space and services.
        </Heading>

        <Text variant='bodyText'>
          Are you looking for a private and modern space for your event? Do you
          have guests to feed? We might be able to help with your venue and
          catering needs.
        </Text>

        <ChakraLinkArrow to='/contact' name='Get in touch' />
      </Flex>
    </Flex>
  );
}

export default Events;

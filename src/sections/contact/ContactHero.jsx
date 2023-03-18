import React from "react";
import { useTheme } from "@chakra-ui/react";
import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import Hours from "@components/smallblocks/Hours";
import ContactInfo from "@components/smallblocks/ContactInfo";
import LocationInfo from "@components/smallblocks/LocationInfo";
import SectionFlexContentContainer from "@components/layout/SectionFlexContentContainer";

export default function ContactHero(props) {
  const { colors } = useTheme();

  return (
    <Flex //body
      bg={colors.backgroundDark}
      alignItems='center'
      position='relative'
      flexDirection={["column", "row"]}
      minH='50vh'
      color={colors.light}
      overflow='hidden'
      {...props}>
      <NongbuImageContainer
        objectPosition='-50% 0%'
        position={["static", "absolute", "absolute"]}
        w={["100%", "100%", "70vw", "60vw"]}
        h={["30vh", "100%", "100%", "100vh"]}
        right={["none", "0", "0"]}
        top={["none", "0", "0"]}
        zIndex='4'
        filename='nongbu-contact-1'
      />

      <Flex //Text block
        flexDirection='column'
        justifyContent='center'
        bg={colors.backgroundDark} //for desktop
        zIndex='5'
        px='5vw'
        py='5vw'
        gap='2rem'
        minW={["100vw", "60vw", "30vw", "30vw"]}
        h={["100%", "100vh", "100vh", "100vh"]}>
        <Box>
          {" "}
          <Heading as='h3' px='0' variant='mediumHeading'>
            Contact us
          </Heading>
          <Text variant='bodyText' px='0' maxW='24rem' lineHeight='40px'>
            Book a table, order takeout, inquire about private events and
            catering, ask about our menu... etc.
          </Text>
        </Box>

        <ContactInfo showheading={false} />
        <Hours border='2px solid white' p='1rem' showheading='false' />

        <LocationInfo showheading='true' />
      </Flex>
    </Flex>
  );
}

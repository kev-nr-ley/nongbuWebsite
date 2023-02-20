import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Flex,
  Button,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { theme, useTheme } from "@chakra-ui/react";
export default function Navbar() {
  const { colors, fonts } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
        <Flex
        zIndex={9}
          bg='brand.header'
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"1rem"}
          w='100vw'
          h='128px'
          lineHeight='heading.lineHeight'
          position='fixed'
          top='0'>
          <Flex
            p='1'
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontFamily={fonts.heading.font}
            fontWeight={fonts.heading.fontWeight}
            fontSize={fonts.heading.fontSizeMd}
            color={colors.brand.fontHeader}>
            <Image
              mx='4'
              src='https://via.placeholder.com/52 '
              alt='Nongbu Logo'
            />
            <Link
              mx='2'
              letterSpacing={fonts.heading.letterSpacing}
              fontWeight={fonts.heading.fontWeight}
              _after={{
                content: '" "',
                display: "block",
                width: "0",
                height: "3px",
                backgroundColor: "brand.highlight",
                transition: "width 0.3s",
              }}
              _hover={{
                _after: {
                  width: "100%",
                },
              }}>
              Menu
            </Link>
            <Link
              mx='2'
              letterSpacing={fonts.heading.letterSpacing}
              fontWeight={fonts.heading.fontWeight}
              _after={{
                content: '" "',
                display: "block",
                width: "0",
                height: "3px",
                backgroundColor: "brand.highlight",
                transition: "width 0.3s",
              }}
              _hover={{
                _after: {
                  width: "100%",
                },
              }}>
              Reservations
            </Link>
          </Flex>

          <Flex p='1' gap='4'>
            <Flex
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              color={colors.brand.fontHeader}
              fontSize={fonts.heading.fontSize}
              gap='8'
              >
              <Link>About</Link>
              <Link>Events & Catering</Link>
              <Link>Takeout & Delivery</Link>
              <Link>Contact</Link>
            </Flex>
            <Image
              mx='4'
              src='https://via.placeholder.com/100x50'
              alt='Ear logo'
            />
          </Flex>
        </Flex>
    </div>
  );
}

import React from "react";
import {
  streetEats,
  meatSsam,
  bowls,
  sharing,
  drinks,
  defaultMenu,
} from "@assets/data/Menu";
import { Flex, Text, Grid } from "@chakra-ui/react";
import MenuPage from "@components/Menu/MenuPage";

export default function MenuMain(props) {
  const menuPages = [streetEats, bowls, meatSsam, sharing, drinks];


  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      gap="8"
      px="0rem"
      flexDirection={["column"]}
      py="100px"
      bg="backgroundDark"
      {...props}
    >
      <Text
        color="light"
        variant="bodyText"
        textAlign={["left", "right"]}
        w="clamp(240px, 100%, 100%)"
      >
        *Please note, our food and drink menus involve ingredients and beverages
        that are both seasonal and hard to reliably procure. Menus are therefore
        subject to change without notice.
      </Text>

      <Grid
        gap="5vw"
        w="100%"
        gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", '1fr 1fr']}
      >
        {menuPages.map((menuPage, index) => {
          return (
            <MenuPage
              {...menuPage}
              key={index}
              objectToArray={props.objectToArray}
              name={props.name}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}

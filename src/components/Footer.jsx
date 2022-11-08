import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react'



const avatarSrc = "https://avatars.githubusercontent.com/u/70211234?s=400&u=d3f01f580b421a219d93c1adfcd8de73ad0667ea&v=4";

const Footer = () => {
  return (
    <Box
    bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
            <VStack  w={"full"} alignItems={["center", "flex-start"]}>
                <Text fontWeight={"bold"}>About ME</Text>
                <Text 
                fontSize={"sm"}
                letterSpacing={"widest"}
                textAlign={["center", "left"]}
                >Computer and Information Systems Engineer, NED University of Engineering and Technology Karachi.</Text>
            </VStack>
            <Avatar   boxSize={"28"} mt={["4", "0"]} src={avatarSrc}/>
            <Text overflowX={"wrap"} fontWeight={"bold"}>AREEB BIN AZIM</Text>
        </Stack>
    </Box>
  )
}

export default Footer
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar
          src="/src/assets/images/img_avatar-png-2.png"
          alt="user_profile_img"
          size={"sm"}
        />
        <Flex fontSize={15} fontWeight={"bold"} gap={"2"}>
          aas
          <Box color={"gray.500"}>&#8226; 1w</Box>
        </Flex>
      </Flex>

      <Box cursor={"pointer"}>
        <Text
          fontSize={15}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "white",
          }}
          transition={".2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;

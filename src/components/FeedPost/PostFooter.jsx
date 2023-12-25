import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { GoComment } from "react-icons/go";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={25}>
          {!liked ? <FcLike /> : <GoHeart />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <GoComment />
        </Box>
      </Flex>

      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      
    </>
  );
};

export default PostFooter;

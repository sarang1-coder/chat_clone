import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPost from "../../components/FeedPost/FeedPost";
import FeedPosts from "../../components/FeedPost/FeedPosts";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={3} py={10} m={"auto"} border={"1px solid red"}>
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
          border={"1px solid pink"}
        >
          Suggested Users
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;

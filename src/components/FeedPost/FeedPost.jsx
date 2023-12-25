import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = () => {
  return (
    <>
      <PostHeader />
      <Box>
        <Image
          src="/src/assets/images/user_profile_pic.png"
          alt="user_profile_pic"
          width={600}
        />
      </Box>
      <PostFooter />
    </>
  );
};

export default FeedPost;

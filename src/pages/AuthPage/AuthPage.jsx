import React from "react";
import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

export const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container
        maxW={"container.md"}
        padding={15}
        borderRadius="md"
        border={"2px dotted gray"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} gap={20}>
          {/* left side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src="https://cdn.dribbble.com/users/542979/screenshots/5652350/people_chat_3.gif"
              alt="ph_img"
              h={300}
              borderRadius="md"
              back
            />
          </Box>

          {/* right side */}
          <VStack spacing={6} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image
                src="https://th.bing.com/th/id/R.f2071f4fe0cf8adc7d9383ddf2432d17?rik=HG0hEZrbdEXY6w&riu=http%3a%2f%2fblog.vttrack.fr%2fwp-content%2fuploads%2f2014%2f12%2fgoogle-play-store-logo.png&ehk=napjBec3XZtYOCz9RaRI9DYCryFErwvSlc9LfDvCX1s%3d&risl=&pid=ImgRaw&r=0"
                alt="playstore_logo"
                h={"10"}
              />
              <Image
                src="https://th.bing.com/th/id/R.f3bff009413a5a4acc3e64b62f7bbc3a?rik=wRppc7MOfzOFaQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmicrosoft%2fmicrosoft_PNG11.png&ehk=3%2fr1QT0ivKZJpMTR6Kqn%2bYy0tMPT1W72%2b3GzvFSmhSQ%3d&risl=&pid=ImgRaw&r=0"
                alt="microsoft_logo"
                h={"8"}
              />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

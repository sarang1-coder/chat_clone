import React, { useState } from "react";
import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      toast.error("Invalid Email OR Password", {
        duration: 2000,
      });
    }
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            fontSize="3xl"
          >
            <Image
              src="https://th.bing.com/th/id/R.7ed88e34422ab9fa2554f689c642870a?rik=c3efvSgUnQvOnA&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fniB%2fMaK%2fniBMaKq9T.png&ehk=LS9K12b3oZAr9rS2F574r5OnoRORo9PqMYqoTwSaJRg%3d&risl=&pid=ImgRaw&r=0"
              h={"10"}
              cursor={"pointer"}
              alt="app_logo"
            />
            <Text as='i'>Connecto</Text>
          </Flex>

          <Input
            placeholder="Enter Email"
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Enter Password"
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          <Button
            onClick={handleAuth}
            w={"full"}
            colorScheme="blue"
            size={"sm"}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
          {/* ---OR--- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"gray"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          {/* Google Login */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            rounded={"md"}
            bgColor={"gray.100"}
          >
            <Button colorScheme="gray">
              <Image
                src="https://th.bing.com/th/id/OIP.kmgvFXGFDVXLkjfHLVpJEQHaHa?rs=1&pid=ImgDetMain"
                alt="google_logo"
                rounded={"full"}
                h={10}
              />
              <Text mx="2" color={"gray.500"}>
                Log In With Google
              </Text>
            </Button>
          </Flex>
        </VStack>
      </Box>

      {/* Signin / Signup*/}
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an Account"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;

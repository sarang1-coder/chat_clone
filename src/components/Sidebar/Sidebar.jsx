import React from "react";
import {
  Box,
  Flex,
  Link,
  Text,
  Tooltip,
  textDecoration,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { IoChatbubbles } from "react-icons/io5";
import {
  IoHomeSharp,
  IoSearch,
  IoNotificationsSharp,
  IoCreate,
} from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { Avatar } from "@chakra-ui/react";

const Sidebar = () => {
  // buttons
  const sidebarItems = [
    {
      icon: <IoHomeSharp size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <IoSearch size={20} />,
      text: "Search",
    },
    {
      icon: <IoNotificationsSharp size={20} />,
      text: "Notifications",
    },
    {
      icon: <IoCreate size={20} />,
      text: "Create",
    },
    {
      icon: (
        <Avatar
          size={"sm"}
          name="ABCD"
          src="../../assets/images/img_avatar-png-2.png"
        />
      ),
      text: "Profile",
      link: "/",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        {/* logo */}
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
          _hover={{
            textDecoration: "none",
            textColor: "gray",
          }}
        >
          <Text fontFamily={"cursive"} fontSize={"2rem"}>
            Connecto
          </Text>
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={{ base: 10 }}
          cursor="pointer"
        >
          <IoChatbubbles fontSize={"1.5rem"} />
        </Link>

        {/* Icons and Tooltip */}
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, idx) => (
            <Tooltip
              key={idx}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <IoLogOutOutline size={20} />
            <Box display={{ base: "none", md: "block" }}>LOGOUT</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;

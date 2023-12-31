import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* sideBar on Left */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Page content on right */}
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;

import * as React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Text
} from '@chakra-ui/react';
export const Header: React.FC = () => {
  return (
    <Box>
      <Flex>
        <Text>DinnRPlanR</Text>
        <Link>Oppskrifter</Link>
        <Link>Ukesmeny</Link>
      </Flex>
    </Box>
  );
};
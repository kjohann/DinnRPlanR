import * as React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
  Text
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { Uksesmeny } from './Ukesmeny/Ukesmeny';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box 
      padding="2.5"
      paddingLeft="10"
      bg="blue.900"
      color="whiteAlpha.900"
      fontSize="4xl"
    >
      <Text>DinnerPlanR</Text>
    </Box>
    <Box padding="10" textAlign="center" fontSize="xl">
      <HStack width="md">
        <InputGroup>
          <Input type="text" placeholder="Søk" />
          <InputRightElement
            children={<Search2Icon color="gray.300" />}
          />
        </InputGroup>
        <Uksesmeny />
      </HStack>
    </Box>
  </ChakraProvider>
);

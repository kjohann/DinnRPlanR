import * as React from 'react';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  Text
} from '@chakra-ui/react';

export const Uksesmeny: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  }
  
  return (
    <>
      <Button
        onClick={handleClick}
      >
        Ukesmeny
      </Button>
      <Drawer 
        onClose={onClose}
        isOpen={isOpen}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Ukesmeny</DrawerHeader>
          <DrawerBody>
            <Text>Her kommer en liste med menyen</Text>
            <Text>Hvordan blir det med modal åpnet fra drawer? 😅</Text>
            <Text>Kanskje heller ha handlelisten i drawer og ukesmeny som tab 🤔</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
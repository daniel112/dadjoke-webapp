import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export const HomeScreen = () => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Dad joke list</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Joke</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>Test 1</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Test 2</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Test 3</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

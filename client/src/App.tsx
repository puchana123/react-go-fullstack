import { Container, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export const BASE_URL = import.meta.env.MODE === 'development' ? "http://localhost:5000/api" : "/api";
function App() {
  return (
    <Stack h="100vh" bg={{ base: "white", _dark: "#0B2447" }}>
      <Navbar />
      <Container maxW={900}>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  )
}

export default App

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import EZUtilRouter from "./router";

export default function App() {
  return (
    <ThemeProvider>
      <ChakraProvider value={defaultSystem}>
        <EZUtilRouter />
      </ChakraProvider>
    </ThemeProvider>
  )
}
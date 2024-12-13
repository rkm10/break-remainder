import { Box } from "@mui/material"
import { lazy } from "react"
import Loadable from "./Components/Lodable";
import { Analytics } from "@vercel/analytics/react"
const ThemeChanger = Loadable(lazy(() => import('./Theme/ThemeChanger')));

function App() {
  return (
    <>
      <Box>
        <ThemeChanger />
        <Analytics />
      </Box>
    </>
  )
}

export default App

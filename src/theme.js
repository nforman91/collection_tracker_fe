import { createTheme } from "@mui/material";
import grey from "@mui/material/colors/grey";
import blueGrey from "@mui/material/colors/blueGrey";

const theme = createTheme({
  palette: {
    primary: grey,
    secondary: blueGrey,
  },
  status: {
    danger: "orange",
  },
});

export default theme;

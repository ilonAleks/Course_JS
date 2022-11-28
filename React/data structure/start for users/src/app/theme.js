import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
    createTheme({
        typography: {
            fontFamily: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol"`
        },
        palette: {
            mode: "dark"
        }
    })
);
export default theme;

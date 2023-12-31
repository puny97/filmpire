import { makeStyles } from "@mui/styles";

export default makeStyles(() => {
  return {
    root: {
      display: "flex",
      height: "100%",
    },
    toolbar: {
      height: "70px",
    },
    content: {
      flexGrow: "1px",
      padding: "2em",
    },
  };
});

import { Theme } from "@material-ui/core";
import styled from "@material-ui/styles/styled/styled";
import Box from "@material-ui/core/Box";

interface IProps {
  theme: Theme;
}

export default styled(Box)((props: IProps) => ({
  position: "fixed",
  right: 0,
  top: 0,
  width: "calc(50% - 20px)",
  height: "100%",
  backgroundColor: props.theme.palette.primary.light,
  display: "none",

  [props.theme.breakpoints.up("sm")]: {
    display: "block"
  }
}));

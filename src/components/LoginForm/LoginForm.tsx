import React, { FormEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Props, Field } from "./types";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default ({ onSubmit }: Props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const fields: Field[] = [
      { name: "email", value: email },
      { name: "password", value: password }
    ];

    onSubmit(fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={e=> {
          e.preventDefault();
          setEmail(e.target.value)
        }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={e=> {
          e.preventDefault();
          setPassword(e.target.value)
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Login
      </Button>
    </form>
  );
};

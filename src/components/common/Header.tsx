import { AppBar, Toolbar, Typography } from "@mui/material";

interface Props {
  title: string;
}

function Header({ title }: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const StyledLoaderWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  width: "100%",
  height: "70%",
});

function Loader() {
  return (
    <StyledLoaderWrapper>
      <CircularProgress />
    </StyledLoaderWrapper>
  );
}

export default Loader;

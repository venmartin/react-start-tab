import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "#00ffff75" : " #00ffff90",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default function CustomSwitch({ toggle, textBefore, textAfter }) {
  return (
    <div
      style={{
        display: "flex",
        flexBasis: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ paddingRight: "5px", fontSize: ".8rem" }}>
        {textBefore}
        {""}
      </span>
      <AntSwitch
        onClick={toggle}
        defaultChecked
        inputProps={{ "aria-label": "ant design" }}
      />
      <span style={{ paddingLeft: "5px", fontSize: ".8rem" }}>
        {textAfter}
      </span>
    </div>
  );
}

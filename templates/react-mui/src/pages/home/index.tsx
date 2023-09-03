// MUI Imports
import {
  Divider,
  styled,
  Button,
  IconButton,
  ButtonGroup,
  Box,
  Collapse,
} from "@mui/material";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

// React Imports
import { useMemo, useRef } from "react";

// Login Imports
import { useLogin } from "@/hooks";

// Theme Imports
import { ThemeToggle } from "@/themes";

const UlStyled = styled("ul")(({ theme }) => {
  return {
    listStyle: "none",
    overflow: "hidden",
    scrollSnapType: "x mandatory",

    display: "flex",
    width: "25rem",
    padding: 0,
    // border: "blue dashed",
    margin: 0,

    "& > li": {
      scrollSnapStop: "always",
      scrollSnapAlign: "start",

      flex: "0 0 25rem",
      height: 100,
      padding: 0,
      border: "1px red dashed",
      margin: 0,
    },
    [theme.breakpoints.down("md")]: {
      overflow: "auto",
    },
  };
});

export function Component() {
  const count = 5;
  const liEl = useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push(i);
    }

    return list.map((item) => <li key={item}>{item}</li>);
  }, [count]);

  const dotEl = useMemo(() => {
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push(i);
    }

    return list.map((item) => {
      const handleDotClick = () => {
        const rootStyle = globalThis.getComputedStyle(document.documentElement);
        const el = ulRef.current;

        el?.scroll({
          left: item * 25 * Number.parseInt(rootStyle.fontSize),
          behavior: "smooth",
        });
      };

      return (
        <Button key={item} onClick={handleDotClick}>
          dix-{item}
        </Button>
      );
    });
  }, [count]);

  const ulRef = useRef<HTMLUListElement>(null);

  const handlePrevClick = () => {
    const el = ulRef.current;

    const rootStyle = globalThis.getComputedStyle(document.documentElement);
    el?.scrollBy({
      left: -25 * Number.parseInt(rootStyle.fontSize),
      behavior: "smooth",
    });
  };
  const handleNextClick = () => {
    const rootStyle = globalThis.getComputedStyle(document.documentElement);
    const el = ulRef.current;

    el?.scrollBy({
      left: 25 * Number.parseInt(rootStyle.fontSize),
      behavior: "smooth",
    });
  };

  // Login Hooks
  const { signOut } = useLogin();

  return (
    <Box display={"flex"} height={"100%"}>
      <Collapse in={true} collapsedSize={40} orientation="horizontal">
        1531351
      </Collapse>
      <Box flex={1}>
        <ThemeToggle />
        <Button onClick={signOut} variant="contained" color="error">
          log out
        </Button>
        <Divider>Divider</Divider>
        <UlStyled ref={ulRef}>{liEl}</UlStyled>
        <Divider>Divider</Divider>
        <IconButton onClick={handlePrevClick}>
          <ArrowBackIosNewRounded />
        </IconButton>
        <IconButton onClick={handleNextClick}>
          <ArrowForwardIosRounded />
        </IconButton>
        <Divider>Divider</Divider>
        <ButtonGroup>{dotEl}</ButtonGroup>
      </Box>
    </Box>
  );
}

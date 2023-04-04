import CustomLink from "./CustomLink";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function Nav(props) {
  const { currPage } = props;
  const pages = ["home", "work", "about", "contact"];
  const [selectedPage, changeSelected] = useState(`${currPage}`);

  return (
    <Stack spacing={2} alignItems="baseline">
      {pages.map((page, id) => (
        <CustomLink
          key={id}
          href={`/${page}`}
          page={page}
          selectedPage={selectedPage}
          changeSelected={changeSelected}
        ></CustomLink>
      ))}
    </Stack>
  );
}

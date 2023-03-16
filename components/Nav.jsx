import CustomLink from "./CustomLink"
import { Stack } from "@mui/material"
import { useState } from "react";

export default function Nav(props){
    const { currPage } = props;
    const pages = ["home", "work", "about", "contact"];
    const [selectedPage, changeSelected] = useState(`${currPage}`);

    return(
            <div className="container">
                <Stack spacing={2}>
                    {pages.map((page, id) => (
                        <CustomLink
                            key={id}
                            href={`/${page}`}
                            page={page}
                            selectedPage={selectedPage}
                            changeSelected={changeSelected}
                        >
                        </CustomLink>
                    ))}
                </Stack>
            </div>
        )
}
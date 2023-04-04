import { Button } from "@mui/material";
import Image from "next/image";

export default function WorkItem(props) {
  const { inputObject } = props;
  const { img, title, info, gitLink, alt } = inputObject;

  return (
    <div className="workItem">
      <h1>{title}</h1>
      <p>
        <Image className="workImageLeft" src={img} alt={alt} />
        {info}
      </p>

      <Button
        className="workButton"
        target="_blank"
        variant="outlined"
        href={gitLink}
        size="large"
      >
        Github Link
      </Button>
    </div>
  );
}

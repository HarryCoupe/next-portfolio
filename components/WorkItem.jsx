import { Button } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const WorkButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  color: "#757575",
  borderColor: "#757575",
  position: "relative",
  "&:hover": {
    color: "#fff",
    backgroundColor: "#7eb5a6",
    borderColor: "#fff",
  },
}));

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

      <WorkButton
        className="workButton"
        target="_blank"
        variant="outlined"
        href={gitLink}
        size="large"
      >
        Github Link
      </WorkButton>
    </div>
  );
}

import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterButton = styled(IconButton)(({ theme }) => ({
  color: "#FFFFFF",
  "&:hover": {
    color: "#7eb5a6",
  },
}));

export default function Footer() {
  const Twitter = "https://twitter.com/HarryCoupeDev";
  const GitHub = "https://github.com/HarryCoupe";
  const LinkedIn = "https://www.linkedin.com/in/hc1295/";

  return (
    <div className="footer">
      <a href={GitHub} target="_blank" aria-label="Github Link">
        <FooterButton size="large" aria-label="Github">
          <GitHubIcon fontSize="large" />
        </FooterButton>
      </a>

      <a href={Twitter} target="_blank" aria-label="Twitter Link">
        <FooterButton size="large" aria-label="Twitter button">
          <TwitterIcon fontSize="large" />
        </FooterButton>
      </a>

      <a href={LinkedIn} target="_blank" aria-label="LinkedIn Link">
        <FooterButton size="large" aria-label="LinkedIn button">
          <LinkedInIcon fontSize="large" />
        </FooterButton>
      </a>
    </div>
  );
}

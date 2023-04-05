import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const Twitter = "https://twitter.com/HarryCoupeDev";
  const GitHub = "https://github.com/HarryCoupe";
  const LinkedIn = "https://www.linkedin.com/in/hc1295/";

  return (
    <div className="footer">
      <a href={GitHub} target="_blank">
        <IconButton size="large" className="buttonColor" aria-label="Github">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </a>

      <a href={Twitter} target="_blank">
        <IconButton
          size="large"
          className="buttonColor"
          aria-label="Twitter button"
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
      </a>

      <a href={LinkedIn} target="_blank">
        <IconButton
          size="large"
          className="buttonColor"
          aria-label="LinkedIn button"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </a>
    </div>
  );
}

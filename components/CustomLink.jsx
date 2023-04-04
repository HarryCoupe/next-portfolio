import Link from "next/link";

export default function CustomLink(props) {
  const { page, selectedPage, changeSelected, href } = props;

  const selectedText = () => {
    changeSelected(page);
  };

  return (
    <Link href={href === "/home" ? "/" : props.href} passHref legacyBehavior>
      <a onClick={selectedText} className="links homeLink customLink">
        {selectedPage === page ? "-" : page}
      </a>
    </Link>
  );
}

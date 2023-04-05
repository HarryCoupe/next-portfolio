import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Head from "next/head";
export default function AppShell(props) {
  const { page } = props;

  return (
    <div className="holder">
      <div className="container">
        <Head>
          <title>Harry Coupe</title>
        </Head>
        <Header />
        <div className="row">
          <div className="col">
            <Nav currPage={page} />
          </div>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

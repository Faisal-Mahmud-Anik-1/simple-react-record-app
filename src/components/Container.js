import { Fragment } from "react";
import Form from "./Form";
import Header from "./Header";
import Lists from "./Lists";
import "./record.scss";
import Section from "./Section";
function Container() {
  return (
    <Fragment>
      <Header />
      <main>
        <Section headingText="Add a new favorite">
          <Form />
        </Section>
        <Section headingText="Records">
          <Lists />
        </Section>
      </main>
    </Fragment>
  );
}

export default Container;

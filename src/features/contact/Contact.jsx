import { useData } from "../../context/DataContext";
import Container from "./../../ui/Container";
import ContactForm from "./ContactForm";
import MailError from "./MailError";
import MailSuccess from "./MailSuccess";

function Contact() {
  const { mailStatus } = useData();

  return (
    <Container className="min-h-[calc(100vh-285px)] overflow-hidden">
      <div className="m-auto mt-16 flex max-w-fit flex-col items-center sm:mt-24">
        {mailStatus?.type === "mailto" && (
          <>
            <h2 className="mb-6 animate-fade-translate-in self-start bg-gradient-to-br from-gradient-text from-25% to-gradient-text/[.45] bg-clip-text text-4xl tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:mb-0">
              Contact via email
            </h2>
            <ContactForm />
          </>
        )}
      </div>
      {mailStatus?.type === "success" && <MailSuccess />}
      {mailStatus?.type === "error" && <MailError />}
    </Container>
  );
}

export default Contact;

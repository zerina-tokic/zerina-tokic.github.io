import Container from "../Container";
import ContactBlock from "./ContactBlock";
import NavLinkItem from "./NavLinkItem";
import NewsletterBlock from "./NewsletterBlock";

function Footer() {
  return (
    <footer className=" bg-white py-32">
      <Container>
        <div className="place-content-center">
          <div className="flex justify-between gap-x-4">
            <ContactBlock />
            <NavLinkItem
              title="About"
              links={[
                { title: "About Us", href: "#" },
                { title: "Features", href: "#" },
                { title: "News", href: "#" },
                { title: "Plans", href: "#" },
              ]}
            />
            <NavLinkItem
              title="Company"
              links={[
                { title: "Why Tripy", href: "#" },
                { title: "Partner with us", href: "#" },
                { title: "FAQ", href: "#" },
                { title: "Blog", href: "#" },
              ]}
            />
            <NavLinkItem
              title="Support"
              links={[
                { title: "Account", href: "#" },
                { title: "Support center", href: "#" },
                { title: "Feedback", href: "#" },
                { title: "Contact us", href: "#" },
              ]}
            />
            <NewsletterBlock />
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

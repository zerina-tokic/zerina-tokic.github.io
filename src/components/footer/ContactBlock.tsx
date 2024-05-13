import Logo from "../Logo";
import SocialMediaIconsList from "./SocialMediaIconsList";

function ContactBlock() {
  return (
    <div className="contact-block flex-[1.5]">
      <Logo />
      <div className="company-address text-normal my-4 text-sm text-wrap text-[#112B3C]">
        <p>
          4517 Washington Ave.
          <br />
          Manchester, Kentucky 39495
        </p>
      </div>
      <SocialMediaIconsList />
    </div>
  );
}

export default ContactBlock;

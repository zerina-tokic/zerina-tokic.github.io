import NewsletterFormInput from "./NewsletterFormInput";

function NewsletterBlock() {
  return (
    <div className="newsletter-block justify-center items-center text-[#112B3C] flex-1">
      <h2 className="text-lg font-bold mb-3">Newsletter</h2>
      <div className="company-address text-normal my-4 text-sm text-wrap text-[#112B3C]">
        <p>Subscribe our newsletter and get exciting offers</p>
        <NewsletterFormInput />
      </div>
    </div>
  );
}

export default NewsletterBlock;

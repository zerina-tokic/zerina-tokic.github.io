import SendButtonIcon from "../../assets/react-icons/SendButtonIcon";

function NewsletterFormInput() {
  return (
    <button className="flex-row flex items-center shadow-lg rounded-full justify-center gap-4 mt-5 h-12 pl-2">
      <input
        type="email"
        placeholder="Enter your email address"
        className="text-xs font-normal bg-transparent focus:outline-none"
      ></input>
      <SendButtonIcon />
    </button>
  );
}

export default NewsletterFormInput;

interface MotivationMessageProps {
  motivationMessage: string;
}

const MotivationMessage = ({ motivationMessage }: MotivationMessageProps) => {
  return (
    <div>
      <p className="barlow-regular text-[20px] text-[#808080] text-wrap text-justify">
        {motivationMessage}
      </p>
    </div>
  );
};

export default MotivationMessage;

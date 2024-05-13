import Button from "../Button";

function ActiveButtons() {
  return (
    <div className="buttons hidden md:flex gap-[10px]">
      <Button title="Login" type="secondary" />
      <Button title="Register" type="primary" />
    </div>
  );
}

export default ActiveButtons;

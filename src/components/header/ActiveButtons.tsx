import Button from "../Button";

function ActiveButtons() {
  return (
    <div className="buttons hidden lg:flex gap-[10px]">
      <Button title="Login" type="secondary" />
      <Button title="Register" type="primary" />
    </div>
  );
}

export default ActiveButtons;

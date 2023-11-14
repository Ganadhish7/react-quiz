function ResetButton({ dispatch }) {
  return <button onClick={() => dispatch({ type: "reset" })}>Reset</button>;
}

export default ResetButton;

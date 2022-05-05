function Modal({ restart }) {
  return (
    <div className="modalMain">
      <div className="PopUp">
        <p>
          {" "}
          There are not enough questions with your parameters. Please try
          something different.
        </p>
        <button onClick={restart}>Play again</button>
      </div>
    </div>
  );
}

export default Modal;

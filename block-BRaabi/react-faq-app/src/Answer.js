function Answer(props) {
  console.log(props.currentState, props.index);

  return (
    <div
      className={
        props.currentState === 'open'
          ? 'answer--open'
          : 'faq-answer answer--closed'
      }
    >
      {props.index}
    </div>
  );
}

export default Answer;

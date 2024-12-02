import s from './PrimaryButton.module.css';

const PrimaryButton = ({ onClick, buttonText }) => {
  return (
    <button onClick={onClick} type="button" className={s.button}>
      {buttonText}
    </button>
  );
};

export default PrimaryButton;

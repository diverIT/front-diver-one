import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "../../styles/Main.module.css";
function Button({ message, background, width }) {
  return (
    <>
      <button>
        <span className="icon">
        <FontAwesomeIcon icon={faUser} />
        </span>
        {message}
      </button>
      <style jsx>{`
        button {
          min-width: ${width};
          height: 3rem;
          background-color: ${background};
          border-radius: 20px;
          border: none;
          padding: 0.9rem;
          color: black;
          left: 0;
          font-size: .8rem;
          display: flex;
          justify-content: space-between;
        }
        .icon {
          display: inline-block;
          width: 14px;
          color: black;
          margin-right: 5px;
        }
      `}</style>
    </>
  );
}

export default Button;

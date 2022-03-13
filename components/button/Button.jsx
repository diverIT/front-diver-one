import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "../../styles/Main.module.css";
function Button({ message, background, width, color }) {
  return (
    <>
      <button type="submit">
        <span className="icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span>{message}</span>
      </button>
      <style jsx>{`
        button {
          max-width: ${width};
          height: 3rem;
          background-color: ${background};
          border-radius: 20px;
          border: none;
          padding: 0.9rem;
          color: ${color};
          font-size: 0.8rem;
          display: flex;
          justify-content: center;
          cursor: pointer;
          margin-Bottom : 10px;
        }
        .icon {
          display: inline-block;
          width: 14px;
          color: ${color};
          margin-right: 5px;
        }
      `}</style>
    </>
  );
}

export default Button;

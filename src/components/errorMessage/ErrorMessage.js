import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <img
      style={{
        display: "block",
        width: "240px",
        height: "240px",
        margin: "0 auto",
        objectFit: "contain",
      }}
      src={img}
      alt="Error"
    />
  );
};

export default ErrorMessage;

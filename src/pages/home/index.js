import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link to="svg">Go to svg</Link>
      <br />
      <Link to="canvas">Go to canvas</Link>
    </div>
  );
};

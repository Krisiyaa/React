import { useState } from "react";

const Inputform = (props) => {
  const [name, setname] = useState("");
  const style = `
    .inputtext{
        // border:1px solid red;
    }
    `;

  const handleTxt = (event) => {
    setname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCreate(name);
  };

  return (
    <>
      <style>{style}</style>

      <div className="inputtext mt-2 flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleTxt}
            className="inputtext rounded-sm border border-green-500 border-solid"
          />
          <input type="submit" className="underline ml-2" />
        </form>
      </div>
    </>
  );
};

export default Inputform;

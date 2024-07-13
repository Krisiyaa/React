import Inputform from "./component/Inputform";
import ShowList from "./component/ShowList";
import { useState } from "react";

const App = () => {
  const [person, setPerson] = useState([]);

  const createProfile = (people) => {
    console.log("Hey " + people);
    const updatedPerson = [
      ...person,
      {
        id: Math.round(Math.random() * 9999),
        people,
      },
    ];
    setPerson(updatedPerson);
  };

  return (
    <div className="">
      <ShowList person={person} />
      <Inputform onCreate={createProfile} />
    </div>
  );
};

export default App;

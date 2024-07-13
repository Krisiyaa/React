const ShowList = ({ person }) => {
  const renderPerson = () => person.map((p) => <li key={p.id}>{p.people}</li>);

  return (
    <div>
      <ul>{renderPerson()}</ul>
    </div>
  );
};

export default ShowList;

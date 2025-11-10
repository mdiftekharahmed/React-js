let todoTitle = "My First Todo";
let todoDesc = "This is my first todo description";
let todoDate = "2024-06-01";

function Card(props) {
  const { cardTitle, cardDesc } = props;
  return (
    <div className="card">
      <h3 className="cardTitle">{cardTitle}</h3>
      <p className="cardDesc">{cardDesc}</p>
      <p className="cardDate">{todoDate}</p>
    </div>
  );
}

export default Card;

import React from "react";
import Card from "./components/Card";
import Data from "./data.json";

console.log(Data);

function App() {
  //USING MAP

  //   let items = [];
  //   Data.map((item) => {
  //     items.push(<Card cardTitle={item.title} cardDesc={item.description} />);
  //   });

  //   return (
  //     <div>
  //       <h1 className="headingStyle">My React Shitt</h1>
  //       {items}
  //     </div>
  //   );
  //   or
  return (
    <div>
      <h1 className="headingStyle">My React Shitt</h1>
      {Data.map((item, index) => (
        <Card key={index} cardTitle={item.title} cardDesc={item.description} />
      ))}
    </div>
  );

  //   //USING LOOP
  //   let items = [];
  //   for (let i = 0; i < Data.length; i++) {
  //     items.push(
  //       <Card cardTitle={Data[i].title} cardDesc={Data[i].description} />
  //     );
  //   }
  //   return (
  //     <div>
  //       <h1 className="headingStyle">My React Shitt</h1>
  //       {items}
  //     </div>
  //   );
  ////WITHOUT LOOP
  //   return (
  //     <div>
  //       <h1 className="headingStyle">My React Shitt</h1>
  //       <Card cardTitle="This is title 1" cardDesc="this is desc 1" />
  //       <Card cardTitle="This is title 2" cardDesc="this is desc 2" />
  //       <Card cardTitle="This is title 3" cardDesc="this is desc 3" />
  //     </div>
  //   );
}

export default App;

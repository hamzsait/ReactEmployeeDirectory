import React from "react";

function ResultList(props) {
  return (
    props.value.map(result =>(
      <div>
        <tr>
          <th>{result.name.first} {result.name.last}</th>
          <th>{result.email}</th>
          <th><img src = {result.picture.large}></img></th>
        </tr>
      </div>
    ))
  );
}

export default ResultList;

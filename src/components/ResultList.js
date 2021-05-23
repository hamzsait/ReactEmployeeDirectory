import React from "react";

function ResultList(props) {

  console.log(props.value.value[0])
  return (
    props.value.value.map(result =>(
        <tr>
          <th>{result.name.first} {result.name.last}</th>
          <th>{result.email}</th>
          <th><img src = {result.picture.large}></img></th>
        </tr>
    ))
  );
}

export default ResultList

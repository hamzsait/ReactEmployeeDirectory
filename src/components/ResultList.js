import React from "react";

function ResultList(props) {
  return (
    props.value.value.map(result =>(
        <tr key = {result.email}>
          <th>{result.name.first} {result.name.last}</th>
          <th>{result.email}</th>
          <th><img alt = "User Missing" src = {result.picture.large}></img></th>
        </tr>
    ))
  );
}

export default ResultList

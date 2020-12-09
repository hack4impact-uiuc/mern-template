// @flow
import React, { useEffect, useState } from 'react';
import type { Node } from 'react';

import '../css/Home.css';

function Home(): Node {
  const [text, setText] = useState('You did not run local API!');

  useEffect(() => {
    const url = `http://localhost:9000/api/home`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(json => {
        if (json) setText(json.result);
      });
  }, []);

  return (
    <>
      <h1>MERN Template</h1>
      <p>
        Below will tell you if the API is running.
        <br />
        `${text}`
      </p>
    </>
  );
}

export default Home;

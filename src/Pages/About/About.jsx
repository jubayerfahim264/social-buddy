import { useEffect, useState } from "react";

const About = () => {
  const [randomUser, setRandomUser] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setRandomUser(data.results[0]));
  }, []);

  return (
    <>
      <div className="container">
        <h2>This is about of our team</h2>
        <h1>
          Name: <sup>{randomUser.name?.title}</sup> {randomUser.name?.first}{" "}
          {randomUser.name?.last}
        </h1>
        <p>Gender: {randomUser.gender}</p>
        <p>Email: {randomUser.email}</p>
        <p>City: {randomUser.location?.city}</p>
      </div>
    </>
  );
};

export default About;

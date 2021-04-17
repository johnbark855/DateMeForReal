import React, { useState, useEffect } from "react";
import Filter from "react-tinder-card";
import "./Filter.css";
import API from "../../utils/API";
// import axios from "../../utils/axios";
// import Button from '@material-ui/core/Button';

function Filters(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    const gender = window.location.href.split("/").pop();
    // console.log("sex: ", sex);

    API.getGender(gender)
      .then((res) => {
        console.log("Gender Response;", res);
        setPeople(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="Cards">
        <div className="Cards_cardContainer">
          {people.map((person) => (
            <Filter
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3 className="userInfo">
                  <b>
                    {person.name} | {person.age} | {person.email}
                  </b>
                </h3>
              </div>
            </Filter>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;

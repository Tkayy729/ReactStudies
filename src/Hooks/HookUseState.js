import React, { useState } from "react";

export const HookUseState = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    foodInput: "",
    food: [],
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const addFood = (e) => {
    e.preventDefault();
    if (user.food.length < 3) {
        // Make sure the input is not empty
        if (user.foodInput && user.foodInput.trim() !== "") {
          setUser({
            ...user,
            food: [...user.food, user.foodInput],
            foodInput: "", // Clear the input field after adding the food
          });
        }
      }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="first name"
        onChange={(e) => setUser({ ...user, firstname: e.target.value })}
        value={user.firstname}
      />
      <input
        type="text"
        onChange={(e) => setUser({ ...user, lastname: e.target.value })}
        value={user.lastname}
        placeholder="last name"
      />
      <input
        type="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
        placeholder="email "
      />
      {user.food.length > 0
        ? user.food.map((f, index) => <span key={index}>{f+", "}</span>)
        : <span>no food added yet</span>}
      <input
        type="text"
        onChange={(e) => setUser({ ...user, foodInput: e.target.value })}
        value={user.foodInput || ""}
        placeholder="favorite food, at least 3"
      />
      <button onClick={addFood} type="button">
        Add
      </button>
      <h4>{user.food}</h4>
      <button type="button" onClick={submit}>
        Submit
      </button>

      <h2>{JSON.stringify(user)}</h2>
    </div>
  );
};

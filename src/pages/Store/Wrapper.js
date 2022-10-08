import React, { useState, useEffect } from "react";
import { Wrapper as Container } from "./StoreComponents.styled";
import PetCard from "../../components/PetCard";
import { petDeets } from "../../dummy";
import { Grid, List } from "../../components/icons";
import axios from "axios";

const Wrapper = () => {
  // const [pets, setPets] = useState([]);

  // const getPets = async () => {
  //   const response = await axios.get(
  //     `https://petstore.swagger.io/v2/pet/findByStatus?status=available`
  //   );
  //   const result = response.data;
  //   console.log(result);
  //   setPets(result.slice(0, 50));
  // };

  // useEffect(() => {
  //   getPets();
  // }, []);

  return (
    <Container>
      <div className="header">
        <h2>Shop</h2>
        <span>Sort by: Popularity</span>
      </div>
      <div className="second-header">
        <p>{petDeets.length} products found</p>
        <div className="icons">
          <List />
          <Grid />
        </div>
      </div>
      <div className="grid">
        {petDeets.map((pet) => (
          <div className="grid-item" key={pet.id}>
            <PetCard breed={pet.breed} image={pet.img} price={pet.price} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <span>Previous</span>
        <span className="active">1</span>
        <span>2</span>
        <span>3</span>
        <span>Next</span>
      </div>
    </Container>
  );
};

export default Wrapper;

import React from "react";
// https://github.com/ProgrammingHero1/explore-react-form/tree/main/src/components/FamilyTree
// prop drilling
//see this for better understanding FamilyTree and ContextAPI


const FamilyTree = () => {
  return (
    <div>
      <div className="family-tree">
        <h2>Family</h2>
        <Grandpa></Grandpa>
      </div>
    </div>
  );
};

export default FamilyTree;

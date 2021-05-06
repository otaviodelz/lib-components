import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ProductCard } from "../src/index";

describe("ProductCard", () => {
  it("Check label for button", () => {
    const { getByTestId } = render(
      <ProductCard
        stamp="-36%"
        brand="KAIAK"
        productName="KAIAK MASCULINO"
        price="124,90"
      />
    );

    const button = getByTestId("productCard-btn");
    expect(button).toBeInTheDocument();
  });
});

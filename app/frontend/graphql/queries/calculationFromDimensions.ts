export const calculationFromDimensionsQuery = (length: number, width: number, height: number, weight: number) => (/* GraphQL */ `
  {
    calculationFromDimensions(
      length: ${length}
      width: ${width}
      height: ${height}
      weight: ${weight}
    ) {
      id
      product {
        id
        name
        length
        width
        height
        weight
        productType {
          id
          name
        }
      }
    }
  }
`);
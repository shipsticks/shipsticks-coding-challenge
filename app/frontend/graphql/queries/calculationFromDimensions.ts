export const CALCULATION_FROM_DIMENSIONS = /* GraphQL */ `
  query calculationFromDimensions(
    $length: Int
    $width: Int
    $height: Int
    $weight: Int
  ) {
    calculation_from_dimensions(
      length: $length
      width: $width
      height: $height
      weight: $weight
    ) {
      data
      name
    }
  }
`;
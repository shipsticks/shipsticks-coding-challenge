# frozen_string_literal: true

module Types
  class Product < Types::BaseObject
    field :name, String, "The name of this product", null: false
    field :length, Int, "Length of the product in inches", null: false
    field :width, Int, "Width of the product in inches", null: false
    field :height, Int, "Height of the product in inches", null: false
    field :weight, Int, "Weight of the product in pounds", null: false

    field :product_type, Types::ProductType, "The type of this product", null: false

    field :calculation_results, Types::CalculationResult.connection_type, "The calculation results for this product"
  end
end

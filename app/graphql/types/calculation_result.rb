# frozen_string_literal: true

module Types
  class CalculationResult < Types::BaseObject
    field :length, Int, "The length value for the calculation.", null: false
    field :width, Int, "The width value for the calculation.", null: false
    field :height, Int, "The height value for the calculation.", null: false
    field :weight, Int, "The weight value for the calculation.", null: false

    field :product, Types::Product, "The product that this calculation result is for.", null: false
  end
end

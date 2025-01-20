# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :node, Types::NodeType, null: true, description: "Fetches an object given its ID." do
      argument :id, ID, required: true, description: "ID of the object."
    end

    def node(id:)
      context.schema.object_from_id(id, context)
    end

    field :nodes, [Types::NodeType, null: true], null: true, description: "Fetches a list of objects given a list of IDs." do
      argument :ids, [ID], required: true, description: "IDs of the objects."
    end

    def nodes(ids:)
      ids.map { |id| context.schema.object_from_id(id, context) }
    end

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :calculation_from_dimensions, CalculationResult, null: true do
      description "Fetch a product by dimensions"
      argument :length, Integer, required: true
      argument :width, Integer, required: true
      argument :height, Integer, required: true
      argument :weight, Integer, required: true
    end

    def calculation_from_dimensions(length:, width:, height:, weight:)
      ::CalculationProcessor.calculate_result(length: length, width: width, height: height, weight: weight)
    end

    field :products, [Types::Product, null: true], null: true do
      description "Fetches a list of products."
    end

    def products
      ::Product.all
    end

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end
  end
end

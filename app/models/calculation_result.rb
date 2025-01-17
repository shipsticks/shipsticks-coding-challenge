class CalculationResult
  include Mongoid::Document
  include Mongoid::Timestamps

  field :length, type: Integer
  field :width, type: Integer
  field :height, type: Integer
  field :weight, type: Integer

  belongs_to :product, class_name: 'Product', inverse_of: :calculation_results
end

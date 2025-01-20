# Not meant to be persisted.
class CalculationProcessor
  class MissingProductError < StandardError; end
  include ActiveModel::Model
  include NearestCalculatable

  attr_accessor :length, :width, :height, :weight

  def self.calculate_result(attributes)
    new(attributes).calculate
  end

  def calculate
    return nil unless matched_product.present?

    CalculationResult.find_or_create_by(
      product: matched_product,
      length: length,
      width: width,
      height: height,
      weight: weight)
  end

  def matched_product
    @matched_product ||= nearest_product_match(length: length, width: width, height: height, weight: weight)
  end
end
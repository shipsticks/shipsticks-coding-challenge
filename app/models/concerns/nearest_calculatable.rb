module NearestCalculatable
  extend ActiveSupport::Concern

  def nearest_product_match(length:, width:, height:, weight:)
    nearest_match = Product.collection.aggregate([
      # First, validate that the product is larger than the given dimensions.
      {
        '$match' => {
          'length' => { '$gte' => length },
          'width' => { '$gte' => width },
          'height' => { '$gte' => height },
          'weight' => { '$gte' => weight }
        }
      },
      # Find the total difference in inches.
      {
        '$project' => {
          'total_diff' => {
            '$add' => [
              { '$subtract' => ['$length', length] },
              { '$subtract' => ['$width', width] },
              { '$subtract' => ['$height', height] },
              { '$subtract' => ['$weight', weight] }
            ]
          }
        }
      },
      # Sort so the smallest difference is first
      {
        '$sort' => {
          'total_diff' => 1
        }
      },
      {
        '$limit' => 1
      }
    ]).first

    # Returns a hash, so ensure an actual product is returned.
    nearest_match.nil? ? nil : Product.find(nearest_match['_id'])
  end
end
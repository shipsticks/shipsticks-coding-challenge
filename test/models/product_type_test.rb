require "test_helper"

class ProductTypeTest < ActiveSupport::TestCase
  test "should validate presence" do
    product_type = ProductType.new
    assert_not product_type.valid?
  end
end

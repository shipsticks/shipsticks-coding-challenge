require "test_helper"

class ProductTest < ActiveSupport::TestCase
  test "should validate greater than zero" do
    product = Product.new(name: 'Product', length: 0, width: 0, height: 0, weight: 0)
    assert_not product.valid?
  end

  test "should validate presence" do
    product = Product.new
    assert_not product.valid?
  end

  test "should validate that ProductType is present" do
    product = Product.new(name: 'Product', length: 10, width: 10, height: 10, weight: 10)
    assert_not product.valid?

    # I'd rather use a fixture here, but there might be some Mongoid weirdness going on. - k1bs
    pt = ProductType.new(name: 'ProductType')
    product.product_type = pt
    assert product.valid?
  end
end

class ProductType
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String

  has_many :products, class_name: 'Product', inverse_of: :product_type

  validates :name, presence: true
end

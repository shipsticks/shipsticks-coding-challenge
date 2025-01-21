class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :length, type: Integer, default: 0
  field :width, type: Integer, default: 0
  field :height, type: Integer, default: 0
  field :weight, type: Integer, default: 0

  belongs_to :product_type, class_name: 'ProductType', inverse_of: :products
  has_many :calculation_results, class_name: 'CalculationResult', inverse_of: :product

  validates :name, :length, :width, :height, :weight, :product_type, presence: true
  validates :name, uniqueness: true
  validates_numericality_of :length, :width, :height, :weight, greater_than: 0
end

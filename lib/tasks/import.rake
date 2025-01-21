require 'json'

namespace :import do
  desc "Import products from JSON file"
  task :products_json => :environment do
    products = JSON.parse(File.read(Rails.root.join('db', 'products.json')))['products']

    puts "Importing #{products.size} products..."
    products.each do |product|
      begin
        puts "Importing #{product['name']}..."
        pt = ProductType.find_or_create_by(name: product['type'])

        Product.create!(
          name: product['name'],
          product_type: pt,
          length: product['length'],
          width: product['width'],
          height: product['height'],
          weight: product['weight'],
        )
      rescue
        puts "Failed to import #{product['name']}"
      end
    end
  end
end
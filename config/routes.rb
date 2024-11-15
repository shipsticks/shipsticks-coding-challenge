Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, except: :show do
        get '/search' => 'products#show', as: 'products_show'
      end
    end
  end

  # Defines the root path route ("/")
  get '*path', to: 'home#index'
  root 'home#index'
end

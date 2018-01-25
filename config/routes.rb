Rails.application.routes.draw do
  
  match '/' => 'home#angular_app', :as => :root, via: [:get], trailing_slash: true
  match '/home' => 'home#angular_app', :as => :home, via: [:get]
  # match '/app/app_views' => 'home#angular_app', via: [:get]
  # match '/app/app_views/*path' => 'home#angular_app', via: [:get]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

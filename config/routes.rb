Rails.application.routes.draw do

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    omniauth_callbacks: 'users/omniauth_callbacks'
  }

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end

  resources :track_lists, only:[:index, :create, :update ,:destroy]
  resources :tracks, only:[:show, :create, :update ,:destroy]

  root 'spa#index'
  get '/my-play-list/', to: 'spa#index'

end

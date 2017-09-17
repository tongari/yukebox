Rails.application.routes.draw do

  devise_for :users, controllers: {
      registrations: 'users/registrations',
      omniauth_callbacks: 'users/omniauth_callbacks'
  }

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end

  resources :track_lists, only:[:index]
  resources :tracks, only:[:index, :new, :create, :edit, :update ,:destroy]

  root 'track_lists#index'
end

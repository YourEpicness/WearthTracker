json.extract! user, :id, :userEmail, :userPassword, :userFirstName, :userLastName, :userRole, :created_at, :updated_at
json.url user_url(user, format: :json)

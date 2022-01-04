json.extract! transaction, :id, :transactionVendor, :transactionDate, :transactionType, :transactionAmount, :transactionCategory, :created_at, :updated_at
json.url transaction_url(transaction, format: :json)

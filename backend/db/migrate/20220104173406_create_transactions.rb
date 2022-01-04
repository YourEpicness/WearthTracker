class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.text :transactionVendor
      t.date :transactionDate
      t.text :transactionType
      t.decimal :transactionAmount
      t.text :transactionCategory

      t.timestamps
    end
  end
end

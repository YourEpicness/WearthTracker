class CreateAccounts < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.text :accountName
      t.text :accountLinkedBank

      t.timestamps
    end
  end
end

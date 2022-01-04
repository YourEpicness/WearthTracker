class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.text :userEmail
      t.text :userPassword
      t.text :userFirstName
      t.text :userLastName
      t.text :userRole

      t.timestamps
    end
  end
end

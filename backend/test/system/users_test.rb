require "application_system_test_case"

class UsersTest < ApplicationSystemTestCase
  setup do
    @user = users(:one)
  end

  test "visiting the index" do
    visit users_url
    assert_selector "h1", text: "Users"
  end

  test "should create user" do
    visit users_url
    click_on "New user"

    fill_in "Useremail", with: @user.userEmail
    fill_in "Userfirstname", with: @user.userFirstName
    fill_in "Userlastname", with: @user.userLastName
    fill_in "Userpassword", with: @user.userPassword
    fill_in "Userrole", with: @user.userRole
    click_on "Create User"

    assert_text "User was successfully created"
    click_on "Back"
  end

  test "should update User" do
    visit user_url(@user)
    click_on "Edit this user", match: :first

    fill_in "Useremail", with: @user.userEmail
    fill_in "Userfirstname", with: @user.userFirstName
    fill_in "Userlastname", with: @user.userLastName
    fill_in "Userpassword", with: @user.userPassword
    fill_in "Userrole", with: @user.userRole
    click_on "Update User"

    assert_text "User was successfully updated"
    click_on "Back"
  end

  test "should destroy User" do
    visit user_url(@user)
    click_on "Destroy this user", match: :first

    assert_text "User was successfully destroyed"
  end
end

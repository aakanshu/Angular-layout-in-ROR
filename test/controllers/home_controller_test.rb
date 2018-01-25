require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get angular_app" do
    get home_angular_app_url
    assert_response :success
  end

end

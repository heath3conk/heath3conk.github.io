class User < ActiveRecord::Base
  validates :role, presence: true
  validates :email, presence: true, uniqueness: true

  has_many :blogs, foreign_key: :author_id
  has_many :projects, foreign_key: :creator_id

  def password
    @password ||= BCrypt::Password.new(password)
  end

  def password=(plain_text_password)
    @password = BCrypt::Password.create(plain_text_password)
    self.hashed_password = @password
  end

  def authenticate?(password)
    self.hashed_password == password
  end
end

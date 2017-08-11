## users
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
first_name        | string    | not null
last_name         | string    | not null
email             | string    | not null, unique
profile_img       | string    |
mbti_type         | string    | 

## memberships
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references user)
startup_id    | integer   | not null, foreign key (references startup)
member_type   | string    | not null, inclusion ['admin', 'member']

## startups
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, unique, foreign key (references user)
startup_name      | string    | not null
startup_email     | string    | not null
startup_logo      | integer   | not null
startup_description| text     | not null

## profiles
column name | data type | details
------------|-----------|----------------------
id          | integer   | not null, primary_key
profile     | string    | not null, unique

## skills
column name | data type | details
------------|-----------|----------------------
id          | integer   | not null, primary_key
skill       | string    | not null, unique

## 
column name  | data type | details
-------------|-----------|---------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key
profile_id   | integer   | not null, foreign key

## openings
column name  | data type | details
-------------|-----------|---------------------
id           | integer   | not null, primary key
startup_id   | integer   | not null, foreign key
profile_id   | integer   | not null, foreign key 

## competitions
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
url               | integer   | not null

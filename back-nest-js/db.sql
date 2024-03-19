create table "users" (
    "user_id" varchar not null primary key, "username" text not null, "password" varchar(255) not null, "email" varchar(255) not null
)

create table "projects" (
    "project_id" varchar not null primary key, "title" varchar(255) not null, "description" varchar(255) not null, "link" varchar(255) not null, "ImageURL" Array, "user_id" varchar not null foreign key, ("user_id") references "users" ("user_id")
)
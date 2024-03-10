Use "Portfolio";

create table "users" (
    "user_id" integer not null auto_increment primary key
    "username" varchar(255) not null  
    "password" varchar(255) not null
    "email" varchar(255) not null
)

create table "projects" (
    "project_id" integer not null auto_increment primary key
    "title" varchar(255) not null
    "description" varchar(255) not null
    "link" varchar(255) not null
    "ImageURL" JSON
    "user_id" integer not null
    foreign key ("user_id") references "users" ("user_id")
)
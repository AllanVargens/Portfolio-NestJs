-- Criação da tabela User
CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL UNIQUE,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL,
    "userImage" VARCHAR(255),
    "about" TEXT,
    "role" VARCHAR(50) NOT NULL,
    "technologiesBack" TEXT[] NOT NULL,
    "technologiesFront" TEXT[] NOT NULL,
    "linkedin" VARCHAR(255),
    "gitHub" VARCHAR(255)
);

-- Criação da tabela Project
CREATE TABLE "Project" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "projectUrl" VARCHAR(255),
    "githubProject" VARCHAR(255),
    "tagsBack" TEXT[] NOT NULL,
    "backendAbout" TEXT,
    "tagsFront" TEXT[] NOT NULL,
    "frontendAbout" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
);

-- Criação da tabela Section
CREATE TABLE "Section" (
    "id" SERIAL PRIMARY KEY,
    "imageURL" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT fk_project FOREIGN KEY ("projectId") REFERENCES "Project"(id) ON DELETE CASCADE
);

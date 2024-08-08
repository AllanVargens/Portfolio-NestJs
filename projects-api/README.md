# Author

Allan Vargens @programAllan \
[Visit my Linkedin](https://www.linkedin.com/in/allan-vargens-silva-973978196/)

## Technologies

- NestJs
- Prisma
- Jest
- PostgreSQL
- Docker
- Passport Authentication

## Class Diagram

````mermaid

classDiagram
    class User {
        +String id
        +String name
        +String username
        +String email
        +String description
        +String password
        +String? userImage
        +String? about
        +String role
        +String[] technologiesBack
        +String[] technologiesFront
        +String? linkedin
        +String? gitHub
        +Project[] projects
    }

    class Project {
        +Int id
        +String title
        +String? description
        +String? projectUrl
        +String? githubUrl
        +String? projectImage
        +String? projectVideo
        +String[] tagsBack
        +String? backendAbout
        +String[] tagsFront
        +String? frontendAbout
        +Section[] sections
        +String userId
        +User user
    }

    class Section {
        +Int id
        +String imageURL
        +String description
        +Int projectId
        +Project project
    }

    User "1" *-- "many" Project : owns
    Project "1" *-- "many" Section : contains

    ```
````

# Documentation Endpoints

## 1. Users Controller

- Base URL: /users

### Endpoints:

- GET /users/

Description: Find a user by their ID.

Authorization: Requires JWT authentication.

Response:

Status: 302 FOUND
Description: The user has been found.
Body: Returns the user object.

```
GET /users/1
Authorization: Bearer <token>
```

2. Projects Controller

- Base URL: /:userid/projects

### Endpoints:

- POST /
  /projects

Description: Create a new project for the user.

Authorization: Requires JWT authentication.

Request Body:

type: CreateProjectDto
Response:

Status: 201 CREATED
Description: The project has been successfully created.

```
POST /UUID/projects
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "New Project",
  "description": "Description of the new project"
}
```

- GET /
  /projects

Description: Find all projects for a user.

Response:

Status: 302 FOUND

```
GET /UUID/projects
```

- PATCH /

/projects/1

Description: Update an existing project.

Authorization: Requires JWT authentication.

Request Body:

type: UpdateProjectDto
Response:

Status: 200 OK
Description: The project has been successfully updated.

```
PATCH /1/projects/1
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Project Title"
}

```

- DELETE /
  /projects/

Description: Remove a project.

Authorization: Requires JWT authentication.

Response:

Status: 200 OK
Description: The project has been successfully removed.

```
DELETE /1/projects/1
Authorization: Bearer <token>
```

3. Sections Controller
   Base URL: /:userId/:projectId/sections

### Endpoints:

- POST /
  /
  /sections

Description: Create a new section for a specific project.

Authorization: Requires JWT authentication.

Request Body:

type: CreateSectionDto
Response:

Status: 201 CREATED
Description: The section has been successfully created.

```
POST /1/1/sections
Authorization: Bearer <token>
Content-Type: application/json

{
  "imageURL": "http://example.com/image.jpg",
  "description": "A description about the image"
}
```

- GET /
  /
  /sections

Description: Get all sections of a project.

Response:

Status: 302 FOUND
Description: Returns an array of sections.

```
GET /1/1/sections
```

- PATCH /
  /
  /sections/

Description: Update a section of an existing project.

Authorization: Requires JWT authentication.

Request Body:

type: UpdateSectionDto
Response:

Status: 200 OK
Description: The section has been successfully updated.

```
PATCH /1/1/sections/1
Authorization: Bearer <token>
Content-Type: application/json

{
  "description": "Updated description about the image"
}
```

- DELETE /
  /
  /sections/

Description: Remove a section from a project.

Authorization: Requires JWT authentication.

Response:

Status: 200 OK
Description: The section has been successfully removed.

```
DELETE /1/1/sections/1
Authorization: Bearer <token>
```

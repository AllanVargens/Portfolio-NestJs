import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from "@nestjs/common";
import { ProjectsService } from "./projects.service";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ResponseProjectObjetct } from "./dto/response-project.object";

@ApiTags("Projects")
@Controller("users/:user_id/projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @Post()
  @ApiOperation({ summary: "Create Project" })
  @ApiResponse({ status: 403, description: "Forbidden." })
  create(
    @Param("user_id") user_id: string,
    @Body() createProjectDto: CreateProjectDto
  ) {
    return this.projectsService.create({ ...createProjectDto, user_id });
  }
  @ApiOperation({ summary: "Find All Projects by user" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns an array of projects by user",
    type: [ResponseProjectObjetct],
  })
  @Get()
  findAll(@Param("user_id") user_id: string) {
    return this.projectsService.findAll(user_id);
  }
  @ApiOperation({ summary: "Find one project by user" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Returns a project by user",
    type: ResponseProjectObjetct,
  })
  @Get(":id")
  findOne(@Param("user_id") user_id: string, @Param("id") id: string) {
    return this.projectsService.findOne(user_id, id);
  }
  @ApiBody({ type: UpdateProjectDto })
  @ApiOperation({ summary: "Update user" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The user has been successfully updated.",
    type: ResponseProjectObjetct,
  })
  @Patch(":id")
  update(
    @Param("user_id") user_id: string,
    @Param("id") id: string,
    @Body() updateProjectDto: UpdateProjectDto
  ) {
    return this.projectsService.update(user_id, id, updateProjectDto);
  }
  @ApiOperation({ summary: "Remove project" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "The project has been successfully removed.",
  })
  @Delete(":id")
  remove(@Param("user_id") user_id: string, @Param("id") id: string) {
    return this.projectsService.remove(user_id, id);
  }
}

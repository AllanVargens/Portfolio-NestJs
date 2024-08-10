import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('projects')
@Controller(':userid/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @ApiBody({ type: CreateProjectDto })
  @ApiOperation({ summary: 'create project' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The project has been successfully created.',
  })
  @Post('')
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createProjectDto: CreateProjectDto,
    @Param('userid') userId: string,
  ) {
    createProjectDto.userId = userId;
    return this.projectsService.create(createProjectDto);
  }
  @ApiOperation({ summary: 'Find All Projects by user' })
  @ApiResponse({
    status: HttpStatus.FOUND,
    description: 'Returns an array of projects',
  })
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }
  @ApiOperation({ summary: 'Find one project by user' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns a unique project by user',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }
  @ApiBody({ type: UpdateProjectDto })
  @ApiOperation({ summary: 'Update project' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully updated.',
  })
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }
  @ApiOperation({ summary: 'Remove project' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The project has been successfully removed.',
  })
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}

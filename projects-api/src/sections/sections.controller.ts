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
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Sections')
@Controller(':userId/:projectId/sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}
  @ApiOperation({ summary: 'create a new section' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: [CreateSectionDto],
  })
  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createSectionDto: CreateSectionDto,
    @Param('projectId') projectId: string,
    @Param('userId') userId: string,
  ) {
    createSectionDto.projectId = +projectId;
    return this.sectionsService.create(createSectionDto, userId);
  }

  @ApiOperation({ summary: 'get all sections' })
  @ApiResponse({
    status: HttpStatus.FOUND,
  })
  @Get()
  findAll(@Param('projectId') projectId: string) {
    return this.sectionsService.findAll(+projectId);
  }
  @ApiOperation({ summary: 'update a section of one existing project' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [UpdateSectionDto],
  })
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto,
    @Param('projectId') projectId: string,
    @Param('userId') userId: string,
  ) {
    return this.sectionsService.update(
      +projectId,
      +id,
      userId,
      updateSectionDto,
    );
  }
  @ApiOperation({ summary: 'Remove a section' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The section has been successfully removed.',
  })
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(
    @Param('id') id: string,
    @Param('projectId') projectId: string,
    @Param('userId') userId: string,
  ) {
    return this.sectionsService.remove(+projectId, +id, userId);
  }
}

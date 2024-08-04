import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';

@Controller(':projectId/sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionsService.create(createSectionDto);
  }

  @Get()
  findAll() {
    return this.sectionsService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto,
    @Param('projectId') projectId: string,
  ) {
    return this.sectionsService.update(+projectId, +id, updateSectionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Param('projectId') projectId: string) {
    return this.sectionsService.remove(+projectId, +id);
  }
}

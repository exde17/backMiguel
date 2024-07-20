import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { TecnicoService } from './tecnico.service';

import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { UpdateTecnico } from './dto/update-tecnico.dto';

@Controller('funcionario')
export class ClienteController {
  constructor(private readonly tecnicoService: TecnicoService) {}

  @Post()
  async reate(@Body() createtecnicoDto: CreateTecnicoDto) {
    return this.tecnicoService.create(createtecnicoDto);
  }

  @Get()
  async findAll() {
    return this.tecnicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.tecnicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateTecnico: UpdateTecnico) {
    return this.tecnicoService.update(id, updateTecnico);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.tecnicoService.remove(id);
  }
}

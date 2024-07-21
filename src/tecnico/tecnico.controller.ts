import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ClienteService } from './tecnico.service';

import { UpdateClienteDto } from './dto/update-tecnico.dto';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async reate(@Body() createtecnicoDto: CreateTecnicoDto) {
    return this.clienteService.create(createtecnicoDto);
  }

  @Get()
  async findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.clienteService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.clienteService.remove(id);
  }
}

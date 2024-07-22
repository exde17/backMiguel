import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiempoExtraService } from './tiempo-extra.service';
import { CreateTiempoExtraDto } from './dto/create-tiempo-extra.dto';
import { UpdateTiempoExtraDto } from './dto/update-tiempo-extra.dto';
import { Auth } from 'src/user/decorator';
import { ValidRoles } from 'src/user/interfaces';

@Controller('extra')
export class TiempoExtraController {
  constructor(private readonly tiempoExtraService: TiempoExtraService) {}

  @Post()
  // @Auth(ValidRoles.user)
  async create(@Body() createTiempoExtraDto: CreateTiempoExtraDto) {
    return this.tiempoExtraService.create(createTiempoExtraDto);
  }

  @Get()
  findAll() {
    return this.tiempoExtraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tiempoExtraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTiempoExtraDto: UpdateTiempoExtraDto) {
    return this.tiempoExtraService.update(+id, updateTiempoExtraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiempoExtraService.remove(+id);
  }
}

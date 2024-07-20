import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { Tecnico } from './entities/tecnico.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { UpdateTecnico } from './dto/update-tecnico.dto';

@Injectable()
export class TecnicoService {
  constructor(
    @InjectRepository(Tecnico)
    private readonly tecnicoRepository: Repository<Tecnico>,
    @InjectRepository(User)
    private readonly usuarioRepository: Repository<User>,
    private readonly dataSource: DataSource
  ){}
  // async create(createtecnicoDto: CreateTecnicoDto) {
  //   try {
  //     // Iniciar transacción
  //     await this.dataSource.transaction(async transactionalEntityManager => {
  //       const {lastName, firstName, documento, telefono, email, password, cargo} = createtecnicoDto;
    
  //       // Crear usuario
  //       const usuario = this.usuarioRepository.create({email, password});
  //       const createUser = await transactionalEntityManager.save(usuario);
    
  //       if (createUser) {
  //         // Crear técnico y asignar usuario creado
  //         const funcionario = this.tenicoRepository.create({
  //           lastName,
  //           firstName,
  //           documento,
  //           telefono,
  //           cargo,
  //           user: createUser // Asignar el usuario creado al técnico
  //         });
    
  //         // Guardar técnico
  //         const createFuncionario = await transactionalEntityManager.save(funcionario);
    
  //         return {
  //           message: 'Cliente creado con éxito',
  //           createFuncionario
  //         };
  //       }
  //     });
  //   } catch (error) {
  //     // Manejar error, posiblemente lanzar una excepción o retornar un mensaje de error
  //     throw new Error('Error al crear el técnico y usuario');
  //   } 
      
  //   }

  async create(createtecnicoDto: CreateTecnicoDto) {
    try {
      // Iniciar transacción
      await this.dataSource.transaction(async transactionalEntityManager => {
        const {lastName, firstName, documento, telefono, email, password, cargo} = createtecnicoDto;
  
        // Crear usuario
        const usuario = this.usuarioRepository.create({email, password,lastName,
          firstName,});
        const createUser = await transactionalEntityManager.save(usuario);
  
        if (createUser) {
          // Crear técnico y asignar usuario creado
          const funcionario = this.tecnicoRepository.create({ // Corregido el error tipográfico aquí
            documento,
            telefono,
            cargo,
            user: createUser // Asignar el usuario creado al técnico
          });
  
          // Guardar técnico
          const createFuncionario = await transactionalEntityManager.save(funcionario);
  
          return {
            message: 'Cliente creado con éxito',
            createFuncionario
          };
        }
      });
    } catch (error) {
      console.error('Error al crear el técnico y usuario:', error);
      throw new Error(`Error al crear el técnico y usuario: ${error.message}`);
    } 
  }
  

  async findAll() {
    try {
      return await this.tecnicoRepository.find()
    } catch (error) {
      return{
        message: 'Error al obtener los clientes',
        error
      }
      
    }
  }

  async findOne(id: string) {
    try {
      return await this.tecnicoRepository.findOne({
        where: {
          id
        }
      
      })
    } catch (error) {
      
    }
  }

  async update(id: string, updateTecnico: UpdateTecnico) {
    try {
      const cliente = await this.tecnicoRepository.update(id, updateTecnico)
      return{
        message: 'Cliente actualizado con exito',
        // cliente
      }
    } catch (error) {
      return{
        message: 'Error al actualizar el cliente',
        error
      }
      
    }
  }

  async remove(id: string) {
    try {
      await this.tecnicoRepository.delete(id)
      return{
        message: 'Cliente eliminado con exito'
      }
    } catch (error) {
      return{
        message: 'Error al eliminar el cliente',
        error
      }
      
    }
  }
}

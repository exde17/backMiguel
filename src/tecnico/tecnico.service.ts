import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateTecnicoDto } from './dto/create-tecnico.dto';
import { Tecnico } from './entities/tecnico.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
import { UpdateTecnico } from './dto/update-tecnico.dto';
import { JwtPayload } from 'src/user/interfaces';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TecnicoService {
  constructor(
    @InjectRepository(Tecnico)
    private readonly tecnicoRepository: Repository<Tecnico>,
    @InjectRepository(User)
    private readonly usuarioRepository: Repository<User>,
    private readonly dataSource: DataSource,
    private readonly jwtService: JwtService,
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
      // Iniciar transacción y devolver el resultado de la operación
      return await this.dataSource.transaction(async transactionalEntityManager => {
        const {lastName, firstName, documento, telefono, email, password, cargo} = createtecnicoDto;
  
        // Crear usuario
        const usuario = this.usuarioRepository.create({
          email, 
          password: bcrypt.hashSync(password, 10),
          lastName,
          firstName,
        });
        const createUser = await transactionalEntityManager.save(usuario);
  
        if (createUser) {
          // Crear técnico y asignar usuario creado
          const funcionario = this.tecnicoRepository.create({
            documento,
            telefono,
            cargo,
            user: createUser // Asignar el usuario creado al técnico
          });
  
          // Guardar técnico
          const createFuncionario = await transactionalEntityManager.save(funcionario);
  
          // Devolver respuesta al finalizar la transacción
          return {
            message: 'Cliente creado con éxito',
            // createFuncionario
          };
        }
      });
    } catch (error) {
      console.error('Error al crear el técnico y usuario:', error);
      throw new Error(`Error al crear el técnico y usuario: ${error.message}`);
    } 
  }
  

  async findAllT() {
    try {
      const rest = await this.tecnicoRepository.find({
        relations: ['user'],
        where:{
          cargo: 'tecnico'
        }
      })

      const tecnico = rest.map((tecnico) => {
        const { user, ...rest } = tecnico;
        return {
          ...rest,
          email: user.email,
          lastName: user.lastName,
          firstName: user.firstName
        }
      })

      return tecnico
    } catch (error) {
      return{
        message: 'Error al obtener los clientes',
        error
      }
      
    }
  }

  async findAllCordinador() {
    try {
      const rest = await this.tecnicoRepository.find({
        relations: ['user'],
        where:{
          cargo: 'cordinador'
        }
      })

      const tecnico = rest.map((tecnico) => {
        const { user, ...rest } = tecnico;
        return {
          ...rest,
          email: user.email,
          lastName: user.lastName,
          firstName: user.firstName
        }
      })

      return tecnico
    } catch (error) {
      return{
        message: 'Error al obtener los clientes',
        error
      }
      
    }
  }

  //TRAE TODOS LOS FUNCIONARIOS
  async findAll() {
    try {
      const rest = await this.tecnicoRepository.find({
        relations: ['user']
      })

      const tecnico = rest.map((tecnico) => {
        const { user, ...rest } = tecnico;
        return {
          ...rest,
          email: user.email,
          lastName: user.lastName,
          firstName: user.firstName
        }
      })

      return tecnico
    } catch (error) {
      return{
        message: 'Error al obtener los clientes',
        error
      }
      
    }}

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

  private getJwtToken(payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }
}

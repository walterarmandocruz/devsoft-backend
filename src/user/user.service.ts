import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async findOne(username: string, password: string): Promise<User> {
        return this.userRepository.findOne({ where: {username: username, password: password} });
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
}
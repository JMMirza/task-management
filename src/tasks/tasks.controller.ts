import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipes';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  //   @Get()
  //   getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Task[] {
  //     if (Object.keys(filterDto).length) {
  //       return this.tasksService.getTasksWithFilters(filterDto);
  //     } else {
  //       return this.tasksService.getAllTasks();
  //     }
  //   }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  //   @Delete('/:id')
  //   deleteTask(@Param('id') id: string): void {
  //     this.tasksService.deleteTask(id);
  //   }
  //
  //   @Patch('/:id/status')
  //   updateTaskStatus(
  //     @Param('id') id: string,
  //     @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  //   ) {
  //     return this.tasksService.updateTaskStatus(id, status);
  //   }
}

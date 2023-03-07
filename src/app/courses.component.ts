import { Component } from "@angular/core";
import { CoursesService } from './courses.service';

@Component(
    {
        selector: 'courses',
        templateUrl: './courses.component.html'
        
    }
    )


export class CoursesComponent 
{
   title= 'Liste de mes cours';
   courses;
   //injection de dependences
   constructor(coursesService:CoursesService)
   {

    this.courses= coursesService.getCourses(); 
   }


   getTitle(){
    return this.title;
   }

}
import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService],
})
export class RecipeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  addRecipe() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}

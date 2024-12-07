import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-books",
  standalone: true,
  imports: [],
  templateUrl: "./books.component.html",
  styleUrl: "./books.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {}

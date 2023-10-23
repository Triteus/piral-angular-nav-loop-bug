import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-child-routing",
  templateUrl: "./child-routing.component.html",
  styleUrls: ["./child-routing.component.scss"],
})
export class ChildRoutingComponent implements OnInit {
  
  path$: Observable<String> | undefined;
  
  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.path$ = this.route.url.pipe(map((url) => { return url.toString() 
    }))
    this.router.navigate(["subsubpath"], { relativeTo: this.route });
  }

  onClick() {
    this.router.navigate(['test' + Math.ceil(Math.random() * 10)], {relativeTo: this.route})
  }
}

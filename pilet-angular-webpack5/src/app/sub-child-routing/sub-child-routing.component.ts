import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-sub-child-routing",
  templateUrl: "./sub-child-routing.component.html",
  styleUrls: ["./sub-child-routing.component.scss"],
})
export class SubChildRoutingComponent implements OnInit {

  path$: Observable<String> | undefined;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.path$ = this.route.url.pipe(map((url) => { return url.toString() 
    }))
  }
}

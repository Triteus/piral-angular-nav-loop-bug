import type { PiletApi } from "piral-debug-webpack5";
import { AppModule } from "./app/app.module";
import { AppComponent } from "./app/app.component";
import { NavEntryComponent } from "./app/nav-entry/nav-entry.component";

export function setup(app: PiletApi) {
  // this "teaches" Piral about the given module
  app.defineNgModule(AppModule);
  app.registerMenu("Sharing", app.fromNg(NavEntryComponent));
  // since we export the AngularPage from the defined module
  // Piral will use the AppModule for bootstrapping the Ng app
  app.registerPage("/sharing*", app.fromNg(AppComponent));
}

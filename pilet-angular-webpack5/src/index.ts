import type { PiletApi } from "piral-debug-webpack5";
import { AppModule } from "./app/app.module";
import { AppComponent } from "./app/app.component";

export function setup(app: PiletApi) {
  // this "teaches" Piral about the given module
  app.defineNgModule(AppModule);

  app.registerMenu("test", app.fromNg(AppComponent));

  // since we export the AngularPage from the defined module
  // Piral will use the AppModule for bootstrapping the Ng app
  app.registerPage("/sample", app.fromNg(AppComponent));
}

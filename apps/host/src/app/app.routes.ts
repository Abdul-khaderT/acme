import { Route } from '@angular/router';
import { AuthGuard } from "@acme/feature-auth";

export const appRoutes: Route[] = [
  {
    path: "",
    loadChildren: () => import("@acme/home").then(m => m.HomeModule),
  },
  {
    path: 'indian',
    loadChildren: () =>
      import('indian/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'american',
    loadChildren: () =>
      import('american/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: "profile",
    loadChildren: () => import("@acme/feature-profile").then(m => m.FeatureProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: "auth",
    loadChildren: () => import("@acme/feature-auth").then(m => m.FeatureAuthModule),
  },
];

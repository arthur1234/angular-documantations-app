import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule} from '@angular/flex-layout';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions
} from 'ngx-highlightjs';
import { RouterModule} from '@angular/router';
import { RoutingModule} from './shared/routing.module';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AceEditorModule} from 'ng2-ace-editor';


import { AppComponent } from './app.component';
import { DocumentComponent } from './components/document/document.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RegisterComponent} from './components/register/register.component';
import { LoginComponent} from './components/login/login.component';
import { InnerHeaderBarComponent } from './components/inner-header-bar/inner-header-bar.component';

import { AuthenticationService} from './services/authentication.service';
import { AuthGuardService} from './shared/auth-guard.service';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import {SharedModule} from './shared/shared.module';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    ImageViewerComponent,
    MainLayoutComponent,
    MainPageComponent,
    MenuComponent,
    InnerHeaderBarComponent,
    RegisterComponent,
    LoginComponent,
    WelcomePageComponent,
    CodeEditorComponent,
    EditDocumentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    HighlightModule,
    RouterModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    AceEditorModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    {

      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true
      } as HighlightOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

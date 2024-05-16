import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CustomTranslateLoaderService } from './services/custom-translate-loader.service';
import { TranslationService } from './services/translation.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        // ngx-translate and the loader module
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                // following below code will use translation file src/assets/i18n/{{en.json}}
                // useFactory: HttpLoaderFactory, 
                // deps: [HttpClient]

                // following below code will use translation file service file i.e. src/app/services/translation.service.ts
                useClass: CustomTranslateLoaderService,
                deps: [TranslationService]

            }
        })
    ],
    providers: [TranslationService],
    bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
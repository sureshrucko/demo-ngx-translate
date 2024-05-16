import { Injectable } from '@angular/core';
import { TranslationService } from './translation.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateLoaderService {
  constructor(private translationService: TranslationService) {}

  getTranslation(lang: string): Observable<any> {
    return of(this.translationService.getTranslations(lang));
  }
}

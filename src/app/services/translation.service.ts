import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations: { [lang: string]: { [key: string]: string } } = {
    en: {
      "demo.greeting": "Hello {{name}}!",
      "demo.text": "This is a simple demonstration app for ngx-translate",
      "demo.text-in-code": "Translation used from code",
      "demo.title": "Translation demo"
    },
    de: {
      "demo.greeting": "Hallo {{name}}!",
      "demo.text": "﻿Dies ist eine einfache Applikation um die Funktionen von ngx-translate zu demonstrieren.",
      "demo.text-in-code": "Verwendung von Übersetzungen im Sourcecode",
      "demo.title": "Übersetzungs-Demo"
    }
  };

  getTranslations(lang: string) {
    return this.translations[lang] || {};
  }
}

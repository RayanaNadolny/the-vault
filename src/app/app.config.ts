import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBczPEWUoqEYCaijafGY_Jqop_NDUMWPMo",
  authDomain: "the-vault-736e9.firebaseapp.com",
  projectId: "the-vault-736e9",
  storageBucket: "the-vault-736e9.appspot.com",
  messagingSenderId: "91496847383",
  appId: "1:91496847383:web:004547e53b9c7a0951e452"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)) ,
    provideFirestore(() => getFirestore())
  ]
};

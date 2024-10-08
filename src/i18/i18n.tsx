import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) 
    .init({
        resources: {
            en: {
                translation: {
                    Header: {
                        Home: "Home",
                        Contact: "Contact",
                        About: "About",
                        Sign_up: "Sign up",
                        Log_out: "Log out",
                    }
                },
            },
            az: {
                translation: {
                    Header: {
                        Home: "Ana səhifə",
                        Contact: "Əlaqə",
                        About: "Haqqımızda",
                        Sign_up: "Daxil ol",
                        Log_out: "Çıxış et",
                    }
                },
            },
        },
        lng: "en", 
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

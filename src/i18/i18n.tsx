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
                        Add: "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
                        Search: "What are you looking for?"
                    },
                    Categories: {
                        Heading: "Categories",
                        Title: "Browse By Category",
                        Category: {
                            Electronics: "Electronics",
                            HomeAndKitchen: "Home & Kitchen",
                            Fashion: "Fashion",
                            GroceryAndFood: "Grocery & Food",
                            BeautyAndPersonalCare: "Beauty & Personal Care",
                            SportsAndOutdoors: "Sports & Outdoors"
                        }
                    },
                    FlashSales: {
                        Heading: "Today's",
                        Title: "Flash Sales",
                        Countdown: {
                            Days: "days",
                            Hours: "hours",
                            Minutes: "minutes",
                            Seconds: "seconds"
                        },
                        Button: "View All Products"
                    },
                    BestSelling: {
                        Heading: "This Month",
                        Title: "Best Selling Products",
                        Button: "View All Products"
                    },
                    Footer: {
                        Subscribe: "Subscribe",
                        Discount: "Get 10% off your first order",
                        Support: "Support",
                        Account: "Account",
                        Quicklink: "Quick Link",
                        AccountData: {
                            MyAccount: "My Account",
                            Login: "Login / Register",
                            Cart: "Cart",
                            Wishlist: "Wishlist",
                            Shop: "Shop"
                        },
                        Links: {
                            Privarcy: "Privacy Policy",
                            Terms: "Terms Of Use",
                            FAQ: "FAQ",
                            Contacy: "Contact"
                        },
                        Download: "Download App",
                        Copyright: "Copyright SabuhiMv 2024. All right reserved",

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
                        Add: "Bütün Üzgüçülük Geyimlərinə Yay Endirimi və Pulsuz Ekspres Çatdırılma - 50% ENDİRİM!",
                        Search: "Nə axtarırsınız?"
                    },
                    Categories: {
                        Heading: "Kateqoriyalar",
                        Title: "Kateqoriyaya görə gözdən keçirin",
                        Category: {
                            Electronics: "Elektronika",
                            HomeAndKitchen: "Ev və Mətbəx əşyaları",
                            Fashion: "Moda",
                            GroceryAndFood: "Ərzaq və Qida",
                            BeautyAndPersonalCare: "Gözəllik və Şəxsi Baxım",
                            SportsAndOutdoors: "İdman"
                        }
                    },
                    FlashSales: {
                        Heading: "Sənə özəl",
                        Title: "Flaş Satışlar",
                        Countdown: {
                            Days: "gün",
                            Hours: "saat",
                            Minutes: "dəqiqə",
                            Seconds: "saniyə"
                        },
                        Button: "Bütün məhsullar"
                    },
                    BestSelling: {
                        Heading: "Bu ay",
                        Title: "Ən çox satılan məhsullar",
                        Button: "Bütün məhsullar",
                    },
                    Footer: {
                        Subscribe: "Abunə ol",
                        Discount: "İlk sifarişinizə 10% endirim əldə edin",
                        Support: "Dəstək",
                        Account: "Hesab",
                        Quicklink: "Sürətli keçid",
                        AccountData: {
                            MyAccount: "Hesabım",
                            Login: "Giriş / Qeydiyyat",
                            Cart: "Səbət",
                            Wishlist: "İstək siyahısı",
                            Shop: "Mağaza"
                        },
                        Links: {
                            Privarcy: "Məxfilik Siyasəti",
                            Terms: "İstifadə Şərtləri",
                            FAQ: "Tez-tez verilən suallar",
                            Contacy: "Əlaqə"
                        },
                        Download: "Proqramı yükləyin",
                        Copyright: "Copyright SabuhiMv 2024. Bütün hüquqlar qorunur"

                    }
                },
            },
        },
        lng: "az",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

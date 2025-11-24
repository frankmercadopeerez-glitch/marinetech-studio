document.addEventListener('DOMContentLoaded', () => {
    
    // --- CONFIGURACIÓN DE IDIOMAS (BILINGÜE COMPLETO) ---
    const translations = {
        en: {
            // --- NAV ---
            nav_home: "Home",
            nav_how: "How it Works",
            nav_portfolio: "Portfolio",
            nav_blog: "Insights",
            nav_faq: "FAQ",
            nav_contact: "Contact",
            
            // --- HERO ---
            hero_badge: "Specialized Maritime Digital Agency",
            hero_title: "Professional Digital Strategy for <span class='text-teal-500 italic font-serif'>Maritime Businesses</span>",
            hero_subtitle: "Google positioning and specialized web design for shipyards, charters, and marine services.",
            hero_cta: "Free Consultation",
            hero_cta_secondary: "View Portfolio",

            // --- PROBLEM SECTION ---
            prob_title: "Navigating Digital Challenges",
            prob_1_title: "Weak Digital Presence",
            prob_1_desc: "Your customers can't find you when they need you most.",
            prob_2_title: "Invisible Competitors",
            prob_2_desc: "Losing market share to newer, more digital-savvy companies.",
            prob_3_title: "No ROI on Web",
            prob_3_desc: "Websites that look good but don't generate qualified leads.",
            prob_4_title: "Technical Disconnect", // Changed title
            prob_4_desc: "Generic content fails to convince captains and engineers. We speak 'draft', 'beam', and 'propulsion' fluently.", // Improved text
            prob_5_title: "Missed Opportunities",
            prob_5_desc: "Letting high-value refit or charter contracts slip away.",

            // --- SOLUTION SECTION ---
            sol_title: "Our Strategic Approach",
            sol_step1: "Deep Evaluation",
            sol_desc1: "We analyze your specific situation, fleet, and market goals.",
            sol_step2: "Custom Strategy",
            sol_desc2: "We design a solution tailored strictly to your business needs.",
            sol_step3: "Execution & Growth",
            sol_desc3: "We implement the strategy and monitor results for continuous improvement.",

            // --- WHY US ---
            why_title: "Why MarineTech Studio?",
            why_1: "Maritime Specialists",
            why_1_d: "We know the difference between a hull and a keel.",
            why_2: "Tailored Solutions",
            why_2_d: "No cookie-cutter templates. Custom built for you.",
            why_3: "Total Transparency",
            why_3_d: "Clear communication and honest reporting.",
            why_4: "Proven Results",
            why_4_d: "Strategies focused on generating real business revenue.",

            // --- PORTFOLIO MINI ---
            port_mini_title: "Maritime Leaders Trust Us",
            port_view_all: "View All Cases",

            // --- INVESTMENT ---
            inv_title: "Investment in Your Digital Presence",
            inv_subtitle: "Custom Budgets - Starting from $400 USD",
            inv_desc_p1: "The investment varies based on project complexity, services included, implementation timeline, and specific needs.",
            inv_desc_p2: "Every project is evaluated individually. We offer solutions starting from $400 USD for small projects, to larger investments for comprehensive strategies.",
            inv_cta: "Get a Personalized Quote",

            // --- TESTIMONIALS (Dynamic Content handled in JS below) ---
            test_title: "Captain's Log",
            
            // --- CTA FINAL ---
            final_title: "Ready to Transform Your Digital Presence?",
            
            // --- FORM ---
            form_name: "Full Name",
            form_company: "Company Name",
            form_email: "Corporate Email",
            form_phone: "Phone / WhatsApp",
            form_service_label: "Service Interested In",
            opt_seo: "Google Positioning (SEO)",
            opt_web: "Web Design",
            opt_strat: "Digital Strategy",
            opt_consult: "Consultancy",
            opt_other: "Other",
            form_msg: "Tell us about your project...",
            form_btn: "Request Free Consultation",

            // --- FOOTER ---
            footer_desc: "Strategic digital solutions for the maritime industry.",
            footer_links: "Quick Links",
            footer_contact: "Contact Info",
            footer_news_title: "Digital Insights",
            footer_news_desc: "Get digital strategy tips for your marine business.",
            footer_rights: "All rights reserved.",

            // --- PAGES: FAQ ---
            faq_hero_title: "Frequently Asked Questions",
            faq_hero_sub: "Clear answers for your digital journey.",
            q1: "How long does a project take?",
            a1: "It depends on the complexity. A landing page might take 1 week, while a full corporate site with booking systems can take 4-8 weeks. We provide a timeline in our proposal.",
            q2: "Will this work for my specific niche?",
            a2: "Absolutely. We specialize in maritime. Whether you do hull cleaning, yacht charters, or shipbuilding, we understand your customer's mindset.",
            q3: "What happens after the free consultation?",
            a3: "We send you a detailed proposal with a strategy roadmap and a custom quote. No strings attached.",
            q4: "Do I need to replace my current website?",
            a4: "Not always. Sometimes we can optimize what you have. We'll tell you honestly during the evaluation if a refit or a new build is better.",
            q5: "What is included in the service?",
            a5: "It's tailored to you. It can range from SEO audits to full web development, content creation, and lead generation setups.",
            q6: "What is the minimum investment?",
            a6: "Our custom engagements start at $400 USD. We focus on delivering value that exceeds the investment.",
            q7: "What if I am not satisfied?",
            a7: "We work in milestones. You approve designs and strategies before we build. Your satisfaction is our priority.",
            q8: "Is there support after launch?",
            a8: "Yes. We offer maintenance and growth retainers to ensure your digital presence keeps performing.",

            // --- PAGES: HOW IT WORKS ---
            how_title: "Our Process",
            how_sub: "A structured approach to maritime digital success.",
            step1_title: "Discovery & Analysis",
            step1_d: "We dive deep into your business model.",
            step2_title: "Strategy & Blueprint",
            step2_d: "We map out the digital architecture.",
            step3_title: "Development & Launch",
            step3_d: "Building your digital asset with precision.",
            step4_title: "Growth & Optimization",
            step4_d: "Continuous improvement based on data.",

            // --- PAGES: PORTFOLIO ---
            port_page_title: "Success Cases",
            port_filter_all: "All",
            port_filter_ship: "Shipyards",
            port_filter_charter: "Charters",
            port_filter_repair: "Repair & Refit",
            port_filter_other: "Other",
            view_site: "View Site →",
            
            // --- PAGES: BLOG ---
            blog_page_title: "Maritime Digital Strategy: Trends & Tips",
            read_more: "Read Article",
            min_read: "min read"
        },
        es: {
            // --- NAV ---
            nav_home: "Inicio",
            nav_how: "Cómo Funciona",
            nav_portfolio: "Portafolio",
            nav_blog: "Blog",
            nav_faq: "Preguntas",
            nav_contact: "Contacto",
            
            // --- HERO ---
            hero_badge: "Agencia Digital Marítima Especializada",
            hero_title: "Estrategia Digital Profesional para <span class='text-teal-500 italic font-serif'>Empresas Marítimas</span>",
            hero_subtitle: "Posicionamiento en Google y diseño web especializado para astilleros, charters y servicios marinos.",
            hero_cta: "Consultoría Gratuita",
            hero_cta_secondary: "Ver Portafolio",

            // --- PROBLEM SECTION ---
            prob_title: "Navegando Desafíos Digitales",
            prob_1_title: "Presencia Digital Débil",
            prob_1_desc: "Tus clientes no pueden encontrarte cuando más te necesitan.",
            prob_2_title: "Competencia Invisible",
            prob_2_desc: "Perdiendo cuota de mercado ante empresas más digitales.",
            prob_3_title: "Inversión Sin Retorno",
            prob_3_desc: "Sitios web que se ven bien pero no generan clientes cualificados.",
            prob_4_title: "Desconexión Técnica", // Título mejorado
            prob_4_desc: "Tu web dice 'somos calidad' pero no explica por qué tu ingeniería naval es superior. Falta vocabulario técnico.", // Texto mejorado
            prob_5_title: "Oportunidades Perdidas",
            prob_5_desc: "Dejar escapar contratos de refit o charters de alto valor.",

            // --- SOLUTION SECTION ---
            sol_title: "Nuestro Enfoque Estratégico",
            sol_step1: "Evaluación Profunda",
            sol_desc1: "Analizamos tu situación específica, flota y objetivos de mercado.",
            sol_step2: "Estrategia Personalizada",
            sol_desc2: "Diseñamos una solución adaptada estrictamente a tu negocio.",
            sol_step3: "Implementación y Seguimiento",
            sol_desc3: "Ejecutamos la estrategia y monitoreamos resultados para mejorar.",

            // --- WHY US ---
            why_title: "¿Por Qué MarineTech?",
            why_1: "Especialistas en Marina",
            why_1_d: "Conocemos la diferencia entre casco y quilla.",
            why_2: "Soluciones a Medida",
            why_2_d: "Sin plantillas genéricas. Construido para ti.",
            why_3: "Transparencia Total",
            why_3_d: "Comunicación clara y reportes honestos.",
            why_4: "Resultados Comprobables",
            why_4_d: "Estrategias enfocadas en generar ingresos reales.",

            // --- PORTFOLIO MINI ---
            port_mini_title: "Empresas Marinas Que Confían en Nosotros",
            port_view_all: "Ver Todos los Casos",

            // --- INVESTMENT ---
            inv_title: "Inversión en Tu Presencia Digital",
            inv_subtitle: "Presupuestos Personalizados - A Partir de $400 USD",
            inv_desc_p1: "La inversión varía según la complejidad del proyecto, los servicios incluidos, el tiempo de implementación y las necesidades específicas.",
            inv_desc_p2: "Cada proyecto es evaluado individualmente. Ofrecemos soluciones desde $400 USD para proyectos pequeños, hasta inversiones mayores para estrategias integrales.",
            inv_cta: "Solicitar Propuesta Personalizada",

            // --- TESTIMONIALS (Dynamic Content) ---
            test_title: "Bitácora del Capitán",
            
            // --- CTA FINAL ---
            final_title: "¿Listo para Transformar Tu Presencia Digital?",
            
            // --- FORM ---
            form_name: "Nombre Completo",
            form_company: "Empresa",
            form_email: "Correo Corporativo",
            form_phone: "Teléfono / WhatsApp",
            form_service_label: "Servicio de Interés",
            opt_seo: "Posicionamiento en Google (SEO)",
            opt_web: "Diseño Web",
            opt_strat: "Estrategia Digital",
            opt_consult: "Consultoría",
            opt_other: "Otro",
            form_msg: "Cuéntanos sobre tu proyecto...",
            form_btn: "Solicitar Consultoría Gratuita",

            // --- FOOTER ---
            footer_desc: "Soluciones digitales estratégicas para la industria marítima.",
            footer_links: "Enlaces Rápidos",
            footer_contact: "Información de Contacto",
            footer_news_title: "Tips Digitales",
            footer_news_desc: "Recibe consejos de estrategia digital para tu negocio marino.",
            footer_rights: "Todos los derechos reservados.",

            // --- PAGES: FAQ ---
            faq_hero_title: "Preguntas Frecuentes",
            faq_hero_sub: "Respuestas claras para tu viaje digital.",
            q1: "¿Cuánto tiempo tarda un proyecto?",
            a1: "Depende de la complejidad. Una landing page puede tomar 1 semana, mientras que un sitio corporativo completo con reservas puede tomar 4-8 semanas. Proveemos un cronograma en nuestra propuesta.",
            q2: "¿Funcionará para mi nicho específico?",
            a2: "Absolutamente. Nos especializamos en marítimo. Ya sea limpieza de cascos, charters de yates o construcción naval, entendemos la mentalidad de tu cliente.",
            q3: "¿Qué pasa después de la consultoría gratuita?",
            a3: "Te enviamos una propuesta detallada con una hoja de ruta estratégica y un presupuesto personalizado. Sin compromiso.",
            q4: "¿Necesito cambiar mi sitio web actual?",
            a4: "No siempre. A veces podemos optimizar lo que ya tienes. Te diremos honestamente durante la evaluación si es mejor un 'refit' o una nueva construcción.",
            q5: "¿Qué incluye el servicio?",
            a5: "Está hecho a medida. Puede ir desde auditorías SEO hasta desarrollo web completo, creación de contenido y configuración de generación de leads.",
            q6: "¿Cuál es el mínimo de inversión?",
            a6: "Nuestros compromisos personalizados comienzan en $400 USD. Nos enfocamos en entregar valor que supere la inversión.",
            q7: "¿Qué pasa si no estoy satisfecho?",
            a7: "Trabajamos por hitos. Apruebas diseños y estrategias antes de que construyamos. Tu satisfacción es nuestra prioridad.",
            q8: "¿Hay soporte después del lanzamiento?",
            a8: "Sí. Ofrecemos mantenimiento y planes de crecimiento para asegurar que tu presencia digital siga rindiendo.",

            // --- PAGES: HOW IT WORKS ---
            how_title: "Nuestro Proceso",
            how_sub: "Un enfoque estructurado para el éxito digital marítimo.",
            step1_title: "Descubrimiento y Análisis",
            step1_d: "Profundizamos en tu modelo de negocio.",
            step2_title: "Estrategia y Planos",
            step2_d: "Mapeamos la arquitectura digital.",
            step3_title: "Desarrollo y Lanzamiento",
            step3_d: "Construyendo tu activo digital con precisión.",
            step4_title: "Crecimiento y Optimización",
            step4_d: "Mejora continua basada en datos.",

             // --- PAGES: PORTFOLIO ---
            port_page_title: "Casos de Éxito",
            port_filter_all: "Todos",
            port_filter_ship: "Astilleros",
            port_filter_charter: "Charters",
            port_filter_repair: "Reparación",
            port_filter_other: "Otros",
            view_site: "Ver Sitio →",
            
            // --- PAGES: BLOG ---
            blog_page_title: "Estrategia Digital Marina: Tendencias y Tips",
            read_more: "Leer Artículo",
            min_read: "min lectura"
        }
    };

    // --- DATOS DE RESEÑAS (BILINGÜE) ---
    const reviewsData = [
        {
            author: "James Willis",
            role: "CEO, Willis Custom Yachts",
            text_en: "Finally, an agency that understands the difference between a displacement and planing hull. The website they built for our shipyard is a masterpiece.",
            text_es: "Finalmente, una agencia que entiende la diferencia entre un casco de desplazamiento y uno de planeo. El sitio web que construyeron es una obra maestra."
        },
        {
            author: "Sarah Jenkins",
            role: "Director, TechDiving",
            text_en: "Our charter bookings increased by 40% since we launched the new platform. Professional, fast, and precise.",
            text_es: "Nuestras reservas de charter aumentaron un 40% desde que lanzamos la nueva plataforma. Profesionales, rápidos y precisos."
        },
        {
            author: "Michael T.",
            role: "Ops Manager, TBailey LLC",
            text_en: "Corporate professionalism at its finest. They handled our heavy fabrication portfolio with the seriousness it deserves.",
            text_es: "Profesionalismo corporativo en su máxima expresión. Manejaron nuestro portafolio de fabricación pesada con la seriedad que merece."
        },
        {
            author: "Capt. Roberto Garcia",
            role: "Owner, Caribe Charters",
            text_en: "We were invisible on Google. MarineTech fixed our SEO and now we are the #1 result for yacht rentals in our marina.",
            text_es: "Éramos invisibles en Google. MarineTech arregló nuestro SEO y ahora somos el resultado #1 para alquiler de yates en nuestra marina."
        },
        {
            author: "Elena V.",
            role: "Marketing, Scarano Boat",
            text_en: "They translated our heritage into a modern digital experience without losing our essence. Highly recommended.",
            text_es: "Tradujeron nuestra herencia a una experiencia digital moderna sin perder nuestra esencia. Altamente recomendados."
        },
        {
            author: "David K.",
            role: "Naval Architect",
            text_en: "Their understanding of technical specs made the project run smoothly. No time wasted explaining basic marine terms.",
            text_es: "Su comprensión de las especificaciones técnicas hizo que el proyecto fluyera. No perdimos tiempo explicando términos marinos básicos."
        }
    ];

    // --- RENDERIZAR SLIDER DE RESEÑAS ---
    function renderReviews(lang) {
        const sliderContainer = document.getElementById('reviews-slider');
        if (!sliderContainer) return;

        sliderContainer.innerHTML = ''; // Limpiar
        
        // Duplicar para efecto infinito si es necesario, o simple scroll
        reviewsData.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.className = "min-w-[300px] md:min-w-[400px] bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/5 mx-4 snap-center";
            reviewCard.innerHTML = `
                <div class="text-yellow-400 mb-4 text-xl">★★★★★</div>
                <p class="italic text-slate-300 mb-6 leading-relaxed text-sm">"${lang === 'en' ? review.text_en : review.text_es}"</p>
                <div>
                    <h4 class="font-bold text-white text-base font-serif">${review.author}</h4>
                    <p class="text-teal-400 text-xs uppercase tracking-wider">${review.role}</p>
                </div>
            `;
            sliderContainer.appendChild(reviewCard);
        });
    }

    // --- MANEJO DE IDIOMA ---
    function setLanguage(lang) {
        localStorage.setItem('preferredLang', lang);
        document.documentElement.lang = lang;
        
        // Renderizar Reseñas en el idioma correcto
        renderReviews(lang);

        // Actualizar textos estáticos
        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                // Si es un input placeholder
                if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Actualizar estilo botones toggle
        document.querySelectorAll('.lang-toggle').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('font-bold', 'text-teal-500');
                btn.classList.remove('text-slate-400');
            } else {
                btn.classList.remove('font-bold', 'text-teal-500');
                btn.classList.add('text-slate-400');
            }
        });
    }

    // Inicializar Idioma
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    setLanguage(savedLang);

    // Listeners para botones de idioma
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setLanguage(btn.dataset.lang);
        });
    });

    // --- MENU MÓVIL ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if(menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- FILTROS PORTAFOLIO ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remover activo de todos
                filterBtns.forEach(b => {
                    b.classList.remove('bg-navy', 'text-white', 'border-transparent');
                    b.classList.add('bg-white', 'text-navy', 'border-navy/20'); // Estilo Inactivo
                });
                
                // Activar actual
                btn.classList.remove('bg-white', 'text-navy', 'border-navy/20');
                btn.classList.add('bg-navy', 'text-white', 'border-transparent'); // Estilo Activo (Fuerte contraste)

                const filterValue = btn.getAttribute('data-filter');

                projectItems.forEach(item => {
                    if(filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = 1, 50);
                    } else {
                        item.style.opacity = 0;
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });
            });
        });
        
        // Activar el botón "All" por defecto visualmente si no hay ninguno activo
        if (!document.querySelector('.filter-btn.bg-navy')) {
             const allBtn = document.querySelector('[data-filter="all"]');
             if(allBtn) {
                 allBtn.classList.remove('bg-white', 'text-navy', 'border-navy/20');
                 allBtn.classList.add('bg-navy', 'text-white', 'border-transparent');
             }
        }
    }

    // --- ACORDEÓN FAQ ---
    const accordions = document.querySelectorAll('.accordion-btn');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            const icon = this.querySelector('.icon-plus');
            
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                icon.textContent = '+';
                this.classList.remove('text-teal-500');
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                icon.textContent = '-';
                this.classList.add('text-teal-500');
            } 
        });
    });

    // --- ANIMACIONES SCROLL ---
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

    // --- PRELOADER ---
    const preloader = document.getElementById('preloader');
    if(preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1200); // Tiempo visible un poco más largo para apreciar la animación
        });
    }
});
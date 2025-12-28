/**
 * MULTITECH34 - JAVASCRIPT PRODUCTION
 * Version: 5.0
 * Auteur: Bastien Ferrer
 * 
 * Code nettoyé et optimisé pour la production
 */

(function() {
    'use strict';

    // =========================================
    // CONFIGURATION
    // =========================================
    const CONFIG = {
        phone: '06 49 95 52 98',
        phoneLink: 'tel:0649955298',
        email: 'babferrer@icloud.com',
        company: 'Multitech34',
        owner: 'Bastien',
        headerOffset: 100,
        madisonDelay: 8000, // Délai avant ouverture auto du chat (8s)
        typingDelay: 1200   // Délai de frappe simulé
    };

    // =========================================
    // INITIALISATION AU CHARGEMENT
    // =========================================
    document.addEventListener('DOMContentLoaded', () => {
        initMobileMenu();
        initSmoothScroll();
        initMadisonAI();
        initLazyLoading();
        console.log(`✅ ${CONFIG.company} v5.0 - Système initialisé`);
    });

    // =========================================
    // 1. MENU MOBILE
    // =========================================
    function initMobileMenu() {
        const btn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');
        
        if (!btn || !menu) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !menu.classList.contains('hidden');
            
            menu.classList.toggle('hidden');
            updateMenuIcon(btn, !isOpen);
        });

        // Fermer en cliquant ailleurs
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                    updateMenuIcon(btn, false);
                }
            }
        });

        // Fermer avec Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                updateMenuIcon(btn, false);
            }
        });
    }

    function updateMenuIcon(btn, isOpen) {
        const icon = btn.querySelector('i');
        if (!icon) return;
        
        icon.classList.remove(isOpen ? 'fa-bars' : 'fa-times');
        icon.classList.add(isOpen ? 'fa-times' : 'fa-bars');
    }

    // =========================================
    // 2. SCROLL FLUIDE
    // =========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '#!') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;

                e.preventDefault();
                
                const offsetPosition = targetElement.getBoundingClientRect().top 
                    + window.pageYOffset 
                    - CONFIG.headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Fermer le menu mobile si ouvert
                const menu = document.getElementById('mobile-menu');
                if (menu && !menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            });
        });
    }

    // =========================================
    // 3. MADISON AI - ASSISTANT VIRTUEL
    // =========================================
    
    // Base de connaissances professionnelle
    const KNOWLEDGE_BASE = [
        {
            keywords: ['urgence', 'fuite', 'inondation', 'eau partout', 'catastrophe', 'vite'],
            response: `🚨 <strong>Urgence détectée !</strong><br>
                N'attendez pas, appelez immédiatement ${CONFIG.owner} :<br>
                <a href="${CONFIG.phoneLink}" class="font-bold text-red-600 text-lg">${CONFIG.phone}</a><br>
                <span class="text-xs text-gray-500">Intervention 24h/24, 7j/7</span>`,
            priority: 10
        },
        {
            keywords: ['prix', 'tarif', 'combien', 'devis', 'coût', 'budget', 'cher'],
            response: `💰 Excellente question ! Voici nos tarifs indicatifs :<br><br>
                • <strong>Diagnostic urgence :</strong> 89€ TTC<br>
                • <strong>Entretien chaudière :</strong> dès 99€/an<br>
                • <strong>Entretien clim :</strong> dès 89€<br><br>
                ${CONFIG.owner} préfère toujours voir sur place avant de chiffrer précisément. 
                <a href="contact.html" class="text-primary font-bold">Demandez un devis gratuit</a> !`
        },
        {
            keywords: ['climatisation', 'clim', 'split', 'gainable', 'froid', 'chaud'],
            response: `❄️ <strong>Climatisation ?</strong> Vous êtes au bon endroit !<br><br>
                ${CONFIG.owner} installe et entretient :<br>
                • Mono-split & Multi-split<br>
                • Gainable (luxe invisible)<br>
                • Clim réversible chaud/froid<br><br>
                <strong>Spécialité :</strong> Traitement anti-corrosion pour le littoral 🌊<br>
                <a href="climatisation.html" class="text-primary font-bold">En savoir plus →</a>`
        },
        {
            keywords: ['chauffage', 'chaudière', 'radiateur', 'pac', 'pompe à chaleur', 'froid chez moi'],
            response: `🔥 <strong>Problème de chauffage ?</strong><br><br>
                ${CONFIG.owner} est certifié <strong>RGE QualiPAC</strong>. Il s'occupe de :<br>
                • Entretien chaudière gaz (obligatoire)<br>
                • Installation pompe à chaleur<br>
                • Désembouage radiateurs<br><br>
                <a href="chauffage.html" class="text-primary font-bold">Voir les solutions →</a>`
        },
        {
            keywords: ['calcaire', 'adoucisseur', 'tartre', 'eau dure', 'blanc', 'entartré'],
            response: `🚰 <strong>Le calcaire, ce fléau !</strong><br><br>
                À Montpellier/Lattes, l'eau est très dure (TH > 30°f). Résultat :<br>
                • Robinetterie qui blanchit<br>
                • Chauffe-eau qui claque prématurément<br>
                • Peau qui tire<br><br>
                <strong>Solution :</strong> Adoucisseur volumétrique posé par ${CONFIG.owner}.<br>
                <a href="plomberie.html" class="text-primary font-bold">Protégez votre maison →</a>`
        },
        {
            keywords: ['sel', 'mer', 'littoral', 'rouille', 'corrosion', 'palavas', 'grande-motte', 'grau'],
            response: `🌊 <strong>Vous êtes en bord de mer ?</strong><br><br>
                L'air salin attaque les clims standards en 3 ans !<br>
                ${CONFIG.owner} installe du matériel traité <strong>"Blue Fin"</strong> anti-corrosion.<br><br>
                <a href="littoral.html" class="text-primary font-bold">Solutions littoral →</a>`
        },
        {
            keywords: ['boue', 'radiateur froid', 'désembouage', 'circuit', 'bas froid'],
            response: `♨️ <strong>Radiateur froid en bas ?</strong><br><br>
                C'est de la boue (oxydes métalliques) qui s'accumule. Conséquences :<br>
                • +15% sur la facture<br>
                • Usure prématurée de la chaudière<br><br>
                <strong>Solution :</strong> Désembouage hydrodynamique par ${CONFIG.owner}.<br>
                <a href="chauffage.html" class="text-primary font-bold">En savoir plus →</a>`
        },
        {
            keywords: ['lattes', 'montpellier', 'mauguio', 'pérols', 'secteur', 'zone', 'où', 'intervient'],
            response: `📍 <strong>Zone d'intervention :</strong><br><br>
                • <strong>Base :</strong> Lattes (intervention < 30min)<br>
                • Montpellier et métropole<br>
                • Littoral : Palavas → Grau-du-Roi<br><br>
                <a href="lattes.html" class="text-primary font-bold">Voir les zones →</a>`
        },
        {
            keywords: ['syndic', 'copropriété', 'bailleur', 'agence', 'locataire', 'professionnel'],
            response: `🏢 <strong>Vous êtes un professionnel ?</strong><br><br>
                ${CONFIG.owner} propose des <strong>contrats d'astreinte</strong> pour syndics et bailleurs :<br>
                • Intervention prioritaire 24/7<br>
                • Rapport photo immédiat<br>
                • Tarifs négociés<br><br>
                <a href="depannage.html" class="text-primary font-bold">Offres pros →</a>`
        },
        {
            keywords: ['kit', 'diy', 'moi-même', 'produit', 'acheter', 'boutique'],
            response: `🧰 <strong>Envie de le faire vous-même ?</strong><br><br>
                Découvrez nos kits DIY professionnels :<br>
                • Kit entretien clim : 39€<br>
                • Kit urgence plomberie : 29€<br>
                • Vidéo tuto incluse !<br><br>
                <a href="boutique.html" class="text-primary font-bold">Voir la boutique →</a>`
        },
        {
            keywords: ['contrat', 'entretien', 'annuel', 'maintenance', 'abonnement'],
            response: `📋 <strong>Contrats d'entretien annuels :</strong><br><br>
                • Chaudière gaz : 99€/an<br>
                • Clim réversible : 129€/an<br>
                • Pack maison complète : 279€/an<br><br>
                <strong>Avantage :</strong> -15% sur tous les dépannages !<br>
                <a href="boutique.html#services" class="text-primary font-bold">Souscrire →</a>`
        },
        {
            keywords: ['bonjour', 'salut', 'hello', 'coucou', 'hey', 'bonsoir'],
            response: `Bonjour ! 👋<br><br>
                Je suis Madison, l'assistante virtuelle de ${CONFIG.owner}.<br>
                Comment puis-je vous aider aujourd'hui ?<br><br>
                <em class="text-xs text-gray-500">Tapez votre question ou décrivez votre problème...</em>`
        },
        {
            keywords: ['merci', 'super', 'génial', 'parfait', 'top'],
            response: `Avec plaisir ! 😊<br><br>
                N'hésitez pas si vous avez d'autres questions.<br>
                Et si vous voulez parler directement à ${CONFIG.owner} :<br>
                <a href="${CONFIG.phoneLink}" class="font-bold text-primary">${CONFIG.phone}</a>`
        }
    ];

    let isChatOpen = false;

    function initMadisonAI() {
        // Ouvrir automatiquement après un délai (si pas déjà vu)
        if (!sessionStorage.getItem('madison_shown')) {
            setTimeout(() => {
                if (!isChatOpen) {
                    // On ne force plus l'ouverture, juste on garde le bouton visible
                    // L'utilisateur cliquera s'il veut
                }
            }, CONFIG.madisonDelay);
        }

        // Gestion de la touche Entrée
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && document.activeElement.id === 'madisonInput') {
                window.sendMessage();
            }
        });
    }

    // Fonction globale : Toggle chat
    window.toggleMadison = function() {
        const chat = document.getElementById('madisonChat');
        const messages = document.getElementById('madisonMessages');
        
        if (!chat || !messages) return;

        isChatOpen = !isChatOpen;
        chat.classList.toggle('active');
        sessionStorage.setItem('madison_shown', 'true');

        // Message de bienvenue si premier affichage
        if (isChatOpen && messages.children.length === 0) {
            addMessage(
                `Bonjour ! 👋 Je suis <strong>Madison</strong>, l'assistante virtuelle de ${CONFIG.owner}.<br><br>
                Une fuite ? Un projet clim ? Dites-moi tout, je vous oriente !`,
                'madison'
            );
        }
    };

    // Fonction globale : Envoyer message
    window.sendMessage = function() {
        const input = document.getElementById('madisonInput');
        if (!input) return;

        const text = input.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        input.value = '';
        
        processMessage(text);
    };

    // Traitement du message utilisateur
    function processMessage(text) {
        showTyping();
        
        setTimeout(() => {
            hideTyping();
            
            const lowerText = text.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, ''); // Supprime les accents pour la recherche

            // Chercher la meilleure correspondance
            let bestMatch = null;
            let bestScore = 0;

            for (const item of KNOWLEDGE_BASE) {
                const score = item.keywords.reduce((acc, keyword) => {
                    const normalizedKeyword = keyword.toLowerCase()
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '');
                    return acc + (lowerText.includes(normalizedKeyword) ? 1 : 0);
                }, 0);

                // Bonus pour priorité
                const finalScore = score + (item.priority || 0);

                if (finalScore > bestScore) {
                    bestScore = finalScore;
                    bestMatch = item;
                }
            }

            if (bestMatch && bestScore > 0) {
                addMessage(bestMatch.response, 'madison');
            } else {
                // Réponse par défaut
                addMessage(
                    `🤔 Je ne suis pas certaine de bien comprendre...<br><br>
                    Pour une réponse précise, le mieux est d'appeler ${CONFIG.owner} directement :<br>
                    <a href="${CONFIG.phoneLink}" class="font-bold text-primary text-lg">${CONFIG.phone}</a><br><br>
                    <span class="text-xs text-gray-500">Ou essayez de reformuler votre question !</span>`,
                    'madison'
                );
            }
        }, CONFIG.typingDelay);
    }

    // Afficher un message dans le chat
    function addMessage(html, sender) {
        const container = document.getElementById('madisonMessages');
        if (!container) return;

        const div = document.createElement('div');
        div.className = `flex mb-4 ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
        
        const avatar = sender === 'madison' 
            ? `<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-2 shrink-0 shadow-sm">M</div>` 
            : '';

        const bubbleClass = sender === 'user' 
            ? 'bg-primary text-white rounded-br-none' 
            : 'bg-gray-100 text-gray-800 rounded-bl-none';

        div.innerHTML = `
            ${avatar}
            <div class="message-bubble p-3 rounded-2xl text-sm max-w-[85%] shadow-sm ${bubbleClass}">
                ${html}
            </div>
        `;
        
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    // Indicateur de frappe
    function showTyping() {
        const container = document.getElementById('madisonMessages');
        if (!container) return;

        const div = document.createElement('div');
        div.id = 'typingIndicator';
        div.className = 'flex justify-start mb-4 items-center';
        div.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-2">M</div>
            <div class="bg-gray-100 p-3 rounded-2xl rounded-bl-none flex space-x-1">
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
        `;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    function hideTyping() {
        const el = document.getElementById('typingIndicator');
        if (el) el.remove();
    }

    // =========================================
    // 4. LAZY LOADING IMAGES
    // =========================================
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const lazyImages = document.querySelectorAll('img[data-src]');
            
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    // =========================================
    // 5. UTILITAIRES EXPOSÉS
    // =========================================
    window.Multitech34 = {
        config: CONFIG,
        version: '5.0',
        
        // Fonction utilitaire pour tracking (à connecter à Google Analytics)
        trackEvent: function(category, action, label) {
            if (typeof gtag === 'function') {
                gtag('event', action, {
                    'event_category': category,
                    'event_label': label
                });
            }
            console.log(`📊 Event: ${category} / ${action} / ${label}`);
        }
    };

})();

# Guide rapide - Maquette ClinVCF-OS

## Aperçu visuel de la structure

### Vue d'ensemble de la page (1440px width)

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  HEADER (Fixed, 64px height, white bg)                        ┃
┃  Logo | Menu | Lang | CTA                                     ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  HERO SECTION (gradient gray-50 → white, pt-128 pb-80)        ┃
┃                                                                ┃
┃            Plateforme modulaire d'analyse...                   ┃
┃               (60px, bold, centered)                           ┃
┃                                                                ┃
┃        Solution unifiée pour le chargement...                  ┃
┃                  (20px, gray-600)                              ┃
┃                                                                ┃
┃        [Télécharger]  [Explorer SDK]                           ┃
┃                                                                ┃
┃     ✓ 2 minutes  ✓ Multi-plateforme  ✓ Aucune télémétrie     ┃
┃                                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  DASHBOARD PREVIEW (white bg, py-80)                           ┃
┃                                                                ┃
┃          Interface intuitive et puissante                      ┃
┃                                                                ┃
┃  ┌──────────────────────────────────────────────────────┐     ┃
┃  │ [VCF Loader] [Data Viewer] [PredSoma] [PredConst]   │     ┃
┃  ├──────────────────────────────────────────────────────┤     ┃
┃  │  Gene  │  Variant    │  ClinVar         │  Impact   │     ┃
┃  ├──────────────────────────────────────────────────────┤     ┃
┃  │  BRCA1 │  c.5266dupC │  🔴 Pathogenic   │  🔴 High  │     ┃
┃  │  TP53  │  c.524G>A   │  🟠 Likely path  │  🔴 High  │     ┃
┃  │  EGFR  │  c.2573T>G  │  🟡 Uncertain    │  🟠 Mod   │     ┃
┃  │  KRAS  │  c.35G>A    │  🟢 Benign       │  🔵 Low   │     ┃
┃  └──────────────────────────────────────────────────────┘     ┃
┃                                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  PHILOSOPHY SECTION (gray-50 bg, py-80)                        ┃
┃                                                                ┃
┃                  Notre philosophie                             ┃
┃                                                                ┃
┃  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           ┃
┃  │    ⭕ 01    │  │    ⭕ 02    │  │    ⭕ 03    │           ┃
┃  │             │  │             │  │             │           ┃
┃  │  Plateforme │  │  Écosystème │  │ Développemt │           ┃
┃  │   ouverte   │  │  modulaire  │  │ communauté  │           ┃
┃  │             │  │             │  │             │           ┃
┃  │  [desc...]  │  │  [desc...]  │  │  [desc...]  │           ┃
┃  │             │  │             │  │             │           ┃
┃  └─────────────┘  └─────────────┘  └─────────────┘           ┃
┃                                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  MODULES SECTION (white bg, py-80)                             ┃
┃                                                                ┃
┃              🟢 Gratuit - Système de base                      ┃
┃                                                                ┃
┃  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           ┃
┃  │ VCF Loader🔗│  │Data Viewer🔗│  │Basic Annot🔗│           ┃
┃  │ • Feature 1 │  │ • Feature 1 │  │ • Feature 1 │           ┃
┃  │ • Feature 2 │  │ • Feature 2 │  │ • Feature 2 │           ┃
┃  │ • Feature 3 │  │ • Feature 3 │  │ • Feature 3 │           ┃
┃  │ • Feature 4 │  │ • Feature 4 │  │ • Feature 4 │           ┃
┃  │─────────────│  │─────────────│  │─────────────│           ┃
┃  │Community: ∞ │  │Community: ∞ │  │Community: ∞ │           ┃
┃  └─────────────┘  └─────────────┘  └─────────────┘           ┃
┃                                                                ┃
┃              🟣 Premium - Modules avancés                      ┃
┃                                                                ┃
┃  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           ┃
┃  │ PredSoma 🔗 │  │PredConst 🔗 │  │ Advanced  🔗│           ┃
┃  │ • Feature 1 │  │ • Feature 1 │  │ Analytics   │           ┃
┃  │ • Feature 2 │  │ • Feature 2 │  │ • Feature 1 │           ┃
┃  │ • Feature 3 │  │ • Feature 3 │  │ • Feature 2 │           ┃
┃  │ • Feature 4 │  │ • Feature 4 │  │ • Feature 3 │           ┃
┃  │─────────────│  │─────────────│  │─────────────│           ┃
┃  │ Requis:Pro+ │  │ Requis:Pro+ │  │ Requis:Team │           ┃
┃  └─────────────┘  └─────────────┘  └─────────────┘           ┃
┃                                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  PRICING SECTION (gray-50 bg, py-80)                           ┃
┃                                                                ┃
┃                 Tarifs transparents                            ┃
┃                                                                ┃
┃  ┌──────┐  ┌──────────┐  ┌──────┐  ┌──────┐                  ┃
┃  │Commty│  │🔥 PRO 🔥 │  │ Team │  │Enter-│                  ┃
┃  │      │  │Early -40%│  │Early │  │prise │                  ┃
┃  │Gratuit  │  29€/mois│  │199€  │  │ Sur  │                  ┃
┃  │      │  │          │  │/mois │  │mesure│                  ┃
┃  │[Télé]│  │[S'aboner]│  │[S'ab]│  │[Cont]│                  ┃
┃  │      │  │          │  │      │  │      │                  ┃
┃  │✓ 6   │  │✓ 8       │  │✓ 9   │  │✓ 9   │                  ┃
┃  │items │  │items     │  │items │  │items │                  ┃
┃  │      │  │          │  │      │  │      │                  ┃
┃  └──────┘  └──────────┘  └──────┘  └──────┘                  ┃
┃             ↑ HIGHLIGHTED (ring-2 blue-600, scale-105)        ┃
┃                                                                ┃
┃      Tous les prix HT. Mensuel ou annuel (-20%)                ┃
┃                                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  FAQ SECTION (white bg, py-80, max-w-4xl)                      ┃
┃                                                                ┃
┃              Questions fréquentes                              ┃
┃                                                                ┃
┃  ┌────────────────────────────────────────────────────┐       ┃
┃  │ ClinVCF-OS est-il vraiment gratuit ?           ⌄  │       ┃
┃  └────────────────────────────────────────────────────┘       ┃
┃  ┌────────────────────────────────────────────────────┐       ┃
┃  │ Puis-je utiliser en contexte clinique ?        ⌄  │       ┃
┃  └────────────────────────────────────────────────────┘       ┃
┃  ┌────────────────────────────────────────────────────┐       ┃
┃  │ Comment sont protégées mes données ?            ⌄  │       ┃
┃  ├────────────────────────────────────────────────────┤       ┃
┃  │ Aucune donnée n'est envoyée à nos serveurs...     │ ← OPEN┃
┃  └────────────────────────────────────────────────────┘       ┃
┃  [...6 autres questions...]                                    ┃
┃                                                                ┃
┃  ┌────────────────────────────────────────────────────┐       ┃
┃  │         Vous avez d'autres questions ?             │       ┃
┃  │     Notre équipe support est là pour vous aider    │       ┃
┃  │              [Contacter le support]                │       ┃
┃  └────────────────────────────────────────────────────┘       ┃
┃                                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  FOOTER (gray-900 bg, white/gray-300 text, py-48)             ┃
┃                                                                ┃
┃  ┌────────────┬──────┬──────────┬──────────┬──────┐          ┃
┃  │ ClinVCF-OS │PRODUT│DÉVELOPPRS│ENTREPRISE│LÉGAL │          ┃
┃  │            │      │          │          │      │          ┃
┃  │ Plateforme │Philos│Documenta │À propos  │Mentio│          ┃
┃  │ open-src...|Module│API Ref   │Blog      │Confid│          ┃
┃  │            │ClinSt│SDK       │Carrières │CGU   │          ┃
┃  │ 🐙 🐦 💼 ✉️│Pricing│GitHub   │Contact   │Cookie│          ┃
┃  │            │Down  │Changelog │          │      │          ┃
┃  └────────────┴──────┴──────────┴──────────┴──────┘          ┃
┃  ─────────────────────────────────────────────────────        ┃
┃  © 2026 ClinVCF-OS...    Made with ❤️ for genomics            ┃
┃                                                                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Checklist de création Figma

### Phase 1: Setup (30 min)
- [ ] Créer nouveau fichier Figma
- [ ] Page 1: "Design System"
- [ ] Page 2: "Landing Page" (Frame 1440px)
- [ ] Installer plugin Iconify (pour Lucide icons)

### Phase 2: Design System (45 min)
- [ ] **Couleurs** (30 styles):
  - [ ] Blue: 600, 700, 50, 100, 200
  - [ ] Purple: 600, 50, 100, 200, 400
  - [ ] Green: 500, 100, 800
  - [ ] Red: 100, 800
  - [ ] Orange: 100, 800
  - [ ] Yellow: 100, 800
  - [ ] Gray: 900, 700, 600, 500, 400, 300, 200, 100, 50
  - [ ] White, Black

- [ ] **Typographie** (12 styles):
  - [ ] H1 Hero: 60px Bold
  - [ ] H2 Section: 36px Bold
  - [ ] H3 Card: 24px Bold
  - [ ] H4: 20px Bold
  - [ ] Body XL: 20px Regular
  - [ ] Body LG: 18px Regular
  - [ ] Body Base: 16px Regular
  - [ ] Body SM: 14px Regular
  - [ ] Body XS: 12px Regular
  - [ ] Button LG: 18px Semibold
  - [ ] Button Base: 16px Semibold
  - [ ] Button SM: 14px Semibold

- [ ] **Composants**:
  - [ ] Button (3 variantes: Primary, Secondary, Tertiary)
  - [ ] Badge (4 variantes de couleur)
  - [ ] Card Module
  - [ ] Card Pricing
  - [ ] Language Toggle
  - [ ] Social Icon
  - [ ] Accordion Item

### Phase 3: Header (20 min)
- [ ] Frame 1440×64px, bg-white
- [ ] Logo "ClinVCF-OS" (bleu)
- [ ] 7 menu items
- [ ] Language toggle FR/EN
- [ ] Button CTA "Télécharger"
- [ ] Ajouter border-bottom 1px gray-200

### Phase 4: Hero Section (30 min)
- [ ] Frame 1440px, gradient bg gray-50→white
- [ ] H1 centré (max-width 896px)
- [ ] Mot "modulaire" en bleu
- [ ] Sous-titre 20px
- [ ] 2 CTA buttons (gap 16px)
- [ ] 3 features avec icons CheckCircle

### Phase 5: Dashboard Preview (45 min)
- [ ] Container bg-gray-50 + shadow-2xl
- [ ] 4 module tabs avec icons
- [ ] Table header bg-gray-100
- [ ] 4 lignes de données
- [ ] Badges ClinVar colorés (rouge, orange, jaune, vert)
- [ ] Badges Impact colorés

### Phase 6: Philosophy (30 min)
- [ ] 3 cartes en grid
- [ ] Numéros circulaires 01, 02, 03
- [ ] Titres + descriptions
- [ ] Hover effect: shadow-xl

### Phase 7: Modules (45 min)
- [ ] Section "Gratuit": 3 cartes
- [ ] Section "Premium": 3 cartes
- [ ] Icon ExternalLink sur chaque carte
- [ ] Liste de features avec puces
- [ ] Footer notes

### Phase 8: Pricing (60 min)
- [ ] 4 cartes en grid
- [ ] Badge "Early Adopter" sur 2 cartes
- [ ] Carte "Pro" highlighted (ring + scale)
- [ ] Prix en grand (36px)
- [ ] Listes de features avec checkmarks
- [ ] Note bas de page

### Phase 9: FAQ (40 min)
- [ ] 9 accordion items
- [ ] ChevronDown icons
- [ ] Un item en état "open" (exemple)
- [ ] CTA box bleu en bas

### Phase 10: Footer (30 min)
- [ ] Background gray-900
- [ ] 5 colonnes
- [ ] 4 social icons
- [ ] Tous les liens
- [ ] Bottom bar avec copyright

### Phase 11: Finitions (30 min)
- [ ] Vérifier tous les espacements
- [ ] Tester la cohérence des couleurs
- [ ] Ajouter états hover sur boutons
- [ ] Nommer tous les layers clairement
- [ ] Organiser en frames nommés
- [ ] Créer composants des éléments répétés

### Phase 12: Documentation (15 min)
- [ ] Activer Dev Mode
- [ ] Ajouter annotations si nécessaire
- [ ] Partager lien avec stagiaire
- [ ] Fournir les 2 guides MD

---

## Temps total estimé: 6h30

Répartition optimale sur 2 jours:
- **Jour 1** (3h): Phases 1-6 (Setup → Philosophy)
- **Jour 2** (3h30): Phases 7-12 (Modules → Documentation)

---

## Raccourcis Figma utiles

- **Créer frame**: `F`
- **Créer texte**: `T`
- **Créer rectangle**: `R`
- **Créer cercle**: `O`
- **Auto Layout**: `Shift + A`
- **Composant**: `Cmd/Ctrl + Alt + K`
- **Dupliquer**: `Cmd/Ctrl + D`
- **Copier style**: `Cmd/Ctrl + Alt + C`
- **Coller style**: `Cmd/Ctrl + Alt + V`
- **Mesurer**: Sélectionner + `Alt`
- **Zoom 100%**: `Cmd/Ctrl + 0`
- **Frame to selection**: `Cmd/Ctrl + Alt + G`

---

## Plugins Figma recommandés

1. **Iconify** - Pour importer les Lucide icons
2. **Auto Layout** - Facilite les layouts
3. **Color Palettes** - Gérer les couleurs
4. **Lorem Ipsum** - Texte de remplacement (si besoin)
5. **Unsplash** - Images placeholder (optionnel)

---

## Export pour développement

Une fois terminé:

1. **Partager le fichier**:
   - Lien avec permission "Can view"
   - Activer "Dev Mode" pour les specs CSS

2. **Exporter les assets**:
   - Logo en SVG
   - Icons en SVG (si customs)
   - Images en PNG/JPG

3. **Documentation**:
   - Fournir `FIGMA_DESIGN_GUIDE.md`
   - Fournir `CONTENT_COPY.md`
   - Fournir ce fichier `QUICK_REFERENCE.md`

4. **Handoff au stagiaire**:
   - Lien Figma
   - Les 3 fichiers MD
   - Accès au code source React actuel (référence)

---

## Notes finales

✅ **Version web fonctionnelle**: Disponible dans `/src/app/`
✅ **Guide détaillé**: `FIGMA_DESIGN_GUIDE.md` (spécifications complètes)
✅ **Contenu**: `CONTENT_COPY.md` (tous les textes à copier)
✅ **Référence rapide**: Ce fichier (vue d'ensemble)

Le stagiaire aura ainsi:
1. Une maquette Figma professionnelle
2. Une version web fonctionnelle de référence
3. Documentation complète pour reproduire le site à l'identique

🎯 Objectif atteint: Maquette fidèle au site original avec toutes les specs pour le développement.

# Guide de création de la maquette Figma - ClinVCF-OS

## Table des matières
1. [Palette de couleurs](#palette-de-couleurs)
2. [Typographie](#typographie)
3. [Espacements et grille](#espacements-et-grille)
4. [Structure des sections](#structure-des-sections)
5. [Composants réutilisables](#composants-réutilisables)

---

## Palette de couleurs

### Couleurs principales
- **Bleu primaire**: `#2563EB` (bg-blue-600)
- **Bleu hover**: `#1D4ED8` (bg-blue-700)
- **Bleu clair**: `#DBEAFE` (bg-blue-50)
- **Bleu border**: `#BFDBFE` (border-blue-200)

### Couleurs secondaires
- **Violet/Purple**: `#9333EA` (bg-purple-600)
- **Violet clair**: `#FAF5FF` (bg-purple-50)
- **Violet border**: `#E9D5FF` (border-purple-200)

### Couleurs de statut
- **Vert (Success)**: `#10B981` (text-green-500)
- **Vert clair**: `#D1FAE5` (bg-green-100)
- **Rouge (Danger)**: `#EF4444` (text-red-800)
- **Rouge clair**: `#FEE2E2` (bg-red-100)
- **Orange (Warning)**: `#F59E0B` (text-orange-800)
- **Orange clair**: `#FFEDD5` (bg-orange-100)
- **Jaune**: `#FEF3C7` (bg-yellow-100)

### Nuances de gris
- **Gris 900**: `#111827` (text-gray-900) - Titres
- **Gris 700**: `#374151` (text-gray-700) - Texte secondaire
- **Gris 600**: `#4B5563` (text-gray-600) - Corps de texte
- **Gris 500**: `#6B7280` (text-gray-500)
- **Gris 400**: `#9CA3AF` (text-gray-400)
- **Gris 300**: `#D1D5DB` (border-gray-300)
- **Gris 200**: `#E5E7EB` (border-gray-200)
- **Gris 100**: `#F3F4F6` (bg-gray-100)
- **Gris 50**: `#F9FAFB` (bg-gray-50)

### Couleurs spéciales
- **Blanc**: `#FFFFFF`
- **Noir footer**: `#111827` (bg-gray-900)

---

## Typographie

### Police
- **Famille**: System font stack (Inter, SF Pro, Segoe UI, Roboto, sans-serif)

### Hiérarchie des tailles

#### Titres
- **H1 Hero**: 60px (3.75rem) | Bold | Line-height: 1.1
- **H2 Sections**: 36px (2.25rem) | Bold | Line-height: 1.2
- **H3 Cards**: 24px (1.5rem) | Bold | Line-height: 1.3
- **H4 Sous-titres**: 20px (1.25rem) | Bold | Line-height: 1.4

#### Corps de texte
- **XL**: 20px (1.25rem) | Regular | Line-height: 1.7
- **LG**: 18px (1.125rem) | Regular | Line-height: 1.6
- **Base**: 16px (1rem) | Regular | Line-height: 1.5
- **SM**: 14px (0.875rem) | Regular | Line-height: 1.5
- **XS**: 12px (0.75rem) | Regular | Line-height: 1.4

#### Poids de police
- **Bold**: 700
- **Semibold**: 600
- **Medium**: 500
- **Regular**: 400

---

## Espacements et grille

### Système d'espacement (multiple de 4px)
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **6**: 24px
- **8**: 32px
- **10**: 40px
- **12**: 48px
- **16**: 64px
- **20**: 80px

### Container principal
- **Max-width**: 1280px (max-w-7xl)
- **Padding horizontal**: 
  - Mobile: 16px (px-4)
  - Tablet: 24px (sm:px-6)
  - Desktop: 32px (lg:px-8)

### Sections
- **Padding vertical**: 80px (py-20)
- **Espacement entre sections**: Alternance bg-white / bg-gray-50

### Grilles
- **Modules (3 colonnes)**: gap: 24px (gap-6)
- **Pricing (4 colonnes)**: gap: 24px (gap-6)
- **Footer (5 colonnes)**: gap: 32px (gap-8)

---

## Structure des sections

### 1. HEADER (Sticky)
**Dimensions**: Hauteur 64px (h-16)

**Structure**:
```
┌─────────────────────────────────────────────────────────┐
│ Logo (20px) | Menu Items | Lang Toggle | CTA Button    │
│ (spacing-x: 32px entre items)                           │
└─────────────────────────────────────────────────────────┘
```

**Composants**:
- **Logo**: "ClinVCF-OS" | 20px | Bold | Bleu #2563EB
- **Menu items**: 14px | Medium | Gris-700
- **Language toggle**: 2 boutons 40px × 32px | Border gris-300
  - Active: bg-blue-600 + text-white
  - Inactive: bg-white + text-gray-700
- **CTA Button**: 
  - Padding: 8px 16px
  - Icon: Download (16px)
  - Bg: blue-600
  - Rounded: 6px
  - Shadow: subtle

**États**:
- Hover menu: text-blue-600
- Border bottom: 1px solid gray-200
- Background: white
- Position: Fixed top

---

### 2. HERO SECTION
**Background**: Gradient (gray-50 → white)
**Padding top**: 128px (pt-32) - pour compenser le header sticky
**Padding bottom**: 80px (pb-20)

**Structure**:
```
┌─────────────────────────────────────────┐
│         [Titre H1 centré]               │
│                                         │
│    [Sous-titre XL gris-600]            │
│                                         │
│  [CTA Primaire] [CTA Secondaire]       │
│                                         │
│  ✓ Feature 1  ✓ Feature 2  ✓ Feature 3│
└─────────────────────────────────────────┘
```

**Éléments**:
- **H1**: Max-width 896px (max-w-4xl) | Centré
  - "Plateforme **modulaire** d'analyse..."
  - Mot "modulaire" en bleu-600
- **Sous-titre**: 20px | gris-600 | mb-40px
- **CTAs**: 
  - Espacement: 16px (gap-4)
  - Padding: 16px 32px (px-8 py-4)
  - Border-radius: 8px
  - Font-size: 18px
  - Primaire: bg-blue-600 + shadow-lg
  - Secondaire: border 2px blue-600 + bg-white
- **Features tagline**:
  - Icône CheckCircle (18px) verte
  - Texte: 14px | gris-600
  - Gap entre items: 24px

---

### 3. DASHBOARD PREVIEW
**Background**: White
**Padding**: 80px vertical

**Titre section**: Centré | mb-64px
- H2: 36px | Bold | mb-16px
- Description: 20px | gris-600

**Mockup Dashboard**:
```
┌──────────────────────────────────────────┐
│ [Module Tabs Row]                        │
│ ┌──────────────────────────────────────┐ │
│ │ Gene | Variant | ClinVar | Impact    │ │
│ ├──────────────────────────────────────┤ │
│ │ [Row data...]                        │ │
│ └──────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

**Spécifications**:
- Container: bg-gray-50 | rounded-2xl | shadow-2xl | border gray-200
- **Module tabs**:
  - Padding: 16px
  - Gap: 8px
  - Chaque tab: px-16px py-8px | rounded-lg
  - Free modules: border-{color}-200 + bg-{color}-50
  - Premium: border-purple-200 + bg-purple-50 + badge "Premium"
- **Table**:
  - Header: bg-gray-100 | 14px | Semibold
  - Padding cells: 24px 24px (px-6 py-4)
  - Border: 1px gray-200
  - Hover row: bg-gray-50
  - **Badges ClinVar**:
    - Pathogenic: bg-red-100 + text-red-800
    - Likely pathogenic: bg-orange-100 + text-orange-800
    - Uncertain: bg-yellow-100 + text-yellow-800
    - Benign: bg-green-100 + text-green-800
  - Padding badge: 4px 10px | rounded-full | 12px

---

### 4. PHILOSOPHY SECTION
**Background**: Gray-50
**Padding**: 80px vertical

**Grid**: 3 colonnes | gap-32px

**Carte pilier**:
```
┌─────────────────────┐
│   ⭕ 01              │
│                     │
│   [Titre H3]        │
│                     │
│   [Description]     │
│                     │
└─────────────────────┘
```

**Spécifications carte**:
- Dimensions: Hauteur flexible
- Background: white
- Padding: 32px (p-8)
- Border-radius: 12px (rounded-xl)
- Shadow: lg
- Hover: shadow-xl

**Numéro circulaire**:
- Dimensions: 64px × 64px (w-16 h-16)
- Background: blue-100
- Border-radius: 50% (rounded-full)
- Texte: 24px | Bold | blue-600
- Margin-bottom: 24px

**Titre**: 24px | Bold | gray-900 | mb-16px
**Description**: 16px | gray-600 | line-height: 1.6

---

### 5. MODULES SECTION
**Background**: White
**Padding**: 80px vertical

**Structure**: 2 sous-sections

#### Modules gratuits
**Badge**: "Gratuit" | bg-green-100 | text-green-800 | 14px | px-12px py-4px | rounded-full

**Grid**: 3 colonnes | gap-24px

**Carte module**:
```
┌──────────────────────────┐
│ Titre       [Icon link]  │
│ • Feature 1              │
│ • Feature 2              │
│ • Feature 3              │
│ • Feature 4              │
│ ─────────────────────    │
│ Community: Usage illimité│
└──────────────────────────┘
```

**Spécifications**:
- Border: 2px solid gray-200
- Hover: border-blue-300 + shadow-lg
- Padding: 24px (p-6)
- Border-radius: 12px
- **Titre**: 20px | Bold | mb-16px
- **Icon link**: ExternalLink 18px | blue-600
- **Features**:
  - Puce: • verte (green-500)
  - Texte: 14px | gray-600
  - Gap: 8px (space-y-2)
- **Footer note**:
  - Border-top: 1px gray-200
  - Padding-top: 16px
  - Font-size: 12px | gray-500

#### Modules premium
**Badge**: "Premium" | bg-purple-100 | text-purple-800

**Carte**:
- Background: gradient purple-50 → white
- Border: 2px solid purple-200
- Hover: border-purple-400
- Reste identique aux cartes gratuites

---

### 6. PRICING SECTION
**Background**: Gray-50
**Padding**: 80px vertical

**Grid**: 4 colonnes | gap-24px

**Carte pricing**:
```
┌─────────────────────┐
│ [Badge early-adopter]│
│                     │
│ Plan Name           │
│ 29€ /mois           │
│ Description         │
│                     │
│ [CTA Button]        │
│                     │
│ ✓ Feature 1         │
│ ✓ Feature 2         │
│ ✓ ...               │
└─────────────────────┘
```

**Plan highlighted (Pro)**:
- Ring: 2px blue-600
- Shadow: xl
- Scale: 1.05 (légèrement plus grand)

**Spécifications**:
- **Badge**: bg-orange-100 | text-orange-800 | 12px | px-12px py-4px
- **Nom plan**: 24px | Bold | mb-8px
- **Prix**: 36px | Bold
- **Période**: 16px | gray-600 | ml-4px
- **Description**: 14px | gray-600 | mb-24px
- **Button CTA**:
  - Width: 100%
  - Padding: 12px 16px
  - Highlighted: bg-blue-600
  - Normal: bg-gray-100
- **Features list**:
  - Icon: Check 18px green-500
  - Text: 14px | gray-600
  - Gap: 12px

**Footer note**: 14px | gray-600 | mt-48px | Centré

---

### 7. FAQ SECTION
**Background**: White
**Padding**: 80px vertical
**Max-width**: 896px (max-w-4xl)

**Accordion item**:
```
┌──────────────────────────────────────┐
│ Question ........................ ⌄  │
├──────────────────────────────────────┤
│ Réponse (expandable)                 │
└──────────────────────────────────────┘
```

**Spécifications**:
- Background: gray-50
- Border: 1px gray-200
- Border-radius: 8px
- Gap entre items: 16px
- **Trigger**:
  - Padding: 24px (p-6)
  - Hover: bg-gray-100
  - Question: 18px | Semibold | gray-900
  - Icon: ChevronDown 20px | gray-500
  - Rotate 180° when open
- **Content**:
  - Padding: 0 24px 24px 24px
  - Text: 16px | gray-600 | line-height: 1.6
  - Animation: slideDown 300ms

**CTA Box** (bas de section):
- Background: blue-50
- Border: 1px blue-100
- Border-radius: 12px
- Padding: 32px
- Centré
- Button: bg-blue-600 | px-24px py-12px

---

### 8. FOOTER
**Background**: Gray-900
**Color**: Gray-300
**Padding**: 48px vertical

**Grid**: 5 colonnes | gap-32px

**Colonne 1 (Logo + Description)**:
- Width: 2 colonnes (col-span-2)
- Logo: 20px | Bold | White
- Description: 14px | gray-400 | mb-16px
- **Social icons**:
  - Size: 20px
  - Color: gray-400
  - Hover: white
  - Gap: 12px

**Colonnes 2-5 (Liens)**:
- **Titre section**: 
  - 14px | Uppercase | White
  - Letter-spacing: 0.05em
  - Margin-bottom: 16px
- **Liens**:
  - 14px | gray-400
  - Hover: white
  - Gap: 8px

**Bottom bar**:
- Border-top: 1px gray-800
- Padding-top: 32px
- Margin-top: 32px
- 2 colonnes (copyright | tagline)
- 14px | gray-400

---

## Composants réutilisables

### Boutons

#### Primaire
- Background: blue-600
- Text: white
- Padding: variable (sm: 8px 16px, md: 12px 24px, lg: 16px 32px)
- Border-radius: 6-8px
- Font: 14-18px | Semibold
- Hover: blue-700
- Shadow: lg
- Transition: all 200ms

#### Secondaire
- Background: white
- Text: blue-600
- Border: 2px solid blue-600
- Hover: bg-blue-50
- Reste identique

#### Tertiaire
- Background: gray-100
- Text: gray-900
- Hover: bg-gray-200

### Badges
- Padding: 4px 10px (xs) ou 6px 12px (sm)
- Border-radius: 9999px (rounded-full)
- Font: 12px | Semibold
- Variantes: green, orange, purple, blue

### Cards
- Background: white
- Padding: 24-32px
- Border-radius: 12px
- Shadow: lg
- Border: 1px ou 2px (selon contexte)
- Hover: shadow-xl + border color change

### Icons
- Tailles: 16px (sm), 18px (md), 20px (lg), 24px (xl)
- Librairie: Lucide React
- Utiliser: Download, Menu, X, CheckCircle, ChevronDown, ExternalLink, Github, Twitter, Linkedin, Mail, FileText, Eye, Sparkles, Code2, Check

---

## Instructions de création dans Figma

### Étape 1: Configuration du fichier
1. Créer un nouveau fichier Figma
2. Créer une page "Design System" avec:
   - Palette de couleurs (styles de couleur)
   - Typographie (styles de texte)
   - Composants réutilisables (buttons, badges, cards)
3. Créer une page "Landing Page" avec un frame de 1440px de largeur

### Étape 2: Système de design
1. Créer tous les styles de couleur selon la palette
2. Créer tous les styles de texte selon la typographie
3. Créer les composants:
   - Button (avec variantes: primary, secondary, tertiary)
   - Badge (avec variantes de couleur)
   - Card (module, pricing)
   - Input toggle language
   - Social icon
   - Feature bullet point

### Étape 3: Construction des sections
1. Créer chaque section dans des frames séparés (width: 1440px)
2. Utiliser Auto Layout pour tous les conteneurs
3. Respecter les espacements définis
4. Utiliser les composants créés

### Étape 4: Responsive (optionnel)
1. Créer des variantes mobile (375px) et tablet (768px)
2. Adapter les grilles (3 col → 1 col sur mobile)
3. Réduire les espacements

### Étape 5: Prototype (optionnel)
1. Lier les boutons du menu aux sections
2. Ajouter l'interaction hover sur les boutons
3. Ajouter l'animation d'ouverture des FAQ

---

## Notes importantes

- **Cohérence**: Utiliser les styles de texte et de couleur systématiquement
- **Espacements**: Respecter le système de 4px
- **Auto Layout**: Utiliser partout pour faciliter les modifications
- **Composants**: Créer des composants pour tout élément répété
- **Nommage**: Nommer clairement tous les layers (Section/Element/Variant)
- **Organisation**: Grouper les sections dans des frames nommés

---

## Export pour le stagiaire

Une fois la maquette terminée:
1. Partager le lien Figma avec accès "Can view"
2. Activer "Dev Mode" pour les spécifications CSS
3. Exporter les assets (logo, icons) en SVG
4. Documenter les états interactifs (hover, active)
5. Fournir ce guide comme documentation complémentaire

---

**Durée estimée de création**: 3-4 heures pour une maquette complète et détaillée.

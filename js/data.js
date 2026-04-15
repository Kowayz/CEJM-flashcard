// ============================================================
// DATA.JS — Structure des chapitres + 176 définitions
// ============================================================

// ── Constantes de compatibilité ──────────────────────────────
const GRIDS = {
  "droit-c1":"grid-droit-c1","droit-c2":"grid-droit-c2","droit-c3":"grid-droit-c3",
  "droit-c4":"grid-droit-c4","droit-c5":"grid-droit-c5","droit-c6":"grid-droit-c6",
  "eco-c1":"grid-eco-c1","eco-c2":"grid-eco-c2","eco-c3":"grid-eco-c3",
  "mgmt-c1":"grid-mgmt-c1","mgmt-c2":"grid-mgmt-c2"
};
const CAT_LABELS = {
  "droit-c1":"Droit C1 - Sources & Juridictions",
  "droit-c2":"Droit C2 - Formation du contrat",
  "droit-c3":"Droit C3 - Effets & inexécution",
  "droit-c4":"Droit C4 - Concurrence",
  "droit-c5":"Droit C5 - Propriété intellectuelle",
  "droit-c6":"Droit C6 - Les sociétés",
  "eco-c1":"Éco C1 - Marché & Agents",
  "eco-c2":"Éco C2 - Rôle de l'État",
  "eco-c3":"Éco C3 - Facteurs de production",
  "mgmt-c1":"Management C1 - Parties prenantes",
  "mgmt-c2":"Management C2 - Stratégie"
};

// ── CHAPTERS — Données riches des chapitres ──────────────────
const CHAPTERS = [
  {
    id: "droit-c1", title: "Droit C1", subtitle: "Sources du droit, Hiérarchie des normes & Juridictions",
    subject: "droit", color: "#60a5fa", icon: "⚖️",
    intro: "Le droit est un ensemble de règles contraignantes qui organisent la vie en société. Ce chapitre étudie les sources formelles du droit — de la Constitution aux textes européens — ainsi que l'organisation des juridictions françaises qui les appliquent.",
    plan: [
      { title: "I. Les sources du droit", children: [
        { title: "A. Les sources nationales (Constitution, loi, règlement)" },
        { title: "B. Les sources supranationales (traités, droit de l'UE)" },
        { title: "C. Les sources secondaires (coutume, jurisprudence)" }
      ]},
      { title: "II. La hiérarchie des normes", children: [
        { title: "A. La pyramide de Kelsen" },
        { title: "B. Le principe de légalité et de constitutionnalité" }
      ]},
      { title: "III. L'organisation judiciaire", children: [
        { title: "A. L'ordre judiciaire (civil et pénal)" },
        { title: "B. L'ordre administratif" },
        { title: "C. Les juridictions spécialisées" }
      ]}
    ],
    content: [
      { sectionTitle: "I. Les sources du droit", subsections: [
        { title: "A. Les sources nationales", text: "La Constitution du 4 octobre 1958 est la norme suprême de l'ordre juridique français. Le bloc de constitutionnalité — notion consacrée par le Conseil constitutionnel en 1971 — comprend la Constitution elle-même, la Déclaration des Droits de l'Homme et du Citoyen de 1789, le Préambule de 1946 (droits économiques et sociaux), et la Charte de l'environnement de 2004.\n\nEn dessous viennent les lois organiques (qui organisent les pouvoirs publics), les lois ordinaires votées par le Parlement (Assemblée nationale + Sénat), puis les textes réglementaires (décrets, arrêtés). La loi fixe les règles dans les domaines listés à l'article 34 de la Constitution ; tout le reste relève du pouvoir réglementaire (art. 37).", keyPoints: ["Constitution du 4/10/1958 : norme suprême de l'ordre juridique", "Loi ordinaire : votée par le Parlement (art. 34 C.) dans les domaines réservés", "Règlement : décrets et arrêtés pris par le gouvernement (art. 37 C.)"] },
        { title: "B. Les sources supranationales", text: "Depuis la Constitution de 1958 (art. 55), les traités internationaux régulièrement ratifiés ont une valeur supérieure aux lois ordinaires, à condition que l'autre État applique lui aussi le traité (clause de réciprocité). Le droit de l'Union européenne bénéficie d'une primauté absolue sur le droit national, affirmée par la CJUE dès 1964 (arrêt Costa c/ ENEL).\n\nLe droit de l'UE se divise en droit primaire (traités fondateurs : TFUE, TUE) et droit dérivé. Parmi les actes dérivés, le règlement européen s'applique directement dans tous les États membres sans transposition ; la directive fixe un objectif à atteindre et laisse aux États le choix des moyens (transposition obligatoire dans un délai fixé). La non-transposition d'une directive peut engager la responsabilité de l'État.", keyPoints: ["Art. 55 : les traités ratifiés priment sur la loi (clause de réciprocité)", "Règlement UE : d'application directe, sans transposition", "Directive UE : obligation de résultat, délai de transposition fixé"] },
        { title: "C. La coutume et la jurisprudence", text: "La coutume est une pratique ancienne, constante, générale et considérée comme juridiquement obligatoire (opinio juris). Elle est une source importante en droit commercial (usages du commerce) mais reste marginale en droit civil où le Code civil prédomine.\n\nLa jurisprudence désigne l'ensemble des décisions de justice qui, par leur répétition, créent des règles de droit de facto. En France, le juge n'est officiellement pas créateur de droit (tradition romano-germanique, art. 5 C.civ. interdit les arrêts de règlement). Mais les arrêts de la Cour de cassation et du Conseil d'État font autorité et orientent l'interprétation du droit.", keyPoints: ["Coutume : pratique ancienne + opinio juris (sentiment d'obligation)", "Jurisprudence : source de droit de facto malgré l'art. 5 C.civ.", "Arrêts de la Cour de cassation : force de persuasion très forte sur les juridictions inférieures"] }
      ]},
      { sectionTitle: "II. La hiérarchie des normes", subsections: [
        { title: "A. La pyramide de Kelsen", text: "Hans Kelsen (1881-1973), juriste austro-américain, théorise dans sa « Théorie pure du droit » (1934) que l'ordre juridique est une hiérarchie de normes : chaque norme tire sa validité de la norme supérieure. Une norme est valide si elle respecte la norme supérieure sur le fond ET si elle a été adoptée selon la procédure qu'elle prévoit.\n\nEn droit français, on distingue quatre blocs : le bloc de constitutionnalité (Constitution de 1958, DDHC de 1789, Préambule de 1946, Charte de l'environnement de 2004), le bloc de conventionnalité (traités internationaux ratifiés, droit de l'UE), le bloc de légalité (lois organiques, lois ordinaires), et le bloc réglementaire (décrets, arrêtés). Toute norme inférieure contraire à une norme supérieure peut être annulée par le juge compétent.", images: [
          { src: 'img/kelsen-blocs.png', alt: 'Les 4 blocs de la hiérarchie des normes', caption: 'Les quatre blocs de la hiérarchie des normes en droit français' },
          { src: 'img/hierarchie-normes.png', alt: 'La hiérarchie des normes détaillée', caption: 'De la Constitution aux arrêtés : la pyramide complète des normes juridiques' }
        ], callouts: [
          { type: 'example', icon: '📌', label: 'QPC — Contrôle a posteriori', text: 'La QPC (Question Prioritaire de Constitutionnalité), introduite en 2010, permet à tout justiciable de contester la constitutionnalité d\'une loi devant le Conseil constitutionnel, directement pendant un procès en cours. Avant 2010, le contrôle était uniquement a priori (avant la promulgation de la loi).' },
          { type: 'warning', icon: '⚠️', label: 'Ne pas confondre', text: 'La Cour de cassation (ordre judiciaire français, contrôle l\'application du droit) ≠ la Cour européenne des droits de l\'Homme (CEDH, Strasbourg, juge les violations de la Convention européenne). Ce sont deux institutions totalement distinctes avec des compétences différentes.' }
        ], keyPoints: ["Bloc de constitutionnalité : Constitution + DDHC + Préambule 1946 + Charte environnement", "Bloc de conventionnalité : traités internationaux + droit de l'UE (primauté sur la loi)", "QPC (2010) : contrôle de constitutionnalité a posteriori ouvert à tout justiciable"] }
      ]},
      { sectionTitle: "III. L'organisation judiciaire", subsections: [
        { title: "A. L'ordre judiciaire", text: "Le système judiciaire français repose sur le principe du double degré de juridiction : toute partie peut faire appel d'une décision de première instance. L'ordre judiciaire comprend deux branches : les juridictions civiles (litiges entre personnes privées) et les juridictions pénales (infractions à la loi pénale).\n\nLe vocabulaire varie selon le rang de la juridiction : les juges du premier degré (Tribunal judiciaire, Conseil de prud'hommes, Tribunal de commerce) rendent des jugements. Les Cours d'appel et la Cour de cassation rendent des arrêts. En pénal, les infractions se divisent en 3 catégories selon leur gravité : contraventions (tribunal de police), délits (tribunal correctionnel) et crimes (cour d'assises, composée de jurés populaires). La compétence territoriale détermine quelle juridiction est géographiquement compétente, généralement selon le lieu de travail ou le siège social.", images: [
          { src: 'img/organisation-judiciaire.png', alt: 'Organisation de la justice française', caption: 'Organisation de la Justice française — Ministère de la Justice' }
        ], callouts: [
          { type: 'example', icon: '📌', label: 'Le parcours d\'un licenciement', text: 'Un salarié conteste son licenciement : (1) Conseil de prud\'hommes → rend un jugement. (2) Si appel : Cour d\'appel chambre sociale → rend un arrêt. (3) Si pourvoi en cassation : la Cour de cassation vérifie uniquement l\'application du droit — elle ne rejuge pas les faits. Si elle casse l\'arrêt, elle renvoie l\'affaire devant une autre cour d\'appel, mais ne tranche pas elle-même le fond du litige.' },
          { type: 'warning', icon: '⚠️', label: 'Jugements ≠ Arrêts', text: 'Les juridictions du premier degré (TJ, Conseil de prud\'hommes, Tribunal de commerce) rendent des jugements. Les Cours d\'appel et la Cour de cassation rendent des arrêts. Cette distinction terminologique est fondamentale et très souvent testée.' }
        ], keyPoints: ["1er degré = jugements (TJ, prud'hommes, commerce). 2e et 3e degré = arrêts (Cour d'appel, Cour de cassation)", "3 catégories d'infractions : contraventions (police), délits (correctionnel), crimes (assises avec jurés)", "Cour de cassation : ne rejuge pas les faits — contrôle uniquement la bonne application du droit"] },
        { title: "B. L'ordre administratif et les juridictions spécialisées", text: "L'ordre administratif, consacré par l'arrêt Blanco (1873), est compétent pour tous les litiges impliquant une personne publique (État, collectivités, établissements publics). Sa structure est parallèle à l'ordre judiciaire : Tribunal administratif (1er degré) → Cour administrative d'appel → Conseil d'État (juge de cassation administratif ET conseiller du gouvernement).\n\nLe Tribunal des conflits tranche les conflits de compétence entre les deux ordres. Les juridictions spécialisées complètent ce dispositif : le Conseil de prud'hommes (litiges individuels travail, composition paritaire employeurs/salariés) et le Tribunal de commerce (litiges entre commerçants, juges élus par leurs pairs).", keyPoints: ["Conseil d'État : double rôle — juridiction suprême administrative + conseiller du gouvernement", "Conseil de prud'hommes : composition paritaire (employeurs + salariés élus)", "Tribunal des conflits : arbitre les conflits de compétence entre les deux ordres"] }
      ]}
    ],
    focus: { type: "jurisprudence", title: "Arrêt Blanco, 1873", subtitle: "Tribunal des conflits, 8 février 1873", content: "L'arrêt Blanco est l'arrêt fondateur du droit administratif français. Une fillette (Agnès Blanco) est renversée par un wagonnet d'une manufacture d'État à Bordeaux. Le Tribunal des conflits juge que la responsabilité de l'État ne peut être régie par le Code civil mais par des règles spéciales, et que la juridiction administrative est compétente. Cet arrêt consacre l'autonomie du droit administratif et justifie l'existence des deux ordres de juridiction.", tags: ["Dualisme juridictionnel", "Responsabilité de l'État", "Autonomie du droit administratif"] },
    schema: { title: "La Pyramide de Kelsen", svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;max-width:360px;display:block;margin:0 auto;"><polygon points="200,10 260,70 140,70" fill="rgba(99,102,241,0.3)" stroke="#6366f1" stroke-width="1.5"/><text x="200" y="50" text-anchor="middle" font-size="9" fill="#a5b4fc" font-weight="700">Constitution</text><polygon points="140,75 260,75 285,115 115,115" fill="rgba(99,102,241,0.22)" stroke="#6366f1" stroke-width="1.5"/><text x="200" y="100" text-anchor="middle" font-size="9" fill="#a5b4fc">Traités internationaux</text><polygon points="115,120 285,120 315,165 85,165" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="1.5"/><text x="200" y="148" text-anchor="middle" font-size="9" fill="#a5b4fc">Lois ordinaires</text><polygon points="85,170 315,170 345,215 55,215" fill="rgba(99,102,241,0.09)" stroke="#6366f1" stroke-width="1.5"/><text x="200" y="198" text-anchor="middle" font-size="9" fill="#818cf8">Règlements (décrets, arrêtés)</text><polygon points="55,220 345,220 370,255 30,255" fill="rgba(99,102,241,0.05)" stroke="#6366f1" stroke-width="1.5"/><text x="200" y="242" text-anchor="middle" font-size="9" fill="#64748b">Contrats et actes individuels</text></svg>` }
  },
  {
    id: "droit-c2", title: "Droit C2", subtitle: "Les contrats et les partenaires contractuels",
    subject: "droit", color: "#818cf8", icon: "📝",
    intro: "Conclure un contrat, c'est créer des obligations juridiques. Ce chapitre explore les mécanismes de formation du contrat, les conditions qui assurent sa validité, et les sanctions applicables lorsque le consentement a été vicié.",
    plan: [
      { title: "I. La notion de contrat", children: [
        { title: "A. Définition et liberté contractuelle" },
        { title: "B. Les avant-contrats (pacte de préférence, promesse)" }
      ]},
      { title: "II. Les conditions de validité du contrat", children: [
        { title: "A. Le consentement libre et éclairé" },
        { title: "B. Les vices du consentement (erreur, dol, violence)" },
        { title: "C. La capacité juridique et le contenu licite" }
      ]},
      { title: "III. Les sanctions de l'invalidité", children: [
        { title: "A. La nullité relative" },
        { title: "B. La nullité absolue" }
      ]}
    ],
    content: [
      { sectionTitle: "I. La notion de contrat", subsections: [
        { title: "A. Définition et liberté contractuelle", text: "Le contrat est un accord de volontés entre deux ou plusieurs personnes destiné à créer, modifier, transmettre ou éteindre des obligations (art. 1101 Code civil). La liberté contractuelle (art. 1102) implique la liberté de contracter ou non, de choisir son cocontractant et de déterminer le contenu du contrat dans les limites légales. Une obligation d'information pèse sur chaque partie.", keyPoints: ["Le contrat = accord de volontés créant des obligations", "Liberté contractuelle : liberté de contracter, de choisir, de fixer le contenu", "Obligation d'information : transmettre les informations déterminantes"] },
        { title: "B. Les avant-contrats", text: "Avant la conclusion définitive, les parties peuvent conclure des avant-contrats. Le pacte de préférence (art. 1123) engage une partie à proposer prioritairement à son bénéficiaire de traiter avec elle si elle décide de contracter. La promesse unilatérale (art. 1124) accorde au bénéficiaire le droit d'opter pour la conclusion d'un contrat dont les éléments essentiels sont déjà déterminés.", keyPoints: ["Pacte de préférence = droit de priorité", "Promesse unilatérale = option d'achat/vente", "Ces avant-contrats sont juridiquement contraignants"] }
      ]},
      { sectionTitle: "II. Les conditions de validité", subsections: [
        { title: "A. Le consentement", text: "Le consentement doit être libre et éclairé. Il se forme par la rencontre d'une offre (ferme, précise, extériorisée) et d'une acceptation (pure et simple). Toute divergence entre l'offre et l'acceptation empêche la formation du contrat.", keyPoints: ["L'offre doit être ferme, précise et extériorisée", "L'acceptation doit être pure et simple (sans réserves)", "Le silence ne vaut pas acceptation en principe"] },
        { title: "B. Les vices du consentement", text: "Trois vices altèrent le consentement : l'erreur (art. 1132, fausse représentation de la réalité, doit être déterminante et excusable), le dol (art. 1137, manœuvres ou mensonges d'un contractant pour obtenir le consentement) et la violence (art. 1140, contrainte inspirant la crainte d'un mal considérable). Un vice du consentement entraîne la nullité relative.", callouts: [
          { type: 'example', icon: '📌', label: 'Exemple — Dol par réticence', text: 'Un vendeur qui dissimule intentionnellement des fissures structurelles dans un immeuble qu\'il met en vente commet un dol par réticence (art. 1137 al. 2). L\'acheteur peut demander la nullité du contrat ou des dommages-intérêts.' },
          { type: 'warning', icon: '⚠️', label: 'Erreur sur la valeur', text: 'L\'erreur sur la valeur n\'est jamais un vice du consentement : se tromper sur le prix d\'un bien (surestimer ou sous-estimer) ne permet pas d\'annuler le contrat. Il faut une erreur sur les qualités essentielles de la prestation.' }
        ], keyPoints: ["Erreur : fausse représentation, doit être déterminante et excusable", "Dol : mensonge ou manœuvre intentionnelle (inclut la dissimulation)", "Violence : contrainte physique ou morale (inclut l'abus de dépendance)"] }
      ]},
      { sectionTitle: "III. Les sanctions", subsections: [
        { title: "A. Nullité relative vs absolue", text: "La nullité relative (art. 1181) protège un intérêt privé : seule la partie protégée peut l'invoquer (délai 5 ans). La nullité absolue (art. 1179) protège l'intérêt général : tout intéressé peut l'invoquer (délai 5 ans). La forclusion est la perte définitive du droit d'agir pour non-respect du délai légal. La nullité anéantit le contrat rétroactivement.", keyPoints: ["Nullité relative = protection d'un intérêt privé", "Nullité absolue = protection de l'intérêt général", "Forclusion = perte du droit d'agir après expiration du délai"] }
      ]}
    ],
    focus: { type: "jurisprudence", title: "Le dol par réticence", subtitle: "Cass. com., art. 1137 C.civ.", content: "Constitue un dol la dissimulation intentionnelle par l'un des contractants d'une information dont il sait le caractère déterminant pour l'autre partie (art. 1137 al. 2). Toutefois, ne constitue pas un dol le fait pour une partie de ne pas révéler à son cocontractant son estimation de la valeur de la prestation. Cette distinction entre information déterminante et évaluation est fondamentale en droit des contrats.", tags: ["Vice du consentement", "Dol par réticence", "Information déterminante"] }
  },
  {
    id: "droit-c3", title: "Droit C3", subtitle: "Effets du contrat et inexécution",
    subject: "droit", color: "#a78bfa", icon: "🔗",
    intro: "Un contrat valablement formé doit être exécuté. Ce chapitre examine les obligations nées du contrat, les clauses qui le structurent, et les droits du créancier face à un débiteur défaillant — de l'exception d'inexécution jusqu'aux dommages-intérêts.",
    plan: [
      { title: "I. Les parties et leurs obligations", children: [
        { title: "A. Créancier, débiteur et tiers" },
        { title: "B. Obligation de moyens vs obligation de résultat" }
      ]},
      { title: "II. Les clauses contractuelles", children: [
        { title: "A. Les clauses essentielles (résolutoire, pénale, limitative)" },
        { title: "B. Les clauses de garantie (réserve de propriété, condition suspensive)" }
      ]},
      { title: "III. L'inexécution et ses remèdes", children: [
        { title: "A. L'exception d'inexécution et l'exécution forcée" },
        { title: "B. La résolution et la réduction de prix" },
        { title: "C. La responsabilité contractuelle et la mise en demeure" }
      ]},
      { title: "IV. La classification des contrats", children: [
        { title: "A. Synallagmatique / unilatéral, onéreux / gratuit" },
        { title: "B. Commutatif / aléatoire, gré à gré / adhésion" },
        { title: "C. À exécution instantanée / successive, intuitu personae" }
      ]}
    ],
    content: [
      { sectionTitle: "I. Les parties et leurs obligations", subsections: [
        { title: "A. Créancier, débiteur et tiers", text: "Les parties au contrat sont celles qui l'ont conclu et sont liées par ses obligations. Le créancier est celui qui a le droit d'exiger l'exécution ; le débiteur est celui qui doit exécuter. Le tiers est une personne étrangère au contrat, non liée par ses obligations (principe de l'effet relatif des contrats).", keyPoints: ["Principe de l'effet relatif : le contrat ne lie que les parties", "Les tiers ne peuvent ni bénéficier ni être lésés par le contrat", "Exception : la stipulation pour autrui"] },
        { title: "B. Obligation de moyens vs résultat", text: "L'obligation de moyens impose de mettre tout en œuvre pour atteindre l'objectif (ex : médecin). La faute doit être prouvée par le créancier. L'obligation de résultat impose d'atteindre l'objectif précis (ex : transporteur livrant un colis intact). Si le résultat n'est pas atteint, la faute est présumée.", keyPoints: ["Obligation de moyens : preuve de la faute à la charge du créancier", "Obligation de résultat : faute présumée si résultat non atteint", "Critère de distinction : aléa inhérent à la prestation"] }
      ]},
      { sectionTitle: "II. Les clauses contractuelles", subsections: [
        { title: "A. Les clauses essentielles", text: "La clause résolutoire met fin au contrat en cas de non-respect des engagements. La clause pénale fixe à l'avance le montant des dommages-intérêts. La clause limitative ou exclusive de responsabilité limite la responsabilité d'une partie en cas de faute. Ces clauses doivent être rédigées avec soin car elles peuvent être réputées non écrites si abusives.", keyPoints: ["Clause résolutoire : résiliation automatique en cas d'inexécution", "Clause pénale : montant forfaitaire des DI (modifiable par le juge)", "Clause abusive : réputée non écrite dans les contrats avec consommateurs"] },
        { title: "B. Les clauses de garantie", text: "La clause de réserve de propriété permet au vendeur de rester propriétaire du bien jusqu'au paiement complet. La condition suspensive est un événement futur et incertain dont dépend la formation du contrat. La clause d'indexation ajuste le prix en fonction d'un indice (ex : inflation). La clause de dédit permet à une partie de se retirer du contrat.", keyPoints: ["Réserve de propriété : protection du vendeur en cas d'insolvabilité", "Condition suspensive : ex. obtention d'un prêt bancaire", "Clause d'indexation : protège contre l'érosion monétaire"] }
      ]},
      { sectionTitle: "III. L'inexécution et ses remèdes", subsections: [
        { title: "A. Les remèdes à l'inexécution", text: "L'article 1217 du Code civil (réforme de 2016, en vigueur depuis 2018) dresse la liste exhaustive des remèdes ouverts au créancier en cas d'inexécution ou d'exécution imparfaite. Ces remèdes peuvent être cumulés dès lors qu'ils ne sont pas incompatibles entre eux, et des dommages-intérêts peuvent toujours s'y ajouter.\n\nLes cinq remèdes sont : (1) refuser d'exécuter ou suspendre sa propre obligation (exception d'inexécution) ; (2) poursuivre l'exécution forcée en nature de l'obligation ; (3) obtenir une réduction du prix (en cas d'exécution imparfaite) ; (4) provoquer la résolution du contrat ; (5) demander réparation des conséquences de l'inexécution (dommages-intérêts). La mise en demeure préalable est généralement exigée avant de mettre en œuvre ces remèdes.", images: [
          { src: 'img/article-1217.png', alt: 'Article 1217 du Code civil', caption: 'Art. 1217 C.civ. — Les remèdes à l\'inexécution (version en vigueur depuis le 1er octobre 2018)' }
        ], callouts: [
          { type: 'example', icon: '📌', label: 'Exception d\'inexécution', text: 'Un client commande un site web, verse un acompte. Le prestataire ne livre pas dans les délais. Le client peut légitimement refuser de payer le solde (exception d\'inexécution) et simultanément réclamer des DI pour le retard.' },
          { type: 'warning', icon: '⚠️', label: 'Résolution ≠ Résiliation', text: 'La résolution anéantit le contrat rétroactivement (restitutions mutuelles → comme s\'il n\'avait jamais existé). La résiliation met fin au contrat pour l\'avenir seulement. Distinction fondamentale pour les contrats à exécution successive (bail, contrat de travail).' }
        ], keyPoints: ["Art. 1217 C.civ. : 5 remèdes cumulables (sauf incompatibilité)", "Exception d'inexécution : suspendre sa propre prestation si l'autre n'exécute pas", "Résolution : anéantissement rétroactif du contrat (≠ résiliation = pour l'avenir)"] },
        { title: "B. La résolution et la mise en demeure", text: "La résolution anéantit le contrat rétroactivement. Elle résulte soit d'une clause résolutoire, soit d'une notification du créancier au débiteur, soit d'une décision de justice. Avant toute résolution, une mise en demeure (lettre de réclamation avec délai) est généralement nécessaire. La responsabilité contractuelle engage le débiteur au paiement de dommages-intérêts.", keyPoints: ["La mise en demeure précède généralement la résolution", "Résolution = anéantissement rétroactif (≠ résiliation = pour l'avenir)", "DI compensatoires : réparation du préjudice subi"] }
      ]},
      { sectionTitle: "IV. La classification des contrats", subsections: [
        { title: "A. Les grandes classifications", text: "Le droit distingue les contrats selon leur structure et leurs effets. Synallagmatique (obligations réciproques, ex : vente — le vendeur livre, l'acheteur paie) vs unilatéral (une seule partie s'oblige, ex : cautionnement). Onéreux (contrepartie réciproque, ex : contrat de transport) vs gratuit (avantage sans contrepartie, ex : donation). Commutatif (équivalence certaine des prestations dès la conclusion, ex : contrat de travail) vs aléatoire (équivalence dépend d'un événement incertain, ex : assurance, vente en viager).\n\nGré à gré (clauses librement négociées, ex : vente immobilière) vs adhésion (conditions non négociables fixées par l'une des parties, ex : abonnement téléphonique). Consensuel (accord suffit, ex : vente de meuble) vs solennel (formalité obligatoire, ex : mariage, donation immobilière devant notaire) vs réel (formation par la remise d'une chose, ex : contrat de dépôt). Contrat cadre (fixe les règles générales de la relation, ex : franchise) suivi de contrats d'application. Intuitu personae : conclus en considération de la personne (ex : contrat de travail, mandat d'avocat) — l'erreur sur la personne est une cause de nullité.", keyPoints: ["Contrat de travail = synallagmatique, onéreux, commutatif, intuitu personae, à exécution successive", "Contrat d'assurance = aléatoire (prestation dépend d'un sinistre éventuel). Contrat de dépôt = réel", "Contrat d'adhésion : conditions non négociables — attention aux clauses abusives réputées non écrites"] }
      ]}
    ],
    focus: { type: "jurisprudence", title: "Arrêt Chronopost", subtitle: "Cass. com., 22 octobre 1996 — n° 93-18.632", content: "La société Banchereau avait confié à Chronopost des plis contenant une soumission à une adjudication, avec engagement de livraison le lendemain avant midi. Les plis n'ayant pas été livrés à temps, Banchereau demande réparation. Chronopost invoque une clause limitant l'indemnisation au montant du prix du transport. La Cour de cassation juge que cette clause limitative de responsabilité devait être réputée non écrite : en tant que spécialiste du transport rapide, Chronopost avait pris une obligation essentielle (la livraison garantie dans les délais) — une clause qui vide cette obligation de sa substance contredit la portée de l'engagement et ne peut être opposée. Principe fondamental : une clause qui annihile l'obligation essentielle du contrat est réputée non écrite (art. 1170 C.civ.).", tags: ["Clause limitative de responsabilité", "Obligation essentielle", "Réputée non écrite", "Art. 1170 C.civ."] }
  },
  {
    id: "droit-c4", title: "Droit C4", subtitle: "Droit de la concurrence",
    subject: "droit", color: "#f472b6", icon: "🏛️",
    intro: "La libre concurrence est le moteur de l'économie de marché. Ce chapitre analyse le cadre juridique qui protège cette concurrence contre les ententes illicites, les abus de position dominante et les pratiques déloyales entre entreprises.",
    plan: [
      { title: "I. La libre concurrence et ses fondements" },
      { title: "II. Les pratiques anticoncurrentielles", children: [
        { title: "A. Les ententes (art. L.420-1)" },
        { title: "B. L'abus de position dominante (art. L.420-2)" },
        { title: "C. Les prix abusivement bas" }
      ]},
      { title: "III. La concurrence déloyale", children: [
        { title: "A. Dénigrement et imitation" },
        { title: "B. Désorganisation et parasitisme" }
      ]},
      { title: "IV. Les pratiques restrictives et les concentrations", children: [
        { title: "A. Le déséquilibre significatif et la rupture brutale" },
        { title: "B. Le contrôle des concentrations" }
      ]}
    ],
    content: [
      { sectionTitle: "I. La libre concurrence", subsections: [
        { title: "A. Principe et cadre réglementaire", text: "Le droit de la concurrence encadre les comportements des entreprises pour garantir une compétition loyale. Il repose sur le principe de liberté de la concurrence, encadré par le Code de commerce et le droit de l'UE (TFUE art. 101 et 102). L'Autorité de la concurrence (France) et la Commission européenne veillent au respect de ces règles.", keyPoints: ["Code de commerce : règles nationales de concurrence", "TFUE art. 101 et 102 : règles européennes de concurrence", "Autorité de la concurrence : sanction jusqu'à 10% du CA mondial"] }
      ]},
      { sectionTitle: "II. Les pratiques anticoncurrentielles", subsections: [
        { title: "A. Les ententes et l'abus de position dominante", text: "L'entente est une concertation entre entreprises indépendantes pour fixer une ligne de conduite portant atteinte à la concurrence (ex : fixation de prix, répartition de marchés). La procédure de clémence permet aux entreprises qui dénoncent une entente de bénéficier d'une réduction ou exonération de sanction. L'abus de position dominante consiste pour une entreprise à exploiter abusivement sa position sur un marché pour éliminer ou contraindre ses concurrents.", keyPoints: ["Entente horizontale : entre concurrents directs (plus grave)", "Entente verticale : entre fournisseur et distributeur", "Abus de position dominante : 3 conditions (position, abus, effet restrictif)"] }
      ]},
      { sectionTitle: "III. La concurrence déloyale", subsections: [
        { title: "A. Les formes de concurrence déloyale", text: "La concurrence déloyale regroupe les comportements fautifs visant à attirer la clientèle d'un concurrent. Le dénigrement consiste à jeter le discrédit sur un concurrent par des propos malveillants. L'imitation crée une confusion dans l'esprit du consommateur. La désorganisation perturbe le fonctionnement d'une entreprise concurrente (ex : débauchage massif de salariés). Le parasitisme consiste à profiter indûment du savoir-faire et des investissements d'autrui.", keyPoints: ["Fondement : art. 1240 Code civil (responsabilité délictuelle)", "Faute + préjudice + lien de causalité = dommages-intérêts", "Parasitisme ≠ imitation : pas besoin de confusion avec un concurrent"] }
      ]},
      { sectionTitle: "IV. Pratiques restrictives et concentrations", subsections: [
        { title: "A. Les pratiques restrictives", text: "Le déséquilibre significatif (art. L.442-1 Code de commerce) vise les situations où une entreprise impose des obligations créant un déséquilibre excessif dans la relation contractuelle (asymétrie de pouvoir économique). La rupture brutale sanctionne la cessation soudaine d'une relation commerciale établie sans préavis suffisant. Les concentrations (fusions, acquisitions) sont soumises à un contrôle préalable au-delà de certains seuils.", keyPoints: ["Déséquilibre significatif : souvent entre grande distribution et fournisseurs", "Délai de préavis rupture = proportionnel à la durée de la relation", "Contrôle des concentrations : seuils de CA déclenchant l'obligation de notification"] }
      ]}
    ],
    focus: { type: "jurisprudence", title: "Google Shopping — Commission européenne, 2017", subtitle: "Amende record : 2,42 milliards €", content: "La Commission européenne a condamné Google pour abus de position dominante : en favorisant son propre service de comparaison de prix (Google Shopping) dans ses résultats de recherche, Google a écarté ses concurrents. Cette décision illustre l'application du droit de la concurrence aux plateformes numériques et a ouvert la voie au Digital Markets Act (DMA, 2022) qui impose des obligations spécifiques aux grandes plateformes ('gatekeepers').", tags: ["Abus de position dominante", "Marché numérique", "DMA", "Algorithme"] }
  },
  {
    id: "droit-c5", title: "Droit C5", subtitle: "La propriété intellectuelle",
    subject: "droit", color: "#fb923c", icon: "💡",
    intro: "Les créations de l'esprit — inventions, œuvres, marques — méritent d'être protégées. Ce chapitre présente les droits exclusifs accordés à leurs titulaires, en contrepartie de la divulgation ou de l'originalité de la création.",
    plan: [
      { title: "I. La propriété industrielle", children: [
        { title: "A. La marque : signe distinctif" },
        { title: "B. Le brevet : monopole d'exploitation" }
      ]},
      { title: "II. La propriété littéraire et artistique", children: [
        { title: "A. Le droit d'auteur" },
        { title: "B. Les droits voisins" }
      ]}
    ],
    content: [
      { sectionTitle: "I. La propriété industrielle", subsections: [
        { title: "A. La marque", text: "La marque est un signe distinctif (nom, logo, couleur, son...) qui différencie les produits ou services d'une entreprise de ceux de ses concurrents. Pour être protégée, elle doit être déposée auprès de l'INPI (France), de l'EUIPO (UE) ou de l'OMPI (international). La protection dure 10 ans, renouvelable indéfiniment.", keyPoints: ["Dépôt INPI = protection sur le territoire français", "Protection de 10 ans renouvelable indéfiniment", "La marque doit être distinctive, disponible, licite"] },
        { title: "B. Le brevet", text: "Le brevet accorde un monopole d'exploitation de 20 ans à l'inventeur sur le territoire de dépôt. Pour être brevetable, une invention doit être nouvelle, impliquer une activité inventive et être susceptible d'application industrielle. Le dépôt se fait à l'INPI. En contrepartie du monopole, l'invention est rendue publique.", keyPoints: ["Protection de 20 ans (non renouvelable)", "Conditions : nouveauté + activité inventive + application industrielle", "Contrepartie : divulgation de l'invention au public"] }
      ]},
      { sectionTitle: "II. La propriété littéraire et artistique", subsections: [
        { title: "A. Le droit d'auteur", text: "Le droit d'auteur protège automatiquement toute œuvre de l'esprit originale dès sa création, sans formalité de dépôt. Il comprend des droits patrimoniaux (exploitation économique, durée 70 ans post-mortem) et des droits moraux (incessibles, perpétuels). En France, la SACEM gère les droits musicaux.", keyPoints: ["Protection automatique dès la création : pas de dépôt obligatoire", "Droits patrimoniaux : 70 ans après la mort de l'auteur", "Droits moraux : incessibles et perpétuels (droit à la paternité, à l'intégrité)"] }
      ]}
    ],
    focus: { type: "jurisprudence", title: "Affaire Louboutin vs Van Haren (CJUE, 2018)", subtitle: "Protection d'une couleur comme marque", content: "La Cour de justice de l'UE a reconnu que la semelle rouge caractéristique de Christian Louboutin pouvait être protégée comme marque, à condition que la couleur soit appliquée à une partie spécifique du produit. Cette décision illustre l'élargissement des signes protégeables comme marques au-delà des logos traditionnels.", tags: ["Droit des marques", "Signe distinctif", "Couleur", "CJUE"] }
  },
  {
    id: "droit-c6", title: "Droit C6", subtitle: "Les sociétés",
    subject: "droit", color: "#fbbf24", icon: "🏢",
    intro: "Choisir une forme juridique pour son entreprise est une décision stratégique. Ce chapitre compare les différentes formes de sociétés, la responsabilité des associés, les modes de gouvernance et les mécanismes de protection du patrimoine personnel.",
    plan: [
      { title: "I. La notion de société et les apports", children: [
        { title: "A. Définition et constitution de la société" },
        { title: "B. Les apports (numéraire, nature, industrie)" }
      ]},
      { title: "II. Les formes de sociétés", children: [
        { title: "A. Les sociétés de personnes (SNC)" },
        { title: "B. Les sociétés de capitaux (SA, SAS, SASU)" },
        { title: "C. Les sociétés mixtes (SARL, EURL)" }
      ]},
      { title: "III. La protection du patrimoine de l'entrepreneur" }
    ],
    content: [
      { sectionTitle: "I. La notion de société", subsections: [
        { title: "A. Définition et constitution", text: "La société est instituée par un acte de volonté (contrat ou acte unilatéral) par lequel les associés affectent des biens à une entreprise commune en vue de partager le bénéfice ou de profiter de l'économie qui en résulte (art. 1832 Code civil). La société est dotée de la personnalité morale à compter de son immatriculation au Registre du Commerce et des Sociétés (RCS).", keyPoints: ["Personnalité morale dès l'immatriculation au RCS", "Capital social = ensemble des apports", "Statuts = contrat fondateur de la société"] },
        { title: "B. Les apports", text: "Les associés doivent effectuer des apports : en numéraire (argent), en nature (biens autres que de l'argent, évalués par un commissaire aux apports) ou en industrie (connaissances, travail, services — ne concourent pas au capital social). Ces apports constituent le capital social de la société.", keyPoints: ["Apport en numéraire : libération immédiate ou échelonnée", "Apport en nature : évalué par un commissaire aux apports", "Apport en industrie : pas de capital, droit aux bénéfices"] }
      ]},
      { sectionTitle: "II. Les formes de sociétés", subsections: [
        { title: "A. Sociétés de personnes, de capitaux et mixtes", text: "Les sociétés de personnes (SNC) reposent sur l'intuitu personae fort : les associés sont responsables indéfiniment et solidairement des dettes. Les sociétés de capitaux (SA, SAS, SASU) limitent la responsabilité aux apports ; les qualités personnelles importent moins. Les sociétés mixtes (SARL, EURL) combinent les deux : responsabilité limitée aux apports mais avec un certain intuitu personae.", callouts: [
          { type: 'def', icon: '📖', label: 'Tableau comparatif rapide', text: 'SA : 7+ actionnaires, 37 000€ capital min, organes complexes (PDG, CA). SAS/SASU : 1€ capital, liberté statutaire totale, très prisée par les start-ups. SARL/EURL : 1 à 100 associés, 1€ capital, gérant(s), forme PME dominante. SNC : responsabilité illimitée et solidaire → rare en pratique hors cabinets libéraux.' },
          { type: 'info', icon: 'ℹ️', label: 'Tendance actuelle', text: 'La SAS est devenue la forme juridique de création la plus populaire en France, dépassant la SARL depuis 2020. Sa flexibilité statutaire et son image « moderne » séduisent les entrepreneurs. Plus de 60% des nouvelles sociétés créées en France sont des SAS ou SASU.' }
        ], keyPoints: ["SA : ≥7 actionnaires, minimum 37 000€ de capital", "SAS/SASU : grande liberté statutaire, 1€ minimum de capital", "SARL/EURL : la forme la plus répandue des PME françaises"] }
      ]},
      { sectionTitle: "III. Protection du patrimoine", subsections: [
        { title: "A. La séparation des patrimoines", text: "En droit français, l'entrepreneur individuel bénéficie désormais d'une protection automatique : son patrimoine personnel est séparé de son patrimoine professionnel (loi du 14 février 2022). La constitution en société reste néanmoins la protection la plus solide car la personnalité morale crée un patrimoine distinct. Le régime matrimonial (ex : communauté réduite aux acquêts) peut également impacter la protection.", keyPoints: ["EI : séparation automatique patrimoine pro / perso depuis 2022", "Société = bouclier contre les créanciers professionnels", "Régime matrimonial : impact sur les biens du conjoint"] }
      ]}
    ],
    focus: { type: "jurisprudence", title: "Responsabilité du dirigeant (Cass. com.)", subtitle: "Faute séparable des fonctions", content: "La jurisprudence distingue les actes accomplis dans l'exercice des fonctions de direction (responsabilité de la société) et les fautes personnelles séparables des fonctions (responsabilité personnelle du dirigeant). Un dirigeant peut ainsi voir sa responsabilité personnelle engagée si sa faute est intentionnelle, d'une particulière gravité et incompatible avec l'exercice normal de ses fonctions.", tags: ["Responsabilité du dirigeant", "Faute séparable", "Personnalité morale"] }
  },
  {
    id: "eco-c1", title: "Éco C1", subtitle: "Le marché et les agents économiques",
    subject: "eco", color: "#34d399", icon: "📈",
    intro: "L'économie décrit comment les agents — ménages, entreprises, État — prennent des décisions et interagissent via les marchés. Ce chapitre pose les bases : le mécanisme des prix, les conditions de la concurrence, et les défaillances qui justifient l'intervention publique.",
    plan: [
      { title: "I. Les agents économiques et leurs rôles", children: [
        { title: "A. Les ménages, entreprises et État" },
        { title: "B. Les banques et institutions financières" }
      ]},
      { title: "II. Le fonctionnement du marché", children: [
        { title: "A. La loi de l'offre et de la demande" },
        { title: "B. La concurrence pure et parfaite" },
        { title: "C. Les défaillances du marché (externalités, asymétrie)" }
      ]},
      { title: "III. Le circuit économique", children: [
        { title: "A. Flux réels et flux monétaires" },
        { title: "B. Les marchés financiers (primaire et secondaire)" }
      ]}
    ],
    content: [
      { sectionTitle: "I. Les agents économiques", subsections: [
        { title: "A. Ménages, entreprises et État", text: "Les agents économiques sont les acteurs du circuit économique, regroupés en catégories homogènes selon leurs fonctions principales. La comptabilité nationale française (INSEE) en distingue cinq : les ménages (consommation, offre de travail), les sociétés non financières — entreprises (production marchande), les sociétés financières (intermédiation financière : banques, assurances), les administrations publiques (production de services non marchands, redistribution) et le Reste du Monde (échanges extérieurs).\n\nChaque agent a une fonction économique principale et réalise des opérations sur différents marchés : marché des biens et services (offre et demande de produits), marché du travail (offre de travail par les ménages, demande par les entreprises), marché des capitaux (financement de l'économie). Ces interactions sont représentées dans le circuit économique.", keyPoints: ["5 grands agents : Ménages, SNF, SF, APU, Reste du Monde (catégories INSEE)", "Ménages : offrent du travail, perçoivent des revenus, consomment et épargnent", "Administrations : prélèvent impôts/cotisations, redistribuent via prestations sociales"] }
      ]},
      { sectionTitle: "II. Le fonctionnement du marché", subsections: [
        { title: "A. La loi de l'offre et de la demande", text: "Sur un marché, le prix résulte de la rencontre entre l'offre (quantité que les producteurs acceptent de vendre à un prix donné — courbe croissante) et la demande (quantité que les consommateurs acceptent d'acheter à un prix donné — courbe décroissante). Le point de croisement des deux courbes définit le prix d'équilibre et la quantité échangée.\n\nLe mécanisme est auto-régulateur par « tâtonnement » : en cas de surproduction (stocks excédentaires), le prix baisse pour attirer les consommateurs ; en cas de pénurie, le prix augmente, incitant les producteurs à produire davantage, jusqu'à retrouver l'équilibre. Mais des exceptions existent : l'effet de snobisme fait que certains biens de luxe voient leur demande augmenter quand leur prix monte — la rareté et le statut social deviennent des facteurs d'attractivité. Ce mécanisme de « main invisible » (Adam Smith, 1776) coordonne les décisions décentralisées de millions d'agents sans autorité centrale.\n\nLa monnaie est l'instrument qui rend ces échanges possibles. Elle remplit trois fonctions essentielles : (1) Unité de compte — mesurer et exprimer la valeur des biens (langage commun des prix) ; (2) Intermédiaire des échanges — faciliter les transactions sans troc direct ; (3) Réserve de valeur — conserver du pouvoir d'achat pour un usage futur.", images: [
          { src: 'img/offre-demande.png', alt: 'Loi de l\'offre et de la demande — graphique', caption: 'Représentation graphique du marché : le prix d\'équilibre à l\'intersection des courbes d\'offre et de demande' }
        ], callouts: [
          { type: 'example', icon: '📌', label: 'Surproduction vs pénurie', text: 'Surproduction : l\'offre excède la demande → le prix baisse pour écouler les stocks (ex : ventes soldes, déstockage). Pénurie : la demande excède l\'offre → le prix augmente, les producteurs sont incités à produire plus (ex : hausse du prix du pétrole lors d\'une crise). Dans les deux cas, le marché converge par tâtonnement vers un nouvel équilibre.' },
          { type: 'info', icon: 'ℹ️', label: '3 fonctions de la monnaie', text: 'Unité de compte : mesurer la valeur (1 café = 2€, 1 voiture = 20 000€ → la monnaie est un étalon commun). Intermédiaire des échanges : évite le troc (on paie en euros sans donner un bien en échange). Réserve de valeur : conserver son pouvoir d\'achat dans le temps (épargne, investissement).' }
        ], keyPoints: ["Courbe d'offre croissante (↑ prix → ↑ production) / courbe de demande décroissante (↑ prix → ↓ consommation)", "Surproduction → baisse des prix. Pénurie → hausse des prix. Mécanisme de tâtonnement vers l'équilibre", "3 fonctions monnaie : unité de compte / intermédiaire des échanges / réserve de valeur"] },
        { title: "B. La concurrence pure et parfaite et ses défaillances", text: "La CPP est un modèle théorique de référence décrivant une concurrence maximale. Elle repose sur 5 hypothèses strictes : (1) Atomicité — grand nombre d'acheteurs et vendeurs, aucun ne peut influencer seul le prix ; (2) Homogénéité — tous les biens échangés sont identiques, seul le prix différencie ; (3) Fluidité — libre entrée et sortie du marché sans barrière ; (4) Transparence — tous les agents connaissent parfaitement les prix et conditions du marché ; (5) Mobilité parfaite des facteurs — travail et capital se déplacent librement.\n\nEn réalité, ces hypothèses sont rarement toutes réunies. Les barrières à l'entrée contredisent la fluidité : obstacles techniques (machines, savoir-faire spécifique), brevets et propriété intellectuelle, qualifications obligatoires (médecins, avocats, pharmaciens), barrières tarifaires (droits de douane). L'asymétrie d'information rompt la transparence : le vendeur connaît souvent mieux son produit que l'acheteur. Le droit y remédie en imposant des obligations d'information (art. 1112-1 C.civ. : obligation précontractuelle d'information). Les externalités — effets sur des tiers non intégrés dans les prix — justifient également l'intervention de l'État.", callouts: [
          { type: 'example', icon: '📌', label: 'Externalités : positives et négatives', text: 'Négative : une usine pollue la rivière mais ne supporte pas le coût des dommages causés aux riverains → principe pollueur-payeur (taxe carbone, écotaxe) pour internaliser ce coût. Positive : la formation d\'un salarié profite à toute la société (compétences, productivité, innovation) → l\'État subventionne l\'éducation car le marché seul n\'y incite pas suffisamment.' },
          { type: 'warning', icon: '⚠️', label: 'Dumping et concurrence déloyale mondiale', text: 'Le dumping désigne le fait de profiter d\'un environnement plus permissif pour réduire ses coûts : dumping environnemental (normes écologiques faibles → délocalisation de la production polluante), dumping social (coûts de main-d\'œuvre très bas, peu de protections sociales), dumping fiscal (fiscalité très basse pour attirer les entreprises). Ces pratiques faussent la concurrence internationale.' },
          { type: 'info', icon: 'ℹ️', label: 'CPP et marchés réels', text: 'La Bourse des valeurs est l\'exemple le plus proche de la CPP : atomicité des acteurs, homogénéité des titres, transparence des cours en temps réel. Mais même là, les délits d\'initiés révèlent la persistance d\'asymétries d\'information — ce qui a justifié la création de l\'AMF (Autorité des marchés financiers).' }
        ], keyPoints: ["5 hypothèses CPP : atomicité, homogénéité, fluidité, transparence, mobilité des facteurs", "Asymétrie d'information : le professionnel sait plus que le client → obligation d'information (art. 1112-1 C.civ.)", "3 types de dumping : environnemental / social / fiscal — tous faussent la concurrence internationale"] }
      ]},
      { sectionTitle: "III. Le circuit économique", subsections: [
        { title: "A. Flux réels, monétaires et financiers", text: "Le circuit économique représente les échanges entre les grands agents sous forme de flux qui circulent en sens inverse. Un flux réel (biens, services, travail) s'accompagne toujours d'un flux monétaire de sens opposé (salaires, paiements, subventions). Le circuit complet intègre cinq types d'agents : les Ménages, les Entreprises, les Sociétés financières (banques, assurances), les Administrations publiques (État, collectivités, sécu), et le Reste du Monde (importations/exportations).\n\nLes flux financiers (prêts, remboursements, placements) transitent via les sociétés financières qui jouent le rôle d'intermédiaires entre épargnants et investisseurs. Les administrations prélèvent des impôts et cotisations (flux monétaires entrants) et versent des prestations sociales et services non marchands (flux réels et monétaires sortants).", images: [
          { src: 'img/circuit-economique.png', alt: 'Le circuit économique complet', caption: 'Le circuit économique : flux réels (biens, services, travail) et flux monétaires entre les 5 grands agents économiques' }
        ], keyPoints: ["5 agents : Ménages, Entreprises, Sociétés financières, Administrations, Reste du Monde", "Flux réel ↔ flux monétaire de sens inverse (ex : travail → salaire)", "Sociétés financières : intermédiaires entre épargnants (ménages) et investisseurs (entreprises)"] }
      ]}
    ],
    focus: { type: "auteur", title: "Adam Smith et la main invisible", subtitle: "La Richesse des Nations, 1776", content: "Adam Smith (1723-1790) est le père du libéralisme économique. Dans La Richesse des Nations, il théorise que chaque individu, en cherchant son intérêt personnel, est guidé comme par une 'main invisible' vers la promotion de l'intérêt général. Cette métaphore fonde la croyance en l'efficacité du marché libre et du système des prix. Toutefois, Smith reconnaissait déjà des limites : les marchés peuvent échouer (défaillances de marché) et l'État doit intervenir dans certains domaines régaliens.", tags: ["Libéralisme", "Main invisible", "Marché libre", "Intérêt général"] },
    schema: { title: "Le Circuit Économique Simplifié", svg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;max-width:380px;display:block;margin:0 auto;"><rect x="20" y="70" width="110" height="60" rx="10" fill="rgba(99,102,241,0.15)" stroke="#6366f1" stroke-width="1.5"/><text x="75" y="97" text-anchor="middle" font-size="11" fill="#a5b4fc" font-weight="700">Entreprises</text><text x="75" y="113" text-anchor="middle" font-size="9" fill="#64748b">Production</text><rect x="270" y="70" width="110" height="60" rx="10" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="1.5"/><text x="325" y="97" text-anchor="middle" font-size="11" fill="#86efac" font-weight="700">Ménages</text><text x="325" y="113" text-anchor="middle" font-size="9" fill="#64748b">Consommation</text><path d="M130,82 Q200,32 270,82" stroke="#6366f1" stroke-width="1.5" fill="none" marker-end="url(#a1)"/><text x="200" y="48" text-anchor="middle" font-size="9" fill="#818cf8">Biens &amp; services</text><path d="M270,118 Q200,168 130,118" stroke="#34d399" stroke-width="1.5" fill="none" marker-end="url(#a2)"/><text x="200" y="165" text-anchor="middle" font-size="9" fill="#34d399">Revenus (salaires)</text><defs><marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6366f1"/></marker><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#34d399"/></marker></defs></svg>` }
  },
  {
    id: "eco-c2", title: "Éco C2", subtitle: "Le rôle de l'État dans l'économie",
    subject: "eco", color: "#67e8f9", icon: "🏦",
    intro: "Le marché seul ne peut pas tout réguler. Ce chapitre analyse pourquoi et comment l'État intervient dans l'économie : des fonctions de Musgrave aux politiques budgétaires et monétaires, en passant par les grands indicateurs macroéconomiques.",
    plan: [
      { title: "I. Les fonctions économiques de l'État", children: [
        { title: "A. Les fonctions régaliennes" },
        { title: "B. Les trois fonctions de Musgrave (allocation, redistribution, stabilisation)" }
      ]},
      { title: "II. Les politiques économiques", children: [
        { title: "A. La politique budgétaire (conjoncturelle et structurelle)" },
        { title: "B. La politique monétaire (BCE, taux d'intérêt)" }
      ]},
      { title: "III. Les grands indicateurs macroéconomiques", children: [
        { title: "A. L'inflation et la déflation" },
        { title: "B. Le carré magique de Kaldor" }
      ]}
    ],
    content: [
      { sectionTitle: "I. Les fonctions de l'État", subsections: [
        { title: "A. Régaliennes et économiques", text: "L'État assure d'abord ses missions régaliennes (justice, police, défense, diplomatie). Richard Musgrave (1959) identifie trois fonctions économiques : l'allocation (production de biens publics que le marché ne fournirait pas spontanément), la redistribution (réduction des inégalités via la fiscalité et les transferts sociaux) et la stabilisation (régulation conjoncturelle pour atteindre le carré magique).", keyPoints: ["Allocation : biens publics (éducation, défense, infrastructures)", "Redistribution : impôts progressifs + prestations sociales", "Stabilisation : politiques budgétaires et monétaires"] }
      ]},
      { sectionTitle: "II. Les politiques économiques", subsections: [
        { title: "A. Politique budgétaire et monétaire", text: "La politique budgétaire utilise les recettes et dépenses de l'État pour influencer l'activité économique. Elle peut être conjoncturelle (à court terme : relance ou austérité) ou structurelle (à long terme : investissement dans R&D, formation). La politique monétaire est menée par la BCE dans la zone euro : elle agit sur les taux d'intérêt et la masse monétaire pour contrôler l'inflation (objectif : ~2%). Il faut distinguer déficit public (solde annuel) et dette publique (accumulation des déficits).", callouts: [
          { type: 'info', icon: 'ℹ️', label: 'Chiffre clé — BCE', text: 'En 2022-2023, l\'inflation a dépassé 10% dans plusieurs pays de la zone euro suite à la crise énergétique (guerre en Ukraine). La BCE a relevé ses taux directeurs de 0% à 4,5% en 14 mois — la remontée la plus rapide de son histoire — pour casser cette spirale inflationniste.' },
          { type: 'warning', icon: '⚠️', label: 'Déficit ≠ Dette', text: 'Le déficit public est le solde annuel (recettes − dépenses d\'une année). La dette publique est le stock accumulé de tous les déficits passés. En France (2023) : déficit ~5,5% du PIB, dette ~112% du PIB. Un budget équilibré n\'efface pas la dette : il l\'empêche seulement d\'augmenter.' }
        ], keyPoints: ["Politique de relance : augmentation des dépenses publiques", "Politique monétaire accommodante : baisse des taux pour stimuler le crédit", "Déficit ≠ dette : le déficit s'ajoute chaque année à la dette"] }
      ]},
      { sectionTitle: "III. Les indicateurs macroéconomiques", subsections: [
        { title: "A. Le carré magique de Kaldor", text: "Nicholas Kaldor propose un outil graphique représentant 4 objectifs économiques simultanés : croissance du PIB élevée, faible chômage (plein emploi), inflation maîtrisée (~2%), et équilibre de la balance des paiements. On parle de 'carré magique' car atteindre simultanément tous ces objectifs est extrêmement difficile. L'inflation est une hausse durable et généralisée des prix ; la déflation est une baisse auto-entretenue des prix (plus dangereuse car elle retarde les décisions d'achat).", keyPoints: ["Carré magique : 4 objectifs rarement tous atteints ensemble", "Inflation ~2% : objectif de la BCE pour la zone euro", "Déflation : spirale baisse des prix → baisse de la production → hausse du chômage"] }
      ]}
    ],
    focus: { type: "auteur", title: "John Maynard Keynes et l'intervention de l'État", subtitle: "Théorie générale, 1936", content: "Keynes (1883-1946) est le père du keynésianisme. Face à la Grande Dépression de 1929, il théorise que l'État doit soutenir la demande globale en cas de récession ('relance par la demande'). Sa doctrine justifie le recours au déficit budgétaire comme outil de stabilisation économique. Elle s'oppose aux théories libérales classiques qui font confiance au marché pour s'auto-réguler.", tags: ["Keynésianisme", "Demande globale", "Relance", "Déficit budgétaire"] }
  },
  {
    id: "eco-c3", title: "Éco C3", subtitle: "Les facteurs de production",
    subject: "eco", color: "#86efac", icon: "⚙️",
    intro: "Toute production suppose des ressources. Ce chapitre explore comment les entreprises combinent le travail et le capital, mesurent leur efficacité via la productivité, et choisissent d'externaliser certaines activités pour se concentrer sur leur cœur de métier.",
    plan: [
      { title: "I. Les facteurs de production", children: [
        { title: "A. Le facteur travail (quantitatif et qualitatif)" },
        { title: "B. Le facteur capital (fixe et circulant)" }
      ]},
      { title: "II. La combinaison productive et les coûts", children: [
        { title: "A. Combinaison travaillistique vs capitalistique" },
        { title: "B. Les différentes catégories de coûts" },
        { title: "C. Les économies d'échelle" }
      ]},
      { title: "III. La productivité", children: [
        { title: "A. Productivité du travail et du capital" },
        { title: "B. Les gains de productivité et leurs effets" }
      ]},
      { title: "IV. L'impartition", children: [
        { title: "A. Sous-traitance et externalisation" },
        { title: "B. Les formes de coopération (franchise, joint-venture, GIE)" }
      ]}
    ],
    content: [
      { sectionTitle: "I. Les facteurs de production", subsections: [
        { title: "A. Travail et capital", text: "La production nécessite deux facteurs : le travail (activités humaines manuelles ou intellectuelles, approche quantitative : nombre de salariés/heures, et qualitative : compétences) et le capital (biens durables utilisés pour produire). Le capital se subdivise en capital fixe (réutilisable : machines, bâtiments) et capital circulant (détruit à la première utilisation : matières premières). Le processus productif désigne l'ensemble des étapes transformant les intrants en produits finis.", keyPoints: ["Facteur travail : quantitatif (heures) + qualitatif (compétences)", "Capital fixe : amortissable, réutilisable", "Capital circulant : consommé à chaque cycle de production"] }
      ]},
      { sectionTitle: "II. La combinaison productive et les coûts", subsections: [
        { title: "A. Combinaisons productives et coûts", text: "L'entreprise choisit sa combinaison productive (proportion travail/capital) en fonction du coût relatif des facteurs. Si le travail est moins cher, elle adopte une combinaison travaillistique ; si le capital est moins cher, une combinaison capitalistique. Les coûts se classent en fixes (indépendants de la production), variables (dépendent de la production), directs (imputables à un produit), indirects (charges communes). Une économie d'échelle correspond à la baisse du coût unitaire lorsque la production augmente.", keyPoints: ["Substitution capital/travail selon les coûts relatifs", "Coûts fixes + coûts variables = coûts totaux", "Économie d'échelle : coût unitaire diminue avec le volume"] }
      ]},
      { sectionTitle: "III. La productivité", subsections: [
        { title: "A. Productivité et gains de productivité", text: "La productivité mesure l'efficacité de la production : rapport entre la production et les facteurs utilisés. La productivité du travail = production / quantité de travail. La productivité du capital = production / capital utilisé. Un gain de productivité signifie produire plus avec les mêmes ressources (ou autant avec moins). Ces gains permettent de baisser les prix, d'augmenter les salaires ou d'améliorer les marges.", callouts: [
          { type: 'info', icon: 'ℹ️', label: 'Partage des gains de productivité', text: 'Les gains de productivité peuvent être partagés entre 3 bénéficiaires : les consommateurs (baisse des prix), les salariés (hausse des salaires), et les actionnaires (hausse des dividendes / marges). Ce partage est un enjeu de négociation sociale fondamental.' },
          { type: 'example', icon: '📌', label: 'IA et productivité', text: 'Goldman Sachs estime que l\'IA générative pourrait augmenter la productivité mondiale de 1,5% par an sur 10 ans, soit l\'équivalent d\'une révolution industrielle. Mais cette productivité accrue soulève aussi la question de la destruction d\'emplois dans les secteurs concernés.' }
        ], keyPoints: ["Productivité du travail = production / nb d'heures (ou de salariés)", "Gains de productivité : effet sur les prix, salaires et compétitivité", "La robotisation et l'IA augmentent la productivité du travail"] }
      ]},
      { sectionTitle: "IV. L'impartition", subsections: [
        { title: "A. Les formes d'impartition", text: "L'impartition consiste à déléguer à d'autres une partie des activités que l'entreprise aurait pu réaliser elle-même. La sous-traitance confie une tâche précise à un prestataire (donneur d'ordre → sous-traitant) tout en conservant la responsabilité globale. L'externalisation transfère durablement une activité entière (non-cœur de métier) à un prestataire. La co-traitance est un accord entre entreprises pour répondre ensemble à un marché. La franchise, la concession, le joint-venture et le GIE sont d'autres formes de coopération inter-entreprises.", keyPoints: ["Sous-traitance : tâche précise, donneur d'ordre reste responsable", "Externalisation : transfert durable d'une activité complète (ex: paie, IT)", "Chaîne de valeur (Porter) : outil pour identifier où créer de la valeur"] }
      ]}
    ],
    focus: { type: "auteur", title: "Michael Porter et la chaîne de valeur", subtitle: "L'Avantage concurrentiel, 1985", content: "Michael Porter (né en 1947) propose la chaîne de valeur comme outil d'analyse stratégique. Elle décompose les activités de l'entreprise en activités principales (logistique entrante, production, logistique sortante, commercialisation, services) et activités de soutien (infrastructure, GRH, technologie, approvisionnement). Identifier les activités créatrices de valeur permet de décider quelles activités internaliser (avantage compétitif) et lesquelles externaliser.", tags: ["Chaîne de valeur", "Avantage concurrentiel", "Impartition", "Cœur de métier"] }
  },
  {
    id: "mgmt-c1", title: "Management C1", subtitle: "L'entreprise et ses parties prenantes",
    subject: "mgmt", color: "#f97316", icon: "🎯",
    intro: "L'entreprise évolue dans un environnement peuplé d'acteurs aux intérêts parfois contradictoires. Ce chapitre analyse la finalité de l'entreprise, ses parties prenantes internes et externes, sa responsabilité sociétale, et les outils de mesure de sa performance.",
    plan: [
      { title: "I. L'entreprise et ses acteurs", children: [
        { title: "A. Logique entrepreneuriale vs logique managériale" },
        { title: "B. La finalité de l'entreprise" }
      ]},
      { title: "II. Les parties prenantes et la RSE", children: [
        { title: "A. Parties prenantes internes et externes" },
        { title: "B. La Responsabilité Sociétale des Entreprises (RSE)" }
      ]},
      { title: "III. La performance de l'entreprise", children: [
        { title: "A. Efficacité, efficience et pertinence" },
        { title: "B. Le tableau de bord et les indicateurs" }
      ]}
    ],
    content: [
      { sectionTitle: "I. L'entreprise et ses acteurs", subsections: [
        { title: "A. Logiques entrepreneuriale et managériale", text: "L'entrepreneur crée ou développe une entreprise en prenant des risques financiers et organisationnels pour mettre en œuvre une idée nouvelle. Il a une logique entrepreneuriale (prise de risque, innovation, création de valeur). Le manager, lui, organise, coordonne et motive les équipes pour atteindre les objectifs fixés avec les ressources disponibles (logique managériale : optimisation). Ces deux logiques peuvent coexister chez la même personne.", keyPoints: ["Logique entrepreneuriale : créer, innover, prendre des risques", "Logique managériale : optimiser les ressources pour atteindre les objectifs", "Exemple : Elon Musk = entrepreneur ET manager"] },
        { title: "B. La finalité de l'entreprise", text: "La finalité est la raison d'être à long terme de l'entreprise. L'entreprise privée vise principalement le profit. Mais d'autres finalités existent : satisfaction des clients, développement des salariés, contribution sociale et environnementale (RSE). La finalité guide les objectifs stratégiques.", keyPoints: ["Finalité lucrative ≠ finalité non lucrative (associations, coopératives)", "La finalité se décline en objectifs stratégiques puis opérationnels", "Tendance actuelle : raison d'être intégrant des objectifs sociaux/environnementaux"] }
      ]},
      { sectionTitle: "II. Les parties prenantes et la RSE", subsections: [
        { title: "A. Les parties prenantes", text: "Les parties prenantes (Freeman, 1984) sont toutes les personnes ou groupes qui ont un intérêt direct ou indirect dans les activités de l'entreprise. Internes : actionnaires, dirigeants, salariés. Externes : clients, fournisseurs, État, collectivités, associations, médias. L'entreprise doit concilier leurs intérêts souvent divergents.", keyPoints: ["Parties prenantes internes : actionnaires, salariés, dirigeants", "Parties prenantes externes : clients, fournisseurs, collectivités, ONG", "Théorie des parties prenantes (Freeman) ≠ théorie de l'actionnaire dominant"] },
        { title: "B. La RSE", text: "La RSE désigne l'intégration volontaire par les entreprises de préoccupations sociales, environnementales et éthiques dans leurs activités économiques et leur gouvernance. La pyramide de Carroll (1991) distingue 4 niveaux : responsabilités économiques (profit), légales (conformité), éthiques (comportement juste), philanthropiques (citoyenneté). La RSE n'est pas que philanthropique : elle peut être source d'avantage compétitif.", callouts: [
          { type: 'example', icon: '📌', label: 'Société à mission (loi PACTE, 2019)', text: 'La loi PACTE a introduit la notion de « raison d\'être » et de « société à mission » en France. Des entreprises comme Danone, la MAIF ou Michel et Augustin ont inscrit des objectifs sociaux et environnementaux dans leurs statuts, aux côtés de l\'objectif de profit.' },
          { type: 'def', icon: '📖', label: 'CSRD — Obligation depuis 2024', text: 'La directive européenne CSRD (Corporate Sustainability Reporting Directive) oblige depuis 2024 les grandes entreprises à publier un rapport détaillé sur leur impact environnemental, social et de gouvernance (ESG). La RSE « volontaire » devient progressivement obligatoire.' }
        ], keyPoints: ["RSE : volontaire mais de plus en plus encadrée (ex: DPEF, CSRD)", "Triple bottom line : performance économique + sociale + environnementale", "Pyramide de Carroll : économique → légal → éthique → philanthropique"] }
      ]},
      { sectionTitle: "III. La performance de l'entreprise", subsections: [
        { title: "A. Efficacité, efficience, pertinence et tableau de bord", text: "La mesure de la performance repose sur trois notions distinctes. L'efficacité (résultat atteint / objectif fixé) répond à la question : « Est-ce que j'atteins mon objectif ? ». L'efficience (résultat atteint / moyens utilisés) répond à : « Est-ce que je l'atteins en optimisant mes ressources ? ». La pertinence (moyens utilisés / objectifs fixés) répond à : « Les moyens que j'ai mobilisés étaient-ils adaptés à mes objectifs ? ».\n\nLe tableau de bord prospectif (BSC — Balanced Scorecard, Kaplan & Norton, 1992) intègre quatre perspectives : financière (rentabilité, chiffre d'affaires), client (satisfaction, fidélisation), processus internes (qualité, délais), et apprentissage/innovation (formation, R&D). Un indicateur de performance (KPI) est pertinent s'il est mesurable, actionnable et aligné sur la stratégie.", keyPoints: ["Efficacité = résultat / objectif → « Fait-on les bonnes choses ? »", "Efficience = résultat / moyens → « Fait-on les choses correctement ? »", "BSC (Kaplan & Norton) : 4 perspectives — financière, client, processus, apprentissage"] }
      ]}
    ],
    focus: { type: "auteur", title: "R. Edward Freeman — Théorie des parties prenantes", subtitle: "Strategic Management: A Stakeholder Approach, 1984", content: "Freeman remet en cause la vision purement actionnariale de l'entreprise (théorie de Friedman). Pour lui, l'entreprise doit créer de la valeur pour l'ensemble de ses parties prenantes, pas seulement pour les actionnaires. Cette théorie est aujourd'hui au cœur de la gouvernance RSE et du mouvement 'stakeholder capitalism' (Forum de Davos, Business Roundtable 2019).", tags: ["Parties prenantes", "Stakeholder capitalism", "Gouvernance", "Vs Friedman"] }
  },
  {
    id: "mgmt-c2", title: "Management C2", subtitle: "La stratégie d'entreprise",
    subject: "mgmt", color: "#e879f9", icon: "🧭",
    intro: "La stratégie, c'est l'art de faire des choix durables pour créer un avantage concurrentiel. Ce chapitre présente les outils d'analyse de l'environnement (5 forces de Porter, PESTEL) et les grandes orientations qui guident le développement des entreprises.",
    plan: [
      { title: "I. L'analyse de l'environnement de l'entreprise", children: [
        { title: "A. Le micro-environnement : les 5 forces de Porter" },
        { title: "B. Le macro-environnement : l'analyse PESTEL" }
      ]},
      { title: "II. Les orientations stratégiques", children: [
        { title: "A. Le développement durable comme orientation stratégique" },
        { title: "B. L'innovation comme moteur de la stratégie" }
      ]}
    ],
    content: [
      { sectionTitle: "I. L'analyse de l'environnement", subsections: [
        { title: "A. Micro-environnement : les 5 forces de Porter", text: "Le micro-environnement comprend les acteurs avec lesquels l'entreprise interagit directement. Porter (1979) identifie 5 forces concurrentielles : l'intensité de la rivalité entre concurrents, la menace de nouveaux entrants, la menace de produits substituables, le pouvoir de négociation des fournisseurs, et le pouvoir de négociation des clients. Ces forces déterminent l'attractivité d'un secteur.", callouts: [
          { type: 'example', icon: '📌', label: 'Application — Industrie pharmaceutique', text: 'Secteur très attractif : barrières à l\'entrée élevées (brevets, investissements R&D massifs), peu de substituts pour les médicaments brevetés, faible pouvoir des clients (patient / médecin ne choisissent pas le prix). En revanche, la menace d\'entrée des génériques à l\'expiration des brevets est forte.' },
          { type: 'info', icon: 'ℹ️', label: 'Sixième force', text: 'Certains auteurs ajoutent une 6ème force à Porter : le rôle des pouvoirs publics et des complémenteurs (entreprises dont les produits augmentent la valeur de vos propres produits, ex : développeurs d\'apps pour Apple).' }
        ], keyPoints: ["5 forces de Porter : outil d'analyse sectorielle", "Plus les forces sont intenses, moins le secteur est attractif", "La stratégie vise à atténuer ces forces ou à en tirer parti"] },
        { title: "B. Macro-environnement : PESTEL", text: "Le macro-environnement regroupe les facteurs que l'entreprise ne maîtrise pas mais qui l'influencent. L'analyse PESTEL les classe en 6 dimensions : Politique (stabilité, fiscalité), Économique (croissance, taux de change), Socioculturel (tendances, démographie), Technologique (innovations, R&D), Écologique (réglementation environnementale, changement climatique), Légal (droit du travail, droit de la concurrence).", keyPoints: ["PESTEL : outil de veille stratégique de l'environnement lointain", "Macro-environnement ≠ micro-environnement (acteurs directs)", "Combine avec les 5 forces de Porter pour une analyse complète"] }
      ]},
      { sectionTitle: "II. Les orientations stratégiques", subsections: [
        { title: "A. Développement durable et innovation", text: "Le développement durable répond aux besoins du présent sans compromettre les générations futures (Brundtland, 1987). Il repose sur 3 piliers : écologique, social, économique. Les entreprises l'intègrent via leur stratégie RSE. L'innovation, définie par l'OCDE (2005), est la mise en œuvre d'un produit, procédé, méthode de commercialisation ou méthode organisationnelle nouveau ou sensiblement amélioré. Schumpeter théorise la 'destruction créatrice' : l'innovation est le moteur du capitalisme.", callouts: [
          { type: 'example', icon: '📌', label: 'Destruction créatrice — Exemples', text: 'Netflix a détruit Blockbuster (location de DVD), Uber a bouleversé le secteur des taxis, l\'iPhone a tué les appareils photo compacts. Dans chaque cas, une innovation technologique ou de modèle d\'affaires a anéanti une industrie existante tout en créant une nouvelle.' },
          { type: 'def', icon: '📖', label: 'Les 4 types d\'innovation (OCDE)', text: '1. Produit : bien/service nouveau ou amélioré. 2. Procédé : méthode de production/distribution nouvelle. 3. Commercialisation : nouvelle méthode de mise en marché (packaging, prix, distribution). 4. Organisation : nouvelle façon d\'organiser les relations internes ou avec l\'extérieur.' }
        ], keyPoints: ["Développement durable : 3 piliers (économique, social, environnemental)", "4 types d'innovation OCDE : produit, procédé, commercialisation, organisation", "Schumpeter : l'innovation détruit les anciens marchés pour en créer de nouveaux"] }
      ]}
    ],
    focus: { type: "auteur", title: "Joseph Schumpeter — La destruction créatrice", subtitle: "Capitalisme, socialisme et démocratie, 1942", content: "Schumpeter (1883-1950) est l'économiste de l'innovation. Il théorise que le capitalisme avance par 'destruction créatrice' : les innovations brisent les structures existantes et en créent de nouvelles. L'entrepreneur schumpétérien est l'acteur central du progrès économique. Cette théorie explique comment des entreprises comme Amazon ou Uber ont détruit des industries entières tout en en créant de nouvelles.", tags: ["Innovation", "Destruction créatrice", "Entrepreneur", "Capitalisme dynamique"] }
  }
];

// ── DATA — 176 définitions ────────────────────────────────────
const DATA = [
  // DROIT C1
  { id:1,  term:"Le droit",                     cat:"droit-c1", color:"#60a5fa", def:"Ce sont des regles qui regissent notre societe afin de l'organiser. Ces regles encadrent les rapports entre les personnes, qu'il s'agisse de personnes physiques (les individus) ou de personnes morales (comme les societes, associations ou institutions)." },
  { id:2,  term:"Codification",                 cat:"droit-c1", color:"#60a5fa", def:"Les regles de droit sont rassemblees dans des ouvrages appeles codes (ex. Code civil, Code du travail)." },
  { id:3,  term:"Jurisprudence",                cat:"droit-c1", color:"#60a5fa", def:"Ensemble des decisions des juges sur un point de droit donne." },
  { id:4,  term:"Pyramide de Kelsen",           cat:"droit-c1", color:"#60a5fa", def:"Modele de la hierarchie des normes : ce qui est en dessous doit etre conforme a ce qui est au dessus." },
  { id:5,  term:"Juridiction",                  cat:"droit-c1", color:"#60a5fa", def:"Une juridiction est un tribunal ou une cour, c'est-a-dire une instance chargee de rendre la justice en France." },
  { id:6,  term:"Ordre administratif",          cat:"droit-c1", color:"#60a5fa", def:"L'ordre administratif est competent pour trancher les litiges entre les particuliers et l'administration." },
  { id:7,  term:"Ordre judiciaire",             cat:"droit-c1", color:"#60a5fa", def:"L'ordre judiciaire concerne les litiges entre personnes physiques ou morales (matiere civile et penale)." },
  { id:8,  term:"Conseil de prud'hommes",       cat:"droit-c1", color:"#60a5fa", def:"Regle les litiges individuels entre employeurs et salaries." },
  { id:9,  term:"Tribunal de commerce",         cat:"droit-c1", color:"#60a5fa", def:"Competent pour les affaires entre commercants." },
  { id:10, term:"Tribunal judiciaire",          cat:"droit-c1", color:"#60a5fa", def:"Juridiction de droit commun : il s'occupe de toutes les affaires qui ne relevent pas des juridictions specialisees." },
  { id:11, term:"Jugement",                     cat:"droit-c1", color:"#60a5fa", def:"Decision rendue par les premiers juges en matiere civile." },
  { id:12, term:"Cour de cassation",            cat:"droit-c1", color:"#60a5fa", def:"Ne rejoue pas l'affaire : elle ne juge pas les faits, mais uniquement le droit." },
  { id:13, term:"Infractions",                  cat:"droit-c1", color:"#60a5fa", def:"En matiere penale, on distingue trois types d'infractions : les contraventions, les delits, et les crimes." },
  { id:14, term:"Tribunal des conflits",        cat:"droit-c1", color:"#60a5fa", def:"Determine quel ordre de juridiction est competent." },
  // DROIT C2
  { id:15, term:"Contrat",                      cat:"droit-c2", color:"#818cf8", def:"Le contrat est un accord de volontes entre deux ou plusieurs personnes destine a creer, modifier, transmettre ou eteindre des obligations. (Art 1101 du Code civil)" },
  { id:16, term:"Liberte contractuelle",        cat:"droit-c2", color:"#818cf8", def:"Chacun est libre de contracter ou de ne pas contracter, de choisir son cocontractant ou de decider du contenu du contrat dans les limites fixees par la loi. (Art 1102)" },
  { id:17, term:"Obligation d'information",     cat:"droit-c2", color:"#818cf8", def:"Chaque partie doit transmettre les informations necessaires a l'autre." },
  { id:18, term:"Pacte de preference",          cat:"droit-c2", color:"#818cf8", def:"Le pacte de preference est le contrat par lequel une partie s'engage a proposer prioritairement a son beneficiaire de traiter avec lui pour le cas ou elle deciderait de contracter." },
  { id:19, term:"Promesse unilaterale",         cat:"droit-c2", color:"#818cf8", def:"La promesse unilaterale est le contrat par lequel une partie, le promettant, accorde a l'autre, le beneficiaire, le droit d'opter pour la conclusion d'un contrat dont les elements essentiels sont determines, et pour la formation duquel ne manque que le consentement du beneficiaire." },
  { id:20, term:"Offre",                        cat:"droit-c2", color:"#818cf8", def:"Manifestation de volonte qui doit etre ferme, precise et susceptible d'acceptation pure et simple. Celui qui formule cette offre accepte d'etre lie par elle." },
  { id:21, term:"Acceptation",                  cat:"droit-c2", color:"#818cf8", def:"Manifestation de volonte de son auteur d'etre lie dans les termes de l'offre." },
  { id:22, term:"Erreur",                       cat:"droit-c2", color:"#818cf8", def:"L'erreur correspond a une appreciation erronee de la realite. Elle est un vice du consentement lorsqu'elle a ete determinante, qu'elle est excusable et qu'elle porte sur les qualites essentielles de la prestation." },
  { id:23, term:"Le dol",                       cat:"droit-c2", color:"#818cf8", def:"Le dol est le fait pour un contractant d'obtenir le consentement de l'autre par des manoeuvres ou des mensonges. Constitue egalement un dol la dissimulation intentionnelle par l'un des contractants d'une information dont il sait le caractere determinant pour l'autre partie." },
  { id:24, term:"La violence",                  cat:"droit-c2", color:"#818cf8", def:"Il y a violence lorsqu'une partie s'engage sous la pression d'une contrainte qui lui inspire la crainte d'exposer sa personne, sa fortune ou celles de ses proches a un mal considerable." },
  { id:25, term:"Clause",                       cat:"droit-c2", color:"#818cf8", def:"Une clause est une partie du contrat : une ou plusieurs phrases qui portent sur un sujet precis dans le texte d'un acte juridique." },
  { id:26, term:"Clause abusive",               cat:"droit-c2", color:"#818cf8", def:"Une clause abusive est une clause qui cree un desequilibre significatif entre les droits et les obligations des parties, au detriment du consommateur." },
  { id:27, term:"Nullite du contrat",           cat:"droit-c2", color:"#818cf8", def:"Aneantissement retroactif du contrat." },
  { id:28, term:"Nullite relative",             cat:"droit-c2", color:"#818cf8", def:"La nullite relative s'applique lorsque la regle qu'on n'a pas respectee existe pour proteger l'interet prive d'une des parties au contrat." },
  { id:29, term:"Nullite absolue",              cat:"droit-c2", color:"#818cf8", def:"La nullite absolue s'applique lorsqu'on n'a pas respecte une regle qui existe pour proteger l'interet general." },
  { id:30, term:"Forclusion",                   cat:"droit-c2", color:"#818cf8", def:"Perte definitive du droit d'agir en justice pour non-respect du delai legal." },
  // DROIT C3
  { id:31, term:"Parties au contrat",           cat:"droit-c3", color:"#a78bfa", def:"Les parties au contrat sont les personnes qui concluent le contrat. Elles sont liees par les obligations nees du contrat." },
  { id:32, term:"Cocontractant",                cat:"droit-c3", color:"#a78bfa", def:"Le cocontractant est l'autre partie au contrat, celle avec qui on a conclu l'accord." },
  { id:33, term:"Tiers au contrat",             cat:"droit-c3", color:"#a78bfa", def:"Le tiers au contrat est une personne etrangere a l'accord, qui n'a pas participe a sa formation et n'est pas liee par les obligations qu'il cree." },
  { id:34, term:"Creancier",                    cat:"droit-c3", color:"#a78bfa", def:"Le creancier est la personne a qui une obligation est due. C'est celui qui a le droit d'exiger que l'autre partie execute la prestation prevue." },
  { id:35, term:"Debiteur",                     cat:"droit-c3", color:"#a78bfa", def:"Le debiteur est la personne qui doit executer l'obligation envers le creancier." },
  { id:36, term:"Obligation de moyens",         cat:"droit-c3", color:"#a78bfa", def:"Lorsqu'une partie a une obligation de moyens, elle s'engage a faire son possible pour remplir son obligation prevue au contrat." },
  { id:37, term:"Obligation de resultat",       cat:"droit-c3", color:"#a78bfa", def:"La partie sur qui pese une obligation de resultat a l'obligation d'atteindre le resultat attendu. Si le resultat n'est pas atteint, elle commet une faute contractuelle." },
  { id:38, term:"Clause resolutoire",           cat:"droit-c3", color:"#a78bfa", def:"Clause par laquelle on va mettre un terme au contrat si les engagements ne sont pas respectes." },
  { id:39, term:"Clause penale",                cat:"droit-c3", color:"#a78bfa", def:"Clause fixant a l'avance le montant des dommages-interets." },
  { id:40, term:"Clause limitative de responsabilite", cat:"droit-c3", color:"#a78bfa", def:"Clause qui limite la responsabilite d'une partie en cas de faute ou de dommage." },
  { id:41, term:"Clause d'indexation",          cat:"droit-c3", color:"#a78bfa", def:"Clause permettant d'ajuster le prix ou une somme due en fonction d'un indice (ex : inflation)." },
  { id:42, term:"Clause de reserve de propriete", cat:"droit-c3", color:"#a78bfa", def:"Clause selon laquelle le vendeur reste proprietaire du bien jusqu'au paiement complet du prix." },
  { id:43, term:"Clause de dedit",              cat:"droit-c3", color:"#a78bfa", def:"Clause qui prevoit qu'on peut decider seul de mettre un terme au contrat." },
  { id:44, term:"Condition suspensive",         cat:"droit-c3", color:"#a78bfa", def:"Evenement futur et incertain dont depend la formation ou l'execution du contrat. Le contrat ne produit effet que si l'evenement se realise." },
  { id:45, term:"Inexecution du contrat",       cat:"droit-c3", color:"#a78bfa", def:"L'inexecution du contrat se produit lorsqu'une partie ne respecte pas les obligations qu'elle a librement acceptees." },
  { id:46, term:"Exception d'inexecution",      cat:"droit-c3", color:"#a78bfa", def:"Une partie peut refuser d'executer son obligation si l'autre n'execute pas la sienne et si cette inexecution est suffisamment grave." },
  { id:47, term:"Execution forcee en nature",   cat:"droit-c3", color:"#a78bfa", def:"Le creancier obtient, par la contrainte, que le debiteur execute exactement l'obligation prevue au contrat." },
  { id:48, term:"Reduction du prix",            cat:"droit-c3", color:"#a78bfa", def:"En cas d'execution imparfaite, le creancier peut notifier sa decision de reduire de maniere proportionnelle le prix." },
  { id:49, term:"Resolution",                   cat:"droit-c3", color:"#a78bfa", def:"La resolution resulte d'une clause resolutoire, d'une notification du creancier ou d'une decision de justice. Elle anéantit le contrat retroactivement." },
  { id:50, term:"Responsabilite contractuelle", cat:"droit-c3", color:"#a78bfa", def:"Le debiteur est condamne au paiement de dommages et interets a raison de l'inexecution de l'obligation, s'il ne justifie pas que l'execution a ete empechee par la force majeure." },
  { id:51, term:"Mise en demeure",              cat:"droit-c3", color:"#a78bfa", def:"Lettre de reclamation demandant d'accomplir ses obligations sous delai precis." },
  { id:52, term:"Contrat synallagmatique",      cat:"droit-c3", color:"#a78bfa", def:"Contrat dans lequel les parties s'engagent reciproquement." },
  { id:53, term:"Contrat unilateral",           cat:"droit-c3", color:"#a78bfa", def:"Un contrat est unilateral lorsqu'une ou plusieurs personnes s'obligent envers une ou plusieurs autres sans qu'il y ait d'engagement reciproque." },
  { id:54, term:"Contrat a titre onereux",      cat:"droit-c3", color:"#a78bfa", def:"Le contrat a titre onereux est celui qui assujettit chacune des parties a donner ou a faire quelque chose." },
  { id:55, term:"Contrat a titre gratuit",      cat:"droit-c3", color:"#a78bfa", def:"Un contrat est a titre gratuit lorsque l'une des parties procure a l'autre un avantage sans attendre ni recevoir de contrepartie." },
  { id:56, term:"Contrat commutatif",           cat:"droit-c3", color:"#a78bfa", def:"Un contrat commutatif est celui ou chacune des parties s'engage a procurer a l'autre un avantage regarde comme l'equivalent de celui qu'elle recoit." },
  { id:57, term:"Contrat aleatoire",            cat:"droit-c3", color:"#a78bfa", def:"C'est un contrat dans lequel les parties acceptent de faire dependre les effets du contrat d'un evenement incertain." },
  { id:58, term:"Contrat consensuel",           cat:"droit-c3", color:"#a78bfa", def:"Il est consensuel lorsqu'il se forme par le seul echange des consentements quel qu'en soit le mode d'expression." },
  { id:59, term:"Contrat solennel",             cat:"droit-c3", color:"#a78bfa", def:"Le contrat est solennel lorsque sa validite est subordonnee a des formes determinees par la loi." },
  { id:60, term:"Contrat reel",                 cat:"droit-c3", color:"#a78bfa", def:"Le contrat est reel lorsque sa formation est subordonnee a la remise d'une chose." },
  { id:61, term:"Contrat de gre a gre",         cat:"droit-c3", color:"#a78bfa", def:"Le contrat de gre a gre est celui dont les stipulations sont negociables entre les parties." },
  { id:62, term:"Contrat d'adhesion",           cat:"droit-c3", color:"#a78bfa", def:"Le contrat d'adhesion est celui qui comporte un ensemble de clauses non negociables, determinees a l'avance par l'une des parties." },
  { id:63, term:"Contrat cadre",                cat:"droit-c3", color:"#a78bfa", def:"Le contrat cadre est un accord par lequel les parties conviennent des caracteristiques generales de leurs relations contractuelles futures." },
  { id:64, term:"Contrat a execution instantanee", cat:"droit-c3", color:"#a78bfa", def:"Le contrat a execution instantanee est celui dont les obligations peuvent s'executer en une prestation unique." },
  { id:65, term:"Contrat a execution successive", cat:"droit-c3", color:"#a78bfa", def:"Le contrat a execution successive est celui dont les obligations d'au moins une partie s'executent en plusieurs prestations echelonnees dans le temps." },
  { id:66, term:"Contrat intuitu personae",     cat:"droit-c3", color:"#a78bfa", def:"Contrat conclu en consideration de la personne avec laquelle on le conclut." },
  // DROIT C4
  { id:67, term:"Droit de la concurrence",      cat:"droit-c4", color:"#f472b6", def:"C'est l'ensemble des regles qui definissent les rapports qui encadrent les entreprises." },
  { id:68, term:"Concurrence deloyale",         cat:"droit-c4", color:"#f472b6", def:"Elle designe les comportements adoptes par une entreprise pour attirer la clientele d'un concurrent en ne respectant pas les regles de loyaute." },
  { id:69, term:"Denigrement",                  cat:"droit-c4", color:"#f472b6", def:"Le fait de jeter le discredit sur un concurrent en tenant des propos ou des critiques malveillantes concernant ses biens ou services." },
  { id:70, term:"Desorganisation",              cat:"droit-c4", color:"#f472b6", def:"Elle consiste a perturber le fonctionnement de l'entreprise concurrente, par exemple en debauchant massivement ses salaries." },
  { id:71, term:"Imitation",                    cat:"droit-c4", color:"#f472b6", def:"L'imitation est deloyale lorsqu'elle utilise les memes signes distinctifs qu'une entreprise concurrente et cree une confusion dans l'esprit du consommateur." },
  { id:72, term:"Parasitisme",                  cat:"droit-c4", color:"#f472b6", def:"Tirer indument profit du savoir-faire et des efforts humains et financiers consentis par une entreprise concurrente." },
  { id:73, term:"Entente",                      cat:"droit-c4", color:"#f472b6", def:"L'entente est une concertation entre 2 ou plusieurs entreprises independantes pour fixer une ligne de conduite portant atteinte a la concurrence." },
  { id:74, term:"Procedure de clemence",        cat:"droit-c4", color:"#f472b6", def:"Quand une entreprise denonce une entente, elle peut etre exoneree ou partiellement allégée de sanction." },
  { id:75, term:"Abus de position dominante",   cat:"droit-c4", color:"#f472b6", def:"Consiste pour une entreprise a adopter un comportement visant a eliminer ou contraindre tout concurrent. Trois conditions : position dominante, exploitation abusive, effet restrictif de concurrence." },
  { id:76, term:"Prix abusivement bas",         cat:"droit-c4", color:"#f472b6", def:"L'offre de prix abusivement bas par rapport aux couts de production constitue une pratique anticoncurrentielle interdite. Vise a evincer des concurrents." },
  { id:77, term:"Pratiques restrictives",       cat:"droit-c4", color:"#f472b6", def:"Regroupent des comportements prohibes dans les relations commerciales entre professionnels : avantage sans contrepartie, desequilibre significatif, rupture brutale..." },
  { id:78, term:"Desequilibre significatif",    cat:"droit-c4", color:"#f472b6", def:"Situation ou une entreprise impose a son partenaire des obligations creant un desequilibre excessif du fait d'une asymetrie de pouvoir economique." },
  { id:79, term:"Rupture brutale",              cat:"droit-c4", color:"#f472b6", def:"Concerne la cessation soudaine ou insuffisamment anticipee d'une relation commerciale stable et reguliere." },
  { id:80, term:"Concentration",               cat:"droit-c4", color:"#f472b6", def:"La concentration correspond a un rapprochement de societes qui conduit a la concentration du controle entre les mains d'une meme entite." },
  // DROIT C5
  { id:81, term:"Marque",                       cat:"droit-c5", color:"#fb923c", def:"Signe distinctif qui accompagne un produit ou service pour le distinguer de ceux proposes par la concurrence. Sa protection necessite un depot aupres de l'INPI." },
  { id:82, term:"Brevet",                       cat:"droit-c5", color:"#fb923c", def:"Le brevet est un acte officiel de propriete industrielle qui accorde un monopole d'exploitation au demandeur sur son invention pour une duree maximale de 20 ans." },
  // DROIT C6
  { id:83, term:"Societe",                      cat:"droit-c6", color:"#fbbf24", def:"La societe est instituee par deux ou plusieurs personnes qui conviennent d'affecter a une entreprise commune des biens en vue de partager le benefice. Elle peut aussi etre constituee par une seule personne." },
  { id:84, term:"Subdivision du patrimoine",    cat:"droit-c6", color:"#fbbf24", def:"Pour proteger l'entrepreneur individuel, le patrimoine est divise en deux parties : le patrimoine utile a l'activite professionnelle et le patrimoine personnel." },
  { id:85, term:"Communaute de biens reduite aux acquets", cat:"droit-c6", color:"#fbbf24", def:"Tous les biens acquis par l'un ou l'autre pendant le mariage appartiennent aux deux conjoints." },
  { id:86, term:"Apport",                       cat:"droit-c6", color:"#fbbf24", def:"Les biens ou valeurs que les associes mettent a disposition de l'entreprise lors de sa creation. Ils peuvent etre en numeraire, en nature ou en industrie." },
  { id:87, term:"Apport en numeraire",          cat:"droit-c6", color:"#fbbf24", def:"Il s'agit de tout apport d'argent." },
  { id:88, term:"Apport en nature",             cat:"droit-c6", color:"#fbbf24", def:"Il s'agit de tout apport de biens autres que de l'argent, pouvant etre evalues pecuniairement (fonds de commerce, marque, brevet, etc.)." },
  { id:89, term:"Apport en industrie",          cat:"droit-c6", color:"#fbbf24", def:"Un associe met a la disposition de la societe ses connaissances techniques ou son travail. Ces apports ne peuvent concourir a la formation du capital social." },
  { id:90, term:"Societes de personnes",        cat:"droit-c6", color:"#fbbf24", def:"Societes dont le contrat repose sur un fort intuitu personae. Les associes sont responsables indéfiniment et solidairement. Forme principale : SNC." },
  { id:91, term:"Societes de capitaux",         cat:"droit-c6", color:"#fbbf24", def:"Societes constituees pour reunir des capitaux importants. La responsabilite est limitee aux apports. Formes : SA, SAS, SASU." },
  { id:92, term:"Societes Mixtes",              cat:"droit-c6", color:"#fbbf24", def:"Societes qui empruntent des caracteristiques aux societes de personnes et aux societes de capitaux. Forme principale : SARL, EURL." },
  // ECO C1
  { id:93,  term:"Marche",                      cat:"eco-c1", color:"#34d399", def:"Lieu de rencontre entre l'offre et la demande, qu'il s'agisse de biens ou de services." },
  { id:94,  term:"Marche de bien et service",   cat:"eco-c1", color:"#34d399", def:"Lieu (reel ou virtuel) ou se rencontrent l'offre de produits ou prestations et la demande exprimee par les menages, l'Etat ou d'autres organisations." },
  { id:95,  term:"Marche du travail",           cat:"eco-c1", color:"#34d399", def:"Lieu ou se rencontrent l'offre et la demande de travail." },
  { id:96,  term:"Marche financier",            cat:"eco-c1", color:"#34d399", def:"Lieu ou s'organise la rencontre entre les capitaux disponibles et les besoins de financement des entreprises, de l'Etat ou d'autres acteurs." },
  { id:97,  term:"Alliance",                    cat:"eco-c1", color:"#34d399", def:"Les alliances permettent a des entreprises de s'associer pour atteindre une taille critique et devenir rentables." },
  { id:98,  term:"Partenariat",                 cat:"eco-c1", color:"#34d399", def:"Collaborations conclues avec des structures non concurrentes avec lesquelles il existe un interet commun et une activite complementaire." },
  { id:99,  term:"Taille critique",             cat:"eco-c1", color:"#34d399", def:"Le seuil a partir duquel une entreprise peut couvrir ses couts, etre rentable et degager du benefice." },
  { id:100, term:"Concurrence",                 cat:"eco-c1", color:"#34d399", def:"Situation dans laquelle plusieurs entreprises proposent des biens ou services similaires sur un meme marche, dans le but de satisfaire la meme demande." },
  { id:101, term:"Marche concurrentiel",        cat:"eco-c1", color:"#34d399", def:"Marche ou de nombreux acteurs proposent leurs biens et services. La pression concurrentielle peut porter sur le prix, la qualite ou l'innovation." },
  { id:102, term:"Concurrence pure et parfaite",cat:"eco-c1", color:"#34d399", def:"Modele theorique reposant sur 5 hypotheses : atomicite, homogeneite du produit, fluidite, transparence de l'information, mobilite parfaite des facteurs." },
  { id:103, term:"Asymetrie d'information",     cat:"eco-c1", color:"#34d399", def:"Certains acteurs du marche sont parfois plus informes (ou mieux informes) que d'autres." },
  { id:104, term:"Barrieres a l'entree",        cat:"eco-c1", color:"#34d399", def:"Les barrieres a l'entree sont des obstacles qui rendent difficile ou couteuse l'arrivee de nouveaux concurrents sur un marche." },
  { id:105, term:"Externalites",                cat:"eco-c1", color:"#34d399", def:"Les externalites sont les effets indirects induits par l'activite d'une entreprise, non integres dans le prix de marche. Elles peuvent etre positives ou negatives." },
  { id:106, term:"Pollueur-payeur",             cat:"eco-c1", color:"#34d399", def:"Toute personne ou entreprise qui cause une externalite negative (pollution, nuisances...) doit en assumer le cout." },
  { id:107, term:"Dumping environnemental",     cat:"eco-c1", color:"#34d399", def:"Fait pour une entreprise de profiter d'une reglementation plus laxiste dans un pays afin d'y produire a moindre cout en generant davantage de pollution." },
  { id:108, term:"Dumping social",              cat:"eco-c1", color:"#34d399", def:"Pratique consistant a faire produire dans des pays ou les couts de main-d'oeuvre et les protections sociales sont plus faibles afin de reduire les couts." },
  { id:109, term:"E-reputation",                cat:"eco-c1", color:"#34d399", def:"L'image en ligne d'une entite, construite notamment via les avis des clients/consommateurs." },
  { id:110, term:"Loi de l'offre et de la demande", cat:"eco-c1", color:"#34d399", def:"La loi de l'offre et de la demande explique comment le prix et la quantite d'un bien ou service se determinent sur un marche." },
  { id:111, term:"Entreprise",                  cat:"eco-c1", color:"#34d399", def:"Un ensemble de moyens (humains, financiers, materiels) organises pour produire des biens et services destines au marche." },
  { id:112, term:"Menage",                      cat:"eco-c1", color:"#34d399", def:"Groupe de personnes occupant un meme logement. Les menages disposent de revenus qu'ils utilisent pour consommer." },
  { id:113, term:"Etat",                        cat:"eco-c1", color:"#34d399", def:"En economie, l'Etat comprend les collectivites et la sphere publique. Il recueille les impots et met en place des services publics non marchands." },
  { id:114, term:"Banque",                      cat:"eco-c1", color:"#34d399", def:"Intermediaire financier qui collecte l'epargne, accorde des prets, securise les paiements et propose des produits financiers." },
  { id:115, term:"Flux reels",                  cat:"eco-c1", color:"#34d399", def:"Mouvements de biens et services, c'est l'objet de la prestation." },
  { id:116, term:"Flux monetaires",             cat:"eco-c1", color:"#34d399", def:"Mouvements d'argent, c'est le reglement de la prestation." },
  { id:117, term:"Marche primaire",             cat:"eco-c1", color:"#34d399", def:"Premiere emission des titres, les fonds arrivent chez l'emetteur." },
  { id:118, term:"Marche secondaire",           cat:"eco-c1", color:"#34d399", def:"Revente/achat des titres deja emis entre investisseurs (ex. Bourse)." },
  // ECO C2
  { id:119, term:"Inflation",                   cat:"eco-c2", color:"#67e8f9", def:"L'inflation est l'augmentation durable et generale du niveau des prix." },
  { id:120, term:"Deflation",                   cat:"eco-c2", color:"#67e8f9", def:"Baisse durable et auto-entretenue du niveau general des prix." },
  { id:121, term:"Fonctions regaliennes",       cat:"eco-c2", color:"#67e8f9", def:"Les missions fondamentales de l'Etat (Justice, Police, Defense, Diplomatie)." },
  { id:122, term:"Politique economique",        cat:"eco-c2", color:"#67e8f9", def:"Ensemble des decisions prises par les pouvoirs publics pour gerer l'economie." },
  { id:123, term:"Politique monetaire",         cat:"eco-c2", color:"#67e8f9", def:"Actions visant a reguler la quantite de monnaie en circulation pour controler l'inflation. Menee par la banque centrale (BCE en zone euro)." },
  { id:124, term:"Politique budgetaire",        cat:"eco-c2", color:"#67e8f9", def:"Utilisation du budget de l'Etat (recettes et depenses) pour influencer l'activite economique." },
  { id:125, term:"Carre magique",               cat:"eco-c2", color:"#67e8f9", def:"Le carre magique de Kaldor represente 4 objectifs economiques : croissance elevee, faible chomage, inflation maitrisee, equilibre exterieur." },
  { id:126, term:"Politique conjoncturelle",    cat:"eco-c2", color:"#67e8f9", def:"Corriger les fluctuations a court terme pour temperer les desequilibres economiques." },
  { id:127, term:"Politique structurelle",      cat:"eco-c2", color:"#67e8f9", def:"Modifier durablement le fonctionnement de l'economie afin d'augmenter la croissance potentielle et la competitivite." },
  { id:128, term:"Developpement",               cat:"eco-c2", color:"#67e8f9", def:"Ensemble de transformations qualitatives qui accompagnent une croissance durable : evolution des structures economiques, sociales et culturelles." },
  { id:129, term:"Deficit vs dette",            cat:"eco-c2", color:"#67e8f9", def:"Le deficit public est le solde budgetaire de l'Etat sur une annee ; la dette publique s'accumule annee apres annee." },
  { id:130, term:"Deficit public",              cat:"eco-c2", color:"#67e8f9", def:"Le deficit public est le solde budgetaire negatif de l'Etat sur une annee. Il faut distinguer deficit (solde annuel) et dette (accumulation)." },
  { id:131, term:"Fonctions de l'Etat (Musgrave)", cat:"eco-c2", color:"#67e8f9", def:"Richard Musgrave identifie trois fonctions economiques de l'Etat : allocation (biens publics), redistribution (reduction des inegalites), stabilisation (regulation conjoncturelle)." },
  // ECO C3
  { id:132, term:"Facteurs de production",      cat:"eco-c3", color:"#86efac", def:"L'ensemble des elements necessaires a la production : le travail et le capital. L'entreprise doit trouver la meilleure combinaison possible." },
  { id:133, term:"Facteur travail",             cat:"eco-c3", color:"#86efac", def:"Activites humaines (manuelles, intellectuelles) permettant de produire. Approche quantitative (heures, salaries) et qualitative (competences)." },
  { id:134, term:"Facteur capital",             cat:"eco-c3", color:"#86efac", def:"Ensemble des biens durables utilises dans le processus de production. Capital fixe (reutilisable) et capital circulant (detruit a la premiere utilisation)." },
  { id:135, term:"Processus productif",         cat:"eco-c3", color:"#86efac", def:"L'ensemble des etapes et procedures mises en oeuvre pour transformer les matieres premieres en un produit fini." },
  { id:136, term:"Combinaison productive",      cat:"eco-c3", color:"#86efac", def:"La maniere dont une organisation associe travail, capital, technologie et ressources pour produire efficacement." },
  { id:137, term:"Combinaison travaillistique", cat:"eco-c3", color:"#86efac", def:"Combinaison productive dans laquelle le facteur travail est predominant par rapport au capital." },
  { id:138, term:"Combinaison capitalistique",  cat:"eco-c3", color:"#86efac", def:"Combinaison productive dans laquelle le capital (machines, robots, technologies) est dominant par rapport au travail." },
  { id:139, term:"Cout du travail",             cat:"eco-c3", color:"#86efac", def:"Il comprend le salaire brut (salaire net + cotisations salariales) et les cotisations sociales patronales." },
  { id:140, term:"Cout du capital",             cat:"eco-c3", color:"#86efac", def:"Depend principalement du prix des matieres premieres (capital circulant) et du niveau des taux d'interet (capital fixe)." },
  { id:141, term:"Couts de production",         cat:"eco-c3", color:"#86efac", def:"L'ensemble des couts engages par l'entreprise dans son processus productif : cout du travail, cout du capital, consommations intermediaires." },
  { id:142, term:"La productivite",             cat:"eco-c3", color:"#86efac", def:"En economie, la productivite est le rapport, en volume, entre une production et les ressources mises en oeuvre pour l'obtenir." },
  { id:143, term:"Productivite du travail",     cat:"eco-c3", color:"#86efac", def:"Rapport entre la quantite produite et la quantite de travail utilisee (en heures ou en nombre de salaries)." },
  { id:144, term:"Productivite du capital",     cat:"eco-c3", color:"#86efac", def:"Rapport entre la production realisee et la quantite de capital utilisee (machines, equipements, technologies)." },
  { id:145, term:"Couts fixes",                 cat:"eco-c3", color:"#86efac", def:"Couts qui restent constants quel que soit le montant produit. Independants du niveau de production de l'entreprise." },
  { id:146, term:"Couts variables",             cat:"eco-c3", color:"#86efac", def:"Couts qui changent en fonction de la quantite produite ou vendue par l'entreprise." },
  { id:147, term:"Economie d'echelle",          cat:"eco-c3", color:"#86efac", def:"Baisse du cout unitaire d'un produit qu'obtient une entreprise en accroissant la quantite de sa production." },
  { id:148, term:"Couts directs",               cat:"eco-c3", color:"#86efac", def:"Couts immediatement imputables au cout d'un produit, lies directement a sa production (ex : matieres premieres)." },
  { id:149, term:"Couts indirects",             cat:"eco-c3", color:"#86efac", def:"Couts non imputables immediatement au cout d'un produit (ex : assurances, loyers de l'entreprise)." },
  { id:150, term:"Gains de productivite",       cat:"eco-c3", color:"#86efac", def:"Augmentation de la production sans augmentation proportionnelle des facteurs de production (travail ou capital)." },
  { id:151, term:"Impartition",                 cat:"eco-c3", color:"#86efac", def:"Consiste a deleguer a d'autres une partie des activites que l'entreprise aurait pu realiser elle-meme." },
  { id:152, term:"La sous-traitance",           cat:"eco-c3", color:"#86efac", def:"L'entreprise confie une tache precise a un prestataire tout en conservant la responsabilite globale. Donneur d'ordre → sous-traitant." },
  { id:153, term:"L'externalisation",           cat:"eco-c3", color:"#86efac", def:"L'entreprise transfere durablement une activite entiere a un prestataire externe. On externalise ce qui n'est pas le coeur de metier." },
  { id:154, term:"La co-traitance",             cat:"eco-c3", color:"#86efac", def:"Accord momentane entre entreprises pour elaborer une offre commune en reponse a un marche auquel elles ne peuvent candidater seules." },
  { id:155, term:"La franchise",               cat:"eco-c3", color:"#86efac", def:"Le franchiseur met a disposition du franchise sa marque, son savoir-faire et une assistance. Le franchise paie une redevance en contrepartie." },
  { id:156, term:"La concession",              cat:"eco-c3", color:"#86efac", def:"Un commercant reserve les produits d'un fournisseur en contrepartie de certaines restrictions (quotas, obligations). Peut etre selective ou exclusive." },
  { id:157, term:"Joint-venture",              cat:"eco-c3", color:"#86efac", def:"Projet commun dans lequel des entreprises s'organisent autour d'une strategie commune formalisee par un contrat." },
  { id:158, term:"GIE",                        cat:"eco-c3", color:"#86efac", def:"Groupement d'Interet Economique : groupement que differentes entreprises organisent pour faciliter leur propre activite et mettre des elements en commun." },
  { id:159, term:"Chaine de valeur",           cat:"eco-c3", color:"#86efac", def:"Outil d'analyse strategique (Porter) permettant d'identifier les activites d'une entreprise pour comprendre comment elle cree de la valeur et obtient un avantage concurrentiel." },
  // MANAGEMENT C1
  { id:160, term:"Entrepreneur",               cat:"mgmt-c1", color:"#f97316", def:"Personne qui cree ou developpe une entreprise en prenant des risques financiers et organisationnels pour mettre en oeuvre une idee nouvelle et degager un profit." },
  { id:161, term:"Manager",                    cat:"mgmt-c1", color:"#f97316", def:"Celui qui organise, coordonne et motive les equipes pour atteindre les objectifs fixes par l'entreprise. Il ne cree pas necessairement l'entreprise." },
  { id:162, term:"Logique entrepreneuriale",   cat:"mgmt-c1", color:"#f97316", def:"Regroupe les activites et initiatives prises pour creer une entreprise, la developper et faire en sorte que cette activite soit effective (prise de risque, innovation)." },
  { id:163, term:"Logique manageriale",        cat:"mgmt-c1", color:"#f97316", def:"Optimisation des ressources dont on dispose (materielles, humaines, financieres) pour atteindre les objectifs fixes." },
  { id:164, term:"Parties prenantes",          cat:"mgmt-c1", color:"#f97316", def:"Toutes les personnes ou groupes qui ont un interet direct ou indirect dans les activites de l'entreprise." },
  { id:165, term:"Finalite d'une entreprise",  cat:"mgmt-c1", color:"#f97316", def:"La finalite d'une entreprise correspond a sa raison d'etre : ce qu'elle cherche a accomplir sur le long terme." },
  { id:166, term:"RSE",                        cat:"mgmt-c1", color:"#f97316", def:"La Responsabilite Societale des Entreprises designe l'integration volontaire par les entreprises de preoccupations sociales, environnementales et ethiques dans leurs activites." },
  { id:167, term:"Performance d'une entreprise", cat:"mgmt-c1", color:"#f97316", def:"La mesure dans laquelle l'entreprise est capable d'atteindre ses propres objectifs. Elle revêt plusieurs dimensions : economique, commerciale, sociale, environnementale." },
  { id:168, term:"Efficacite",                 cat:"mgmt-c1", color:"#f97316", def:"Capacite a atteindre l'objectif fixe : on juge le resultat par rapport a la cible." },
  { id:169, term:"Efficience",                 cat:"mgmt-c1", color:"#f97316", def:"Capacite a atteindre l'objectif avec un usage minimal des ressources (temps, budget, energie, effectifs)." },
  { id:170, term:"Pertinence",                 cat:"mgmt-c1", color:"#f97316", def:"La pertinence designe la relation entre les moyens utilises et les objectifs fixes." },
  { id:171, term:"Tableau de bord",            cat:"mgmt-c1", color:"#f97316", def:"Outil de pilotage qui rassemble des indicateurs cles (KPI) permettant de suivre l'atteinte des objectifs et decider rapidement des actions." },
  { id:172, term:"Business plan",              cat:"mgmt-c1", color:"#f97316", def:"Document important pour formaliser le projet et presenter l'entreprise aux potentiels investisseurs." },
  // MANAGEMENT C2
  { id:173, term:"Micro-environnement",        cat:"mgmt-c2", color:"#e879f9", def:"L'ensemble des acteurs avec lesquels l'entreprise interagit directement au quotidien (clients, fournisseurs, concurrents). Ces forces sont relativement maitrisables." },
  { id:174, term:"Macro-environnement",        cat:"mgmt-c2", color:"#e879f9", def:"L'ensemble des facteurs qui influencent l'entreprise mais sur lesquels elle n'a pas ou peu d'influence (facteurs PESTEL)." },
  { id:175, term:"Developpement durable",      cat:"mgmt-c2", color:"#e879f9", def:"Un developpement qui repond aux besoins du present sans compromettre la capacite des generations futures de repondre aux leurs. 3 piliers : ecologique, social, economique." },
  { id:176, term:"Innovation",                 cat:"mgmt-c2", color:"#e879f9", def:"L'OCDE definit l'innovation comme la mise en oeuvre d'un produit ou procede nouveau ou sensiblement ameliore, d'une nouvelle methode de commercialisation ou organisationnelle." },
];

import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "p1",
    slug: "linen-throw-blanket",
    name: "Linen Throw Blanket",
    category: "Home",
    categorySlug: "home",
    images: ["/products/linen-throw-blanket-1.jpg"],
    shortDescription: "A light linen throw for the sofa or the foot of the bed.",
    description: "A linen throw with a relaxed drape and a quiet, even weave. Keep it on the sofa for cooler evenings, or folded at the end of the bed. Softens with washing and looks considered without trying.",
    features: ["Linen weave", "Lightweight drape", "Machine washable", "Neutral tone"],
    specifications: {
      Material: "Linen",
      Use: "Sofa / bed",
      Care: "Machine wash cold",
      Origin: "Imported"
    },
    price: 88,
    rating: 4.8,
    reviews: 164,
    stock: 48,
    sku: "SAC-HM-001",
    featured: true,
    variants: [
      {
        name: "Color",
        options: ["Ivory", "Stone", "Sage"]
      }
    ]
  },
  {
    id: "p2",
    slug: "washed-bedding-set",
    name: "Washed Cotton Bedding Set",
    category: "Home",
    categorySlug: "home",
    images: ["/products/washed-bedding-set-1.jpg"],
    shortDescription: "Soft washed cotton for a quieter bedroom.",
    description: "A washed cotton bedding set with a lived-in hand from the first night. The texture is matte rather than glossy, and the palette stays in warm neutrals so it sits easily with wood, plaster, and stone.",
    features: ["Washed cotton", "Duvet + shams", "Matte finish", "Machine washable"],
    specifications: {
      Material: "Cotton",
      Set: "Duvet cover + shams",
      Finish: "Washed",
      Care: "Machine wash"
    },
    price: 168,
    rating: 4.7,
    reviews: 98,
    stock: 32,
    sku: "SAC-HM-002",
    variants: [
      {
        name: "Size",
        options: ["Queen", "King"]
      }
    ]
  },
  {
    id: "p3",
    slug: "wool-area-rug",
    name: "Wool Area Rug",
    category: "Home",
    categorySlug: "home",
    images: ["/products/wool-area-rug-1.jpg"],
    shortDescription: "A low-pile wool rug with a calm, even field.",
    description: "A wool area rug with a low pile and a restrained pattern. It anchors a sitting room without competing with furniture, and the wool takes foot traffic with a quiet durability.",
    features: ["Wool pile", "Low profile", "Restrained pattern", "Indoor use"],
    specifications: {
      Material: "Wool",
      Pile: "Low",
      Use: "Living room",
      Care: "Professional clean"
    },
    price: 240,
    rating: 4.6,
    reviews: 72,
    stock: 18,
    sku: "SAC-HM-003",
    featured: true,
    variants: [
      {
        name: "Size",
        options: ["5×8", "8×10"]
      }
    ]
  },
  {
    id: "p4",
    slug: "linen-seat-cushion",
    name: "Linen Seat Cushion",
    category: "Home",
    categorySlug: "home",
    images: ["/products/linen-seat-cushion-1.jpg", "/products/linen-seat-cushion-2.jpg"],
    shortDescription: "A square linen cushion with a simple knife edge.",
    description: "A linen cushion with a knife-edge finish and a removable cover. Add one to a chair or a window bench. The fabric reads as cloth, not costume.",
    features: ["Linen cover", "Knife-edge finish", "Removable cover", "Down-alternative fill"],
    specifications: {
      Material: "Linen",
      Size: "20×20 in",
      Fill: "Down alternative",
      Care: "Cover machine wash"
    },
    price: 42,
    rating: 4.5,
    reviews: 86,
    stock: 64,
    sku: "SAC-HM-004",
    variants: [
      {
        name: "Color",
        options: ["Parchment", "Taupe", "Slate"]
      }
    ]
  },
  {
    id: "p5",
    slug: "walnut-side-table",
    name: "Walnut Side Table",
    category: "Home",
    categorySlug: "home",
    images: ["/products/walnut-side-table-1.jpg"],
    shortDescription: "A compact wood table for a lamp, a book, a glass.",
    description: "A walnut side table with a simple top and honest joinery. Sized for a reading chair or the end of a sofa. It holds a lamp and a book without looking like furniture trying to be sculpture.",
    features: ["Walnut", "Compact footprint", "Solid top", "Wipe clean"],
    specifications: {
      Material: "Walnut",
      Use: "Beside chair / sofa",
      Finish: "Oil",
      Care: "Wipe with damp cloth"
    },
    price: 196,
    rating: 4.8,
    reviews: 54,
    stock: 22,
    sku: "SAC-HM-005",
    featured: true
  },
  {
    id: "p6",
    slug: "cotton-bath-towels",
    name: "Cotton Bath Towel Pair",
    category: "Home",
    categorySlug: "home",
    images: ["/products/cotton-bath-towels-1.jpg"],
    shortDescription: "Two terry towels with a quiet stripe.",
    description: "A pair of cotton terry bath towels. Soft after a shower, substantial without bulk, and they hang cleanly on a hook or bar. A small woven stripe keeps the edge from looking unfinished.",
    features: ["Set of 2", "Cotton terry", "Woven stripe", "Machine wash"],
    specifications: {
      Material: "Cotton terry",
      Set: "2 towels",
      Weight: "Mid-weight",
      Care: "Machine wash"
    },
    price: 58,
    rating: 4.7,
    reviews: 298,
    stock: 80,
    sku: "SAC-HM-006",
    salePrice: 48,
    badge: "Sale",
    bestseller: true,
    variants: [
      {
        name: "Color",
        options: ["Ivory", "Charcoal"]
      }
    ]
  },
  {
    id: "p7",
    slug: "burr-coffee-grinder",
    name: "Burr Coffee Grinder",
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: ["/products/burr-coffee-grinder-1.jpg"],
    shortDescription: "Conical burrs for a consistent daily grind.",
    description: "A conical burr grinder for coffee you actually make in the morning. Eighteen settings cover espresso through French press. The hopper comes off for cleaning, and the grind stays even from one cup to the next.",
    features: ["Conical burrs", "18 grind settings", "Removable hopper", "One-touch operation"],
    specifications: {
      Settings: "18 levels",
      Capacity: "8 oz beans",
      Power: "110W",
      Color: "Matte black"
    },
    price: 64,
    rating: 4.6,
    reviews: 189,
    stock: 55,
    sku: "SAC-KD-001",
    featured: true
  },
  {
    id: "p8",
    slug: "glass-electric-kettle",
    name: "Glass Electric Kettle",
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: ["/products/glass-electric-kettle-1.jpg"],
    shortDescription: "Borosilicate glass with a calm boil.",
    description: "A 1.7-liter borosilicate glass kettle with a 360° base and auto shut-off. The water is visible, the boil is quiet enough for a weekday kitchen, and the handle stays comfortable.",
    features: ["1.7L capacity", "Borosilicate glass", "Auto shut-off", "360° swivel base"],
    specifications: {
      Capacity: "1.7L",
      Power: "1500W",
      Material: "Borosilicate glass",
      Base: "360°"
    },
    price: 48,
    rating: 4.7,
    reviews: 267,
    stock: 70,
    sku: "SAC-KD-002",
    salePrice: 39,
    badge: "Sale",
    bestseller: true
  },
  {
    id: "p9",
    slug: "oak-cutting-board",
    name: "Oak Cutting Board",
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: ["/products/oak-cutting-board-1.jpg", "/products/oak-cutting-board-2.jpg"],
    shortDescription: "A hardwood board for chopping and serving.",
    description: "A hardwood cutting board thick enough to stay put. Use it for onions at 6 p.m. or cheese at 8. Oil it now and then. It will take knife marks and look better for them.",
    features: ["Hardwood", "Juice groove option", "Prep or serving", "Hand wash"],
    specifications: {
      Material: "Oak",
      Use: "Prep / serving",
      Care: "Hand wash, oil occasionally",
      Finish: "Food-safe oil"
    },
    price: 72,
    rating: 4.9,
    reviews: 142,
    stock: 36,
    sku: "SAC-KD-003",
    featured: true
  },
  {
    id: "p10",
    slug: "stoneware-dinner-plates",
    name: "Stoneware Dinner Plates",
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: ["/products/stoneware-dinner-plates-1.jpg", "/products/stoneware-dinner-plates-2.jpg"],
    shortDescription: "A set of four plates with a matte glaze.",
    description: "Four stoneware dinner plates in a matte glaze that hides the occasional fork mark. They stack cleanly and feel substantial without being heavy. Made for Tuesday pasta as much as a Saturday table.",
    features: ["Set of 4", "Stoneware", "Matte glaze", "Dishwasher safe"],
    specifications: {
      Material: "Stoneware",
      Set: "4 plates",
      Diameter: "10.5 in",
      Care: "Dishwasher safe"
    },
    price: 76,
    rating: 4.8,
    reviews: 214,
    stock: 40,
    sku: "SAC-KD-004",
    featured: true,
    bestseller: true,
    variants: [
      {
        name: "Glaze",
        options: ["Ivory", "Slate", "Sage"]
      }
    ]
  },
  {
    id: "p11",
    slug: "everyday-ceramic-mug",
    name: "Everyday Ceramic Mug",
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: ["/products/everyday-ceramic-mug-1.jpg", "/products/everyday-ceramic-mug-2.jpg"],
    shortDescription: "A rounded mug with a looped handle.",
    description: "A ceramic mug with a rounded body and a handle you can actually hold. Microwave and dishwasher safe. For coffee, tea, or the second pour you didn’t plan.",
    features: ["Ceramic", "Looped handle", "Microwave safe", "Dishwasher safe"],
    specifications: {
      Material: "Ceramic",
      Capacity: "12 oz",
      Handle: "Looped",
      Care: "Dishwasher safe"
    },
    price: 22,
    rating: 4.9,
    reviews: 318,
    stock: 96,
    sku: "SAC-KD-005",
    bestseller: true,
    variants: [
      {
        name: "Color",
        options: ["Speckled ivory", "Charcoal"]
      }
    ]
  },
  {
    id: "p12",
    slug: "serving-bowl",
    name: "Stoneware Serving Bowl",
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: ["/products/serving-bowl-1.jpg"],
    shortDescription: "A wide bowl for salad, fruit, or a simple stew.",
    description: "A wide stoneware bowl with a slightly irregular rim. Use it for greens, roasted vegetables, or fruit on the counter. The glaze is quiet; the shape does the work.",
    features: ["Stoneware", "Wide rim", "Everyday serving", "Dishwasher safe"],
    specifications: {
      Material: "Stoneware",
      Diameter: "11 in",
      Use: "Serving",
      Care: "Dishwasher safe"
    },
    price: 54,
    rating: 4.6,
    reviews: 77,
    stock: 38,
    sku: "SAC-KD-006"
  },
  {
    id: "p13",
    slug: "stemmed-wine-glasses",
    name: "Stemmed Wine Glasses",
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: ["/products/stemmed-wine-glasses-1.jpg"],
    shortDescription: "A set of four glasses with a thin, even rim.",
    description: "Four stemmed wine glasses with a thin rim and a modest bowl. They feel like glasses for the table, not a tasting room. Dishwasher safe if you treat them as weekday objects.",
    features: ["Set of 4", "Thin rim", "Stemmed", "Dishwasher safe"],
    specifications: {
      Material: "Glass",
      Set: "4 glasses",
      Capacity: "12 oz",
      Care: "Dishwasher safe"
    },
    price: 48,
    rating: 4.5,
    reviews: 91,
    stock: 44,
    sku: "SAC-KD-007"
  },
  {
    id: "p14",
    slug: "everyday-flatware-set",
    name: "Everyday Flatware Set",
    category: "Kitchen & Dining",
    categorySlug: "kitchen-dining",
    images: ["/products/everyday-flatware-set-1.jpg"],
    shortDescription: "Matte stainless for four places.",
    description: "A four-place flatware set in matte stainless. The weight is balanced, the finish doesn’t shout, and it lives in a drawer without looking like a special-occasion set.",
    features: ["Service for 4", "Matte stainless", "Balanced weight", "Dishwasher safe"],
    specifications: {
      Material: "Stainless steel",
      Set: "16 pieces",
      Finish: "Matte",
      Care: "Dishwasher safe"
    },
    price: 86,
    rating: 4.7,
    reviews: 63,
    stock: 28,
    sku: "SAC-KD-008"
  },
  {
    id: "p15",
    slug: "seagrass-storage-basket",
    name: "Seagrass Storage Basket",
    category: "Organization",
    categorySlug: "organization",
    images: ["/products/seagrass-storage-basket-1.jpg", "/products/seagrass-storage-basket-2.jpg"],
    shortDescription: "A woven basket for throws, shoes, or the hall.",
    description: "A seagrass basket with a sturdy rim and two small handles. Use it for throws in the living room, shoes by the door, or extra linens. The weave is even and the shape holds.",
    features: ["Seagrass weave", "Handled rim", "Open storage", "Indoor use"],
    specifications: {
      Material: "Seagrass",
      Use: "Blankets / shoes / linens",
      Handles: "Integrated",
      Care: "Spot clean"
    },
    price: 46,
    rating: 4.6,
    reviews: 104,
    stock: 52,
    sku: "SAC-OG-001",
    featured: true
  },
  {
    id: "p16",
    slug: "lidded-storage-box",
    name: "Lidded Storage Box",
    category: "Organization",
    categorySlug: "organization",
    images: ["/products/lidded-storage-box-1.jpg"],
    shortDescription: "A closed box for the closet or the shelf.",
    description: "A lidded storage box that keeps papers, extras, and off-season things out of sight. Stack two on a closet shelf. The lid sits flush so the line stays calm.",
    features: ["Lidded", "Stackable", "Closed storage", "Wipe clean"],
    specifications: {
      Use: "Closet / shelf",
      Lid: "Flush fit",
      Stack: "Yes",
      Care: "Wipe clean"
    },
    price: 38,
    rating: 4.4,
    reviews: 58,
    stock: 40,
    sku: "SAC-OG-002"
  },
  {
    id: "p17",
    slug: "brass-wall-hooks",
    name: "Brass Wall Hooks",
    category: "Organization",
    categorySlug: "organization",
    images: ["/products/brass-wall-hooks-1.jpg"],
    shortDescription: "A pair of hooks for coats, towels, or a bag.",
    description: "Two wall hooks in a warm brass finish. Mount them in the hall, the bath, or beside the kitchen door. They take a coat, a towel, or the bag you drop every afternoon.",
    features: ["Set of 2", "Brass finish", "Wall mount", "Indoor use"],
    specifications: {
      Finish: "Brass",
      Set: "2 hooks",
      Mount: "Wall",
      Care: "Wipe dry"
    },
    price: 28,
    rating: 4.7,
    reviews: 121,
    stock: 70,
    sku: "SAC-OG-003",
    newArrival: true
  },
  {
    id: "p18",
    slug: "woven-laundry-basket",
    name: "Woven Laundry Basket",
    category: "Organization",
    categorySlug: "organization",
    images: ["/products/woven-laundry-basket-1.jpg"],
    shortDescription: "An open basket that carries a week’s wash.",
    description: "A woven laundry basket with a wide mouth and a light structure. It sits in a closet or a bath without looking like plastic utility. Carry it down the hall; empty it; put it back.",
    features: ["Woven body", "Open top", "Lightweight", "Indoor use"],
    specifications: {
      Material: "Woven fiber",
      Use: "Laundry",
      Handles: "Side",
      Care: "Spot clean"
    },
    price: 52,
    rating: 4.5,
    reviews: 67,
    stock: 34,
    sku: "SAC-OG-004"
  },
  {
    id: "p19",
    slug: "ceramic-table-lamp",
    name: "Ceramic Table Lamp",
    category: "Lighting",
    categorySlug: "lighting",
    images: ["/products/ceramic-table-lamp-1.jpg", "/products/ceramic-table-lamp-2.jpg"],
    shortDescription: "A ceramic base with a linen shade.",
    description: "A table lamp with a ceramic base and a linen drum shade. The light is warm and even — for a side table, a desk corner, or a hallway console. The silhouette stays simple.",
    features: ["Ceramic base", "Linen shade", "Warm light", "Inline switch"],
    specifications: {
      Base: "Ceramic",
      Shade: "Linen",
      Height: "22 in",
      Switch: "Inline"
    },
    price: 128,
    rating: 4.8,
    reviews: 88,
    stock: 26,
    sku: "SAC-LT-001",
    featured: true,
    variants: [
      {
        name: "Base",
        options: ["Ivory", "Charcoal"]
      }
    ]
  },
  {
    id: "p20",
    slug: "arc-floor-lamp",
    name: "Arc Floor Lamp",
    category: "Lighting",
    categorySlug: "lighting",
    images: ["/products/arc-floor-lamp-1.jpg"],
    shortDescription: "A standing lamp that clears the sofa arm.",
    description: "A floor lamp with a modest arc and a fabric shade. Place it behind a chair or beside the sofa so the light falls where you read. The footprint stays small.",
    features: ["Fabric shade", "Modest arc", "Small footprint", "Floor switch"],
    specifications: {
      Type: "Floor lamp",
      Shade: "Fabric",
      Height: "62 in",
      Switch: "Floor"
    },
    price: 186,
    rating: 4.6,
    reviews: 49,
    stock: 16,
    sku: "SAC-LT-002"
  },
  {
    id: "p21",
    slug: "adjustable-desk-lamp",
    name: "Adjustable Desk Lamp",
    category: "Lighting",
    categorySlug: "lighting",
    images: ["/products/adjustable-desk-lamp-1.jpg"],
    shortDescription: "An LED lamp with a flexible arm and a quiet glow.",
    description: "An adjustable LED desk lamp with several brightness levels and a flexible arm. Useful at a work table or a bedside. The light is even, not theatrical.",
    features: ["Adjustable arm", "Multiple brightness levels", "LED", "Touch control"],
    specifications: {
      Power: "LED",
      "Color temp": "Warm to cool",
      Arm: "Flexible",
      Color: "Matte"
    },
    price: 54,
    rating: 4.6,
    reviews: 178,
    stock: 62,
    sku: "SAC-LT-003"
  },
  {
    id: "p22",
    slug: "stoneware-vase",
    name: "Stoneware Bud Vase",
    category: "Decor",
    categorySlug: "decor",
    images: ["/products/stoneware-vase-1.jpg", "/products/stoneware-vase-2.jpg"],
    shortDescription: "A small vase for a few stems.",
    description: "A stoneware vase with a narrow neck and a quiet glaze. It holds a few branches or a single stem without needing a florist. Leave it empty and it still looks finished.",
    features: ["Stoneware", "Narrow neck", "Matte glaze", "Indoor use"],
    specifications: {
      Material: "Stoneware",
      Height: "8 in",
      Use: "Stems / empty",
      Care: "Hand wash"
    },
    price: 36,
    rating: 4.7,
    reviews: 132,
    stock: 58,
    sku: "SAC-DC-001",
    featured: true,
    newArrival: true
  },
  {
    id: "p23",
    slug: "oak-picture-frame",
    name: "Oak Picture Frame",
    category: "Decor",
    categorySlug: "decor",
    images: ["/products/oak-picture-frame-1.jpg"],
    shortDescription: "A wood frame with a simple profile.",
    description: "An oak picture frame with a slim profile and a clear face. For a print, a photograph, or a child’s drawing that deserves to stay on the wall. Stand it or hang it.",
    features: ["Oak", "Slim profile", "Table or wall", "Glass face"],
    specifications: {
      Material: "Oak + glass",
      Size: "8×10 in",
      Mount: "Stand / hang",
      Finish: "Natural"
    },
    price: 32,
    rating: 4.5,
    reviews: 74,
    stock: 60,
    sku: "SAC-DC-002"
  },
  {
    id: "p24",
    slug: "walnut-wall-clock",
    name: "Walnut Wall Clock",
    category: "Decor",
    categorySlug: "decor",
    images: ["/products/walnut-wall-clock-1.jpg"],
    shortDescription: "A wood clock with quiet hands.",
    description: "A wall clock in walnut with a simple face and quiet hands. It tells the time without becoming the room’s subject. Hang it in a kitchen, a hall, or above a desk.",
    features: ["Walnut face", "Quiet movement", "Simple numerals", "Wall mount"],
    specifications: {
      Material: "Walnut",
      Diameter: "12 in",
      Movement: "Quartz",
      Mount: "Wall"
    },
    price: 78,
    rating: 4.6,
    reviews: 61,
    stock: 28,
    sku: "SAC-DC-003",
    newArrival: true
  },
  {
    id: "p25",
    slug: "soy-pillar-candle",
    name: "Soy Pillar Candle",
    category: "Decor",
    categorySlug: "decor",
    images: ["/products/soy-pillar-candle-1.jpg", "/products/soy-pillar-candle-2.jpg"],
    shortDescription: "An unscented pillar with a clean burn.",
    description: "A soy pillar candle with a slow, even burn. Unscented, so it doesn’t compete with dinner or the house. Set it on a tray or a holder and let it do less than most candles try to do.",
    features: ["Soy wax", "Unscented", "Slow burn", "Pillar form"],
    specifications: {
      Wax: "Soy",
      Scent: "None",
      Burn: "Slow",
      Care: "Trim wick"
    },
    price: 24,
    rating: 4.8,
    reviews: 156,
    stock: 90,
    sku: "SAC-DC-004",
    bestseller: true
  },
  {
    id: "p26",
    slug: "unglazed-plant-pot",
    name: "Unglazed Plant Pot",
    category: "Decor",
    categorySlug: "decor",
    images: ["/products/unglazed-plant-pot-1.jpg", "/products/unglazed-plant-pot-2.jpg"],
    shortDescription: "A terracotta pot for a windowsill plant.",
    description: "An unglazed plant pot with a drainage hole and a simple rim. For a herb, a small fig, or whatever is already thriving on the sill. The clay is honest; the plant does the rest.",
    features: ["Terracotta", "Drainage hole", "Simple rim", "Indoor / covered patio"],
    specifications: {
      Material: "Terracotta",
      Drainage: "Yes",
      Use: "Houseplants",
      Care: "Wipe"
    },
    price: 18,
    rating: 4.4,
    reviews: 83,
    stock: 74,
    sku: "SAC-DC-005"
  },
  {
    id: "p27",
    slug: "framed-art-print",
    name: "Framed Art Print",
    category: "Decor",
    categorySlug: "decor",
    images: ["/products/framed-art-print-1.jpg"],
    shortDescription: "A quiet print in a simple frame.",
    description: "A framed print with a restrained composition — more atmosphere than subject. Hang it above a console or in a hall. The palette stays in earth and slate so it lives with the rest of the house.",
    features: ["Framed", "Archival print", "Restrained palette", "Ready to hang"],
    specifications: {
      Medium: "Print on paper",
      Frame: "Wood",
      Size: "16×20 in",
      Mount: "Wire"
    },
    price: 94,
    rating: 4.5,
    reviews: 47,
    stock: 24,
    sku: "SAC-DC-006"
  },
  {
    id: "p28",
    slug: "garden-hand-tools",
    name: "Garden Hand Tool Set",
    category: "Outdoor Living",
    categorySlug: "outdoor-living",
    images: ["/products/garden-hand-tools-1.jpg"],
    shortDescription: "A small set for beds, pots, and weekend work.",
    description: "A compact set of garden hand tools for pots, raised beds, and the strip along the walk. Wood handles, metal heads, and a canvas wrap so they stay together in the shed.",
    features: ["Hand tools", "Wood handles", "Canvas wrap", "For pots and beds"],
    specifications: {
      Pieces: "3-piece set",
      Handles: "Wood",
      Wrap: "Canvas",
      Use: "Garden / patio"
    },
    price: 44,
    rating: 4.6,
    reviews: 79,
    stock: 42,
    sku: "SAC-OL-001"
  },
  {
    id: "p29",
    slug: "galvanized-watering-can",
    name: "Galvanized Watering Can",
    category: "Outdoor Living",
    categorySlug: "outdoor-living",
    images: ["/products/galvanized-watering-can-1.jpg"],
    shortDescription: "A metal can with a long spout for pots and beds.",
    description: "A galvanized watering can with a long spout that reaches the back of a pot without soaking the sill. It holds enough for a round of houseplants or a small outdoor bed.",
    features: ["Galvanized metal", "Long spout", "Indoor / outdoor", "Comfortable handle"],
    specifications: {
      Material: "Galvanized metal",
      Capacity: "2 gal",
      Spout: "Long",
      Use: "Pots / beds"
    },
    price: 36,
    rating: 4.5,
    reviews: 68,
    stock: 38,
    sku: "SAC-OL-002"
  },
  {
    id: "p30",
    slug: "picnic-blanket",
    name: "Wool Picnic Blanket",
    category: "Outdoor Living",
    categorySlug: "outdoor-living",
    images: ["/products/picnic-blanket-1.jpg", "/products/picnic-blanket-2.jpg"],
    shortDescription: "A blanket for the lawn, the porch, or the car.",
    description: "A wool picnic blanket that folds small enough for the trunk. Use it on the lawn, on a porch step, or as an extra layer in the car. The weave is tight; the palette is quiet.",
    features: ["Wool blend", "Folds compact", "Outdoor use", "Shake clean"],
    specifications: {
      Material: "Wool blend",
      Size: "60×70 in",
      Use: "Lawn / porch",
      Care: "Shake / spot clean"
    },
    price: 68,
    rating: 4.7,
    reviews: 95,
    stock: 36,
    sku: "SAC-OL-003",
    featured: true
  },
  {
    id: "p31",
    slug: "coir-doormat",
    name: "Coir Doormat",
    category: "Outdoor Living",
    categorySlug: "outdoor-living",
    images: ["/products/coir-doormat-1.jpg"],
    shortDescription: "A coir mat that does the unglamorous work at the door.",
    description: "A coir doormat with a dense scrape. It belongs outside the kitchen door or the front step. No slogan, no pattern that tries to be witty — just a mat that takes mud.",
    features: ["Coir", "Dense scrape", "Outdoor", "Low profile"],
    specifications: {
      Material: "Coir",
      Size: "18×30 in",
      Use: "Entry",
      Care: "Shake outdoors"
    },
    price: 28,
    rating: 4.4,
    reviews: 112,
    stock: 64,
    sku: "SAC-OL-004"
  },
  {
    id: "p32",
    slug: "canvas-weekender",
    name: "Canvas Weekender",
    category: "Travel",
    categorySlug: "travel",
    images: ["/products/canvas-weekender-1.jpg", "/products/canvas-weekender-2.jpg"],
    shortDescription: "A canvas bag for two nights away.",
    description: "A canvas weekender with leather trim and a wide opening. It takes a couple of days of clothes without looking like luggage. Carry it by the handles or on the shoulder.",
    features: ["Canvas body", "Leather trim", "Wide opening", "Shoulder strap"],
    specifications: {
      Material: "Canvas + leather",
      Use: "Overnight / weekend",
      Carry: "Handles + strap",
      Care: "Spot clean"
    },
    price: 148,
    rating: 4.8,
    reviews: 134,
    stock: 30,
    sku: "SAC-TR-001",
    featured: true,
    bestseller: true,
    variants: [
      {
        name: "Color",
        options: ["Khaki", "Navy"]
      }
    ]
  },
  {
    id: "p33",
    slug: "hard-shell-carry-on",
    name: "Hard-Shell Carry-On",
    category: "Travel",
    categorySlug: "travel",
    images: ["/products/hard-shell-carry-on-1.jpg", "/products/hard-shell-carry-on-2.jpg"],
    shortDescription: "A compact spinner for the overhead bin.",
    description: "A hard-shell carry-on with four wheels and a telescoping handle. Sized for the overhead bin. The interior is simple: one zippered divider, no theatrical organization.",
    features: ["Hard shell", "Spinner wheels", "Telescoping handle", "Overhead size"],
    specifications: {
      Shell: "Polycarbonate",
      Wheels: "4 spinner",
      Size: "Carry-on",
      Interior: "Zip divider"
    },
    price: 186,
    rating: 4.6,
    reviews: 88,
    stock: 22,
    sku: "SAC-TR-002"
  },
  {
    id: "p34",
    slug: "insulated-travel-tumbler",
    name: "Insulated Travel Tumbler",
    category: "Travel",
    categorySlug: "travel",
    images: ["/products/insulated-travel-tumbler-1.jpg"],
    shortDescription: "A steel tumbler that keeps coffee hot on the drive.",
    description: "A double-wall steel tumbler with a press-in lid. It fits a cup holder and keeps coffee hot through the morning commute or a walk. The exterior stays dry.",
    features: ["Double-wall steel", "Press-in lid", "Cup-holder fit", "Keeps drinks hot or cold"],
    specifications: {
      Material: "Stainless steel",
      Capacity: "16 oz",
      Lid: "Press-in",
      Care: "Hand wash lid"
    },
    price: 32,
    rating: 4.7,
    reviews: 201,
    stock: 80,
    sku: "SAC-TR-003",
    bestseller: true
  },
  {
    id: "p35",
    slug: "compact-umbrella",
    name: "Compact Umbrella",
    category: "Travel",
    categorySlug: "travel",
    images: ["/products/compact-umbrella-1.jpg"],
    shortDescription: "A folding umbrella that lives in a bag.",
    description: "A compact umbrella with a short fold and a covered handle. Keep it in a tote or a glove box. The canopy is large enough for two people walking close.",
    features: ["Folding", "Covered handle", "Compact", "Two-person canopy"],
    specifications: {
      Type: "Folding",
      Canopy: "Compact",
      Handle: "Covered",
      Use: "Bag / car"
    },
    price: 26,
    rating: 4.3,
    reviews: 76,
    stock: 58,
    sku: "SAC-TR-004"
  },
  {
    id: "p36",
    slug: "merino-crew-sweater",
    name: "Merino Crew Sweater",
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/products/merino-crew-sweater-1.jpg", "/products/merino-crew-sweater-2.jpg"],
    shortDescription: "A merino crew for cool mornings and offices.",
    description: "A merino crewneck with a fine gauge and a clean rib. Wear it alone or under a jacket. It doesn’t pill quickly and it doesn’t look like weekend loungewear.",
    features: ["Merino wool", "Fine gauge", "Crew neck", "Hand wash or dry clean"],
    specifications: {
      Material: "Merino wool",
      Neck: "Crew",
      Gauge: "Fine",
      Care: "Hand wash / dry clean"
    },
    price: 128,
    rating: 4.8,
    reviews: 117,
    stock: 40,
    sku: "SAC-AP-001",
    featured: true,
    variants: [
      {
        name: "Color",
        options: ["Charcoal", "Camel", "Navy"]
      },
      {
        name: "Size",
        options: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id: "p37",
    slug: "cotton-overshirt",
    name: "Cotton Overshirt",
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/products/cotton-overshirt-1.jpg"],
    shortDescription: "A mid-weight shirt you can wear open or closed.",
    description: "A cotton overshirt with a straight hem and two chest pockets. Wear it as a light jacket in spring or as a shirt in the house. The cloth has enough body to hang well.",
    features: ["Mid-weight cotton", "Chest pockets", "Straight hem", "Machine wash"],
    specifications: {
      Material: "Cotton",
      Weight: "Mid",
      Pockets: "Two chest",
      Care: "Machine wash"
    },
    price: 98,
    rating: 4.6,
    reviews: 84,
    stock: 36,
    sku: "SAC-AP-002",
    newArrival: true,
    variants: [
      {
        name: "Size",
        options: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id: "p38",
    slug: "wool-scarf",
    name: "Wool Scarf",
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/products/wool-scarf-1.jpg"],
    shortDescription: "A long wool scarf with a soft, even weave.",
    description: "A wool scarf long enough to wrap once and still hang. The weave is even, the fringe is short, and the color stays in the same family as the rest of a winter coat.",
    features: ["Wool", "Long wrap", "Short fringe", "Dry clean"],
    specifications: {
      Material: "Wool",
      Length: "70 in",
      Fringe: "Short",
      Care: "Dry clean"
    },
    price: 58,
    rating: 4.7,
    reviews: 69,
    stock: 48,
    sku: "SAC-AP-003",
    variants: [
      {
        name: "Color",
        options: ["Camel", "Charcoal", "Olive"]
      }
    ]
  },
  {
    id: "p39",
    slug: "oxford-dress-shirt",
    name: "Oxford Dress Shirt",
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/products/oxford-dress-shirt-1.jpg"],
    shortDescription: "A cotton oxford for workdays and dinners.",
    description: "A cotton oxford shirt with a button-down collar and a regular placket. It irons if you want it to, and it looks fine if you don’t. Wear it with trousers or under a sweater.",
    features: ["Cotton oxford", "Button-down collar", "Regular placket", "Machine wash"],
    specifications: {
      Material: "Cotton oxford",
      Collar: "Button-down",
      Fit: "Regular",
      Care: "Machine wash"
    },
    price: 78,
    rating: 4.5,
    reviews: 93,
    stock: 44,
    sku: "SAC-AP-004",
    variants: [
      {
        name: "Color",
        options: ["White", "Light blue"]
      },
      {
        name: "Size",
        options: ["S", "M", "L", "XL"]
      }
    ]
  },
  {
    id: "p40",
    slug: "slim-leather-wallet",
    name: "Slim Leather Wallet",
    category: "Accessories",
    categorySlug: "accessories",
    images: ["/products/slim-leather-wallet-1.jpg", "/products/slim-leather-wallet-2.jpg"],
    shortDescription: "A bifold that stays thin in a pocket.",
    description: "A slim leather bifold with room for cards and a few bills. It doesn’t bulk a pocket and the leather will darken with use. Nothing extra: no snap, no extra flap.",
    features: ["Leather", "Slim bifold", "Card slots", "Bill compartment"],
    specifications: {
      Material: "Leather",
      Style: "Bifold",
      Slots: "6 card + bill",
      Color: "Brown"
    },
    price: 64,
    rating: 4.6,
    reviews: 156,
    stock: 70,
    sku: "SAC-AC-001",
    variants: [
      {
        name: "Color",
        options: ["Cognac", "Black"]
      }
    ]
  },
  {
    id: "p41",
    slug: "acetate-sunglasses",
    name: "Acetate Sunglasses",
    category: "Accessories",
    categorySlug: "accessories",
    images: ["/products/acetate-sunglasses-1.jpg", "/products/acetate-sunglasses-2.jpg"],
    shortDescription: "A classic frame with a dark lens.",
    description: "Acetate sunglasses with a straightforward frame and a dark lens. They sit well on most faces and don’t chase a season. A hard case is included.",
    features: ["Acetate frame", "Dark lens", "UV protection", "Hard case included"],
    specifications: {
      Frame: "Acetate",
      Lens: "Dark",
      Protection: "UV",
      Case: "Hard"
    },
    price: 78,
    rating: 4.4,
    reviews: 89,
    stock: 52,
    sku: "SAC-AC-002",
    salePrice: 64,
    badge: "Sale"
  },
  {
    id: "p42",
    slug: "leather-strap-watch",
    name: "Leather-Strap Watch",
    category: "Accessories",
    categorySlug: "accessories",
    images: ["/products/leather-strap-watch-1.jpg", "/products/leather-strap-watch-2.jpg"],
    shortDescription: "A simple watch with a leather strap.",
    description: "A watch with a clean face, modest case, and a leather strap. It tells the time. It doesn’t need to do more. The strap will wear in; replace it when it should be replaced.",
    features: ["Leather strap", "Clean face", "Modest case", "Quartz"],
    specifications: {
      Case: "Stainless",
      Strap: "Leather",
      Movement: "Quartz",
      Water: "Everyday splash"
    },
    price: 168,
    rating: 4.7,
    reviews: 71,
    stock: 24,
    sku: "SAC-AC-003",
    featured: true
  },
  {
    id: "p43",
    slug: "leather-belt",
    name: "Leather Belt",
    category: "Accessories",
    categorySlug: "accessories",
    images: ["/products/leather-belt-1.jpg"],
    shortDescription: "A leather belt with a simple buckle.",
    description: "A leather belt cut to a standard width with an unfussy buckle. Wear it with trousers or jeans. The leather will crease where you always buckle it — that’s the point.",
    features: ["Leather", "Simple buckle", "Standard width", "Wipe clean"],
    specifications: {
      Material: "Leather",
      Width: "1.25 in",
      Buckle: "Metal",
      Care: "Wipe"
    },
    price: 58,
    rating: 4.5,
    reviews: 64,
    stock: 46,
    sku: "SAC-AC-004",
    variants: [
      {
        name: "Size",
        options: ["32", "34", "36", "38"]
      }
    ]
  },
  {
    id: "p44",
    slug: "olive-oil-soap",
    name: "Olive Oil Soap Bar",
    category: "Personal Essentials",
    categorySlug: "personal-essentials",
    images: ["/products/olive-oil-soap-1.jpg"],
    shortDescription: "A simple bar for the sink or the shower.",
    description: "An olive oil soap bar with a mild lather. Use it at the kitchen sink or in the shower. It smells like soap, not a department-store counter.",
    features: ["Olive oil base", "Mild lather", "Sink or shower", "Paper wrap"],
    specifications: {
      Base: "Olive oil",
      Form: "Bar",
      Scent: "Mild",
      Wrap: "Paper"
    },
    price: 12,
    rating: 4.6,
    reviews: 143,
    stock: 120,
    sku: "SAC-PE-001"
  },
  {
    id: "p45",
    slug: "grooming-kit",
    name: "Travel Grooming Kit",
    category: "Personal Essentials",
    categorySlug: "personal-essentials",
    images: ["/products/grooming-kit-1.jpg", "/products/grooming-kit-2.jpg"],
    shortDescription: "A small kit for the week and the overnight bag.",
    description: "A compact grooming kit with the tools you actually reach for. Keep it in a drawer or zip it into a weekender. Nothing novelty, nothing oversized.",
    features: ["Compact case", "Essential tools", "Travel ready", "Zip closure"],
    specifications: {
      Case: "Zippered",
      Use: "Home / travel",
      Tools: "Grooming set",
      Care: "Wipe case"
    },
    price: 42,
    rating: 4.5,
    reviews: 81,
    stock: 40,
    sku: "SAC-PE-002"
  },
  {
    id: "p46",
    slug: "eau-de-parfum",
    name: "Eau de Parfum",
    category: "Personal Essentials",
    categorySlug: "personal-essentials",
    images: ["/products/eau-de-parfum-1.jpg"],
    shortDescription: "A restrained scent in a simple bottle.",
    description: "An eau de parfum with a quiet profile — woods and a little citrus, nothing sweet. A few sprays in the morning. The bottle is glass, the cap is plain.",
    features: ["Glass bottle", "Woods + citrus", "Everyday wear", "Travel size available"],
    specifications: {
      Type: "Eau de parfum",
      Notes: "Woods / citrus",
      Bottle: "Glass",
      Size: "50 ml"
    },
    price: 72,
    rating: 4.4,
    reviews: 59,
    stock: 34,
    sku: "SAC-PE-003",
    newArrival: true
  },
  {
    id: "p47",
    slug: "home-fragrance-diffuser",
    name: "Home Fragrance Diffuser",
    category: "Personal Essentials",
    categorySlug: "personal-essentials",
    images: ["/products/home-fragrance-diffuser-1.jpg"],
    shortDescription: "A reed diffuser for a hall or a bath.",
    description: "A reed diffuser with a light, woody scent. Place it in a hall or a bathroom. It doesn’t fill the whole house; it just keeps a room from smelling like nothing.",
    features: ["Reed diffuser", "Woody scent", "Glass vessel", "Indoor use"],
    specifications: {
      Type: "Reed diffuser",
      Scent: "Wood",
      Vessel: "Glass",
      Use: "Hall / bath"
    },
    price: 38,
    rating: 4.5,
    reviews: 176,
    stock: 48,
    sku: "SAC-PE-004"
  },
  {
    id: "p48",
    slug: "natural-yoga-mat",
    name: "Natural Yoga Mat",
    category: "Fitness & Wellness",
    categorySlug: "fitness-wellness",
    images: ["/products/natural-yoga-mat-1.jpg", "/products/natural-yoga-mat-2.jpg"],
    shortDescription: "A grippy mat with enough cushion for a floor.",
    description: "A yoga mat with a grippy surface and enough thickness for a hardwood floor. Roll it for a class or a few minutes in the living room. Includes a simple strap.",
    features: ["Grippy surface", "Cushioned", "Carrying strap", "Rolls compact"],
    specifications: {
      Thickness: "5 mm",
      Size: "68×24 in",
      Strap: "Included",
      Care: "Wipe clean"
    },
    price: 48,
    rating: 4.7,
    reviews: 389,
    stock: 70,
    sku: "SAC-FW-001",
    bestseller: true,
    variants: [
      {
        name: "Color",
        options: ["Sage", "Charcoal"]
      }
    ]
  },
  {
    id: "p49",
    slug: "firm-foam-roller",
    name: "Firm Foam Roller",
    category: "Fitness & Wellness",
    categorySlug: "fitness-wellness",
    images: ["/products/firm-foam-roller-1.jpg"],
    shortDescription: "A dense roller for recovery after a walk or a class.",
    description: "A firm foam roller for calves, back, and the usual tight spots after a long day. Dense enough to do the work, short enough to store beside a closet.",
    features: ["High-density foam", "Compact length", "Everyday recovery", "Wipe clean"],
    specifications: {
      Length: "18 in",
      Diameter: "6 in",
      Density: "Firm",
      Care: "Wipe clean"
    },
    price: 28,
    rating: 4.6,
    reviews: 203,
    stock: 64,
    sku: "SAC-FW-002"
  },
  {
    id: "p50",
    slug: "insulated-sports-bottle",
    name: "Insulated Sports Bottle",
    category: "Fitness & Wellness",
    categorySlug: "fitness-wellness",
    images: ["/products/insulated-sports-bottle-1.jpg"],
    shortDescription: "A steel bottle for the gym bag or the desk.",
    description: "A stainless bottle that keeps water cold through a class or an afternoon at the desk. The lid screws on fully. No straw theatre, no printed slogans.",
    features: ["Stainless steel", "Insulated", "Screw lid", "Wide mouth"],
    specifications: {
      Material: "Stainless steel",
      Capacity: "24 oz",
      Lid: "Screw",
      Care: "Hand wash lid"
    },
    price: 34,
    rating: 4.6,
    reviews: 148,
    stock: 72,
    sku: "SAC-FW-003"
  },
  {
    id: "p51",
    slug: "cork-yoga-block",
    name: "Cork Yoga Block",
    category: "Fitness & Wellness",
    categorySlug: "fitness-wellness",
    images: ["/products/cork-yoga-block-1.jpg"],
    shortDescription: "A cork block for balance and support.",
    description: "A cork yoga block with a stable face and a little weight. Use it under hands or hips. Cork doesn’t slide the way cheap foam does.",
    features: ["Natural cork", "Stable face", "Slight weight", "Wipe clean"],
    specifications: {
      Material: "Cork",
      Use: "Support / balance",
      Size: "Standard block",
      Care: "Wipe"
    },
    price: 18,
    rating: 4.5,
    reviews: 57,
    stock: 50,
    sku: "SAC-FW-004"
  },
  {
    id: "p52",
    slug: "linen-cover-notebook",
    name: "Linen-Cover Notebook",
    category: "Workspace",
    categorySlug: "workspace",
    images: ["/products/linen-cover-notebook-1.jpg", "/products/linen-cover-notebook-2.jpg"],
    shortDescription: "A lined notebook with a cloth cover.",
    description: "A lined notebook with a linen cover and paper that takes ink without feathering. Keep one on the desk, one in a bag. No dated pages, so it starts whenever you do.",
    features: ["Linen cover", "Lined pages", "Ink-friendly paper", "Lay-flat binding"],
    specifications: {
      Cover: "Linen",
      Pages: "Lined",
      Size: "A5",
      Binding: "Lay-flat"
    },
    price: 22,
    rating: 4.8,
    reviews: 126,
    stock: 80,
    sku: "SAC-WS-001",
    newArrival: true
  },
  {
    id: "p53",
    slug: "aluminum-laptop-stand",
    name: "Aluminum Laptop Stand",
    category: "Workspace",
    categorySlug: "workspace",
    images: ["/products/aluminum-laptop-stand-1.jpg"],
    shortDescription: "A low stand that raises a laptop to a better height.",
    description: "An aluminum laptop stand that lifts the screen a few inches and leaves room for a keyboard. The angle is modest. The desk stays looking like a desk.",
    features: ["Aluminum", "Raised angle", "Ventilated", "Folds flat"],
    specifications: {
      Material: "Aluminum",
      Use: "Laptop",
      Angle: "Modest",
      Folds: "Yes"
    },
    price: 58,
    rating: 4.6,
    reviews: 94,
    stock: 40,
    sku: "SAC-WS-002"
  },
  {
    id: "p54",
    slug: "fountain-pen",
    name: "Fountain Pen",
    category: "Workspace",
    categorySlug: "workspace",
    images: ["/products/fountain-pen-1.jpg", "/products/fountain-pen-2.jpg"],
    shortDescription: "A daily fountain pen with a steel nib.",
    description: "A fountain pen meant for notes, not display. Steel nib, simple barrel, cartridge or converter. It writes a medium line and doesn’t leak in a bag if you cap it.",
    features: ["Steel nib", "Cartridge / converter", "Simple barrel", "Medium line"],
    specifications: {
      Nib: "Steel, medium",
      Fill: "Cartridge / converter",
      Barrel: "Resin",
      Cap: "Screw"
    },
    price: 46,
    rating: 4.7,
    reviews: 73,
    stock: 38,
    sku: "SAC-WS-003"
  },
  {
    id: "p55",
    slug: "undated-planner",
    name: "Undated Planner",
    category: "Workspace",
    categorySlug: "workspace",
    images: ["/products/undated-planner-1.jpg"],
    shortDescription: "An undated weekly planner that starts on your schedule.",
    description: "An undated weekly planner with a cloth cover. Begin it in January or in June. The layout is week-on-two-pages with a little space for lists.",
    features: ["Undated", "Week layout", "Cloth cover", "Lay-flat"],
    specifications: {
      Format: "Weekly, undated",
      Cover: "Cloth",
      Size: "A5",
      Binding: "Lay-flat"
    },
    price: 28,
    rating: 4.5,
    reviews: 66,
    stock: 54,
    sku: "SAC-WS-004"
  },
  {
    id: "p56",
    slug: "pocket-flashlight",
    name: "Pocket Flashlight",
    category: "Everyday Utility",
    categorySlug: "everyday-utility",
    images: ["/products/pocket-flashlight-1.jpg", "/products/pocket-flashlight-2.jpg"],
    shortDescription: "A small light for the drawer, the car, the walk.",
    description: "A pocket flashlight with a simple switch and a focused beam. Keep one in a kitchen drawer and one in the glove box. It does not need an app.",
    features: ["Pocket size", "Focused beam", "Simple switch", "Clip"],
    specifications: {
      Size: "Pocket",
      Beam: "Focused",
      Power: "Battery",
      Clip: "Yes"
    },
    price: 24,
    rating: 4.5,
    reviews: 88,
    stock: 60,
    sku: "SAC-EU-001"
  },
  {
    id: "p57",
    slug: "entry-key-holder",
    name: "Entry Key Holder",
    category: "Everyday Utility",
    categorySlug: "everyday-utility",
    images: ["/products/entry-key-holder-1.jpg"],
    shortDescription: "A small hook rail for keys by the door.",
    description: "A wall-mounted key holder for the mudroom or the kitchen door. A few hooks, a small shelf for mail. The day’s keys stop living in a bowl.",
    features: ["Wall mount", "Key hooks", "Small shelf", "Indoor"],
    specifications: {
      Mount: "Wall",
      Hooks: "Key",
      Shelf: "Narrow",
      Care: "Wipe"
    },
    price: 34,
    rating: 4.4,
    reviews: 52,
    stock: 36,
    sku: "SAC-EU-002"
  },
  {
    id: "p58",
    slug: "kitchen-scale",
    name: "Kitchen Scale",
    category: "Everyday Utility",
    categorySlug: "everyday-utility",
    images: ["/products/kitchen-scale-1.jpg"],
    shortDescription: "A compact scale for coffee, baking, and leftovers.",
    description: "A compact kitchen scale with a readable display and a tare button. Use it for coffee, baking, or portioning. It stores on its side in a drawer.",
    features: ["Tare function", "Readable display", "Compact", "Wipe clean"],
    specifications: {
      Capacity: "11 lb",
      Display: "Digital",
      Tare: "Yes",
      Care: "Wipe"
    },
    price: 28,
    rating: 4.6,
    reviews: 109,
    stock: 48,
    sku: "SAC-EU-003"
  },
  {
    id: "p59",
    slug: "canvas-utility-tote",
    name: "Canvas Utility Tote",
    category: "Everyday Utility",
    categorySlug: "everyday-utility",
    images: ["/products/canvas-utility-tote-1.jpg", "/products/canvas-utility-tote-2.jpg"],
    shortDescription: "A sturdy tote for market, library, or the office.",
    description: "A canvas tote with a reinforced base and long handles. It takes a laptop, a book, and the things you pick up on the way home. The cloth is heavy enough to stand when empty.",
    features: ["Heavy canvas", "Reinforced base", "Long handles", "Open top"],
    specifications: {
      Material: "Canvas",
      Carry: "Shoulder / hand",
      Base: "Reinforced",
      Care: "Spot clean"
    },
    price: 54,
    rating: 4.7,
    reviews: 141,
    stock: 50,
    sku: "SAC-EU-004",
    featured: true
  },
  {
    id: "p60",
    slug: "analog-alarm-clock",
    name: "Analog Alarm Clock",
    category: "Technology",
    categorySlug: "technology",
    images: ["/products/analog-alarm-clock-1.jpg"],
    shortDescription: "A bedside clock with a quiet tick and a simple alarm.",
    description: "An analog alarm clock for a bedside table. The face is readable in low light, the tick is quiet, and the alarm is a bell — not a phone. It keeps the bedroom from being a charging station.",
    features: ["Analog face", "Quiet movement", "Bell alarm", "Bedside size"],
    specifications: {
      Display: "Analog",
      Alarm: "Bell",
      Power: "Battery",
      Size: "Bedside"
    },
    price: 42,
    rating: 4.5,
    reviews: 77,
    stock: 34,
    sku: "SAC-TC-001",
    newArrival: true
  },
  {
    id: "p61",
    slug: "compact-e-reader",
    name: "Compact E-Reader",
    category: "Technology",
    categorySlug: "technology",
    images: ["/products/compact-e-reader-1.jpg"],
    shortDescription: "A glare-free screen for reading in a chair or on a train.",
    description: "A compact e-reader with a glare-free screen. Load it with books and leave the tablet in the other room. The body is light enough for one hand on the sofa.",
    features: ["Glare-free screen", "One-hand hold", "Adjustable light", "Weeks of charge"],
    specifications: {
      Screen: "E-ink",
      Light: "Adjustable",
      Size: "Compact",
      Use: "Reading"
    },
    price: 129,
    rating: 4.7,
    reviews: 64,
    stock: 28,
    sku: "SAC-TC-002"
  },
  {
    id: "p62",
    slug: "tabletop-radio",
    name: "Tabletop Radio",
    category: "Technology",
    categorySlug: "technology",
    images: ["/products/tabletop-radio-1.jpg"],
    shortDescription: "A small radio for the kitchen counter.",
    description: "A tabletop radio for the kitchen or a workbench. Tune it, leave it. The speaker is clear enough for news and music without filling the house.",
    features: ["AM/FM", "Tabletop size", "Clear speaker", "Simple dial"],
    specifications: {
      Bands: "AM/FM",
      Size: "Tabletop",
      Speaker: "Built-in",
      Power: "Plug-in"
    },
    price: 68,
    rating: 4.4,
    reviews: 51,
    stock: 22,
    sku: "SAC-TC-003"
  },
  {
    id: "p63",
    slug: "linen-gift-box",
    name: "Linen Gift Box",
    category: "Gifts",
    categorySlug: "gifts",
    images: ["/products/linen-gift-box-1.jpg", "/products/linen-gift-box-2.jpg"],
    shortDescription: "A ready box for wrapping something considered.",
    description: "A linen-covered gift box with a lid that sits properly. Use it for a candle, a mug, a scarf. It looks like a present without ribbon gymnastics.",
    features: ["Linen cover", "Lidded", "Reusable", "Medium size"],
    specifications: {
      Cover: "Linen",
      Lid: "Lift-off",
      Size: "Medium",
      Use: "Gifting"
    },
    price: 22,
    rating: 4.6,
    reviews: 48,
    stock: 40,
    sku: "SAC-GF-001"
  },
  {
    id: "p64",
    slug: "wood-chess-set",
    name: "Wood Chess Set",
    category: "Gifts",
    categorySlug: "gifts",
    images: ["/products/wood-chess-set-1.jpg"],
    shortDescription: "A wooden board and pieces for the table.",
    description: "A wooden chess set with a folding board and weighted pieces. Leave it out on a side table. It is a game and also a reason to sit still for an hour.",
    features: ["Wood board", "Weighted pieces", "Folds for storage", "Complete set"],
    specifications: {
      Board: "Wood, folding",
      Pieces: "Weighted",
      Use: "Table",
      Care: "Dust"
    },
    price: 86,
    rating: 4.8,
    reviews: 62,
    stock: 20,
    sku: "SAC-GF-002",
    featured: true
  },
  {
    id: "p65",
    slug: "linen-playing-cards",
    name: "Linen Playing Cards",
    category: "Gifts",
    categorySlug: "gifts",
    images: ["/products/linen-playing-cards-1.jpg"],
    shortDescription: "A deck with a cloth-feel finish.",
    description: "A deck of playing cards with a linen-feel finish that shuffles cleanly. Keep a couple of decks in a drawer for after dinner. The back is a quiet pattern, not a novelty print.",
    features: ["Linen-feel finish", "Standard deck", "Quiet back", "Tuck box"],
    specifications: {
      Finish: "Linen-feel",
      Cards: "52 + jokers",
      Box: "Tuck",
      Use: "Table games"
    },
    price: 14,
    rating: 4.5,
    reviews: 91,
    stock: 80,
    sku: "SAC-GF-003"
  },
  {
    id: "p66",
    slug: "incense-set",
    name: "Incense Set",
    category: "Gifts",
    categorySlug: "gifts",
    images: ["/products/incense-set-1.jpg"],
    shortDescription: "Sticks and a small holder for a short burn.",
    description: "An incense set with a handful of sticks and a small holder. Light one after dinner. The scent is dry and woody, not sweet. It burns down in a few minutes.",
    features: ["Sticks + holder", "Woody scent", "Short burn", "Gift-ready"],
    specifications: {
      Includes: "Sticks + holder",
      Scent: "Wood",
      Burn: "Short",
      Use: "Indoor"
    },
    price: 26,
    rating: 4.4,
    reviews: 55,
    stock: 46,
    sku: "SAC-GF-004"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductsBySlugs(slugs: readonly string[]): Product[] {
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getBestsellerProducts(): Product[] {
  return products.filter((p) => p.bestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.newArrival);
}

export function getDealProducts(): Product[] {
  return products.filter((p) => p.salePrice);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
  );
}

export function getRelatedProducts(product: Product, limit = 8): Product[] {
  return products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, limit);
}

export function getEffectivePrice(product: Product): number {
  return product.salePrice ?? product.price;
}

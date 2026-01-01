# Destination Page Update Template

## Updated Structure (Based on Bhuj)

All destination pages should follow this order:

1. **Overview**
2. **Who Should Visit**
3. **How to Reach**
4. **Top Things to Do**
5. **Local Bazaars & Shopping Areas** ✨ NEW
6. **Famous Spots & Landmarks** ✨ NEW
7. **Local Tips & Common Mistakes**
8. **Best Time to Visit**
9. **Suggested Itinerary**
10. **Food & Culture**
11. **Nearby Destinations**
12. **Frequently Asked Questions**

---

## Template for New Sections

### Local Bazaars & Shopping Areas
```typescript
{
  heading: "Local Bazaars & Shopping Areas",
  color: "bg-purple-50",
  border: "border-l-4 border-purple-600 text-purple-800",
  list: [
    "<b>[Market Name]:</b> [Description of what's sold, best time to visit, pricing tips]",
    "<b>[Market Name]:</b> [Description]",
    "<b>[Market Name]:</b> [Description]",
    "<b>[Market Name]:</b> [Description]",
    "<b>[Market Name]:</b> [Description]"
  ],
  image: {
    src: "/images/[destination]/[image].webp",
    alt: "Shopping in [destination] markets"
  }
}
```

### Famous Spots & Landmarks
```typescript
{
  heading: "Famous Spots & Landmarks",
  color: "bg-rose-50",
  border: "border-l-4 border-rose-600 text-rose-800",
  list: [
    "<b>[Landmark Name]:</b> [Historical info, architectural details, visiting hours, entry fees]",
    "<b>[Landmark Name]:</b> [Description]",
    "<b>[Landmark Name]:</b> [Description]",
    "<b>[Landmark Name]:</b> [Description]",
    "<b>[Landmark Name]:</b> [Description]",
    "<b>[Landmark Name]:</b> [Description]",
    "<b>[Landmark Name]:</b> [Description]"
  ],
  image: {
    src: "/images/[destination]/[image].webp",
    alt: "Famous landmarks of [destination]"
  }
}
```

---

## Remaining Destinations to Update

### Priority 1 (Major Destinations):
1. **Lakhpat** - Historic ghost town
2. **Kalo Dungar** - Highest point in Kutch
3. **Dholavira** - Harappan archaeological site
4. **Narayan Sarovar-Koteshwar** - Sacred lake and temple

### Priority 2 (Important Towns):
5. **Gandhidham** - Commercial hub
6. **Mundra** - Port city
7. **Anjar** - Planned city
8. **Kandla** - Major port

### Priority 3 (Smaller Destinations):
9. **Jakhau** - Coastal village
10. **Kadia Dhrow** - Canyon
11. **Mata Na Madh** - Temple site
12. **Road to Heaven** - Scenic route
13. **Haji Pir** - Pilgrimage site
14. **Matang Matiya Dev** - Temple
15. **Bhadreshwar** - Temple town
16. **Adipur** - Town

---

## Quick Update Instructions

For each destination:

1. Open the file: `app/destinations/data/[destination].ts`
2. Find the section after "Top Things to Do"
3. Insert the two new sections BEFORE "Local Tips & Common Mistakes"
4. Customize the content based on the destination's character:
   - **Bazaars**: Focus on local markets, shopping areas, handicrafts
   - **Landmarks**: Highlight temples, forts, natural features, historical sites

---

## Content Guidelines

### For Bazaars Section:
- Include market names and locations
- Mention what's sold (textiles, handicrafts, food, etc.)
- Add timing information
- Include pricing tips (bargaining, fixed price, etc.)
- Mention unique local products

### For Landmarks Section:
- Include historical background
- Mention architectural style
- Add entry fees if applicable
- Include visiting hours
- Mention best time to visit (morning/evening)
- Add any special requirements (permits, guides, etc.)

---

## Examples from Completed Destinations

### Bhuj - Shopping (Urban/Cultural Hub)
- Shroff Bazaar, Vaniyawad, Commerce College Road, Anam Ring Road, Kansara Bazar

### Mandvi - Shopping (Coastal Town)
- Main Market, Ship Building Area Market, Beach Road Stalls, Textile Shops

### Dhordo - Shopping (Festival/Desert)
- Rann Utsav Craft Bazaar, Hodka Village Market, Tent City Souvenir Shops

---

## Status Tracking

✅ Bhuj - COMPLETE
✅ Mandvi - COMPLETE  
✅ Dhordo (White Rann) - COMPLETE
⏳ Lakhpat - PENDING
⏳ Kalo Dungar - PENDING
⏳ Dholavira - PENDING
⏳ (13 more destinations...)

---

## Notes

- All sections use the same color scheme:
  - Purple (`bg-purple-50`) for Bazaars
  - Rose (`bg-rose-50`) for Landmarks
- Images should be relevant to the section content
- Keep descriptions concise but informative
- Include practical information (prices, timings, tips)

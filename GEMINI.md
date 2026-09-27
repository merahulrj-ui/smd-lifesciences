# MANDATORY WORKSPACE RULES FOR AI ASSISTANT

## 🔒 LOCKED FILES (DO NOT TOUCH)

| File | Status | Reason | Locked Date |
| :--- | :--- | :--- | :--- |
| `src/components/Navbar.tsx` | 🔒 **LOCKED** | Top navbar positioning fixed with hardware-accelerated CSS. DO NOT modify. | 23-Sep-2026 |
| `src/components/BottomNav.tsx` | 🔒 **LOCKED** | Bottom navbar fixed positioning working correctly. DO NOT modify. | 23-Sep-2026 |
| `src/app/globals.css` (overflow-x rule) | 🔒 **LOCKED** | `overflow-x: hidden` on html,body prevents horizontal scrollbar from shifting bottom navbar on mobile. DO NOT remove. | 23-Sep-2026 |

## 📱 MANDATORY LINKEDIN PUBLISHING & ANTI-DUPLICATION PROTOCOL (ABSOLUTE)

- **1. MANDATORY PRE-POST DUPLICATION CHECK:**
  - Before drafting, previewing, or scheduling ANY LinkedIn post, the AI Assistant MUST verify `LinkedIn_Content_Tracker.xlsx` (or `src/data/linkedin_tracker.json`).
  - If an article has status `POSTED` or `🔒 LOCKED (DO NOT RE-POST)`, it is **STRICTLY PROHIBITED** from being posted again. No duplicate links, no duplicate topics, no repeat hooks.
- **2. MANDATORY TECHNICAL INFOGRAPHIC / IMAGE ATTACHED (ZERO TEXT-ONLY POSTS):**
  - Every single LinkedIn post MUST be published with an attached technical visual (comparison matrix, architecture benchmark chart, or wet-lab workflow diagram).
  - **Text-only posts are STRICTLY BANNED.** Real infographics increase feed stop-rate and algorithmic impression distribution by 3x–4x among biotech directors and lab heads.
- **3. 100% BAN ON AI CLICHÉS & ROBOTIC FOLLOW CTAs:**
  - ❌ **STRICTLY BANNED:** Pointing finger emoji (`👉`), third-person promotional lines (`"Follow Rahul Kumar for weekly..."`), cheesy notification tropes (`"Hit the 🔔 bell on my profile"`), or generic agency boilerplate.
  - ❌ **STRICTLY BANNED:** AI opening words (`"In today's dynamic landscape"`, `"delve"`, `"testament"`, `"comprehensive"`).
  - ✅ **MANDATORY:** Silent technical authority or clean 1st-person human sign-off. Always close with a genuine, provocative technical question that sparks high-value comments from clinical scientists and founders.
- **4. LINK IN FIRST COMMENT ONLY (OR 10-MINUTE EDIT):**
  - **NEVER put outbound URLs inside the initial post body.** LinkedIn's algorithm immediately slashes impressions by 60%–80% for external links.
  - Publish the post with text + image first.
  - Immediately post the article link in the **First Comment** and like the comment from the author profile (or alternatively, edit the link into the post body 10 minutes post-publish).
- **5. INSTANT TRACKER LOGGING & PEAK TIMING:**
  - Immediately after publication, record the date, article slug, LinkedIn activity URN, and impressions in `LinkedIn_Content_Tracker.xlsx` and `src/data/linkedin_tracker.json`.
  - Optimal publishing windows: **5:30 PM – 7:00 PM IST (8:00 AM – 9:30 AM EST)** for US East Coast/Europe biopharma reach, or **8:30 AM – 9:30 AM IST** for Asia-Pacific lab heads.

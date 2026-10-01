filepath = r'C:\Users\merah\.gemini\GEMINI.md'
with open(filepath, 'r', encoding='utf-8') as f:
    c = f.read().rstrip()

rule19 = """

---

## 19. 📱 ABSOLUTE ZERO-DUPLICATION & LINKEDIN PUBLISHING PROTOCOL
> **APPLIES GLOBALLY TO ALL LINKEDIN POSTING, DRAFTING, SCHEDULING & TRACKING**

1. **MANDATORY PRE-POST DUPLICATION CHECK (ZERO DUPLICATE POSTS)**:
   - Before drafting, previewing, scheduling, or publishing ANY post on LinkedIn, the AI Assistant MUST verify `LinkedIn_Content_Tracker.xlsx` or `src/data/linkedin_tracker.json`.
   - Any article, topic, URL, or core angle already marked `POSTED` or `🔒 LOCKED (DO NOT RE-POST)` is **STRICTLY PROHIBITED** from ever being posted again.
   - **Zero repeat URLs, zero repeated hooks, zero duplicate post bodies.**
2. **MANDATORY TECHNICAL INFOGRAPHIC / IMAGE ATTACHED (ZERO TEXT-ONLY POSTS)**:
   - Every single LinkedIn post MUST be published with an attached technical visual (comparison matrix, architecture benchmark chart, or wet-lab workflow diagram).
   - **Text-only posts are STRICTLY BANNED.** Visuals increase feed stop-rate and algorithmic impression distribution by 3x–4x among biotech directors and lab heads.
3. **100% BAN ON AI CLICHÉS & ROBOTIC FOLLOW CTAs**:
   - ❌ **STRICTLY BANNED:** Pointing finger emoji (`👉`), third-person promotional lines (`"Follow Rahul Kumar for weekly..."`), cheesy notification tropes (`"Hit the 🔔 bell on my profile"`), or generic agency boilerplate.
   - ❌ **STRICTLY BANNED:** AI opening words (`"In today's dynamic landscape"`, `"delve"`, `"testament"`, `"comprehensive"`).
   - ✅ **MANDATORY:** Silent technical authority or clean 1st-person human sign-off. Always close with a genuine, provocative technical question that sparks high-value comments from clinical scientists and founders.
4. **LINK IN FIRST COMMENT ONLY (OR 10-MINUTE EDIT)**:
   - **NEVER put outbound URLs inside the initial post body.** LinkedIn's algorithm immediately slashes impressions by 60%–80% for external links.
   - Publish the post with text + image first.
   - Immediately post the article link in the **First Comment** and like the comment from the author profile (or alternatively, edit the link into the post body 10 minutes post-publish).
5. **INSTANT TRACKER LOGGING & PEAK TIMING**:
   - Immediately after publication, record the date, article slug, LinkedIn activity URN, and impressions in `LinkedIn_Content_Tracker.xlsx` and `src/data/linkedin_tracker.json`.
   - Optimal publishing windows: **5:30 PM – 7:00 PM IST (8:00 AM – 9:30 AM EST)** for US East Coast/Europe biopharma reach, or **8:30 AM – 9:30 AM IST** for Asia-Pacific lab heads.
"""

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(c + rule19 + '\n')

print("Rule 19 successfully appended to global GEMINI.md!")

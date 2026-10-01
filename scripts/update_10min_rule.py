import re

# 1. Update C:\Users\merah\.gemini\GEMINI.md
global_gemini = r"C:\Users\merah\.gemini\GEMINI.md"
with open(global_gemini, "r", encoding="utf-8") as f:
    text = f.read()

old_rule_4_pattern = r"4\.\s+\*\*LINK IN FIRST COMMENT ONLY \(OR 10-MINUTE EDIT\)\*\*:[^\n]*\n(?:\s+-[^\n]*\n)+"
new_rule_4 = """4. **MANDATORY 10-MINUTE POST-EDIT PROTOCOL FOR ARTICLE LINKS (ZERO LINKS AT LAUNCH)**:
   - **ZERO LINKS AT LAUNCH:** Never put any outbound URL in the initial post text. The post MUST go live with **Technical Text + Infographic/Image ONLY**. (This ensures LinkedIn's initial algorithmic scoring grants 100% full impression reach without external link suppression).
   - **THE 10-MINUTE EDIT RULE:** Exactly 10 minutes after publication (once initial feed distribution momentum is established), edit the post to add the clean article URL at the bottom:
     `Read the full bench protocol & comparative benchmark:`
     `https://www.biosciencedesk.com/insights/<category>/<slug>`
   - This provides the maximum viral impression velocity of a visual post while giving readers the direct, permanent link inside the post body.
"""

updated_text = re.sub(old_rule_4_pattern, new_rule_4, text)
with open(global_gemini, "w", encoding="utf-8") as f:
    f.write(updated_text)
print("Updated C:\\Users\\merah\\.gemini\\GEMINI.md")

# 2. Update E:\biosciencedesk\GEMINI.md
bio_gemini = r"E:\biosciencedesk\GEMINI.md"
with open(bio_gemini, "r", encoding="utf-8") as f:
    text_b = f.read()

old_b_pattern = r"-\s+\*\*5\.4 LINK IN FIRST COMMENT ONLY \(OR 10-MINUTE EDIT\)\*\*:[^\n]*\n(?:\s+-[^\n]*\n)+"
new_b_rule = """- **5.4 MANDATORY 10-MINUTE POST-EDIT PROTOCOL FOR ARTICLE LINKS (ZERO LINKS AT LAUNCH)**:
  - **ZERO LINKS AT LAUNCH:** Never put outbound URLs in the initial post body. Publish the post with **Technical Text + Infographic/Image ONLY** to guarantee maximum algorithmic reach.
  - **THE 10-MINUTE EDIT RULE:** Exactly 10 minutes after publication (once feed momentum is locked), click 'Edit post' and append the article link at the bottom:
    `Read the full bench protocol & comparative benchmark:`
    `https://www.biosciencedesk.com/insights/<category>/<slug>`
  - This ensures viral impression distribution without getting penalized for external links at launch.
"""
updated_b = re.sub(old_b_pattern, new_b_rule, text_b)
with open(bio_gemini, "w", encoding="utf-8") as f:
    f.write(updated_b)
print("Updated E:\\biosciencedesk\\GEMINI.md")

# 3. Update c:\wamp64\www\smd-lifesciences\GEMINI.md
smd_gemini = r"c:\wamp64\www\smd-lifesciences\GEMINI.md"
with open(smd_gemini, "r", encoding="utf-8") as f:
    text_s = f.read()

old_s_pattern = r"-\s+\*\*4\. LINK IN FIRST COMMENT ONLY \(OR 10-MINUTE EDIT\)\*\*:[^\n]*\n(?:\s+-[^\n]*\n)+"
new_s_rule = """- **4. MANDATORY 10-MINUTE POST-EDIT PROTOCOL FOR ARTICLE LINKS (ZERO LINKS AT LAUNCH)**:
  - **ZERO LINKS AT LAUNCH:** Never put outbound URLs in the initial post body. Publish the post with **Technical Text + Infographic/Image ONLY** to guarantee maximum algorithmic reach.
  - **THE 10-MINUTE EDIT RULE:** Exactly 10 minutes after publication (once feed momentum is locked), click 'Edit post' and append the article link at the bottom:
    `Read the full bench protocol & comparative benchmark:`
    `https://www.biosciencedesk.com/insights/<category>/<slug>`
  - This ensures viral impression distribution without getting penalized for external links at launch.
"""
updated_s = re.sub(old_s_pattern, new_s_rule, text_s)
with open(smd_gemini, "w", encoding="utf-8") as f:
    f.write(updated_s)
print("Updated c:\\wamp64\\www\\smd-lifesciences\\GEMINI.md")

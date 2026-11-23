# Code-to-Video Kit
ساخت ویدیو با کد، کنار Claude Code.

## نصب
**روی کامپیوتر (ویندوز/مک/لینوکس):**
1. Node.js 20+ و Claude Code را نصب کن.
2. پوشه را باز کن و بزن: `npm install`
3. بزن `claude` و بگو: «یک ریلز ۱۵ ثانیه‌ای درباره‌ی ... بساز».
پیش‌نمایش زنده: `npm run dev`

**روی گوشی / Claude Code ابری:**
1. این پوشه را در یک ریپوی گیت‌هاب بگذار (محتوای پوشه در ریشه‌ی ریپو).
2. در claude.ai/code همان ریپو را انتخاب کن. اسکریپت `scripts/setup.sh` خودش اول هر جلسه همه‌چیز را نصب می‌کند.
3. بگو: «یک ویدیو بساز درباره‌ی ...».

## تست سریع
`npx remotion render Demo out/demo.mp4`

فونت‌ها: Vazirmatn و Lalezar، هر دو با مجوز SIL Open Font License.

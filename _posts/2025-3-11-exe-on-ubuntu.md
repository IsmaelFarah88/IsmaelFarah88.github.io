---
title: تشغيل برامج ويندوز على أوبونتو باستخدام واين وبوليت لينكس
date: 2025-03-11 20:00 +0330
categories: [Linux, Open Source, Development, Productivity]
tags: [ubuntu, linux, opensource, development, security, customization]
author: Ismael Farah
---

# 🖥️ تشغيل برامج ويندوز على أوبونتو باستخدام **واين (Wine)** و**بوليت لينكس (PlayOnLinux)**  

إذا كنت تستخدم **أوبونتو** وتحتاج إلى تشغيل برامج ويندوز، فلن تحتاج إلى تثبيت نظام ويندوز كامل أو استخدام **الأنظمة الافتراضية (Virtual Machines)**.  
بدلاً من ذلك، يمكنك الاعتماد على أدوات مثل **واين (Wine)** و**بوليت لينكس (PlayOnLinux)**، والتي تسمح لك بتشغيل تطبيقات ويندوز بسلاسة على لينكس.  

في هذا المقال، سنغطي بالتفصيل كيفية تثبيت هذه الأدوات، استخدامها، وحل المشكلات الشائعة.  

---

## 🔍 **ما هو Wine؟ وكيف يعمل؟**  

**واين (Wine)** هو برنامج يعمل كطبقة توافق بين تطبيقات ويندوز ونظام لينكس.  
عندما تقوم بتشغيل برنامج ويندوز باستخدام Wine، فإنه يترجم **استدعاءات واجهة برمجة التطبيقات (API) الخاصة بويندوز** إلى استدعاءات يمكن لنظام لينكس فهمها.

### ✅ **لماذا نستخدم Wine؟**  

- **لا يحتاج إلى تشغيل نظام تشغيل افتراضي**، مما يوفر الأداء ويحافظ على موارد الجهاز.  
- **يدعم العديد من البرامج**، بما في ذلك **Microsoft Office، Photoshop، وألعاب Steam**.  
- **متوافق مع مكتبات DirectX و OpenGL**، مما يسمح بتشغيل بعض الألعاب والبرامج الرسومية.  

> **ملاحظة**: لا تعمل جميع برامج ويندوز بسلاسة على Wine، لذا تحقق من قاعدة بيانات [WineHQ AppDB](https://appdb.winehq.org) قبل تثبيت أي برنامج.

---

## 🛠️ **كيفية تثبيت Wine على أوبونتو**  

### **1️⃣ تفعيل دعم 32-بت (للتوافق مع البرامج القديمة)**  

بعض تطبيقات ويندوز تعتمد على مكتبات 32-بت، لذا يجب تفعيل دعمها عبر تنفيذ الأمر التالي في الطرفية:  
```bash
sudo dpkg --add-architecture i386
```
2️⃣ تحديث الحزم لضمان الحصول على أحدث الإصدارات
```bash
sudo apt update && sudo apt upgrade -y
```
3️⃣ تثبيت Wine من المستودعات الرسمية

يمكنك تثبيت Wine بالإصدار المستقر من خلال الأمر التالي:
```bash
sudo apt install wine-stable -y
```
> إذا كنت بحاجة إلى إصدار أحدث من Wine، يمكنك تثبيته من مستودع WineHQ الرسمي عبر الخطوات التالية:



🔹 إضافة مفتاح GPG للمستودع
```bash
wget -nc https://dl.winehq.org/wine-builds/winehq.key -O- | sudo apt-key add -
```
🔹 إضافة المستودع الرسمي لـ WineHQ
```bash
sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ focal main'
```
🔹 تثبيت الإصدار الأحدث من Wine
```bash
sudo apt update
sudo apt install --install-recommends winehq-stable -y
```
4️⃣ التحقق من نجاح التثبيت

بعد انتهاء التثبيت، يمكنك التحقق من الإصدار المثبت عبر:
```bash
wine --version
```
5
---

🎮 ما هو PlayOnLinux؟ ولماذا نحتاجه؟

🟢 PlayOnLinux هو واجهة رسومية لإدارة Wine بسهولة

PlayOnLinux يسهل تثبيت برامج ويندوز عبر Wine دون الحاجة إلى التعامل مع سطر الأوامر.
يتيح لك تشغيل عدة برامج بإصدارات مختلفة من Wine داخل بيئات مستقلة، مما يمنع التعارض بين البرامج المختلفة.

✅ أهم مميزاته

تثبيت برامج ويندوز بسهولة دون الحاجة إلى إعداد يدوي معقد.

تشغيل برامج متعددة بإصدارات مختلفة من Wine داخل بيئات معزولة.

تنزيل التبعيات المطلوبة (مثل .NET Framework و DirectX) تلقائيًا.

دعم تشغيل بعض الألعاب الكبيرة مثل League of Legends و World of Warcraft.



---

📥 كيفية تثبيت PlayOnLinux على أوبونتو
```bash
sudo apt install playonlinux -y
```
تشغيل البرنامج بعد التثبيت

افتح PlayOnLinux من قائمة التطبيقات، أو قم بتشغيله عبر الطرفية:
```bash
playonlinux
```

---

🚀 كيفية تثبيت برامج ويندوز باستخدام PlayOnLinux

1️⃣ تشغيل PlayOnLinux

افتح البرنامج من قائمة التطبيقات أو باستخدام الأمر:
```bash
playonlinux
```
2️⃣ تثبيت برنامج جديد

1. انقر على زر "Install" في الواجهة الرئيسية.


2. ابحث عن البرنامج المطلوب (مثل Microsoft Office 2013 أو Adobe Photoshop CS6).


3. اتبع الإرشادات لاختيار الإصدار المناسب من Wine وتنزيل التبعيات المطلوبة.


4. بعد التثبيت، سيظهر البرنامج في قائمة PlayOnLinux، ويمكنك تشغيله من هناك مباشرةً.



> إذا لم يكن البرنامج مدعومًا رسميًا، يمكنك تجربة تثبيته يدويًا عبر خيار Install a non-listed program.




---

📌 أشهر البرامج التي يمكن تشغيلها عبر Wine وPlayOnLinux

لمعرفة توافق البرامج الأخرى، يمكنك البحث عنها في WineHQ AppDB.


---

⚠️ المشاكل الشائعة وحلولها

1️⃣ تعذر تثبيت .NET Framework

🔹 الحل: بعض البرامج تتطلب .NET Framework، لكن الإصدارات الحديثة قد لا تعمل بشكل جيد.
جرب تثبيت إصدار أقدم من Wine عبر PlayOnLinux.

2️⃣ ضعف الأداء في بعض البرامج

🔹 الحل: تحسين الأداء باستخدام DXVK لتشغيل الألعاب بسلاسة عبر Vulkan:
```bash
sudo apt install vulkan-utils libvulkan1 -y
```
3️⃣ تعارض البرامج المثبتة

🔹 الحل: استخدم بيئات Wine منفصلة لكل برنامج داخل PlayOnLinux لتجنب التعارضات.


---

💡 نصائح لتحسين الأداء وتجربة الاستخدام

1. استخدم Lutris: إذا كنت من عشاق الألعاب، جرب Lutris لإدارة ألعاب ويندوز بسهولة على لينكس.


2. تحقق من توافق البرامج: لا تثبت البرامج عشوائيًا! تفقد تقييمها على WineHQ أولًا.


3. تحديث Wine دوريًا: التحديثات الجديدة تحسّن دعم البرامج وإصلاح الأخطاء.




---

🏁 الخلاصة

مع Wine وPlayOnLinux، يمكنك تشغيل العديد من تطبيقات ويندوز بسهولة على أوبونتو دون الحاجة إلى تثبيت نظام ويندوز.

> 🐧 لا تدع حدود النظام تقيدك – لينكس يمنحك الحرية! 🚀

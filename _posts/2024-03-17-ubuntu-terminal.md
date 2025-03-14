---
title: "دليل سطر الأوامر في أوبنتو: تعلم الأوامر الأساسية"
date: 2024-03-17 10:00:00 +0300
categories: [أنظمة التشغيل, لينكس]
tags: [أوبنتو, لينكس, سطر الأوامر, Terminal]
author: اسمك هنا
image:
  path: /assets/img/blog/ubuntu-terminal.jpg
  alt: واجهة سطر الأوامر في أوبنتو
---

# دليل سطر الأوامر في أوبنتو: تعلم الأوامر الأساسية

سطر الأوامر (Terminal) هو أداة قوية في نظام أوبنتو تتيح لك التحكم الكامل في النظام. في هذا المقال، سنتعلم الأوامر الأساسية وكيفية استخدامها بشكل فعال.

## 🚀 بدء العمل مع Terminal

### فتح Terminal
- اضغط `Ctrl + Alt + T`
- أو ابحث عن "Terminal" في قائمة التطبيقات

### فهم الواجهة
```bash
username@computer:~$
```
- `username`: اسم المستخدم الخاص بك
- `computer`: اسم جهازك
- `~`: المجلد الحالي (المجلد الرئيسي)
- `$`: مؤشر جاهزية الأوامر

## 📁 أوامر التنقل في الملفات

### التنقل بين المجلدات
```bash
# الانتقال إلى مجلد
cd /path/to/directory

# العودة للمجلد السابق
cd ..

# العودة للمجلد الرئيسي
cd ~
```

### عرض محتويات المجلد
```bash
# عرض الملفات والمجلدات
ls

# عرض التفاصيل الكاملة
ls -l

# عرض الملفات المخفية
ls -a
```

## 📦 أوامر إدارة الملفات

### إنشاء وحذف الملفات
```bash
# إنشاء ملف فارغ
touch filename.txt

# إنشاء مجلد
mkdir directory_name

# حذف ملف
rm filename.txt

# حذف مجلد فارغ
rmdir directory_name

# حذف مجلد وكل محتوياته
rm -r directory_name
```

### نسخ ونقل الملفات
```bash
# نسخ ملف
cp source.txt destination.txt

# نقل ملف
mv source.txt destination.txt

# إعادة تسمية ملف
mv old_name.txt new_name.txt
```

## 🛠️ أوامر النظام

### تحديث النظام
```bash
# تحديث قائمة البرامج
sudo apt update

# تحديث النظام
sudo apt upgrade

# تحديث كامل للنظام
sudo apt full-upgrade
```

### إدارة البرامج
```bash
# تثبيت برنامج
sudo apt install package_name

# إزالة برنامج
sudo apt remove package_name

# البحث عن برنامج
apt search package_name
```

## 🔍 أوامر البحث

### البحث في الملفات
```bash
# البحث عن نص في الملفات
grep "text" filename.txt

# البحث عن ملفات
find / -name "filename.txt"

# البحث عن برامج
which program_name
```

### عرض محتويات الملفات
```bash
# عرض محتوى ملف
cat filename.txt

# عرض بداية الملف
head filename.txt

# عرض نهاية الملف
tail filename.txt
```

## 🔒 أوامر الأذونات

### تغيير صلاحيات الملفات
```bash
# تغيير صلاحيات الملف
chmod 755 filename.txt

# تغيير مالك الملف
sudo chown username filename.txt
```

## 💡 نصائح متقدمة

### استخدام التاريخ
```bash
# عرض سجل الأوامر
history

# تنفيذ أمر سابق
!number
```

### استخدام الاختصارات
```bash
# مسح الشاشة
clear

# إلغاء الأمر الحالي
Ctrl + C

# إكمال المسار تلقائياً
Tab
```

## 🎯 الخلاصة

سطر الأوامر هو أداة قوية تتيح لك التحكم الكامل في نظام أوبنتو. مع الممارسة والتعلم المستمر، ستجد نفسك تستخدمه بكفاءة عالية.

### الخطوات التالية
1. تعلم المزيد من الأوامر المتقدمة
2. كتابة سكربتات Bash
3. أتمتة المهام المتكررة

في المقال القادم، سنتعرف على كيفية كتابة سكربتات Bash وأتمتة المهام في أوبنتو. ترقبوا المزيد!

<style>
.post-content {
  font-family: 'Cairo', sans-serif;
  line-height: 1.8;
}

.post-content h1 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.post-content h2 {
  color: #34495e;
  margin-top: 30px;
}

.post-content code {
  background-color: #f8f9fa;
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
}

.post-content pre {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
}

.post-content ul, .post-content ol {
  padding-right: 20px;
}

.post-content li {
  margin-bottom: 10px;
}

.post-content blockquote {
  border-right: 4px solid #3498db;
  padding-right: 15px;
  margin: 20px 0;
  color: #666;
}

.post-content pre code {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  border-radius: 5px;
  display: block;
  overflow-x: auto;
}
</style> 
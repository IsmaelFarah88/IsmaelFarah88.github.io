---
layout: page
title: اتصل بي
icon: fas fa-envelope
order: 10
---

# تواصل معي

يمكنك التواصل معي من خلال ملء النموذج أدناه أو من خلال وسائل التواصل المتاحة.

<div class="contact-container">
  <div class="contact-info">
    <div class="contact-info-item">
      <i class="fas fa-map-marker-alt"></i>
      <div>
        <h3>العنوان</h3>
        <p>[عنوانك هنا]</p>
      </div>
    </div>
    
    <div class="contact-info-item">
      <i class="fas fa-envelope"></i>
      <div>
        <h3>البريد الإلكتروني</h3>
        <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </div>
    </div>
    
    <div class="contact-info-item">
      <i class="fas fa-phone"></i>
      <div>
        <h3>الهاتف</h3>
        <p><a href="tel:+1234567890">[رقم هاتفك]</a></p>
      </div>
    </div>
    
    <div class="contact-info-item">
      <i class="fas fa-clock"></i>
      <div>
        <h3>ساعات العمل</h3>
        <p>الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً</p>
      </div>
    </div>
    
    <div class="social-links">
      <a href="https://twitter.com/yourusername" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/yourusername" target="_blank" class="social-link"><i class="fab fa-github"></i></a>
      <a href="https://instagram.com/yourusername" target="_blank" class="social-link"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
  
  <div class="contact-form">
    <h2>أرسل رسالة</h2>
    <form id="contactForm" action="https://formspree.io/f/your-formspree-id" method="POST">
      <div class="form-group">
        <label for="name">الاسم</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">البريد الإلكتروني</label>
        <input type="email" id="email" name="email" required>
      </div>
      
      <div class="form-group">
        <label for="subject">الموضوع</label>
        <input type="text" id="subject" name="subject" required>
      </div>
      
      <div class="form-group">
        <label for="message">الرسالة</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      
      <button type="submit" class="submit-btn">إرسال الرسالة</button>
    </form>
  </div>
</div>

<div class="map-container">
  <h2>موقعي</h2>
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1627309750687!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</div>

<script>
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }
    
    // Submit the form
    this.submit();
    
    // You can add additional logic here, like showing a success message
  });
</script>

<style>
.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
}

.contact-info {
  flex: 1;
  min-width: 300px;
}

.contact-form {
  flex: 1;
  min-width: 300px;
}

.contact-info-item {
  display: flex;
  margin-bottom: 20px;
}

.contact-info-item i {
  font-size: 24px;
  margin-left: 15px;
  color: var(--link-color);
}

.contact-info-item h3 {
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 18px;
}

.contact-info-item p {
  margin: 0;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f8f9fa;
  color: #495057;
  font-size: 18px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--link-color);
  color: white;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-family: inherit;
  font-size: inherit;
}

.submit-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--link-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: var(--link-hover-color);
}

.map-container {
  margin-top: 40px;
}

.map {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
  }
}
</style> 
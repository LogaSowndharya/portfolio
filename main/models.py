from django.db import models
from django.core.validators import EmailValidator


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(validators=[EmailValidator()])
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.email}"


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=500, help_text="Comma-separated list of technologies")
    github_url = models.URLField(blank=True, null=True)
    demo_url = models.URLField(blank=True, null=True)
    icon_class = models.CharField(max_length=50, default="fas fa-code")
    color_class = models.CharField(max_length=50, default="from-blue-500 to-blue-600")
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order', '-created_at']
    
    def __str__(self):
        return self.title
    
    def get_technologies_list(self):
        return [tech.strip() for tech in self.technologies.split(',') if tech.strip()]


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('programming', 'Programming Languages'),
        ('backend', 'Backend Development'),
        ('frontend', 'Frontend Development'),
        ('tools', 'Version Control & Tools'),
        ('ml', 'Machine Learning & AI'),
        ('bio', 'Bioinformatics'),
    ]
    
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    name = models.CharField(max_length=100)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['category', 'order', 'name']
    
    def __str__(self):
        return f"{self.get_category_display()} - {self.name}"


class Certificate(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    file_path = models.CharField(max_length=200, help_text="Path to the certificate file")
    icon_class = models.CharField(max_length=50, default="fas fa-certificate")
    color_class = models.CharField(max_length=50, default="from-blue-500 to-blue-600")
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=50, default="co-curricular")
    
    class Meta:
        ordering = ['category', 'order', '-created_at']
    
    def __str__(self):
        return self.title
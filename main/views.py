from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse, Http404
from django.utils.http import http_date
from django.views.decorators.http import require_http_methods
import os
import mimetypes
from .models import Project, Skill, Certificate, Contact
from .forms import ContactForm


def home(request):
    """Main portfolio page"""
    projects = Project.objects.filter(is_active=True)
    skills = Skill.objects.filter(is_active=True)
    certificates = Certificate.objects.filter(is_active=True)
    
    # Group skills by category
    skills_by_category = {}
    for skill in skills:
        category = skill.get_category_display()
        if category not in skills_by_category:
            skills_by_category[category] = []
        skills_by_category[category].append(skill.name)
    
    context = {
        'projects': projects,
        'skills_by_category': skills_by_category,
        'certificates': certificates,
        'contact_form': ContactForm(),
    }
    return render(request, 'main/index.html', context)


def contact_submit(request):
    """Handle contact form submission"""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Save to database
            contact = form.save()
            
            # Send email notification (optional)
            try:
                subject = f"Portfolio Contact from {contact.name}"
                message = f"""
                Name: {contact.name}
                Email: {contact.email}
                
                Message:
                {contact.message}
                """
                # Uncomment and configure if you want email notifications
                # send_mail(
                #     subject,
                #     message,
                #     settings.DEFAULT_FROM_EMAIL,
                #     ['logasowndharya16@gmail.com'],
                #     fail_silently=True,
                # )
            except Exception as e:
                pass
            
            messages.success(request, 'Thank you for your message! I will get back to you soon.')
            return redirect('home')
        else:
            messages.error(request, 'Please correct the errors below.')
    
    return redirect('home')


def download_resume(request):
    """Handle resume download with proper file serving"""
    # Try multiple possible file paths for your resume
    possible_paths = [
        os.path.join(settings.BASE_DIR, 'static', 'documents', 'resume.pdf'),
        os.path.join(settings.BASE_DIR, 'static', 'documents', 'Resume.pdf'),
    ]
    
    file_path = None
    for path in possible_paths:
        if os.path.exists(path):
            file_path = path
            break
    
    if not file_path:
        # If static files are collected, try there too
        if settings.STATIC_ROOT:
            for filename in ['resume.pdf', 'Resume.pdf']:
                collected_path = os.path.join(settings.STATIC_ROOT, 'documents', filename)
                if os.path.exists(collected_path):
                    file_path = collected_path
                    break
    
    if not file_path:
        raise Http404("Resume file not found. Please ensure your resume file is placed in static/documents/ directory as 'resume.pdf' or 'Resume.pdf'.")
    
    try:
        with open(file_path, 'rb') as pdf_file:
            response = HttpResponse(pdf_file.read(), content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="Loga_Sowndharya_K_Resume.pdf"'
            response['Content-Length'] = os.path.getsize(file_path)
            return response
    except Exception as e:
        raise Http404(f"Error serving resume file: {str(e)}")